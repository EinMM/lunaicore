// Text of the Luna AI Core home page, EN + AR. The hero is approved text; everything else is reused
// verbatim from the landing (LandingEn / LandingAr), except the Arabic product name and the badge labels.
import { entity } from "./entity";

export const home = {
  en: {
    title: "Luna AI Core: AI that stays yours",
    description: "Luna AI Core makes AI software you control. Start with Luna: chat in English or Arabic, work with your files, and choose local or cloud AI.",
    heading: "AI that stays yours.",
    line: "Luna AI Core makes AI software you control. Start with Luna: chat in English or Arabic, work with your files, and choose local or cloud AI.",
    buttonProduct: "Luna",
    buttonDownload: "Download",
    card: {
      eyebrow: "MEET LUNA",
      title: "Luna Desktop",
      text: "Luna brings local AI, file assistance, personal memory, and optional cloud intelligence into one Windows desktop experience.",
      link: "Discover Luna",
      imageAlt: "Luna main interface",
    },
    teasers: [
      { title: "Local AI Engine", text: "Run local models on your own computer." },
      { title: "File Assistant", text: "Search, organize, and work with your files with confirmation." },
      { title: "Your data. Your decisions.", text: "Luna is local-first. File operations require confirmation, folder access is controlled, and cloud use remains optional." },
    ],
  },
  ar: {
    title: "Luna AI Core | ذكاء اصطناعي يبقى بيدك",
    description: "تصنع Luna AI Core برامج ذكاء اصطناعي تتحكم فيها أنت. ابدأ مع لونا: محادثة بالعربية أو الإنجليزية، وعمل مع ملفاتك، واختيار بين الذكاء المحلي والسحابي.",
    heading: "ذكاء اصطناعي يبقى بيدك.",
    line: "تصنع Luna AI Core برامج ذكاء اصطناعي تتحكم فيها أنت. ابدأ مع لونا: محادثة بالعربية أو الإنجليزية، وعمل مع ملفاتك، واختيار بين الذكاء المحلي والسحابي.",
    buttonProduct: "لونا",
    buttonDownload: "تحميل",
    card: {
      eyebrow: "تعرّف على لونا",
      title: entity.productName.ar,
      text: "تجمع لونا بين الذكاء الاصطناعي المحلي ومساعدة الملفات والذاكرة الشخصية والذكاء السحابي الاختياري، ضمن تجربة واحدة على Windows.",
      link: "اكتشف لونا",
      imageAlt: "الواجهة الرئيسية للونا",
    },
    teasers: [
      { title: "محرك ذكاء محلي", text: "شغّل النماذج المحلية على جهازك." },
      { title: "مساعد الملفات", text: "ابحث عن ملفاتك ونظّمها وتعامل معها بعد تأكيدك." },
      { title: "بياناتك. قراراتك.", text: "تعتمد لونا التشغيل المحلي أولًا. تتطلب عمليات الملفات تأكيدك، وتخضع صلاحيات المجلدات للتحكم، ويبقى استخدام السحابة اختياريًا." },
    ],
  },
} as const;

// Names shown next to a badge (status.ts decides which badge). Same Latin names as the landing, in both languages.
export const badgeNames = {
  vision: "Luna Vision",
  "desktop-agent": "Desktop Agent",
} as const;

