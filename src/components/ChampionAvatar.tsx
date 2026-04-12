"use client";

import Image from "next/image";
import { useState } from "react";
import { championInitials, championPortraitSrc } from "@/lib/championArt";

type Props = {
  champion: string;
  size?: number;
  className?: string;
};

export function ChampionAvatar({ champion, size = 44, className = "" }: Props) {
  const [broken, setBroken] = useState(false);
  const src = championPortraitSrc(champion);
  const showImg = src && !broken;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-lg border border-red-500/25 bg-gradient-to-br from-red-950/90 to-neutral-950 ${className}`}
      style={{ width: size, height: size }}
      title={champion}
    >
      {showImg ? (
        <Image
          src={src}
          alt={champion}
          width={size}
          height={size}
          className="object-cover"
          onError={() => setBroken(true)}
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-xs font-bold tracking-tight text-red-100">
          {championInitials(champion)}
        </span>
      )}
    </div>
  );
}
