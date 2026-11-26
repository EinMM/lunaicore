// Product page (/products/desktop/) text that is not taken from the landing sections: names, meta, hero.
import { entity } from "./entity";
// Section content (features, showcase, modes, compare, tech) is the landing markup, one language per page.
export const product = {
  en: {
    name: entity.productName.en,
    shortName: "Luna Desktop",
    title: "Luna AI Desktop Assistant – Local-First AI for Windows",
    description: "Luna is a local-first AI desktop assistant for Windows, in English and Arabic. Run local models, work with your files, and use cloud AI only when you choose.",
    download: "Download for Windows",
    releaseNotes: "Release notes",
    heroLine: (beta: string, version: string, sizeMB: number) => `${beta} (v${version}) · Windows 11 recommended · English & Arabic · ${sizeMB} MB`,
    inLanguage: ["en", "ar"],
  },
  ar: {
    name: entity.productName.ar,
    shortName: "لونا",
    title: "لونا مساعدة سطح المكتب الذكية | ذكاء اصطناعي يعمل محليًا أولًا على Windows",
    description: "لونا مساعدة سطح المكتب الذكية على Windows تعمل محليًا أولًا، بالعربية والإنجليزية. شغّل النماذج المحلية، وتعامل مع ملفاتك، واستخدم الذكاء السحابي فقط عندما تختار.",
    download: "تحميل لنظام Windows",
    releaseNotes: "ملاحظات الإصدار",
    heroLine: (beta: string, version: string, sizeMB: number) => `${beta} (v${version}) · يُوصى بنظام Windows 11 · العربية والإنجليزية · ${sizeMB} ميجابايت`,
    inLanguage: ["ar", "en"],
  },
} as const;