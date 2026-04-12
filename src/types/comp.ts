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

export type Comp = {
  slug: string;
  name: string;
  summary: string;
  patch: string;
  lastUpdated: string;
  tier: CompTier;
  difficulty: Difficulty;
  playstyle: Playstyle;
  rollInfo: string;
  traits: TraitHighlight[];
  units: CompUnit[];
  notes: string[];
  godHint?: string;
};
