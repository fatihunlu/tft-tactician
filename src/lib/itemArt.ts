import { ACTIVE_TFT_PATCH } from "@/data/generated/activeTftPatch";
import {
  ITEM_ICON_MAP,
  ITEM_ICON_SLUG,
  type ItemIconRef,
} from "@/data/generated/itemIconMap";

/** Fimbulwinter: LoL-only icon; shipped as PNG from Data Dragon (see itemIconDownload.json). */
const ITEM_ICON_EXT: Record<string, "png" | "webp"> = {
  fimbulwinter: "png",
};

export function itemIconLookupKey(itemName: string): string {
  return itemName.trim().toLowerCase();
}

export function itemIconRef(itemName: string): ItemIconRef | undefined {
  return ITEM_ICON_MAP[itemIconLookupKey(itemName)];
}

/**
 * Static path under public/items/{ACTIVE_TFT_PATCH}/
 * (Blitz webp via local fetch script; Fimbulwinter PNG from Data Dragon).
 */
export function itemIconSrc(itemName: string): string | null {
  const key = itemIconLookupKey(itemName);
  if (!ITEM_ICON_MAP[key]) return null;
  const slug = ITEM_ICON_SLUG[key];
  if (!slug) return null;
  const seg = encodeURIComponent(ACTIVE_TFT_PATCH);
  const ext = ITEM_ICON_EXT[slug] ?? "webp";
  return `/items/${seg}/${slug}.${ext}`;
}
