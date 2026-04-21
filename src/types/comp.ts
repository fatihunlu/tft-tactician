export type Playstyle = "slow_roll" | "fast_8" | "fast_9" | "standard";

export type Difficulty = "easy" | "medium" | "hard";

export type CompTier = "S" | "A" | "B";

export type UnitRole = "carry" | "tank" | "support" | "flex";

export type CompUnit = {
  champion: string;
  items: string[];
  role?: UnitRole;
  cost?: 1 | 2 | 3 | 4 | 5;
};

export type TraitHighlight = {
  name: string;
  count: number;
};

/** A string that has both English and Turkish translations. */
export type LocalizedString = {
  en: string;
  tr: string;
};

/** Pick the right locale string, falling back to English. */
export function t(str: LocalizedString, locale: string): string {
  return (str as Record<string, string>)[locale] ?? str.en;
}

export type Comp = {
  slug: string;
  name: LocalizedString;
  summary: LocalizedString;
  patch: string;
  lastUpdated: string;
  tier: CompTier;
  difficulty: Difficulty;
  playstyle: Playstyle;
  rollInfo: LocalizedString;
  traits: TraitHighlight[];
  units: CompUnit[];
  notes: LocalizedString[];
  godHint?: LocalizedString;
};
