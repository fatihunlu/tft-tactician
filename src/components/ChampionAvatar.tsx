"use client";

import Image from "next/image";
import { useState } from "react";
import { championInitials, championPortraitSrc } from "@/lib/championArt";

type Props = {
  champion: string;
  size?: number;
  className?: string;
  shape?: "square" | "diamond" | "hex";
};

export function ChampionAvatar({ champion, size = 44, className = "", shape = "square" }: Props) {
  const [broken, setBroken] = useState(false);
  const src = championPortraitSrc(champion);
  const showImg = src && !broken;
  const isDiamond = shape === "diamond";
  const isHex = shape === "hex";
  const clipPath = isDiamond
    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
      : isHex
        ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
        : undefined;

  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-red-500/25 bg-gradient-to-br from-red-950/90 to-neutral-950 ${isDiamond || isHex ? "" : "rounded-lg"} ${className}`}
      style={{
        width: size,
        height: size,
        clipPath,
      }}
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
