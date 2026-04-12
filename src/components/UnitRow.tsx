import type { CompUnit } from "@/types/comp";
import { ChampionAvatar } from "./ChampionAvatar";

const roleLabel: Record<NonNullable<CompUnit["role"]>, string> = {
  carry: "Carry",
  tank: "Tank",
  support: "Support",
  flex: "Flex",
};

const roleBadge: Record<NonNullable<CompUnit["role"]>, string> = {
  carry: "bg-amber-500/20 text-amber-100",
  tank: "bg-sky-500/20 text-sky-100",
  support: "bg-emerald-500/20 text-emerald-100",
  flex: "bg-neutral-500/25 text-neutral-100",
};

export function UnitRow({ unit }: { unit: CompUnit }) {
  const role = unit.role;
  return (
    <li className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
      <ChampionAvatar champion={unit.champion} size={40} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-red-50">{unit.champion}</span>
          {unit.cost ? (
            <span className="text-xs text-red-200/50">{unit.cost}-cost</span>
          ) : null}
          {role ? (
            <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${roleBadge[role]}`}>
              {roleLabel[role]}
            </span>
          ) : null}
        </div>
        {unit.items.length > 0 ? (
          <p className="mt-1 text-xs leading-snug text-red-100/65">{unit.items.join(" · ")}</p>
        ) : (
          <p className="mt-1 text-xs text-red-200/40">No core items (flex)</p>
        )}
      </div>
    </li>
  );
}
