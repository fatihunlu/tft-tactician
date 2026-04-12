# TFT Tactician

A small **fan-made** web app for **Teamfight Tactics Set 17 (Space Gods)**. It lists featured team comps with filters (tier, difficulty, game plan), detail pages with units and items, and static champion portraits so the UI stays fast without hammering external CDNs on every page load.

**This project is not affiliated with Riot Games.** Champion names, traits, and art belong to Riot; we’re just organizing public information for practice and fun.

## Assets

Champion portrait squares are pulled from **Riot’s Data Dragon** (often called **Dragon Assets** in the community): Riot’s public CDN for versioned League art and data. Those files are mirrored into `public/champions/` for this app. Thanks to Riot for making Dragon Assets available.

- [Data Dragon — Riot Developer documentation](https://developer.riotgames.com/docs/lol#data-dragon)
- [ddragon.leagueoflegends.com](https://ddragon.leagueoflegends.com/)
- [Active Data Dragon versions (JSON)](https://ddragon.leagueoflegends.com/api/versions.json)

## Development

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Comp data lives in `src/data/set17/comps.ts`.

```bash
yarn build
yarn lint
```

## A quick thank-you

I put this together for the love of TFT and as a playground to learn — no big company behind it, just curiosity. If it saved you a scroll or a bad pivot, that already makes my day.

If you feel like it:

- **Star the repo** — it’s free, takes two seconds, and it really does help others stumble onto the project. Means a lot ⭐  
- **Say hi with a PR or an issue** — wrong item on a comp, a typo, a comp you swear by, or a half-baked feature idea; I read all of it 🔧  

Either way, thanks for being here. See you on the ladder.
