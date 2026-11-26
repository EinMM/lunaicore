// Every page that exists in both languages: route key -> { en, ar } path.
// The language switch and hreflang use this, so a page only passes its own path.
export const routes = {
  home: { en: "/", ar: "/ar/" },
  start: { en: "/start/", ar: "/ar/start/" },
  downloads: { en: "/downloads/", ar: "/ar/downloads/" },
  changelog: { en: "/changelog/", ar: "/ar/changelog/" },
  legalPrivacy: { en: "/legal/privacy/", ar: "/ar/legal/privacy/" },
  legalTerms: { en: "/legal/terms/", ar: "/ar/legal/terms/" },
  legalSecurity: { en: "/legal/security/", ar: "/ar/legal/security/" },
} as const;

export type RouteKey = keyof typeof routes;

/** The path of the same page in the other language. Fails the build for an unknown path. */
export function altPathFor(path: string): string {
  for (const route of Object.values(routes)) {
    if (route.en === path) return route.ar;
    if (route.ar === path) return route.en;
  }
  throw new Error(`routes.ts: "${path}" is not in the route list (add it to site/src/data/routes.ts)`);
}
