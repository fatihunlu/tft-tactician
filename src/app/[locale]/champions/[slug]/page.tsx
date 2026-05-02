import type { ReactNode } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { ChampionAvatar } from "@/components/ChampionAvatar";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import {
  getChampionBySlug,
  getChampionSlugs,
  getCompsForChampion,
} from "@/lib/champions";
import { t as loc } from "@/types/comp";
import type { Comp } from "@/types/comp";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const slugs = getChampionSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const champion = getChampionBySlug(slug);
  const tCh = await getTranslations({ locale, namespace: "champion" });
  if (!champion) {
    return { title: tCh("notFound") };
  }
  return {
    title: tCh("metaTitle", { name: champion.name }),
    description: loc(champion.ability.summary, locale),
  };
}

function tierLabel(comp: Comp): ReactNode {
  if (comp.tier === "S") {
    return (
      <span className="relative isolate shrink-0 overflow-hidden rounded-lg border border-amber-200/70 bg-linear-to-br from-amber-200 via-amber-400 to-amber-600 px-3 py-1 text-sm font-extrabold tracking-tight text-amber-950 shadow-[0_0_16px_rgba(251,191,36,0.45),inset_0_1px_0_rgba(255,255,255,0.45)] ring-1 ring-amber-100/40">
        {comp.tier}
      </span>
    );
  }
  if (comp.tier === "A") {
    return (
      <span className="rounded-lg border border-emerald-400/45 bg-emerald-500/15 px-2.5 py-0.5 text-sm font-bold text-emerald-100 ring-1 ring-emerald-400/25">
        {comp.tier}
      </span>
    );
  }
  return (
    <span className="rounded-lg border border-red-400/35 bg-red-500/10 px-2.5 py-0.5 text-sm font-bold text-red-100/90 ring-1 ring-red-400/25">
      {comp.tier}
    </span>
  );
}

export default async function ChampionDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const champion = getChampionBySlug(slug);
  if (!champion) notFound();

  const t = await getTranslations({ locale, namespace: "champion" });
  const comps = getCompsForChampion(champion.name);

  const abilityName = loc(champion.ability.name, locale);
  const abilitySummary = loc(champion.ability.summary, locale);

  return (
    <div className="mx-auto w-full max-w-full px-4 py-10 sm:max-w-[60%] sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-red-200 hover:text-red-100"
      >
        {t("backLink")}
      </Link>

      <header className="mt-6 border-b border-white/10 pb-8">
        <p className="text-sm font-medium text-red-300/90">{t("breadcrumb")}</p>
        <div className="mt-4 flex flex-wrap items-start gap-6">
          <ChampionAvatar champion={champion.name} size={96} shape="square" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-white">{champion.name}</h1>
              <span className="rounded-xl border border-red-400/35 bg-red-500/10 px-4 py-2 text-lg font-bold text-red-100/90 ring-1 ring-red-400/25">
                {t("cost", { cost: champion.cost })}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-8">
        <h2 className="text-lg font-semibold text-white">{t("traits")}</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {champion.traits.map((tr) => (
            <li
              key={tr}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-red-50"
            >
              {tr}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-white/10 py-8">
        <p className="text-xs font-medium uppercase tracking-wide text-red-200/50">
          {t("ability")}
        </p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">{abilityName}</h2>
        <p className="mt-3 leading-relaxed text-red-100/75">{abilitySummary}</p>
      </section>

      <section className="border-t border-white/10 py-8">
        <h2 className="text-lg font-semibold text-white">{t("usedInComps")}</h2>
        {comps.length === 0 ? (
          <p className="mt-3 text-red-100/60">{t("noComps")}</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {comps.map((comp) => {
              const name = loc(comp.name, locale);
              return (
                <li key={comp.slug}>
                  <Link
                    href={`/comps/${comp.slug}`}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <span className="font-medium text-red-50">{name}</span>
                    <div className="flex flex-wrap items-center gap-2">
                      {tierLabel(comp)}
                      <DifficultyBadge difficulty={comp.difficulty} size="sm" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
