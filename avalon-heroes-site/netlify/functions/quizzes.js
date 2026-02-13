// netlify/functions/quizzes.js
// List quizzes for logged-in user and create a new quiz
// Storage: Netlify Blobs
import { getStore } from "@netlify/blobs";

function json(statusCode, body){
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

function getUser(context){
  return context?.clientContext?.user || null;
}

function keyIndex(uid){ return `u_${uid}/index.json`; }
function keyQuiz(uid, id){ return `u_${uid}/quiz_${id}.json`; }

export default async (req, context) => {
  const user = getUser(context);
  if (!user) return json(401, { error: "Unauthorized" });

  const uid = user.sub || user.id || user.email;
  if (!uid) return json(401, { error: "Unauthorized" });

  const store = getStore("quizzes");

  if (req.method === "GET"){
    const raw = await store.get(keyIndex(uid), { type: "json" });
    const quizzes = Array.isArray(raw) ? raw : [];
    return json(200, { quizzes });
  }

  if (req.method === "POST"){
    let payload;
    try{ payload = await req.json(); }
    catch{ return json(400, { error: "Invalid JSON" }); }

    if (!payload?.id) return json(400, { error: "Quiz id is required" });

    payload.ownerId = uid;
    const now = new Date().toISOString();
    payload.createdAt = payload.createdAt || now;
    payload.updatedAt = now;

    await store.set(keyQuiz(uid, payload.id), JSON.stringify(payload), { contentType: "application/json" });

    const index = (await store.get(keyIndex(uid), { type: "json" })) || [];
    const nextItem = {
      id: payload.id,
      title: payload.title || "Untitled Quiz",
      description: payload.description || "",
      questionCount: Array.isArray(payload.questions) ? payload.questions.length : 0,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
    };

    const i = index.findIndex((x) => x.id === payload.id);
    if (i >= 0) index[i] = nextItem; else index.unshift(nextItem);

    await store.set(keyIndex(uid), JSON.stringify(index), { contentType: "application/json" });

    return json(200, { ok: true, quiz: payload });
  }

  return json(405, { error: "Method Not Allowed" });
};