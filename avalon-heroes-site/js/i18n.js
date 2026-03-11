/**
 * Avalon Heroes — i18n (EN / ES / JA)
 * Auto-detects region, falls back to stored preference, defaults to English.
 * Injects a floating language switcher on every page.
 *
 * Usage: add data-i18n="key" (textContent) or data-i18n-html="key" (innerHTML)
 *        or data-i18n-placeholder="key" (placeholder attr) to any element.
 *        Include this script on each page.
 */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     TRANSLATION DICTIONARY
  ───────────────────────────────────────────── */
  const T = {

    en: {
      /* nav */
      'nav.home'   : 'Home',
      'nav.devlog' : 'Devlog',
      'nav.login'  : 'Log in',
      'nav.logout' : 'Sign out',
      'nav.account': 'Account',

      /* footer */
      'footer.privacy' : 'Privacy Policy',
      'footer.terms'   : 'Terms of Service',
      'footer.credits' : 'Credits',
      'footer.contact' : 'Contact',
      'footer.devlog'  : 'Devlog',
      'footer.tagline' : 'No ads. No data selling. No personal details required to browse.',
      'footer.back'    : '← Home',

      /* index – hero */
      'home.hero.title': 'Hack, learn, and protect the world of <span>Avalon</span>',
      'home.hero.lead' : 'Avalon Heroes is an <strong>EdTech action-RPG</strong> designed for fast sessions, classroom play, and satisfying combat. Start with <strong>Horde Mode</strong>, then expand into new classes and bosses over time.',
      'home.btn.playDemo'    : 'Play Demo',
      'home.btn.seeProgress' : 'See Progress',
      'home.hero.note': 'Demo: <strong>Warrior</strong> &bull; <strong>Horde Mode</strong> &bull; Access code required &bull; MVP build',

      /* index – classes */
      'home.classes.heading': 'Choose Your Hero',
      'class.warrior.name': 'Warrior',
      'class.warrior.desc': 'A frontline fighter who thrives in the heat of battle. Build rage through melee hits and unleash devastating area attacks to control the battlefield.',
      'class.mage.name': 'Mage',
      'class.mage.desc': 'Masters of elemental magic who devastate enemies from afar. Control space with powerful spells and bursts.',
      'class.paladin.name': 'Paladin',
      'class.paladin.desc': 'Holy warriors who protect allies and smite foes. A sturdy shield line with supportive divine power.',
      'class.ranger.name': 'Ranger',
      'class.ranger.desc': 'Precise archers who excel at picking targets from a distance. Rangers kite enemies, control lanes with traps, and punish openings with rapid bow attacks.',
      'class.rogue.name': 'Rogue',
      'class.rogue.desc': 'Fast, evasive duelists who strike before enemies can react. Rogues weave in and out of combat, stacking damage through combos, backstabs, and quick dagger bursts.',
      'class.engineer.name': 'Engineer',
      'class.engineer.desc': 'Gadget specialists who fight with firearms and inventions. Engineers set up turrets, control space with tools, and support the team with clever utility.',
      'class.druid.name': 'Druid',
      'class.druid.desc': 'Nature casters who bend the battlefield with roots, wind, and healing. Druids thrive in control play, empowering allies while disrupting enemy movement and positioning.',

      /* index – feature cards */
      'home.features.classroom.title': 'Classroom-friendly',
      'home.features.classroom.desc' : 'Designed for quick sessions, simple onboarding, and browser play on common school devices.',
      'home.features.action.title'   : 'Action first',
      'home.features.action.desc'    : 'Responsive movement, abilities, and upgrade choices that make the gameplay feel rewarding.',
      'home.features.expand.title'   : 'Expandable',
      'home.features.expand.desc'    : 'Start small and ship often: new heroes, modes, quizzes, and bosses can be added over time.',

      /* index – for-schools */
      'home.schools.heading': 'Built for the classroom',
      'home.schools.lead'   : 'We know school IT teams have high standards. Here\'s what you should know before bringing Avalon Heroes to your students.',
      'home.schools.item1'  : '<strong>No ads, ever.</strong> Students are never shown advertising or marketing content.',
      'home.schools.item2'  : '<strong>No data selling.</strong> Student data is never sold or shared with third parties for commercial purposes.',
      'home.schools.item3'  : '<strong>COPPA compliant.</strong> Students under 13 join teacher-managed sessions only — no direct account creation.',
      'home.schools.item4'  : '<strong>FERPA aware.</strong> We handle student education records responsibly. DPAs available on request.',
      'home.schools.item5'  : '<strong>Browser-based.</strong> No app installs. Works on Chromebooks, tablets, and school PCs.',
      'home.schools.item6'  : '<strong>Human support.</strong> Questions? Email us directly — no chatbot, no ticket queue.',
      'home.schools.cta.contact': 'Contact for Schools',
      'home.schools.cta.privacy': 'Privacy Policy',
      'home.schools.cta.terms'  : 'Terms of Service',

      /* contact */
      'contact.title'   : 'Contact',
      'contact.subtitle': 'We\'re a small indie team. Every message is read by a real person.',
      'contact.response.title': 'Response time',
      'contact.response.text' : 'We typically respond within <strong>1–3 business days</strong>. For school or privacy requests we aim to respond within <strong>5 business days</strong>. We don\'t have a support ticket system — just email us directly.',
      'contact.general.title' : 'General Enquiry',
      'contact.general.desc'  : 'Questions about the game, features, or development progress.',
      'contact.general.action': 'avalonheroesgame@gmail.com ↗',
      'contact.schools.title' : 'Schools &amp; Educators',
      'contact.schools.desc'  : 'Want to pilot Avalon Heroes in your school? Need a DPA or IT information pack?',
      'contact.schools.action': 'Get in touch ↗',
      'contact.privacy.title' : 'Privacy &amp; Data Requests',
      'contact.privacy.desc'  : 'Data access, deletion requests, COPPA concerns, or FERPA questions.',
      'contact.privacy.action': 'avalonheroesgame@gmail.com ↗',
      'contact.bugs.title'    : 'Bug Reports',
      'contact.bugs.desc'     : 'Found something broken? Please include your browser, device, and what you were doing.',
      'contact.bugs.action'   : 'Report a bug ↗',
      'contact.press.title'   : 'Press &amp; Media',
      'contact.press.desc'    : 'Writing about Avalon Heroes? We\'re happy to provide assets, quotes, or an interview.',
      'contact.press.action'  : 'Press enquiry ↗',
      'contact.ip.title'      : 'Attribution &amp; IP',
      'contact.ip.desc'       : 'Rights holder with a concern about credits or asset usage? We\'ll address it promptly.',
      'contact.ip.action'     : 'Contact us ↗',
      'contact.school.cta.title': 'Bringing Avalon Heroes to your classroom?',
      'contact.school.cta.desc' : 'We can provide an information pack for your IT department, answer procurement questions, or arrange a Data Processing Agreement (DPA) for your school or district. No obligation — just reach out.',
      'contact.school.cta.btn'  : 'Email for Schools',

      /* 404 */
      '404.title'   : 'This page doesn\'t exist',
      '404.desc'    : 'Looks like you\'ve wandered off the map. The page you\'re looking for has been moved, deleted, or never existed in the first place.',
      '404.btn.home'  : 'Back to Home',
      '404.btn.devlog': 'See Devlog',

      /* updates */
      'updates.title'      : 'Avalon Heroes – Updates',
      'updates.subtitle'   : 'Public development progress and milestones.',
      'updates.back'       : 'Home',
      'updates.whats_next' : 'What\'s Next',

      /* signup */
      'signup.who'         : 'Who are you?',
      'signup.who.sub'     : 'This helps us send you to the right tools after you sign in.',
      'signup.student.label': 'Student',
      'signup.student.desc' : 'Join games, earn rewards, and level up with your class.',
      'signup.teacher.label': 'Teacher',
      'signup.teacher.desc' : 'Host sessions, build quizzes, and view class reports.',
      'signup.continue'    : 'Continue',
      'signup.change.later': 'You can change this later in your account settings.',
      'signup.age.title'   : 'Age verification',
      'signup.age.sub'     : 'Standard check before creating a student account.',
      'signup.age.check'   : 'I confirm I am 13 years old or older.',
      'signup.age.note'    : 'If you\'re under 13, ask your teacher to create a class session for you to join.',
      'signup.age.flag'    : 'We store a simple "age verified" flag (not your birthday).',
      'signup.auth.title'  : 'Create your account',
      'signup.auth.sub'    : 'Choose how you\'d like to sign up or log in.',
      'signup.email'       : 'Continue with Email',
      'signup.google'      : 'Continue with Google',
      'signup.back'        : 'Back',
      'signup.login'       : 'Log in',
      'signup.tagline'     : 'Leveling up engagement, one question at a time.',
      'signup.terms'       : 'By creating an account you agree to our <a href="terms.html" style="color:rgba(0,100,220,.80);text-decoration:underline;">Terms of Service</a> and <a href="privacy.html" style="color:rgba(0,100,220,.80);text-decoration:underline;">Privacy Policy</a>.',

      /* credits */
      'credits.title'           : 'Credits',
      'credits.subtitle'        : 'Third-party assets, tools, and libraries used in Avalon Heroes',
      'credits.game_assets'     : '🎨 Game Assets',
      'credits.original'        : '✨ Original Work',
      'credits.original.note'   : 'The following content was created entirely by Avalon Studios for this project:',
      'credits.tools'           : '🛠️ Tools &amp; Engine',
      'credits.attribution.title': '📝 A Note on Attribution',
      'credits.attribution.text' : 'If you believe any content in Avalon Heroes is missing correct attribution, or if you are a rights holder with a concern, please contact us at <a href="mailto:avalonheroesgame@gmail.com">avalonheroesgame@gmail.com</a> and we will address it promptly.',
      'credits.updated'         : 'This credits page will be updated as new assets and tools are added to the project. Last updated: <strong>January 2026</strong>.',

      /* portal */
      'portal.gate.subtitle'   : 'Demo Access Portal',
      'portal.mvp.badge'       : 'Early Access MVP Demo',
      'portal.code.label'      : 'Enter Access Code',
      'portal.code.placeholder': 'ENTER CODE',
      'portal.code.btn'        : 'Enter',
      'portal.code.error'      : 'Incorrect code. Try again.',
      'portal.mvp.disclaimer'  : '<strong>MVP Disclaimer:</strong> This is an early-access prototype of Avalon Heroes. Expect bugs, placeholder art, missing features, and rough edges. No account is required to play. Your feedback helps shape the game — use the feedback button inside the demo to share your thoughts. Content and gameplay are subject to change.',
      'portal.back'            : '← Back to avalonheroes.com',
      'portal.bar.stats'       : 'Stats',
      'portal.bar.howtoplay'   : 'How to Play',
      'portal.bar.feedback'    : 'Feedback',
      'portal.bar.fullscreen'  : 'Fullscreen',
      'portal.bar.exit_fs'     : 'Exit Fullscreen',
      'portal.bar.mvp'         : 'MVP Demo',
      'portal.stats.title'     : 'Stats Guide',
      'portal.stat.str'        : 'Strength',
      'portal.stat.str.desc'   : 'Increases weapon damage',
      'portal.stat.vit'        : 'Vitality',
      'portal.stat.vit.desc'   : 'Increases player health',
      'portal.stat.dex'        : 'Dexterity',
      'portal.stat.wis'        : 'Wisdom',
      'portal.stat.int'        : 'Intellect',
      'portal.stat.wip'        : 'Not yet implemented',
      'portal.stat.coming_soon': 'Coming Soon',
      'portal.htp.title'       : 'How to Play',
      'portal.htp.move'        : 'Move',
      'portal.htp.attack'      : 'Attack',
      'portal.htp.inventory'   : 'Open Inventory',
      'portal.htp.sheath'      : 'Sheath / Unsheath Weapon',
      'portal.htp.note.strong' : 'Starter gear included',
      'portal.htp.note'        : ' — you\'ll find a few items and weapons in your inventory to try out. No account needed. This is an early demo, so things may be rough around the edges!',
    },

    /* ── ESPAÑOL ── */
    es: {
      'nav.home'   : 'Inicio',
      'nav.devlog' : 'Historial',
      'nav.login'  : 'Iniciar sesión',
      'nav.logout' : 'Cerrar sesión',
      'nav.account': 'Mi cuenta',

      'footer.privacy' : 'Política de Privacidad',
      'footer.terms'   : 'Términos de Servicio',
      'footer.credits' : 'Créditos',
      'footer.contact' : 'Contacto',
      'footer.devlog'  : 'Historial',
      'footer.tagline' : 'Sin anuncios. Sin venta de datos. Sin datos personales para navegar.',
      'footer.back'    : '← Inicio',

      'home.hero.title': 'Hackea, aprende y protege el mundo de <span>Avalon</span>',
      'home.hero.lead' : 'Avalon Heroes es un <strong>RPG de acción EdTech</strong> diseñado para sesiones rápidas, juego en el aula y combate satisfactorio. Comienza con el <strong>Modo Horda</strong> y expande con nuevas clases y jefes con el tiempo.',
      'home.btn.playDemo'    : 'Jugar Demo',
      'home.btn.seeProgress' : 'Ver Progreso',
      'home.hero.note': 'Demo: <strong>Guerrero</strong> &bull; <strong>Modo Horda</strong> &bull; Código requerido &bull; Versión MVP',

      'home.classes.heading': 'Elige tu Héroe',
      'class.warrior.name': 'Guerrero',
      'class.warrior.desc': 'Un luchador de primera línea que prospera en el calor de la batalla. Acumula furia con golpes cuerpo a cuerpo y desata ataques devastadores de área.',
      'class.mage.name': 'Mago',
      'class.mage.desc': 'Maestros de la magia elemental que devastan enemigos desde lejos. Controla el espacio con hechizos y explosiones poderosas.',
      'class.paladin.name': 'Paladín',
      'class.paladin.desc': 'Guerreros sagrados que protegen a sus aliados y castigan a los enemigos. Una sólida línea de escudos con poder divino de apoyo.',
      'class.ranger.name': 'Cazador',
      'class.ranger.desc': 'Arqueros precisos que destacan eligiendo objetivos a distancia. Controlan carriles con trampas y castigan aperturas con rápidos ataques de arco.',
      'class.rogue.name': 'Pícaro',
      'class.rogue.desc': 'Duelistas rápidos y evasivos que golpean antes de que los enemigos puedan reaccionar. Acumulan daño con combos, ataques por la espalda y ráfagas de daga.',
      'class.engineer.name': 'Ingeniero',
      'class.engineer.desc': 'Especialistas en artilugios que luchan con armas de fuego e inventos. Instalan torretas, controlan el espacio con herramientas y apoyan al equipo.',
      'class.druid.name': 'Druida',
      'class.druid.desc': 'Lanzadores de hechizos naturales que doblan el campo de batalla con raíces, viento y curación. Potencian aliados mientras interrumpen al enemigo.',

      'home.features.classroom.title': 'Para el aula',
      'home.features.classroom.desc' : 'Diseñado para sesiones rápidas, incorporación sencilla y juego en navegador en dispositivos escolares comunes.',
      'home.features.action.title'   : 'Acción primero',
      'home.features.action.desc'    : 'Movimiento responsivo, habilidades y mejoras que hacen que el juego se sienta gratificante.',
      'home.features.expand.title'   : 'Expandible',
      'home.features.expand.desc'    : 'Empieza pequeño y actualiza seguido: nuevos héroes, modos, cuestionarios y jefes con el tiempo.',

      'home.schools.heading': 'Diseñado para el aula',
      'home.schools.lead'   : 'Sabemos que los equipos de TI escolar tienen altos estándares. Esto es lo que debes saber antes de llevar Avalon Heroes a tus estudiantes.',
      'home.schools.item1'  : '<strong>Sin anuncios, nunca.</strong> Los estudiantes nunca ven publicidad ni contenido de marketing.',
      'home.schools.item2'  : '<strong>Sin venta de datos.</strong> Los datos de los estudiantes nunca se venden ni se comparten con terceros para fines comerciales.',
      'home.schools.item3'  : '<strong>Cumple con COPPA.</strong> Los menores de 13 años solo se unen a sesiones gestionadas por profesores, sin creación directa de cuenta.',
      'home.schools.item4'  : '<strong>Consciente de FERPA.</strong> Gestionamos los registros educativos de los estudiantes de forma responsable. APDs disponibles bajo solicitud.',
      'home.schools.item5'  : '<strong>Basado en navegador.</strong> Sin instalaciones. Funciona en Chromebooks, tablets y PCs escolares.',
      'home.schools.item6'  : '<strong>Soporte humano.</strong> ¿Preguntas? Escríbenos directamente — sin chatbots ni colas de tickets.',
      'home.schools.cta.contact': 'Contacto para Escuelas',
      'home.schools.cta.privacy': 'Política de Privacidad',
      'home.schools.cta.terms'  : 'Términos de Servicio',

      'contact.title'   : 'Contacto',
      'contact.subtitle': 'Somos un pequeño equipo indie. Cada mensaje es leído por una persona real.',
      'contact.response.title': 'Tiempo de respuesta',
      'contact.response.text' : 'Normalmente respondemos en <strong>1–3 días hábiles</strong>. Para solicitudes escolares o de privacidad, procuramos responder en <strong>5 días hábiles</strong>. No tenemos sistema de tickets — escríbenos directamente.',
      'contact.general.title' : 'Consulta General',
      'contact.general.desc'  : 'Preguntas sobre el juego, funciones o progreso de desarrollo.',
      'contact.general.action': 'avalonheroesgame@gmail.com ↗',
      'contact.schools.title' : 'Escuelas y Educadores',
      'contact.schools.desc'  : '¿Quieres implementar Avalon Heroes en tu escuela? ¿Necesitas un APD o paquete de información para TI?',
      'contact.schools.action': 'Ponerse en contacto ↗',
      'contact.privacy.title' : 'Privacidad y Datos',
      'contact.privacy.desc'  : 'Acceso a datos, solicitudes de eliminación, preguntas sobre COPPA o FERPA.',
      'contact.privacy.action': 'avalonheroesgame@gmail.com ↗',
      'contact.bugs.title'    : 'Reportar Errores',
      'contact.bugs.desc'     : '¿Encontraste algo roto? Incluye tu navegador, dispositivo y lo que estabas haciendo.',
      'contact.bugs.action'   : 'Reportar error ↗',
      'contact.press.title'   : 'Prensa y Medios',
      'contact.press.desc'    : '¿Escribes sobre Avalon Heroes? Con gusto ofrecemos recursos, citas o una entrevista.',
      'contact.press.action'  : 'Consulta de prensa ↗',
      'contact.ip.title'      : 'Atribución y PI',
      'contact.ip.desc'       : '¿Eres titular de derechos con una preocupación sobre créditos o uso de activos? Lo atenderemos de inmediato.',
      'contact.ip.action'     : 'Contáctanos ↗',
      'contact.school.cta.title': '¿Llevas Avalon Heroes a tu aula?',
      'contact.school.cta.desc' : 'Podemos proporcionar un paquete de información para tu departamento de TI, responder preguntas de adquisición o gestionar un APD para tu escuela o distrito. Sin compromiso — solo escríbenos.',
      'contact.school.cta.btn'  : 'Email para Escuelas',

      '404.title'    : 'Esta página no existe',
      '404.desc'     : 'Parece que te has perdido del mapa. La página que buscas ha sido movida, eliminada o nunca existió.',
      '404.btn.home'  : 'Volver al Inicio',
      '404.btn.devlog': 'Ver Historial',

      'updates.title'    : 'Avalon Heroes – Actualizaciones',
      'updates.subtitle' : 'Progreso público de desarrollo e hitos.',
      'updates.back'     : 'Inicio',
      'updates.whats_next': 'Lo Siguiente',

      'signup.who'          : '¿Quién eres?',
      'signup.who.sub'      : 'Esto nos ayuda a llevarte a las herramientas correctas después de iniciar sesión.',
      'signup.student.label': 'Estudiante',
      'signup.student.desc' : 'Únete a partidas, gana recompensas y sube de nivel con tu clase.',
      'signup.teacher.label': 'Profesor',
      'signup.teacher.desc' : 'Organiza sesiones, crea cuestionarios y ve informes de clase.',
      'signup.continue'     : 'Continuar',
      'signup.change.later' : 'Puedes cambiar esto más tarde en la configuración de tu cuenta.',
      'signup.age.title'    : 'Verificación de edad',
      'signup.age.sub'      : 'Verificación estándar antes de crear una cuenta de estudiante.',
      'signup.age.check'    : 'Confirmo que tengo 13 años o más.',
      'signup.age.note'     : 'Si tienes menos de 13 años, pide a tu profesor que cree una sesión de clase para que te unas.',
      'signup.age.flag'     : 'Almacenamos una simple marca de "edad verificada" (no tu fecha de nacimiento).',
      'signup.auth.title'   : 'Crea tu cuenta',
      'signup.auth.sub'     : 'Elige cómo te gustaría registrarte o iniciar sesión.',
      'signup.email'        : 'Continuar con Email',
      'signup.google'       : 'Continuar con Google',
      'signup.back'         : 'Atrás',
      'signup.login'        : 'Iniciar sesión',
      'signup.tagline'      : 'Elevando el compromiso, una pregunta a la vez.',
      'signup.terms'        : 'Al crear una cuenta, aceptas nuestros <a href="terms.html" style="color:rgba(0,100,220,.80);text-decoration:underline;">Términos de Servicio</a> y <a href="privacy.html" style="color:rgba(0,100,220,.80);text-decoration:underline;">Política de Privacidad</a>.',

      'credits.title'           : 'Créditos',
      'credits.subtitle'        : 'Recursos, herramientas y librerías de terceros usados en Avalon Heroes',
      'credits.game_assets'     : '🎨 Recursos del Juego',
      'credits.original'        : '✨ Trabajo Original',
      'credits.original.note'   : 'El siguiente contenido fue creado íntegramente por Avalon Studios para este proyecto:',
      'credits.tools'           : '🛠️ Herramientas y Motor',
      'credits.attribution.title': '📝 Una nota sobre la atribución',
      'credits.attribution.text' : 'Si crees que algún contenido en Avalon Heroes carece de la atribución correcta, o si eres un titular de derechos con una preocupación, contáctanos en <a href="mailto:avalonheroesgame@gmail.com">avalonheroesgame@gmail.com</a> y lo resolveremos de inmediato.',
      'credits.updated'         : 'Esta página de créditos se actualizará a medida que se añadan nuevos recursos y herramientas al proyecto. Última actualización: <strong>Enero 2026</strong>.',

      'portal.gate.subtitle'   : 'Portal de Acceso Demo',
      'portal.mvp.badge'       : 'Demo MVP de Acceso Anticipado',
      'portal.code.label'      : 'Ingresa el Código de Acceso',
      'portal.code.placeholder': 'INGRESA CÓDIGO',
      'portal.code.btn'        : 'Entrar',
      'portal.code.error'      : 'Código incorrecto. Inténtalo de nuevo.',
      'portal.mvp.disclaimer'  : '<strong>Aviso MVP:</strong> Este es un prototipo de acceso anticipado de Avalon Heroes. Espera errores, arte provisional, funciones faltantes y bordes sin pulir. No se requiere cuenta para jugar. Tu retroalimentación ayuda a dar forma al juego. El contenido y el juego están sujetos a cambios.',
      'portal.back'            : '← Volver a avalonheroes.com',
      'portal.bar.stats'       : 'Stats',
      'portal.bar.howtoplay'   : 'Cómo Jugar',
      'portal.bar.feedback'    : 'Comentarios',
      'portal.bar.fullscreen'  : 'Pantalla Completa',
      'portal.bar.exit_fs'     : 'Salir de Pantalla Completa',
      'portal.bar.mvp'         : 'Demo MVP',
      'portal.stats.title'     : 'Guía de Stats',
      'portal.stat.str'        : 'Fuerza',
      'portal.stat.str.desc'   : 'Aumenta el daño del arma',
      'portal.stat.vit'        : 'Vitalidad',
      'portal.stat.vit.desc'   : 'Aumenta la salud del jugador',
      'portal.stat.dex'        : 'Destreza',
      'portal.stat.wis'        : 'Sabiduría',
      'portal.stat.int'        : 'Inteligencia',
      'portal.stat.wip'        : 'Aún no implementado',
      'portal.stat.coming_soon': 'Próximamente',
      'portal.htp.title'       : 'Cómo Jugar',
      'portal.htp.move'        : 'Mover',
      'portal.htp.attack'      : 'Atacar',
      'portal.htp.inventory'   : 'Abrir Inventario',
      'portal.htp.sheath'      : 'Envainar / Desenvainar Arma',
      'portal.htp.note.strong' : 'Equipo inicial incluido',
      'portal.htp.note'        : ' — encontrarás algunos artículos y armas en tu inventario para probar. No necesitas cuenta. ¡Este es un demo temprano, así que puede haber imperfecciones!',
    },

    /* ── 日本語 ── */
    ja: {
      'nav.home'   : 'ホーム',
      'nav.devlog' : '開発ログ',
      'nav.login'  : 'ログイン',
      'nav.logout' : 'サインアウト',
      'nav.account': 'アカウント',

      'footer.privacy' : 'プライバシーポリシー',
      'footer.terms'   : '利用規約',
      'footer.credits' : 'クレジット',
      'footer.contact' : 'お問い合わせ',
      'footer.devlog'  : '開発ログ',
      'footer.tagline' : '広告なし。データ販売なし。閲覧に個人情報不要。',
      'footer.back'    : '← ホーム',

      'home.hero.title': 'ハックし、学び、<span>アバロン</span>の世界を守れ',
      'home.hero.lead' : 'アバロンヒーローズは<strong>EdTechアクションRPG</strong>です。短いセッション、授業でのプレイ、爽快な戦闘向けに設計。<strong>ホードモード</strong>から始め、新クラスやボスを追加していきます。',
      'home.btn.playDemo'    : 'デモをプレイ',
      'home.btn.seeProgress' : '進捗を見る',
      'home.hero.note': 'デモ：<strong>ウォーリアー</strong> &bull; <strong>ホードモード</strong> &bull; アクセスコード必要 &bull; MVPビルド',

      'home.classes.heading': 'ヒーローを選べ',
      'class.warrior.name': 'ウォーリアー',
      'class.warrior.desc': '戦場の最前線で活躍する戦士。近接攻撃で怒りを蓄え、範囲攻撃で戦場を制圧します。',
      'class.mage.name': 'メイジ',
      'class.mage.desc': '遠距離から敵を壊滅させる元素魔法の使い手。強力な呪文と爆発で空間を制御します。',
      'class.paladin.name': 'パラディン',
      'class.paladin.desc': '仲間を守り敵を打ち砕く聖なる戦士。神聖な力で味方を支援する堅固な盾となります。',
      'class.ranger.name': 'レンジャー',
      'class.ranger.desc': '遠距離から目標を正確に狙う弓使い。罠で通路を制御し、素早い弓攻撃で隙を突きます。',
      'class.rogue.name': 'ローグ',
      'class.rogue.desc': '敵が反応する前に攻撃する素早く回避的な決闘士。コンボや背面攻撃でダメージを積み重ねます。',
      'class.engineer.name': 'エンジニア',
      'class.engineer.desc': '銃器と発明品で戦うガジェット専門家。タレットを設置し、ツールで空間を制御してチームを支援します。',
      'class.druid.name': 'ドルイド',
      'class.druid.desc': '根、風、回復で戦場を操る自然の魔法使い。味方を強化しながら敵の動きを妨害します。',

      'home.features.classroom.title': '授業対応',
      'home.features.classroom.desc' : '短いセッション、簡単なオンボーディング、学校のデバイスでのブラウザプレイ向けに設計。',
      'home.features.action.title'   : 'アクション優先',
      'home.features.action.desc'    : 'レスポンシブな移動、アビリティ、アップグレードで充実したゲームプレイを実現。',
      'home.features.expand.title'   : '拡張可能',
      'home.features.expand.desc'    : '小さく始め、頻繁に更新：新しいヒーロー、モード、クイズ、ボスを継続的に追加。',

      'home.schools.heading': '授業のために構築',
      'home.schools.lead'   : '学校のITチームは高い基準を持っています。アバロンヒーローズを生徒に提供する前に知っておくべきことをご紹介します。',
      'home.schools.item1'  : '<strong>広告は一切なし。</strong> 生徒に広告やマーケティングコンテンツが表示されることはありません。',
      'home.schools.item2'  : '<strong>データ販売なし。</strong> 生徒のデータは商業目的で第三者に販売・共有されません。',
      'home.schools.item3'  : '<strong>COPPA準拠。</strong> 13歳未満の生徒は教師管理のセッションにのみ参加できます。直接アカウント作成はありません。',
      'home.schools.item4'  : '<strong>FERPA対応。</strong> 学生の教育記録を責任を持って管理します。DPAはリクエストに応じて提供。',
      'home.schools.item5'  : '<strong>ブラウザベース。</strong> アプリのインストール不要。Chromebook、タブレット、学校のPCで動作。',
      'home.schools.item6'  : '<strong>人によるサポート。</strong> ご質問は直接メールで。チャットボットも受付キューもありません。',
      'home.schools.cta.contact': '学校向けお問い合わせ',
      'home.schools.cta.privacy': 'プライバシーポリシー',
      'home.schools.cta.terms'  : '利用規約',

      'contact.title'   : 'お問い合わせ',
      'contact.subtitle': '私たちは小さなインディーチームです。すべてのメッセージは実際の人間が読んでいます。',
      'contact.response.title': '返信時間',
      'contact.response.text' : '通常<strong>1〜3営業日</strong>以内に返信します。学校やプライバシーに関するリクエストは<strong>5営業日</strong>以内を目標にしています。サポートチケットシステムはありません — 直接メールでご連絡ください。',
      'contact.general.title' : '一般的なお問い合わせ',
      'contact.general.desc'  : 'ゲーム、機能、開発進捗についての質問。',
      'contact.general.action': 'avalonheroesgame@gmail.com ↗',
      'contact.schools.title' : '学校・教育者',
      'contact.schools.desc'  : 'アバロンヒーローズを学校で試験導入したいですか？DPAやIT情報パックが必要ですか？',
      'contact.schools.action': 'お問い合わせ ↗',
      'contact.privacy.title' : 'プライバシー・データリクエスト',
      'contact.privacy.desc'  : 'データアクセス、削除リクエスト、COPPAの懸念、またはFERPAの質問。',
      'contact.privacy.action': 'avalonheroesgame@gmail.com ↗',
      'contact.bugs.title'    : 'バグ報告',
      'contact.bugs.desc'     : '不具合を見つけましたか？ブラウザ、デバイス、何をしていたかを含めてください。',
      'contact.bugs.action'   : 'バグを報告 ↗',
      'contact.press.title'   : 'プレス・メディア',
      'contact.press.desc'    : 'アバロンヒーローズについて書きますか？素材、引用、またはインタビューを喜んで提供します。',
      'contact.press.action'  : 'プレス問い合わせ ↗',
      'contact.ip.title'      : '帰属・知的財産',
      'contact.ip.desc'       : 'クレジットまたはアセット使用について懸念を持つ権利者の方は、迅速に対応します。',
      'contact.ip.action'     : 'お問い合わせ ↗',
      'contact.school.cta.title': 'アバロンヒーローズを教室に導入しますか？',
      'contact.school.cta.desc' : 'ITデパートメント向け情報パック、調達に関する質問への回答、学校または学区向けのDPAの手配が可能です。義務はありません — お気軽にご連絡ください。',
      'contact.school.cta.btn'  : '学校向けメール',

      '404.title'    : 'このページは存在しません',
      '404.desc'     : 'マップから外れてしまったようです。お探しのページは移動、削除、または元々存在しなかったものです。',
      '404.btn.home'  : 'ホームに戻る',
      '404.btn.devlog': '開発ログを見る',

      'updates.title'    : 'アバロンヒーローズ – アップデート',
      'updates.subtitle' : '公開開発進捗とマイルストーン。',
      'updates.back'     : 'ホーム',
      'updates.whats_next': '次の予定',

      'signup.who'          : 'あなたは誰ですか？',
      'signup.who.sub'      : 'ログイン後に適切なツールに案内するために使います。',
      'signup.student.label': '生徒',
      'signup.student.desc' : 'ゲームに参加し、報酬を獲得し、クラスと一緒にレベルアップ。',
      'signup.teacher.label': '教師',
      'signup.teacher.desc' : 'セッションを主催し、クイズを作成し、クラスレポートを確認。',
      'signup.continue'     : '次へ',
      'signup.change.later' : 'これはアカウント設定で後から変更できます。',
      'signup.age.title'    : '年齢確認',
      'signup.age.sub'      : '生徒アカウント作成前の標準確認。',
      'signup.age.check'    : '私は13歳以上であることを確認します。',
      'signup.age.note'     : '13歳未満の場合は、先生にクラスセッションを作成してもらってください。',
      'signup.age.flag'     : '「年齢確認済み」フラグのみ保存します（誕生日は保存しません）。',
      'signup.auth.title'   : 'アカウントを作成',
      'signup.auth.sub'     : 'サインアップまたはログインの方法を選択してください。',
      'signup.email'        : 'メールで続ける',
      'signup.google'       : 'Googleで続ける',
      'signup.back'         : '戻る',
      'signup.login'        : 'ログイン',
      'signup.tagline'      : 'エンゲージメントを高める、一問一答で。',
      'signup.terms'        : 'アカウントを作成することで、当社の<a href="terms.html" style="color:rgba(0,100,220,.80);text-decoration:underline;">利用規約</a>と<a href="privacy.html" style="color:rgba(0,100,220,.80);text-decoration:underline;">プライバシーポリシー</a>に同意したことになります。',

      'credits.title'           : 'クレジット',
      'credits.subtitle'        : 'アバロンヒーローズで使用されているサードパーティのアセット、ツール、ライブラリ',
      'credits.game_assets'     : '🎨 ゲームアセット',
      'credits.original'        : '✨ オリジナル作品',
      'credits.original.note'   : '以下のコンテンツはAvalon Studiosがこのプロジェクトのために独自に作成しました：',
      'credits.tools'           : '🛠️ ツール・エンジン',
      'credits.attribution.title': '📝 帰属についての注記',
      'credits.attribution.text' : 'アバロンヒーローズのコンテンツに正しい帰属が欠けていると思われる場合、または懸念を持つ権利者の方は<a href="mailto:avalonheroesgame@gmail.com">avalonheroesgame@gmail.com</a>までご連絡ください。迅速に対応します。',
      'credits.updated'         : 'このクレジットページは新しいアセットやツールが追加されるたびに更新されます。最終更新：<strong>2026年1月</strong>。',

      'portal.gate.subtitle'   : 'デモアクセスポータル',
      'portal.mvp.badge'       : 'アーリーアクセス MVPデモ',
      'portal.code.label'      : 'アクセスコードを入力',
      'portal.code.placeholder': 'コードを入力',
      'portal.code.btn'        : '入力',
      'portal.code.error'      : 'コードが違います。もう一度お試しください。',
      'portal.mvp.disclaimer'  : '<strong>MVPについての注意：</strong>これはアバロンヒーローズの早期アクセスプロトタイプです。バグ、仮のアート、未実装の機能、粗削りな部分があります。プレイにアカウントは不要です。フィードバックボタンでご意見をお聞かせください。コンテンツとゲームプレイは変更される可能性があります。',
      'portal.back'            : '← avalonheroes.comに戻る',
      'portal.bar.stats'       : 'ステータス',
      'portal.bar.howtoplay'   : '遊び方',
      'portal.bar.feedback'    : 'フィードバック',
      'portal.bar.fullscreen'  : 'フルスクリーン',
      'portal.bar.exit_fs'     : 'フルスクリーン終了',
      'portal.bar.mvp'         : 'MVPデモ',
      'portal.stats.title'     : 'ステータスガイド',
      'portal.stat.str'        : '筋力',
      'portal.stat.str.desc'   : '武器ダメージを増加',
      'portal.stat.vit'        : '体力',
      'portal.stat.vit.desc'   : 'プレイヤーのHPを増加',
      'portal.stat.dex'        : '敏捷性',
      'portal.stat.wis'        : '知恵',
      'portal.stat.int'        : '知性',
      'portal.stat.wip'        : '未実装',
      'portal.stat.coming_soon': '近日公開',
      'portal.htp.title'       : '遊び方',
      'portal.htp.move'        : '移動',
      'portal.htp.attack'      : '攻撃',
      'portal.htp.inventory'   : 'インベントリを開く',
      'portal.htp.sheath'      : '武器を抜く / 鞘に収める',
      'portal.htp.note.strong' : 'スターター装備あり',
      'portal.htp.note'        : ' — インベントリにアイテムや武器がいくつか入っています。アカウント不要。初期デモのため、粗削りな部分があるかもしれません！',
    },
  };

  /* ─────────────────────────────────────────────
     CORE ENGINE
  ───────────────────────────────────────────── */
  const STORAGE_KEY = 'avalonLang';
  const LANGS = ['en', 'es', 'ja'];
  const LANG_LABELS = { en: 'EN', es: 'ES', ja: '日本語' };
  const HTML_LANG_MAP = { en: 'en', es: 'es', ja: 'ja' };

  let currentLang = 'en';

  function t(key) {
    return (T[currentLang] && T[currentLang][key]) || T.en[key] || '';
  }

  function applyLang() {
    /* textContent */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t(el.dataset.i18n);
      if (v) el.textContent = v;
    });
    /* innerHTML (for bold/span/links inside text) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t(el.dataset.i18nHtml);
      if (v) el.innerHTML = v;
    });
    /* placeholder attribute */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = t(el.dataset.i18nPlaceholder);
      if (v) el.placeholder = v;
    });
    /* sync all lang-picker buttons (global + panel-level) */
    document.querySelectorAll('[data-i18n-lang], .lang-btn[data-lang]').forEach(btn => {
      const l = btn.dataset.i18nLang || btn.dataset.lang;
      btn.classList.toggle('active', l === currentLang);
    });
    /* html[lang] attribute */
    document.documentElement.lang = HTML_LANG_MAP[currentLang] || 'en';
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang();
  }

  function detectLang() {
    /* 1. stored preference */
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS.includes(stored)) return stored;
    /* 2. browser locale */
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.startsWith('ja')) return 'ja';
    if (nav.startsWith('es')) return 'es';
    return 'en';
  }

  /* ─────────────────────────────────────────────
     FLOATING SWITCHER WIDGET
  ───────────────────────────────────────────── */
  function injectSwitcher() {
    const style = document.createElement('style');
    style.textContent = `
      #avln-lang {
        position: fixed;
        bottom: 20px;
        left: 20px;
        display: flex;
        align-items: center;
        background: rgba(10,25,70,.90);
        border: 1px solid rgba(255,255,255,.22);
        border-radius: 999px;
        overflow: hidden;
        z-index: 9999;
        box-shadow: 0 4px 22px rgba(0,0,0,.45);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
      }
      .avln-lbtn {
        background: none;
        border: none;
        color: rgba(246,251,255,.60);
        font-size: .70rem;
        font-weight: 700;
        padding: 7px 11px;
        cursor: pointer;
        font-family: ui-sans-serif, system-ui, sans-serif;
        letter-spacing: .3px;
        transition: background .15s, color .15s;
        white-space: nowrap;
      }
      .avln-lbtn.active {
        background: rgba(79,246,255,.92);
        color: #0a1940;
      }
      .avln-lbtn:not(.active):hover {
        background: rgba(255,255,255,.12);
        color: #fff;
      }
      .avln-sep {
        width: 1px;
        height: 18px;
        background: rgba(255,255,255,.18);
        flex-shrink: 0;
      }
    `;
    document.head.appendChild(style);

    const wrap = document.createElement('div');
    wrap.id = 'avln-lang';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Language / Idioma / 言語');

    LANGS.forEach((lang, i) => {
      if (i > 0) {
        const sep = document.createElement('span');
        sep.className = 'avln-sep';
        sep.setAttribute('aria-hidden', 'true');
        wrap.appendChild(sep);
      }
      const btn = document.createElement('button');
      btn.className = 'avln-lbtn';
      btn.dataset.i18nLang = lang;
      btn.textContent = LANG_LABELS[lang];
      btn.addEventListener('click', () => setLang(lang));
      wrap.appendChild(btn);
    });

    document.body.appendChild(wrap);
  }

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  function init() {
    currentLang = detectLang();
    injectSwitcher();
    applyLang();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Public API — pages can call I18n.setLang('es') etc. */
  window.I18n = { setLang, t, currentLang: () => currentLang };
}());
