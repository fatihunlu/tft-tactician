import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TFT Tactician · Set 17",
    template: "%s · TFT Tactician",
  },
  description:
    "Featured Teamfight Tactics Set 17 (Space Gods) team comps, itemization, and game plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_110%_70%_at_50%_-15%,rgba(209,54,57,0.14),transparent_55%)]" />
        <header className="border-b border-white/10 bg-[#120709]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="group/logo flex items-center gap-2.5 text-lg font-semibold tracking-tight transition-opacity hover:opacity-90"
            >
              <Image
                src="/icon.svg"
                alt=""
                width={32}
                height={32}
                className="size-8 shrink-0 rounded-lg ring-1 ring-white/10 transition ring-offset-2 ring-offset-[#120709] group-hover/logo:ring-white/18"
                priority
              />
              <span className="text-white">
                <span className="text-red-200/95">TFT</span> Tactician
              </span>
            </Link>
            <span className="text-xs text-red-200/55">Set 17</span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 bg-[#120709]/92 py-8 text-sm text-red-100/45">
          <div className="mx-auto max-w-6xl space-y-3 px-4 sm:px-6">
            <p>
              TFT Tactician is a fan-made guide and is not affiliated with Riot Games.
              Champion names and art are property of Riot Games.
            </p>
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <a
                className="text-red-200/90 hover:text-red-100"
                href="https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/tft-set-17-space-gods-overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Riot — Set 17 overview
              </a>
              <a
                className="text-red-200/90 hover:text-red-100"
                href="https://mobalytics.gg/tft/new-set-release"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mobalytics — new set hub
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
