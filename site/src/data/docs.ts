// Docs (manual) helpers: groups, interface strings and the sidebar built from the "manual" collection.
// All interface strings here are NEW (listed in the S4a reports for approval); page titles come from the Markdown files.
import { getCollection } from "astro:content";

export type Lang = "en" | "ar";
export const DOCS_BASE = { en: "/docs/", ar: "/ar/docs/" } as const;
export const DESKTOP_BASE = { en: "/docs/desktop/", ar: "/ar/docs/desktop/" } as const;

export const groups = [
  { key: "start", en: "Get started", ar: "ابدأ" },
  { key: "use", en: "Use Luna", ar: "استخدم لونا" },
  { key: "engines", en: "AI engines", ar: "محركات الذكاء الاصطناعي" },
  { key: "privacy", en: "Privacy and updates", ar: "الخصوصية والتحديثات" },
  { key: "help", en: "Help", ar: "المساعدة" },
] as const;

export const docsUi = {
  en: {
    docs: "Docs",
    product: "Luna Desktop",
    menu: "Docs menu",
    sidebarAria: "Docs",
    breadcrumbAria: "Breadcrumb",
    pagerAria: "More docs",
    previous: "Previous",
    next: "Next",
    verified: (v: string) => `Verified for Luna ${v}`,
    titleSuffix: " · Luna Docs",
  },
  ar: {
    docs: "الوثائق",
    product: "لونا",
    menu: "قائمة الوثائق",
    sidebarAria: "الوثائق",
    breadcrumbAria: "مسار الصفحة",
    pagerAria: "المزيد من الوثائق",
    previous: "السابق",
    next: "التالي",
    verified: (v: string) => `تم التحقق منه لإصدار لونا ${v}`,
    titleSuffix: " · وثائق لونا",
  },
} as const;

export type ManualEntry = Awaited<ReturnType<typeof getCollection<"manual">>>[number];

/** The pages of one language, in sidebar order. The entry id is "en/install" or "ar/install". */
export async function manualPages(lang: Lang) {
  const all = await getCollection("manual", (entry) => entry.id.startsWith(`${lang}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const slugOf = (entry: { id: string }) => entry.id.slice(entry.id.indexOf("/") + 1);
export const pathOf = (lang: Lang, slug: string) => `${DESKTOP_BASE[lang]}${slug}/`;

/** The sidebar: groups that have pages, each with its pages (title, path). */
export function sidebar(pages: ManualEntry[], lang: Lang) {
  return groups
    .map((group) => ({
      key: group.key,
      label: group[lang],
      items: pages
        .filter((page) => page.data.group === group.key)
        .map((page) => ({ title: page.data.title, path: pathOf(lang, slugOf(page)) })),
    }))
    .filter((group) => group.items.length > 0);
}