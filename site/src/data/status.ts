// "Next" / "Coming soon" badges (IA 2.1). Small badges only: no section, no dates.
// One list read by every page, EN + AR. Voice is intentionally absent (later); add a feature here
// only when it should show a badge, and remove it when the badge is withdrawn.
export type BadgeKind = "next" | "soon";

export const badgeLabels = {
  next: { en: "Next", ar: "التالي" },
  soon: { en: "Coming soon", ar: "قريبًا" },
} as const satisfies Record<BadgeKind, { en: string; ar: string }>;

export const status = {
  vision: "next",
  "desktop-agent": "soon",
} as const satisfies Record<string, BadgeKind>;

export type StatusKey = keyof typeof status;
