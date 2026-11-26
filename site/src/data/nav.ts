// Header nav and footer links of the subpage layout, EN + AR. Header: Luna, Docs, Privacy, Download. Footer: Release notes
// first, then Privacy & Security, the GitHub help links and the three policies. GitHub blob links stay as they are for now.
import { routes } from "./routes";

const REPO = "https://github.com/EinMM/lunaicore";

export const nav = {
  en: [
    { href: routes.productsDesktop.en, text: "Luna" },
    { href: routes.docs.en, text: "Docs" },
    { href: routes.privacySecurity.en, text: "Privacy" },
    { href: routes.downloads.en, text: "Download" },
  ],
  ar: [
    { href: routes.productsDesktop.ar, text: "لونا" },
    { href: routes.docs.ar, text: "الوثائق" },
    { href: routes.privacySecurity.ar, text: "الخصوصية" },
    { href: routes.downloads.ar, text: "تحميل" },
  ],
} as const;

export const footerLinks = {
  en: [
    { href: routes.changelog.en, text: "Release notes" },
    { href: routes.privacySecurity.en, text: "Privacy & Security" },
    { href: `${REPO}/blob/main/TESTERS.md`, text: "Tester guide" },
    { href: `${REPO}/issues/new?template=bug_report.yml`, text: "Report a problem" },
    { href: `${REPO}/issues/new?template=feature_request.yml`, text: "Suggest a feature" },
    { href: `${REPO}/issues`, text: "All reports" },
    { href: routes.legalSecurity.en, text: "Security policy" },
    { href: routes.legalPrivacy.en, text: "Privacy policy" },
    { href: routes.legalTerms.en, text: "Terms of use" },
  ],
  ar: [
    { href: routes.changelog.ar, text: "ملاحظات الإصدار" },
    { href: routes.privacySecurity.ar, text: "الخصوصية والأمان" },
    { href: `${REPO}/blob/main/TESTERS.ar.md`, text: "دليل المجرّبين" },
    { href: `${REPO}/issues/new?template=bug_report.yml`, text: "الإبلاغ عن مشكلة" },
    { href: `${REPO}/issues/new?template=feature_request.yml`, text: "اقتراح ميزة" },
    { href: `${REPO}/issues`, text: "جميع البلاغات" },
    { href: routes.legalSecurity.ar, text: "سياسة الأمان" },
    { href: routes.legalPrivacy.ar, text: "سياسة الخصوصية" },
    { href: routes.legalTerms.ar, text: "شروط الاستخدام" },
  ],
} as const;
