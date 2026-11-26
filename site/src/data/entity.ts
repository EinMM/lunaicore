// The legal entity, in one place. legalName is the licensor as written in the root PRIVACY.md / TERMS.md.
// The contact is the site's public address; PRIVACY.md / TERMS.md / SECURITY.md still show the old one
// until they are updated. The real company name replaces legalName at registration.
// tradeName is the umbrella name, not a company name.
export const entity = {
  legalName: { en: "Hussain (EinMM)", ar: "حسين (EinMM)" },
  tradeName: "Luna AI Core",
  // The product. The Arabic name is the one approved for the site (2026-11-26); the app is aligned later.
  productName: { en: "Luna AI Desktop Assistant", ar: "لونا مساعدة سطح المكتب الذكية" },
  contact: { email: "contact@lunaicore.com" },
} as const;
