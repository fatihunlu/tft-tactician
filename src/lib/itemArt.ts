import { ACTIVE_TFT_PATCH } from "@/data/generated/activeTftPatch";
import {
  ITEM_ICON_MAP,
  ITEM_ICON_SLUG,
  type ItemIconRef,
} from "@/data/generated/itemIconMap";

export function itemIconLookupKey(itemName: string): string {
  return itemName.trim().toLowerCase();
}

export function itemIconRef(itemName: string): ItemIconRef | undefined {
  return ITEM_ICON_MAP[itemIconLookupKey(itemName)];
}

/**
 * Static path under public/items/{ACTIVE_TFT_PATCH}/ (node scripts/download-item-icons.mjs).
 */
export function itemIconSrc(itemName: string): string | null {
  const key = itemIconLookupKey(itemName);
  if (!ITEM_ICON_MAP[key]) return null;
  const slug = ITEM_ICON_SLUG[key];
  if (!slug) return null;
  const seg = encodeURIComponent(ACTIVE_TFT_PATCH);
  return `/items/${seg}/${slug}.png`;
}
