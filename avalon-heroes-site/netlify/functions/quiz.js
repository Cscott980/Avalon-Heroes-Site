import { getStore } from "@netlify/blobs";

const headersBase = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
};

function json(status, data) {
  return new Response(JSON.stringify(data), { status, headers: headersBase });
}

function getUser(context) {
  return context?.clientContext?.user || null;
}

function keyIndex(uid) { return `u_${uid}/index.json`; }
function keyQuiz(uid, id) { return `u_${uid}/quiz_${id}.json`; }

export default async (req, context) => {
  const user = getUser(context);
  if (!user) return json(401, { error: "Unauthorized" });

  const uid = user.sub || user.id || user.email;
  if (!uid) return json(401, { error: "Unauthorized" });

  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return json(400, { error: "Missing id" });

  const store = getStore("quizzes");

  if (req.method === "GET") {
    const quiz = await store.get(keyQuiz(uid, id), { type: "json" });
    if (!quiz) return json(404, { error: "Not found" });
    return json(200, { quiz });
  }

  if (req.method === "PUT") {
    let payload;
    try {
      payload = await req.json();
    } catch {
      return json(400, { error: "Invalid JSON" });
    }

    const existing = await store.get(keyQuiz(uid, id), { type: "json" });
    if (!existing) return json(404, { error: "Not found" });

    payload.id = id;
    payload.ownerId = uid;

    const now = new Date().toISOString();
    payload.createdAt = existing.createdAt || now;
    payload.updatedAt = now;

    await store.set(keyQuiz(uid, id), JSON.stringify(payload), {
      contentType: "application/json",
    });

    const index = (await store.get(keyIndex(uid), { type: "json" })) || [];
    const nextItem = {
      id,
      title: payload.title || "Untitled Quiz",
      description: payload.description || "",
      questionCount: Array.isArray(payload.questions) ? payload.questions.length : 0,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
    };

    const i = index.findIndex((x) => x.id === id);
    if (i >= 0) index[i] = nextItem;
    else index.unshift(nextItem);

    await store.set(keyIndex(uid), JSON.stringify(index), {
      contentType: "application/json",
    });

    return json(200, { ok: true, quiz: payload });
  }

  if (req.method === "DELETE") {
    await store.delete(keyQuiz(uid, id));

    const index = (await store.get(keyIndex(uid), { type: "json" })) || [];
    const next = index.filter((x) => x.id !== id);

    await store.set(keyIndex(uid), JSON.stringify(next), {
      contentType: "application/json",
    });

    return json(200, { ok: true });
  }

  return json(405, { error: "Method Not Allowed" });
};
