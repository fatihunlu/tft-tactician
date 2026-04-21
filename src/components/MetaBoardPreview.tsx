"use client";

import { useTranslations } from "next-intl";
import type { CompUnit } from "@/types/comp";
import { ChampionAvatar } from "./ChampionAvatar";
import { ItemIcon } from "./ItemIcon";

type Pos = { x: number; y: number };
type PositionedUnit = { unit: CompUnit; x: number; y: number; source: "bench" | "board" };

const COLS = 7;
const ROWS = 3;

const HEX_SIZE = 64;
const ROW_GAP = 18;
const STRIDE_X = HEX_SIZE;
const STRIDE_Y = HEX_SIZE + ROW_GAP;
const HALF_STRIDE = STRIDE_X / 2;

const BOARD_WIDTH = COLS * HEX_SIZE + HALF_STRIDE;
const BOARD_HEIGHT = (ROWS - 1) * STRIDE_Y + HEX_SIZE;
const BENCH_HEIGHT = HEX_SIZE;
const BENCH_BOARD_GAP = ROW_GAP;

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const rolePriority: Record<NonNullable<CompUnit["role"]>, number> = {
  carry: 0,
  tank: 1,
  support: 2,
  flex: 3,
};

const costFrame: Record<number, string> = {
  1: "border-slate-300/70",
  2: "border-emerald-300/80",
  3: "border-sky-300/80",
  4: "border-fuchsia-300/80",
  5: "border-amber-300/90",
};

const boardSlotsByRole: Record<NonNullable<CompUnit["role"]>, Pos[]> = {
  tank: [
    { x: 1, y: 0 },
    { x: 5, y: 0 },
    { x: 2, y: 0 },
    { x: 4, y: 0 },
    { x: 0, y: 0 },
    { x: 6, y: 0 },
  ],
  flex: [
    { x: 1, y: 1 },
    { x: 5, y: 1 },
    { x: 2, y: 1 },
    { x: 4, y: 1 },
    { x: 0, y: 1 },
    { x: 6, y: 1 },
  ],
  support: [
    { x: 2, y: 2 },
    { x: 4, y: 2 },
    { x: 1, y: 2 },
    { x: 5, y: 2 },
    { x: 0, y: 2 },
    { x: 6, y: 2 },
  ],
  carry: [
    { x: 3, y: 2 },
    { x: 2, y: 2 },
    { x: 4, y: 2 },
    { x: 1, y: 2 },
    { x: 5, y: 2 },
    { x: 0, y: 2 },
    { x: 6, y: 2 },
  ],
};

function placeBoardUnits(units: CompUnit[]) {
  const ranked = [...units].sort((a, b) => {
    const pr =
      rolePriority[(a.role ?? "flex") as NonNullable<CompUnit["role"]>] -
      rolePriority[(b.role ?? "flex") as NonNullable<CompUnit["role"]>];
    if (pr !== 0) return pr;
    return (b.items?.length ?? 0) - (a.items?.length ?? 0);
  });

  const boardCore = ranked.slice(0, Math.min(6, ranked.length));
  const bench = ranked.slice(Math.min(6, ranked.length));
  const used = new Set<string>();
  const result: PositionedUnit[] = [];

  for (const unit of boardCore) {
    const role = (unit.role ?? "flex") as NonNullable<CompUnit["role"]>;
    const target = boardSlotsByRole[role].find((p) => !used.has(`${p.x}:${p.y}`));
    if (!target) continue;
    used.add(`${target.x}:${target.y}`);
    result.push({ unit, x: target.x, y: target.y, source: "board" });
  }

  bench.slice(0, COLS).forEach((unit, i) => {
    result.push({ unit, x: i, y: 0, source: "bench" });
  });

  return result;
}

function iconUnits(units: CompUnit[]) {
  return [...units]
    .sort((a, b) => {
      const pa = rolePriority[(a.role ?? "flex") as NonNullable<CompUnit["role"]>];
      const pb = rolePriority[(b.role ?? "flex") as NonNullable<CompUnit["role"]>];
      if (pa !== pb) return pa - pb;
      return (b.items?.length ?? 0) - (a.items?.length ?? 0);
    })
    .slice(0, 6);
}

