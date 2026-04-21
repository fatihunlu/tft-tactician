"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTheme } from "./ThemeProvider";

const LOCALES = [
  { value: "en", label: "EN", full: "English" },
  { value: "tr", label: "TR", full: "Türkçe" },
] as const;

export function SettingsPanel({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations("settings");
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const quickToggleTooltip = theme === "dark" ? t("switchToLight") : t("switchToDark");

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  function switchLocale(locale: string) {
    router.push(pathname, { locale });
    setOpen(false);
  }

  return (
    <div ref={panelRef} className="relative flex items-center gap-2">
      <button
        onClick={toggleTheme}
        title={quickToggleTooltip}
        aria-label={quickToggleTooltip}
        className="group relative flex items-center justify-center size-8 rounded-lg border border-white/10 bg-white/5 text-red-200/70 transition-all hover:border-red-400/30 hover:bg-white/10 hover:text-red-100 active:scale-95"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t("open")}
        title={t("open")}
        aria-expanded={open}
        className="flex items-center justify-center size-8 rounded-lg border border-white/10 bg-white/5 text-red-200/70 transition-all hover:border-red-400/30 hover:bg-white/10 hover:text-red-100 active:scale-95"
      >
        <GearIcon />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 w-52 rounded-xl border border-white/10 bg-[#1a0b0e]/95 p-4 shadow-xl backdrop-blur-xl ring-1 ring-black/40 animate-in">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-300/60">
            {t("title")}
          </p>

          {/* Language */}
          <div className="mb-3">
            <p className="mb-1.5 text-[11px] font-medium text-red-200/45">
              {t("language")}
            </p>
            <div className="flex gap-1.5">
              {LOCALES.map((l) => (
                <button
                  key={l.value}
                  onClick={() => switchLocale(l.value)}
                  className={`flex-1 rounded-lg border py-1.5 text-xs font-semibold transition-all ${
                    currentLocale === l.value
                      ? "border-red-400/50 bg-red-500/20 text-red-100"
                      : "border-white/10 bg-white/5 text-red-200/60 hover:border-red-400/25 hover:bg-white/10 hover:text-red-100"
                  }`}
                  aria-pressed={currentLocale === l.value}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div>
            <p className="mb-1.5 text-[11px] font-medium text-red-200/45">
              {t("theme")}
            </p>
            <div className="flex gap-2">
              {(["dark", "light"] as const).map((th) => (
                <button
                  key={th}
                  onClick={() => setTheme(th)}
                  title={th === "dark" ? t("switchToDark") : t("switchToLight")}
                  aria-label={th === "dark" ? t("switchToDark") : t("switchToLight")}
                  className={`flex-1 rounded-lg border py-2.5 text-xs font-semibold transition-all ${
                    theme === th
                      ? "border-red-400/50 bg-red-500/20 text-red-100"
                      : "border-white/10 bg-white/5 text-red-200/60 hover:border-red-400/25 hover:bg-white/10 hover:text-red-100"
                  }`}
                  aria-pressed={theme === th}
                >
                  <span className="flex items-center justify-center gap-2">
                    {th === "dark" ? <MoonIcon /> : <SunIcon />}
                    <span>{th === "dark" ? t("dark") : t("light")}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.35" />
      <path d="M8 1.5V3.1M8 12.9V14.5M1.5 8H3.1M12.9 8H14.5M3.4 3.4L4.5 4.5M11.5 11.5L12.6 12.6M12.6 3.4L11.5 4.5M4.5 11.5L3.4 12.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10.9 1.8c-2.4.6-4.2 2.7-4.2 5.3 0 3.1 2.5 5.6 5.6 5.6.8 0 1.6-.2 2.3-.5-1 1.5-2.8 2.5-4.8 2.5-3.1 0-5.6-2.5-5.6-5.6 0-3 2.3-5.4 5.2-5.6.5 0 1 .1 1.5.3Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 8c0-.23-.02-.46-.05-.68l1.47-1.15a.35.35 0 0 0 .08-.45l-1.4-2.41a.35.35 0 0 0-.43-.15l-1.74.7a5.1 5.1 0 0 0-1.17-.68L9.8.89A.34.34 0 0 0 9.46.6H6.54a.34.34 0 0 0-.34.29l-.26 1.82a5.1 5.1 0 0 0-1.17.68l-1.74-.7a.35.35 0 0 0-.43.15L1.2 4.72a.34.34 0 0 0 .08.45L2.75 7.32A5.03 5.03 0 0 0 2.7 8c0 .23.02.46.05.68L1.28 9.83a.35.35 0 0 0-.08.45l1.4 2.41c.09.16.28.22.43.15l1.74-.7c.37.27.76.49 1.17.68l.26 1.82c.04.17.19.29.34.29h2.92c.15 0 .3-.12.34-.29l.26-1.82a5.1 5.1 0 0 0 1.17-.68l1.74.7c.15.07.34.01.43-.15l1.4-2.41a.34.34 0 0 0-.08-.45L13.25 8.68A5.03 5.03 0 0 0 13.3 8Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
