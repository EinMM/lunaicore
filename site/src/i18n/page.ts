// Labels for the subpage layout (Page.astro). Every string is taken from the landing pages
// (nav, footer, buttons); nothing here is new wording.
const REPO = "https://github.com/EinMM/lunaicore";

export const SITE = "https://lunaicore.com";

export const ui = {
  en: {
    lang: "en", dir: "ltr", home: "/",
    switchText: "عربي", switchLang: "ar",
    brandAria: "Luna",
    navAria: "Main",
    skip: "Skip to content",
    nav: [
      { href: "/#features", text: "Why Luna" },
      { href: "/#privacy", text: "Privacy" },
      { href: "/#faq", text: "FAQ" },
      { href: "/downloads/", text: "Download" },
      { href: "/changelog/", text: "Release notes" },
    ],
    builtBy: "Built by Hussain (EinMM)",
    footerAria: "Help and feedback",
    footerLinks: [
      { href: `${REPO}/blob/main/TESTERS.md`, text: "Tester guide" },
      { href: `${REPO}/issues/new?template=bug_report.yml`, text: "Report a problem" },
      { href: `${REPO}/issues/new?template=feature_request.yml`, text: "Suggest a feature" },
      { href: `${REPO}/issues`, text: "All reports" },
      { href: "/legal/security/", text: "Security policy" },
      { href: "/legal/privacy/", text: "Privacy policy" },
      { href: "/legal/terms/", text: "Terms of use" },
    ],
    ogLocale: "en_US",
  },
  ar: {
    lang: "ar", dir: "rtl", home: "/ar/",
    switchText: "English", switchLang: "en",
    brandAria: "Luna",
    navAria: "الرئيسية",
    skip: "تخطَّ إلى المحتوى",
    nav: [
      { href: "/ar/#features", text: "لماذا لونا" },
      { href: "/ar/#privacy", text: "الخصوصية" },
      { href: "/ar/#faq", text: "الأسئلة الشائعة" },
      { href: "/ar/downloads/", text: "تحميل" },
      { href: "/ar/changelog/", text: "ملاحظات الإصدار" },
    ],
    builtBy: "تطوير حسين (EinMM)",
    footerAria: "المساعدة والملاحظات",
    footerLinks: [
      { href: `${REPO}/blob/main/TESTERS.ar.md`, text: "دليل المجرّبين" },
      { href: `${REPO}/issues/new?template=bug_report.yml`, text: "الإبلاغ عن مشكلة" },
      { href: `${REPO}/issues/new?template=feature_request.yml`, text: "اقتراح ميزة" },
      { href: `${REPO}/issues`, text: "جميع البلاغات" },
      { href: "/ar/legal/security/", text: "سياسة الأمان" },
      { href: "/ar/legal/privacy/", text: "سياسة الخصوصية" },
      { href: "/ar/legal/terms/", text: "شروط الاستخدام" },
    ],
    ogLocale: "ar_SA",
  },
} as const;

export type Lang = keyof typeof ui;
