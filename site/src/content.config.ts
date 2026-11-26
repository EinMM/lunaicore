// "docs": Markdown copied from the repo root by scripts/copy-docs.mjs (gitignored), rendered with Astro's built-in Markdown.
// "manual": the Luna Desktop documentation, written and kept in this repo (src/content/manual/{en,ar}/*.md).
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  docs: defineCollection({ loader: glob({ pattern: "**/*.md", base: "./src/content-src" }) }),
  manual: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/manual" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      // Sidebar order inside the whole manual, and the group it belongs to.
      order: z.number(),
      group: z.enum(["start", "use", "engines", "privacy", "help"]),
      // The Luna version this page was last checked against (printed on the page; compared with the manifest by docs:check).
      verifiedFor: z.string().regex(/^\d+\.\d+\.\d+$/),
    }),
  }),
};