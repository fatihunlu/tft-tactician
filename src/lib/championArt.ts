import { ACTIVE_TFT_PATCH } from "@/data/generated/activeTftPatch";

/**
 * Local portraits live in /public/champions/{ACTIVE_TFT_PATCH}/{key}.webp
 * (TFT Set 17 squares; optional local fetch scripts are gitignored — ship assets under `public/champions/`).
 */
const OVERRIDES: Record<string, string | null> = {
  Rhaast: "Kayn",
  Meepsie: null,
  "Nunu & Willump": "Nunu",
  LeBlanc: "Leblanc",
  "Bel'Veth": "Belveth",
  "Cho'Gath": "Chogath",
  Kaisa: "KaiSa",
};

export function championIconKey(champion: string): string | null {
  const key = champion.trim();
  if (key in OVERRIDES) {
    const v = OVERRIDES[key];
    return v;
  }
  return key.replace(/['.]/g, "").replace(/\s+/g, "");
}

/** Static path under public/; null = no asset (use initials fallback). */
export function championPortraitSrc(champion: string): string | null {
  const file = championIconKey(champion);
  if (!file) return null;
  const seg = encodeURIComponent(ACTIVE_TFT_PATCH);
  return `/champions/${seg}/${file}.webp`;
}

export function championInitials(champion: string): string {
  const parts = champion.split(/[\s&]+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return champion.slice(0, 2).toUpperCase();
}
