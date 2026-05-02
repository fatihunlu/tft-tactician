import type { LocalizedString } from "@/types/comp";

export type Champion = {
  slug: string;
  /** Must match `CompUnit.champion` in comps data. */
  name: string;
  cost: 1 | 2 | 3 | 4 | 5;
  traits: string[];
  ability: {
    name: LocalizedString;
    summary: LocalizedString;
  };
};