// S3c: the sections below the three cards. Existing wording is reused (sources in comments); the lines marked
// NEW were approved on 2026-11-26.
export const homeMore = {
  en: {
    how: {
      title: "How it works", // NEW
      steps: [
        { title: "Download and install", // NEW
          text: "Luna installs per user, with no administrator rights needed." }, // TESTERS.md step 2; installer/Luna.iss:64
        { title: "Choose how Luna thinks.", // landing, modes
          text: "Local, Cloud AI, Hybrid or Decide later." }, // app guide 01_getting_started.md; ui/welcome_view.py:74
        { title: "Work in English or Arabic.", // landing, showcase
          text: "Search and manage files with permission controls." }, // landing, showcase
      ],
    },
    principles: {
      title: "Our principles", // NEW
      items: [
        { title: "You stay in control", // NEW
          text: "The developer does not receive your conversations, files, memories or usage data. Your data is stored on your PC." }, // PRIVACY.md:14-15
        { title: "File operations need your confirmation", // NEW
          text: "Luna reads or changes files only in the folders you allow, and asks you to confirm every file operation." }, // PRIVACY.md:27
        { title: "Local or cloud is your choice", // NEW
          text: "Cloud use remains optional. Private conversations 🔒 are never sent to the cloud." }, // landing lead; PRIVACY.md:43
      ],
    },
    vmg: [
      { title: "Our vision", text: "A world where anyone can use powerful AI without giving up control of their data." },
      { title: "Our mission", text: "We build AI software that runs where you choose, on your own computer or in the cloud, with clear permissions and the final say in your hands." },
      { title: "Our goal", text: "To make local AI practical and easy to use for Arabic and English speakers." },
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Does Luna need internet?", a: "Local model conversations can work without internet after the model is installed." },
        { q: "Is cloud use required?", a: "No. Cloud processing is optional and under your control." },
        { q: "How do I report a problem?", a: "Use “Report a problem” at the bottom of this page, and read the tester guide first. Security issues must be reported privately, never in a public report." },
      ],
    },
    band: {
      title: "Download Luna for Windows",
      text: (beta: string) => `Luna ${beta} is here. Download it, try it, and share your feedback.`,
      button: "Download for Windows",
      releaseNotes: "Release notes",
    },
  },
  ar: {
    how: {
      title: "كيف تعمل لونا؟",
      steps: [
        { title: "حمّل وثبّت", text: "تُثبَّت لونا لكل مستخدم، دون صلاحيات المسؤول." },
        { title: "اختر كيف تعمل لونا.", text: "محلي، أو الذكاء السحابي، أو هجين، أو أقرّر لاحقًا." },
        { title: "تحدّث بالإنجليزية أو العربية.", text: "ابحث عن الملفات وأدرها مع ضوابط الصلاحيات." },
      ],
    },
    principles: {
      title: "مبادئنا",
      items: [
        { title: "السيطرة بيدك", text: "لا يستلم المطوّر محادثاتك أو ملفاتك أو ذكرياتك أو بيانات استخدامك. تُحفظ بياناتك على جهازك." },
        { title: "عمليات الملفات تحتاج إلى تأكيدك", text: "لا تقرأ لونا الملفات أو تعدّلها إلا في المجلدات التي تسمح بها، وتطلب تأكيدك قبل كل عملية على الملفات." },
        { title: "المحلي أو السحابي باختيارك", text: "يبقى استخدام السحابة اختياريًا. المحادثات الخاصة 🔒 لا تُرسل إلى السحابة أبدًا." },
      ],
    },
    vmg: [
      { title: "رؤيتنا", text: "عالم يستطيع فيه كل شخص استخدام ذكاء اصطناعي قوي دون أن يتنازل عن السيطرة على بياناته." },
      { title: "رسالتنا", text: "نبني برامج ذكاء اصطناعي تعمل حيث تختار، على جهازك أو في السحابة، بصلاحيات واضحة وقرار بيدك." },
      { title: "هدفنا", text: "جعل الذكاء الاصطناعي المحلي عمليًا وسهل الاستخدام لمتحدثي العربية والإنجليزية." },
    ],
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "هل تحتاج لونا إلى الإنترنت؟", a: "يمكن للمحادثات باستخدام نموذج محلي أن تعمل دون إنترنت بعد تثبيت النموذج." },
        { q: "هل استخدام السحابة إلزامي؟", a: "لا. المعالجة السحابية اختيارية وتخضع لتحكمك." },
        { q: "كيف أبلّغ عن مشكلة؟", a: "استخدم رابط «الإبلاغ عن مشكلة» أسفل هذه الصفحة، واقرأ دليل المجرّبين أولًا. أمّا المشكلات الأمنية فيجب الإبلاغ عنها بشكل خاص، وليس في بلاغ عام." },
      ],
    },
    band: {
      title: "تحميل لونا لنظام Windows",
      text: (beta: string) => `${beta} من لونا متاح الآن. حمّلها وجرّبها وشاركنا ملاحظاتك.`,
      button: "تحميل لنظام Windows",
      releaseNotes: "ملاحظات الإصدار",
    },
  },
} as const;