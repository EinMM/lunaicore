// /support/ and /ar/support/ : text of the support page, EN + AR. Rendered by components/SupportPage.astro.
// Sources: the report paragraph is the docs "Reporting a problem" text (content/manual/{en,ar}/troubleshooting.md),
// verified against the desktop-win-v0.2.0 tag in S4a; the addresses are contact@ (entity.ts, README, PRIVACY.md),
// support@ (TESTERS.md signature) and security@ (SECURITY.md). No response times, no promises.
import { entity } from "./entity";

export const REPO = "https://github.com/EinMM/lunaicore";

export const addresses = {
  contact: entity.contact.email,
  support: "support@lunaicore.com",
  security: "security@lunaicore.com",
} as const;

export const support = {
  en: {
    title: "Support and reporting a problem – Luna AI Core",
    description: "Where to find help for Luna, how to report a problem and which address to write to.",
    h1: "Support",
    lead: "Where to find help for Luna, how to report a problem and which address to write to.",
    guide: { h2: "Start with the guide", text: "Most questions are answered in the guide:", slugs: ["troubleshooting", "faq", "install", "requirements"] },
    report: {
      h2: "Report a problem",
      text: "“Send feedback” in Luna (in the navigation rail, or Settings → About Luna) opens a short window: choose a bug report or a feature request and write a message if you like. “Send by email” opens your email app with the message ready, with only Luna’s version, the Windows version and the engine added; you check it and send it yourself. “Copy message” copies it for web mail. Luna sends nothing herself.",
      github: "You can also open a GitHub issue instead (this needs a GitHub account, and your message is not carried over):",
      links: [
        { href: `${REPO}/issues/new?template=bug_report.yml`, text: "Report a problem" },
        { href: `${REPO}/issues/new?template=feature_request.yml`, text: "Suggest a feature" },
        { href: `${REPO}/issues`, text: "All reports" },
        { href: `${REPO}/blob/main/TESTERS.md`, text: "Tester guide" },
      ],
    },
    include: {
      h2: "What to include",
      before: "Say what you did, what you expected and what happened. If you can, attach the diagnostic report: Settings → About Luna → “Diagnostic report” shows the whole report before you save it, and Luna sends it nowhere. What it contains, and what it never contains, is described on the page",
      after: ".",
    },
    address: {
      h2: "Which address to write to",
      head: ["Address", "Use it for"],
      rows: [
        [addresses.contact, "General questions, and questions about privacy."],
        [addresses.support, "Help with a problem with Luna."],
        [addresses.security, "Security problems, privately."],
      ],
    },
    security: {
      h2: "Security problems",
      before: "Report security problems privately, never in a public issue. Write to",
      middle: ", or read the",
      link: "Security Policy",
      after: "for the private report on GitHub.",
    },
    also: { text: "See also:", link: "Website privacy statement" },
  },
  ar: {
    title: "الدعم والإبلاغ عن مشكلة – لونا مساعدة سطح المكتب الذكية",
    description: "أين تجد المساعدة لتطبيق لونا، وكيف تبلّغ عن مشكلة، وإلى أي عنوان تكتب.",
    h1: "الدعم",
    lead: "أين تجد المساعدة لتطبيق لونا، وكيف تبلّغ عن مشكلة، وإلى أي عنوان تكتب.",
    guide: { h2: "ابدأ بالدليل", text: "تجد إجابة أغلب الأسئلة في الدليل:", slugs: ["troubleshooting", "faq", "install", "requirements"] },
    report: {
      h2: "الإبلاغ عن مشكلة",
      text: "«إرسال ملاحظة» (في شريط التنقل، أو الإعدادات ← حول لونا) يفتح نافذة قصيرة: اختر بلاغًا عن مشكلة أو اقتراحًا لميزة، واكتب رسالتك إن شئت. و«إرسال بالبريد» يفتح برنامج البريد لديك برسالة جاهزة لا يُضاف إليها إلا إصدار لونا وإصدار ويندوز والمحرّك، فتراجعها وترسلها أنت بنفسك. و«نسخ الرسالة» ينسخها لتلصقها في بريد الويب. ولا ترسل لونا شيئًا بنفسها.",
      github: "ويمكنك بدلًا من ذلك فتح بلاغ على GitHub (يحتاج حسابًا على GitHub، ولا تُنقل إليه رسالتك):",
      links: [
        { href: `${REPO}/issues/new?template=bug_report.yml`, text: "الإبلاغ عن مشكلة" },
        { href: `${REPO}/issues/new?template=feature_request.yml`, text: "اقتراح ميزة" },
        { href: `${REPO}/issues`, text: "جميع البلاغات" },
        { href: `${REPO}/blob/main/TESTERS.ar.md`, text: "دليل المجرّبين" },
      ],
    },
    include: {
      h2: "ماذا تذكر في بلاغك",
      before: "اذكر ما فعلته وما توقعته وما حدث. وإن استطعت فأرفق تقرير التشخيص: الإعدادات ← حول لونا ← «تقرير التشخيص» يعرض التقرير كاملًا قبل أن تحفظه، ولا ترسله لونا إلى أي مكان. وما يحويه وما لا يحويه أبدًا موضّح في صفحة",
      after: ".",
    },
    address: {
      h2: "إلى أي عنوان تكتب",
      head: ["العنوان", "استخدمه من أجل"],
      rows: [
        [addresses.contact, "الأسئلة العامة، وأسئلة الخصوصية."],
        [addresses.support, "المساعدة في مشكلة مع لونا."],
        [addresses.security, "المشكلات الأمنية، بشكل خاص."],
      ],
    },
    security: {
      h2: "المشكلات الأمنية",
      before: "أبلغ عن المشكلات الأمنية بشكل خاص، وليس في بلاغ عام. اكتب إلى",
      middle: "، أو اقرأ",
      link: "سياسة الأمان",
      after: "لمعرفة طريقة البلاغ الخاص على GitHub.",
    },
    also: { text: "انظر أيضًا:", link: "بيان خصوصية الموقع" },
  },
} as const;
