// Markdown copied from the repo root by scripts/copy-docs.mjs (gitignored), rendered with Astro's built-in Markdown.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  docs: defineCollection({ loader: glob({ pattern: "**/*.md", base: "./src/content-src" }) }),
};
