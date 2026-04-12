"use client";

import { useMemo, useState } from "react";
import type { Comp, CompTier, Difficulty, Playstyle } from "@/types/comp";
import { filterComps, type CompFilters } from "@/lib/comps";
import { CompCard } from "./CompCard";

const playstyleOptions: { value: Playstyle | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "slow_roll", label: "Slow roll" },
  { value: "fast_8", label: "Fast 8" },
  { value: "fast_9", label: "Fast 9" },
  { value: "standard", label: "Standard" },
];

const difficultyOptions: { value: Difficulty | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const tierOptions: { value: CompTier | "all"; label: string }[] = [
  { value: "all", label: "All tiers" },
  { value: "S", label: "S" },
  { value: "A", label: "A" },
  { value: "B", label: "B" },
];

function Select({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-medium text-red-200/55">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-white/10 bg-red-950/50 px-3 py-2 text-sm text-red-50 outline-none focus:border-red-400/45"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function CompGallery({ comps }: { comps: Comp[] }) {
  const [tier, setTier] = useState<CompTier | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [playstyle, setPlaystyle] = useState<Playstyle | "all">("all");

  const filtered = useMemo(() => {
    const f: CompFilters = { tier, difficulty, playstyle };
    return filterComps(comps, f);
  }, [comps, tier, difficulty, playstyle]);

  return (
    <div>
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <Select
          id="filter-tier"
          label="Tier"
          value={tier}
          onChange={(v) => setTier(v as CompTier | "all")}
          options={tierOptions}
        />
        <Select
          id="filter-difficulty"
          label="Difficulty"
          value={difficulty}
          onChange={(v) => setDifficulty(v as Difficulty | "all")}
          options={difficultyOptions}
        />
        <Select
          id="filter-playstyle"
          label="Game plan"
          value={playstyle}
          onChange={(v) => setPlaystyle(v as Playstyle | "all")}
          options={playstyleOptions}
        />
      </div>
      {filtered.length === 0 ? (
        <p className="text-center text-red-100/60">No comps match these filters.</p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((c) => (
            <li key={c.slug}>
              <CompCard comp={c} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
