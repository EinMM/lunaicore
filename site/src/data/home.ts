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