function hexLeft(col: number, row: number) {
  return col * STRIDE_X + (row % 2 === 1 ? HALF_STRIDE : 0);
}

function hexTop(row: number) {
  return row * STRIDE_Y;
}

function HexSlot({ unit }: { unit?: CompUnit }) {
  if (!unit) {
    return (
      <div
        className="border border-zinc-700/80 bg-zinc-800/55"
        style={{ width: HEX_SIZE, height: HEX_SIZE, clipPath: HEX_CLIP }}
      />
    );
  }
  return (
    <div className="relative" style={{ width: HEX_SIZE, height: HEX_SIZE }}>
      <div
        className={`border-2 ${costFrame[unit.cost ?? 1]} bg-black/30`}
        style={{ width: HEX_SIZE, height: HEX_SIZE, clipPath: HEX_CLIP }}
      >
        <ChampionAvatar champion={unit.champion} shape="hex" size={HEX_SIZE - 4} />
      </div>
      {unit.items.length > 0 ? (
        <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 gap-0.5">
          {unit.items.slice(0, 3).map((item) => (
            <ItemIcon key={`${unit.champion}-item-${item}`} name={item} size={18} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function MetaBoardPreview({ units }: { units: CompUnit[] }) {
  const t = useTranslations("board");
  const tRoles = useTranslations("unit.roles");
  const positioned = placeBoardUnits(units);
  const boardUnits = positioned.filter((u) => u.source === "board");
  const benchUnits = positioned.filter((u) => u.source === "bench");
  const picks = iconUnits(units);

  return (
    <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_260px]">
      <div className="rounded-xl border border-white/10 bg-[#121418] p-3">
        <div className="mb-2 text-sm font-medium text-zinc-100">{t("recommendedPiles")}</div>

        <div className="flex justify-center rounded-lg border border-white/10 bg-linear-to-b from-[#101318] to-[#0d1015] p-5">
          <div style={{ width: BOARD_WIDTH }}>
            <div className="relative" style={{ height: BENCH_HEIGHT }}>
              {Array.from({ length: COLS }, (_, col) => {
                const entry = benchUnits[col];
                return (
                  <div
                    key={`bench-${col}`}
                    className="absolute"
                    style={{
                      left: hexLeft(col, 0),
                      top: 0,
                      width: HEX_SIZE,
                      height: HEX_SIZE,
                    }}
                  >
                    <HexSlot unit={entry?.unit} />
                  </div>
                );
              })}
            </div>

            <div
              className="relative"
              style={{
                height: BOARD_HEIGHT,
                marginTop: BENCH_BOARD_GAP,
              }}
            >
              {Array.from({ length: ROWS }, (_, row) =>
                Array.from({ length: COLS }, (_, col) => {
                  const placed = boardUnits.find((u) => u.x === col && u.y === row);
                  return (
                    <div
                      key={`cell-${row}-${col}`}
                      className="absolute"
                      style={{
                        left: hexLeft(col, row),
                        top: hexTop(row),
                        width: HEX_SIZE,
                        height: HEX_SIZE,
                      }}
                    >
                      <HexSlot unit={placed?.unit} />
                    </div>
                  );
                }),
              )}
            </div>
          </div>
        </div>
      </div>

      <aside className="rounded-xl border border-white/10 bg-[#121418] p-3">
        <h3 className="text-sm font-semibold text-zinc-100">{t("priorityUnits")}</h3>
        <ul className="mt-3 space-y-2">
          {picks.map((u) => (
            <li
              key={u.champion}
              className="flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-2 py-1.5"
            >
              <div
                className={`border ${costFrame[u.cost ?? 1]}`}
                style={{ clipPath: HEX_CLIP, width: 34, height: 34 }}
              >
                <ChampionAvatar champion={u.champion} shape="hex" size={32} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-zinc-100">{u.champion}</p>
                <p className="text-[11px] text-zinc-400">
                  {u.role
                    ? tRoles(u.role as Parameters<typeof tRoles>[0])
                    : tRoles("flex")}
                </p>
              </div>
              <div className="flex items-center gap-1">
                {u.items.slice(0, 2).map((item) => (
                  <ItemIcon key={`${u.champion}-${item}`} name={item} size={24} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
