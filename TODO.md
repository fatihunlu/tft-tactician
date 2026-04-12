# TFT Tactician — product & content backlog

Feature and UX work for the comp guide (not devops/tooling). Check items off as you ship.

## Discovery & browsing

- [ ] **Search** — filter comps by name, slug, or trait text on the home page.
- [ ] **Sort** — order by tier, difficulty, name, or last updated (needs stable `lastUpdated` discipline).
- [ ] **Trait filter** — multi-select or chips for common traits (e.g. Dark Star, N.O.V.A.).

## Comp detail & trust

- [ ] **“Last meta check” callout** — short note on detail page when comp data was last reviewed vs current patch.
- [ ] **Carry / flex tags** — make itemization guidance clearer (primary carry vs splash units).
- [ ] **Space God hints** — expand or link to a small reference when a comp strongly prefers certain gods.

## Champion detail page

- [ ] **Route & layout** — e.g. `/champions/[slug]` with portrait, cost, traits, and short ability summary for Set 17.
- [ ] **Entry points** — tap a unit on comp detail (and optional card on home) to open the champion page.
- [ ] **Data layer** — static champion JSON/TS for the set (or curated subset) so the page stays fast and patchable without scraping.
- [ ] **Cross-links** — “Used in these comps” list built from `comps.ts` (inverse index by champion name).
- [ ] **SEO basics** — title/description per champion; canonical slug matches in-game naming where possible.

## Content volume

- [ ] **More S/A/B comps** — grow the library per patch; avoid duplicate boards with tiny edits.
- [ ] **Patch sync pass** — when Set 17.x ships, update traits, units, and `patch` fields in `src/data/set17/comps.ts`.
- [ ] **“Budget” / “Full board” variants** — optional second block for early-game vs BIS 9.

## Media & polish

- [ ] **TFT-only units** — custom portraits for champions with no LoL Data Dragon square (e.g. Meepsie) via approved assets or Community Dragon paths.
- [ ] **Share preview** — Open Graph title/description (and optional image) per comp detail URL.

## Nice-to-have

- [ ] **Team code paste** — decode a pasted TFT team code into a read-only board summary (if API/format stays stable enough).
- [ ] **Related comps** — “similar traits” or “same carry” links at the bottom of a detail page.
