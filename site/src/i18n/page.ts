// Labels for the subpage layout (Page.astro). Every string is taken from the landing pages
// (nav, footer, buttons); nothing here is new wording. Nav and footer links live in data/nav.ts.
import { nav, footerLinks } from "../data/nav";
import { entity } from "../data/entity";

export const SITE = "https://lunaicore.com";

export const ui = {
  en: {
    lang: "en", dir: "ltr", home: "/",
    switchText: "عربي", switchLang: "ar",
    brandAria: "Luna",
    navAria: "Main",
    skip: "Skip to content",
    nav: nav.en,
    builtBy: `Built by ${entity.legalName.en}`,
    footerAria: "Help and feedback",
    footerLinks: footerLinks.en,
    ogLocale: "en_US",
  },
  ar: {
    lang: "ar", dir: "rtl", home: "/ar/",
    switchText: "English", switchLang: "en",
    brandAria: "Luna",
    navAria: "الرئيسية",
    skip: "تخطَّ إلى المحتوى",
    nav: nav.ar,
    builtBy: `تطوير ${entity.legalName.ar}`,
    footerAria: "المساعدة والملاحظات",
    footerLinks: footerLinks.ar,
    ogLocale: "ar_SA",
  },
} as const;

export type Lang = keyof typeof ui;
