/**
 * Local portraits live in /public/champions/{key}.png.
 * Run `npm run download:champion-icons` after adding champions to comps data.
 */
const OVERRIDES: Record<string, string | null> = {
  Rhaast: "Kayn",
  Meepsie: null,
  "Nunu & Willump": "Nunu",
  LeBlanc: "Leblanc",
  "Bel'Veth": "Belveth",
  "Cho'Gath": "Chogath",
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
  return `/champions/${file}.png`;
}

export function championInitials(champion: string): string {
  const parts = champion.split(/[\s&]+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return champion.slice(0, 2).toUpperCase();
}
