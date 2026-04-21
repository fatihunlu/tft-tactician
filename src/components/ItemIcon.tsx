"use client";

import Image from "next/image";
import { useState } from "react";
import { itemIconSrc } from "@/lib/itemArt";

type Props = {
  name: string;
  size?: number;
  className?: string;
};

function itemInitials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function ItemIcon({ name, size = 24, className = "" }: Props) {
  const [broken, setBroken] = useState(false);
  const src = itemIconSrc(name);
  const showImg = src && !broken;

  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden rounded-md border border-red-500/20 bg-linear-to-br from-red-950/80 to-neutral-950 ${className}`}
      style={{ width: size, height: size }}
      title={name}
    >
      {showImg ? (
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="object-cover"
          onError={() => setBroken(true)}
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-[9px] font-bold leading-none tracking-tight text-red-100/90">
          {itemInitials(name)}
        </span>
      )}
    </span>
  );
}
