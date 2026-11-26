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
      { href: `${REPO}/blob/main/SECURITY.md`, text: "Security policy" },
      { href: `${REPO}/blob/main/PRIVACY.md#english`, text: "Privacy policy" },
      { href: `${REPO}/blob/main/TERMS.md#english`, text: "Terms of use" },
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
      { href: `${REPO}/blob/main/SECURITY.md`, text: "سياسة الأمان" },
      { href: `${REPO}/blob/main/PRIVACY.md#arabic`, text: "سياسة الخصوصية" },
      { href: `${REPO}/blob/main/TERMS.md#arabic`, text: "شروط الاستخدام" },
    ],
    ogLocale: "ar_SA",
  },
} as const;

export type Lang = keyof typeof ui;
