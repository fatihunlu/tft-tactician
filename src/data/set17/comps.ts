import type { Comp } from "@/types/comp";

export const SET17_COMPS: Comp[] = [
  {
    slug: "conduit-reroll",
    name: {
      en: "Conduit Reroll",
      tr: "Conduit Yeniden Açılım",
    },
    summary: {
      en: "Conduit-focused comp that slow-rolls at level 7 to three-star your carries.",
      tr: "Conduit merkezli kadro; seviye 7'de yavaş açılım yaparak taşıyıcı birimlerinizi üç yıldızlı hale getirir.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "A",
    difficulty: "medium",
    playstyle: "slow_roll",
    rollInfo: {
      en: "Slow roll at level 7.",
      tr: "Seviye 7'de yavaş açılım.",
    },
    traits: [
      { name: "Conduit", count: 2 },
      { name: "N.O.V.A.", count: 2 },
      { name: "Psionic", count: 2 },
    ],
    units: [
      { champion: "Aatrox", items: [], role: "flex", cost: 1 },
      { champion: "Zoe", items: [], role: "support", cost: 2 },
      { champion: "Gragas", items: [], role: "tank", cost: 2 },
      { champion: "Miss Fortune", items: ["Spear of Shojin", "Infinity Edge"], role: "carry", cost: 1 },
      { champion: "Maokai", items: ["Sunfire Aegis", "Warmog's Armor", "Bramble Vest"], role: "tank", cost: 3 },
      { champion: "Viktor", items: ["Nashor's Tooth", "Jeweled Gauntlet", "Archangel's Staff"], role: "carry", cost: 3 },
      { champion: "Ornn", items: ["Sunfire Aegis", "Warmog's Armor", "Steadfast Heart"], role: "tank", cost: 3 },
      { champion: "Rhaast", items: [], role: "flex", cost: 3 },
      { champion: "Bard", items: [], role: "support", cost: 5 },
    ],
    notes: [
      {
        en: "Choose your primary carry between Viktor and Miss Fortune based on items and Conduit tempo.",
        tr: "Eşyalara ve Conduit temposuna göre Viktor veya Miss Fortune'u ana taşıyıcı olarak seçin.",
      },
      {
        en: "Frontline with Ornn and Maokai to buy space for your AP carry.",
        tr: "AP taşıyıcınıza alan açmak için Ornn ve Maokai ile ön saf oluşturun.",
      },
      {
        en: "Gods that hand out economy or units (e.g. Ahri, Varus) smooth out the reroll loop.",
        tr: "Ekonomi veya birim sağlayan Tanrılar (ör. Ahri, Varus) yeniden açılım döngüsünü kolaylaştırır.",
      },
    ],
    godHint: {
      en: "Economy or unit flow: Ahri, Varus",
      tr: "Ekonomi veya birim akışı: Ahri, Varus",
    },
  },
  {
    slug: "nova-yi",
    name: {
      en: "N.O.V.A. Master Yi",
      tr: "N.O.V.A. Master Yi",
    },
    summary: {
      en: "N.O.V.A. synergy with Master Yi as a carry; powers up through a fast level 8.",
      tr: "Master Yi'yi taşıyıcı olarak kullanan N.O.V.A. sinerji kadrosu; hızlı seviye 8 ile güçlenir.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "S",
    difficulty: "medium",
    playstyle: "fast_8",
    rollInfo: {
      en: "Fast 8 — push XP to hit level 8 quickly.",
      tr: "Hızlı 8 — seviye 8'e ulaşmak için XP'yi itin.",
    },
    traits: [
      { name: "N.O.V.A.", count: 5 },
      { name: "Psionic", count: 2 },
    ],
    units: [
      { champion: "Akali", items: [], role: "flex", cost: 2 },
      { champion: "Bel'Veth", items: ["Sterak's Gage", "Quicksilver"], role: "carry", cost: 2 },
      { champion: "Gragas", items: ["Sunfire Aegis", "Warmog's Armor"], role: "tank", cost: 2 },
      { champion: "Maokai", items: ["Sunfire Aegis", "Warmog's Armor", "Bramble Vest"], role: "tank", cost: 3 },
      { champion: "Kindred", items: ["Guinsoo's Rageblade", "Giant Slayer", "Kraken's Fury"], role: "carry", cost: 4 },
      { champion: "Master Yi", items: ["Hand of Justice", "Sterak's Gage", "Quicksilver"], role: "carry", cost: 4 },
      { champion: "Urgot", items: [], role: "flex", cost: 3 },
      { champion: "Tahm Kench", items: ["Spirit Visage", "Warmog's Armor", "Steadfast Heart"], role: "tank", cost: 4 },
      { champion: "Fiora", items: ["Edge of Night", "Bloodthirster", "Titan's Resolve"], role: "carry", cost: 5 },
    ],
    notes: [
      {
        en: "MetaTFT stage-5 cluster: Tahm Kench frontline plus Bel'Veth/Yi/Fiora outs — stabilize at 8 around these breakpoints.",
        tr: "MetaTFT stage-5 kümesi: Tahm Kench ön safı ve Bel'Veth/Yi/Fiora çıkışları — bu eşikler etrafında 8'de stabilize olun.",
      },
      {
        en: "At 8, stabilize around your carries and slam items on Yi or Fiora depending on augments and pairs.",
        tr: "Seviye 8'de augment ve çiftlere göre Yi veya Fiora'ya eşya basın ve kadroyu dengeleyin.",
      },
      {
        en: "Plan board space and augments around hitting N.O.V.A. 5 and its selector reward.",
        tr: "N.O.V.A. 5'e ulaşmak ve seçici ödülü almak için tahta alanını ve augmentleri planlayın.",
      },
      {
        en: "Kayle or Soraka boons can shore up frontline and recovery.",
        tr: "Kayle veya Soraka büyükleri ön saf ve iyileşmeyi destekleyebilir.",
      },
    ],
    godHint: {
      en: "Frontline / items: Kayle, Soraka",
      tr: "Ön saf / eşyalar: Kayle, Soraka",
    },
  },
  {
    slug: "ap-vanguards",
    name: {
      en: "AP Vanguards",
      tr: "AP Öncüler",
    },
    summary: {
      en: "Karma and LeBlanc as AP carries with a durable vanguard frontline for long fights.",
      tr: "Karma ve LeBlanc AP taşıyıcı olarak, uzun dövüşler için dayanıklı öncü ön safla.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "B",
    difficulty: "medium",
    playstyle: "slow_roll",
    rollInfo: {
      en: "Slow-roll variant at level 5; can pivot to 7–8 depending on shop.",
      tr: "Seviye 5'te yavaş açılım varyantı; dükkana göre 7–8'e geçiş yapılabilir.",
    },
    traits: [
      { name: "Dark Star", count: 4 },
      { name: "Ascendant", count: 2 },
    ],
    units: [
      { champion: "Leona", items: [], role: "tank", cost: 1 },
      { champion: "Zoe", items: [], role: "support", cost: 2 },
      { champion: "Mordekaiser", items: [], role: "flex", cost: 2 },
      { champion: "Illaoi", items: [], role: "tank", cost: 3 },
      { champion: "Meepsie", items: [], role: "support", cost: 2 },
      { champion: "Karma", items: ["Void Staff", "Morellonomicon", "Spear of Shojin"], role: "carry", cost: 4 },
      { champion: "LeBlanc", items: ["Jeweled Gauntlet", "Guinsoo's Rageblade", "Giant Slayer"], role: "carry", cost: 4 },
      { champion: "Nunu & Willump", items: ["Dragon's Claw", "Spirit Visage", "Steadfast Heart"], role: "tank", cost: 4 },
    ],
    notes: [
      {
        en: "Prioritize mana and AP items for Karma and LeBlanc.",
        tr: "Karma ve LeBlanc için mana ve AP eşyaları önceliklendirin.",
      },
      {
        en: "Nunu and Illaoi anchor the front with CC and sustain.",
        tr: "Nunu ve Illaoi CC ve süreklilik ile ön safı sabitler.",
      },
      {
        en: "Aurelion Sol task rewards can accelerate your tempo in this comp.",
        tr: "Aurelion Sol görev ödülleri bu kadroda temponuzu hızlandırabilir.",
      },
    ],
    godHint: {
      en: "Tasks / scaling: Aurelion Sol",
      tr: "Görevler / yükselme: Aurelion Sol",
    },
  },
  {
    slug: "meeple",
    name: {
      en: "Meeple",
      tr: "Meeple",
    },
    summary: {
      en: "Meepling-focused fast 8 with Bard as a potential five-cost carry.",
      tr: "Meepling odaklı hızlı 8; Bard potansiyel bir beş altınlık taşıyıcı olarak.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "A",
    difficulty: "medium",
    playstyle: "fast_8",
    rollInfo: {
      en: "Fast 8.",
      tr: "Hızlı 8.",
    },
    traits: [
      { name: "Meepling", count: 7 },
      { name: "Conduit", count: 2 },
    ],
    units: [
      { champion: "Poppy", items: [], role: "tank", cost: 1 },
      { champion: "Gnar", items: [], role: "flex", cost: 2 },
      { champion: "Milio", items: [], role: "support", cost: 2 },
      { champion: "Meepsie", items: [], role: "flex", cost: 2 },
      { champion: "Fizz", items: [], role: "flex", cost: 3 },
      { champion: "Riven", items: ["Thief's Gloves"], role: "carry", cost: 4 },
      { champion: "Rammus", items: ["Fimbulwinter", "Bramble Vest", "Steadfast Heart"], role: "tank", cost: 4 },
      { champion: "Corki", items: ["Spear of Shojin", "Last Whisper", "Guardbreaker"], role: "carry", cost: 4 },
      { champion: "Bard", items: ["Jeweled Gauntlet", "Morellonomicon", "Nashor's Tooth"], role: "carry", cost: 5 },
    ],
    notes: [
      {
        en: "Bard is your five-cost anchor; itemization and positioning matter once you hit him at 8.",
        tr: "Bard beş altın çapanızdır; seviye 8'de ona ulaştığınızda eşyalandırma ve konumlandırma önemlidir.",
      },
      {
        en: "Track bench space and clone slots for Meepling breakpoints.",
        tr: "Meepling eşik noktaları için bant alanını ve klon slotlarını takip edin.",
      },
      {
        en: "Varus shop and duplicator flow synergizes well with reroll-style Meepling boards.",
        tr: "Varus dükkanı ve kopyalayıcı akışı, yeniden açılım tarzı Meepling tahtalarıyla iyi sinerji kurar.",
      },
    ],
    godHint: {
      en: "Reroll / units: Varus",
      tr: "Yeniden açılım / birimler: Varus",
    },
  },
  {
    slug: "jhin-cap",
    name: {
      en: "Jhin Cap",
      tr: "Jhin Zirvesi",
    },
    summary: {
      en: "Jhin plus Bard late-game shell — MetaTFT's strongest stage-5 cluster runs Xayah with bruiser frontline (Jax/Nunu/Rammus), not the Shen/Morgana cap variant.",
      tr: "Jhin ve Bard geç oyun kabuğu — MetaTFT'nin en güçlü stage-5 kümesi Xayah ve brawler ön saf (Jax/Nunu/Rammus) ile oynanıyor; Shen/Morgana tavan varyantı değil.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "S",
    difficulty: "hard",
    playstyle: "fast_9",
    rollInfo: {
      en: "Fast 9 — go 9 when your economy is strong enough.",
      tr: "Hızlı 9 — ekonominiz yeterliyken 9'a çıkın.",
    },
    traits: [
      { name: "Dark Star", count: 4 },
      { name: "Meepling", count: 3 },
    ],
    units: [
      { champion: "Gnar", items: [], role: "flex", cost: 2 },
      { champion: "Mordekaiser", items: [], role: "flex", cost: 2 },
      { champion: "Jax", items: ["Warmog's Armor", "Sunfire Aegis"], role: "tank", cost: 2 },
      { champion: "Rhaast", items: [], role: "flex", cost: 3 },
      { champion: "Rammus", items: ["Fimbulwinter", "Bramble Vest", "Steadfast Heart"], role: "tank", cost: 4 },
      { champion: "Nunu & Willump", items: ["Spirit Visage", "Warmog's Armor", "Steadfast Heart"], role: "tank", cost: 4 },
      { champion: "Xayah", items: ["Infinity Edge", "Last Whisper"], role: "carry", cost: 4 },
      { champion: "Jhin", items: ["Guinsoo's Rageblade", "Infinity Edge", "Red Buff"], role: "carry", cost: 5 },
      { champion: "Bard", items: ["Jeweled Gauntlet", "Void Staff", "Guardbreaker"], role: "carry", cost: 5 },
    ],
    notes: [
      {
        en: "Board mirrors MetaTFT stage-5 stats (patch snapshot): Graves/Shen/Morgana five-cost caps underperform versus this Xayah/Jax tempo shell.",
        tr: "Tahta MetaTFT stage-5 istatistiklerini yansıtır (patch anlık görüntüsü): Graves/Shen/Morgana beş maliyet tavanları bu Xayah/Jax tempo kabuğuna göre daha zayıf.",
      },
      {
        en: "Balance AD and crit for Jhin; Dark Star spikes when enemies are below the health threshold.",
        tr: "Jhin için AD ve kritik dengesini kurun; Karanlık Yıldız düşmanların HP eşiği altına indiğinde zirve yapar.",
      },
      {
        en: "Fast 9 needs enough economy to survive variance on five-cost hits.",
        tr: "Hızlı 9, beş altınlık vuruşlardaki varyansa hayatta kalmak için yeterli ekonomi gerektirir.",
      },
      {
        en: "Ahri XP and gold boons make leveling to 9 more realistic.",
        tr: "Ahri XP ve altın boonları 9'a levellemeyi daha gerçekçi kılar.",
      },
    ],
    godHint: {
      en: "Economy / XP: Ahri",
      tr: "Ekonomi / XP: Ahri",
    },
  },
  {
    slug: "stargazers",
    name: {
      en: "Stargazers",
      tr: "Yıldız Gözlemcileri",
    },
    summary: {
      en: "Stargazer tempo comp: scout the constellation map and stabilize with reroll or fast 8.",
      tr: "Yıldız Gözlemcisi tempo kadrosu: takımyıldızı haritasını izleyin ve yeniden açılım veya hızlı 8 ile stabilize edin.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "S",
    difficulty: "medium",
    playstyle: "fast_8",
    rollInfo: {
      en: "Fast 8 — hit breakpoints, then roll for key four-costs.",
      tr: "Hızlı 8 — eşik noktaları vurun, ardından kilit dört altın birimler için açılım yapın.",
    },
    traits: [
      { name: "Stargazer", count: 5 },
      { name: "Bastion", count: 2 },
    ],
    units: [
      { champion: "Talon", items: ["Edge of Night", "Bloodthirster"], role: "carry", cost: 1 },
      { champion: "Twisted Fate", items: ["Statikk Shiv", "Guinsoo's Rageblade"], role: "carry", cost: 1 },
      { champion: "Caitlyn", items: [], role: "flex", cost: 1 },
      { champion: "Jax", items: ["Warmog's Armor", "Sunfire Aegis"], role: "tank", cost: 2 },
      { champion: "Lulu", items: ["Blue Buff", "Morellonomicon"], role: "support", cost: 3 },
      { champion: "Corki", items: ["Spear of Shojin", "Last Whisper"], role: "carry", cost: 4 },
      { champion: "Xayah", items: ["Infinity Edge", "Last Whisper"], role: "carry", cost: 4 },
      { champion: "Nunu & Willump", items: ["Spirit Visage", "Steadfast Heart"], role: "tank", cost: 4 },
    ],
    notes: [
      {
        en: "Stargazer bonuses change by game — read your constellation before committing items.",
        tr: "Yıldız Gözlemcisi bonusları her oyunda değişir — eşya basmadan önce takımyıldızınızı okuyun.",
      },
      {
        en: "Xayah and Nunu are common late anchors; flex early pairs based on opener.",
        tr: "Xayah ve Nunu yaygın geç oyun çapalarıdır; açılış çiftlerine göre erken esnek oynayın.",
      },
      {
        en: "Ahri or Varus help hit levels without bleeding out.",
        tr: "Ahri veya Varus, ekonomi kanamadan seviye atlamanıza yardımcı olur.",
      },
    ],
    godHint: {
      en: "Economy: Ahri, Varus",
      tr: "Ekonomi: Ahri, Varus",
    },
  },
  {
    slug: "chronobreak-ez",
    name: {
      en: "Chronobreak Ezreal",
      tr: "Kronoparça Ezreal",
    },
    summary: {
      en: "Chronobreak reroll around Ezreal; free refreshes on losses and XP on wins at two.",
      tr: "Ezreal etrafında Kronoparça yeniden açılımı; yenilgide ücretsiz yenileme ve galibiyette XP.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "B",
    difficulty: "easy",
    playstyle: "slow_roll",
    rollInfo: {
      en: "Slow roll at 6–7 depending on pairs; spike with Ezreal three-star.",
      tr: "Çiftlere göre seviye 6–7'de yavaş açılım; Ezreal üç yıldızıyla zirve.",
    },
    traits: [
      { name: "Chronobreak", count: 4 },
      { name: "Marksman", count: 2 },
    ],
    units: [
      { champion: "Ezreal", items: ["Guinsoo's Rageblade", "Infinity Edge", "Quicksilver"], role: "carry", cost: 1 },
      { champion: "Milio", items: ["Spear of Shojin", "Morellonomicon"], role: "support", cost: 2 },
      { champion: "Pantheon", items: ["Sunfire Aegis", "Warmog's Armor"], role: "tank", cost: 2 },
      { champion: "Riven", items: ["Sterak's Gage", "Titan's Resolve"], role: "flex", cost: 4 },
      { champion: "Cho'Gath", items: ["Sunfire Aegis", "Warmog's Armor"], role: "tank", cost: 1 },
      { champion: "Rek'Sai", items: ["Titan's Resolve", "Steadfast Heart"], role: "flex", cost: 1 },
      { champion: "Jax", items: ["Bramble Vest", "Steadfast Heart"], role: "tank", cost: 2 },
      { champion: "Illaoi", items: ["Spirit Visage", "Warmog's Armor"], role: "tank", cost: 3 },
    ],
    notes: [
      {
        en: "The Chronobreak (Timebreaker) trait only has four champions — fill the board with brawlers/bastion to hit level 7–8.",
        tr: "Chronobreak (Zamankıran) özelliğinde yalnızca dört şampiyon bulunur — seviye 7–8'e ulaşmak için geri kalan yerleri brawler/bastion ile doldurun.",
      },
      {
        en: "Two Chronobreak is your econ engine — play for streaks or loss farming deliberately.",
        tr: "İki Kronoparca ekonomi motorunuzdur — kasıtlı olarak galibiyet veya yenilgi streakine oynayın.",
      },
      {
        en: "Itemize Ezreal first; Pantheon and cheap frontline soak while you three-star Ezreal.",
        tr: "Önce Ezreal'i eşyalandırın; Pantheon ve ucuz ön saf üç yıldız yapana kadar dayanır.",
      },
      {
        en: "Ekko boons can add weird high-roll swings if you pivot late.",
        tr: "Ekko boonları geç pivotta tuhaf yüksek rulo salınımları ekleyebilir.",
      },
    ],
    godHint: {
      en: "Scaling / time: Ekko",
      tr: "Ölçekleme / zaman: Ekko",
    },
  },
  {
    slug: "primordial-reroll",
    name: {
      en: "Primordial Reroll",
      tr: "İlkel Yeniden Açılım",
    },
    summary: {
      en: "Primordia reroll: swarms and early random one-costs fuel a mid-game spike.",
      tr: "Primordia yeniden açılımı: sürü ve erken rastgele bir altın birimler orta oyun zirvesini besler.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "B",
    difficulty: "medium",
    playstyle: "slow_roll",
    rollInfo: {
      en: "Slow roll at 6 for three-star one and two costs.",
      tr: "Bir ve iki altın birimleri üç yıldızlamak için seviye 6'da yavaş açılım.",
    },
    traits: [
      { name: "Primordia", count: 3 },
      { name: "Slayer", count: 2 },
    ],
    units: [
      { champion: "Briar", items: ["Bloodthirster", "Titan's Resolve"], role: "carry", cost: 1 },
      { champion: "Rek'Sai", items: ["Sunfire Aegis", "Warmog's Armor"], role: "tank", cost: 1 },
      { champion: "Bel'Veth", items: ["Sterak's Gage", "Quicksilver"], role: "carry", cost: 2 },
      { champion: "Illaoi", items: ["Steadfast Heart", "Spirit Visage"], role: "tank", cost: 3 },
      { champion: "Aatrox", items: [], role: "flex", cost: 1 },
      { champion: "Maokai", items: ["Bramble Vest", "Warmog's Armor"], role: "tank", cost: 3 },
      { champion: "Urgot", items: [], role: "flex", cost: 3 },
      { champion: "Shen", items: ["Sunfire Aegis", "Steadfast Heart"], role: "tank", cost: 5 },
    ],
    notes: [
      {
        en: "Primordia only has three trait units — the rest of the board is flex frontline and N.O.V.A. or other synergies.",
        tr: "Primordia özelliğinde yalnızca üç birim bulunur — tahtanın geri kalanını esnek ön saf ve N.O.V.A. veya diğer sinerjilerle doldurun.",
      },
      {
        en: "Star level increases swarm spawns — prioritize triples on cheap Primordia units.",
        tr: "Yıldız seviyesi sürü üretimini artırır — ucuz Primordia birimlerinde üçlü önceliklendirin.",
      },
      {
        en: "Bel'Veth is a strong secondary carry if AD items show up.",
        tr: "Bel'Veth, AD eşyaları gelirse güçlü bir ikincil taşıyıcıdır.",
      },
      {
        en: "Soraka keeps you healthy if you need to loss streak early.",
        tr: "Erken kaybetmeniz gerekiyorsa Soraka sağlıklı tutmanıza yardımcı olur.",
      },
    ],
    godHint: {
      en: "HP / loss streak: Soraka",
      tr: "HP / kayıp streak: Soraka",
    },
  },
  {
    slug: "anima-jinx",
    name: {
      en: "Anima Jinx",
      tr: "Anima Jinx",
    },
    summary: {
      en: "Anima vertical with Jinx carry; stacks tech on losses and kills for prototype weapons.",
      tr: "Jinx taşıyıcısıyla Anima dikey; yenilgilerden ve öldürmelerden teknoloji yığar ve prototip silahlar üretir.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "A",
    difficulty: "hard",
    playstyle: "standard",
    rollInfo: {
      en: "Level 7–8 roll for Jinx items and Anima breakpoints.",
      tr: "Jinx eşyaları ve Anima eşik noktaları için seviye 7–8 açılımı.",
    },
    traits: [
      { name: "Anima", count: 3 },
      { name: "Gunslinger", count: 2 },
    ],
    units: [
      { champion: "Jinx", items: ["Guinsoo's Rageblade", "Infinity Edge", "Giant Slayer"], role: "carry", cost: 2 },
      { champion: "Aurora", items: ["Jeweled Gauntlet", "Nashor's Tooth"], role: "carry", cost: 3 },
      { champion: "Illaoi", items: ["Warmog's Armor", "Sunfire Aegis"], role: "tank", cost: 3 },
      { champion: "Briar", items: ["Bloodthirster", "Titan's Resolve"], role: "flex", cost: 1 },
      { champion: "Fiora", items: ["Edge of Night", "Titan's Resolve"], role: "carry", cost: 5 },
      { champion: "Cho'Gath", items: ["Sunfire Aegis", "Warmog's Armor"], role: "tank", cost: 1 },
      { champion: "Maokai", items: ["Bramble Vest", "Spirit Visage"], role: "tank", cost: 3 },
      { champion: "Shen", items: ["Steadfast Heart", "Warmog's Armor"], role: "tank", cost: 5 },
    ],
    notes: [
      {
        en: "Anima tech stacks change your itemization each game — review weapon offers carefully.",
        tr: "Anima teknoloji yığınları her oyun eşyalandırmanızı değiştirir — silah tekliflerini dikkatle inceleyin.",
      },
      {
        en: "Hard to pilot; weak without good augments or early Anima pairs.",
        tr: "Pilotlanması zordur; iyi augment veya erken Anima çifti olmadan zayıftır.",
      },
      {
        en: "Aurelion Sol tasks can accelerate tech generation.",
        tr: "Aurelion Sol görevleri teknoloji üretimini hızlandırabilir.",
      },
    ],
    godHint: {
      en: "Tasks: Aurelion Sol",
      tr: "Görevler: Aurelion Sol",
    },
  },
  {
    slug: "dark-star-entry",
    name: {
      en: "Dark Star Entry",
      tr: "Karanlık Yıldız Girişi",
    },
    summary: {
      en: "Dark Star mid-game board: cheap units plus four-cost carries before pivoting to a full vertical.",
      tr: "Karanlık Yıldız orta oyun tahtası: ucuz birimler ve dört altın taşıyıcılar, ardından tam dikeye geçiş.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "A",
    difficulty: "easy",
    playstyle: "standard",
    rollInfo: {
      en: "Level 7–8 roll; pivot to five-cost Dark Star caps if economy allows.",
      tr: "Seviye 7–8 açılımı; ekonomi uygun olursa beş altın Karanlık Yıldız tavanlarına geçiş.",
    },
    traits: [
      { name: "Dark Star", count: 4 },
      { name: "Bruiser", count: 2 },
    ],
    units: [
      { champion: "Cho'Gath", items: ["Warmog's Armor", "Sunfire Aegis"], role: "tank", cost: 1 },
      { champion: "Lissandra", items: ["Blue Buff", "Jeweled Gauntlet"], role: "carry", cost: 1 },
      { champion: "Mordekaiser", items: ["Rabadon's Deathcap", "Hextech Gunblade"], role: "carry", cost: 2 },
      { champion: "Zoe", items: ["Spear of Shojin", "Morellonomicon"], role: "support", cost: 2 },
      { champion: "Illaoi", items: ["Spirit Visage", "Steadfast Heart"], role: "tank", cost: 3 },
      { champion: "Karma", items: ["Void Staff", "Morellonomicon"], role: "carry", cost: 4 },
      { champion: "LeBlanc", items: ["Jeweled Gauntlet", "Guinsoo's Rageblade"], role: "carry", cost: 4 },
      { champion: "Kaisa", items: ["Guinsoo's Rageblade", "Statikk Shiv"], role: "flex", cost: 4 },
    ],
    notes: [
      {
        en: "Eight slots reflect a realistic mid board — not a three-unit opener.",
        tr: "Sekiz slot gerçekçi bir orta tahta yansıtır — üç birimlik bir açılış değil.",
      },
      {
        en: "Transition into Jhin or other five-cost Dark Star caps when healthy.",
        tr: "Sağlıklıyken Jhin veya diğer beş altın Karanlık Yıldız tavanlarına geçin.",
      },
      {
        en: "Black hole timing matters; position to hit clumped enemies.",
        tr: "Kara delik zamanlaması önemlidir; kümelenmiş düşmanlara vurmak için konumlandırın.",
      },
      {
        en: "Thresh random boons can bail out bad shops.",
        tr: "Thresh'in rastgele boonları kötü dükkanları kurtarabilir.",
      },
    ],
    godHint: {
      en: "Gamble: Thresh",
      tr: "Kumar: Thresh",
    },
  },
  {
    slug: "psyonic-duo",
    name: {
      en: "Psionic Duo",
      tr: "Psionik İkili",
    },
    summary: {
      en: "Low vertical Psionic splash: two trait for modes, flex the rest of the board.",
      tr: "Düşük dikey Psionik ekleme: mod için iki özellik, tahtanın geri kalanı esnek.",
    },
    patch: "17.2",
    lastUpdated: "2026-05-02",
    tier: "B",
    difficulty: "medium",
    playstyle: "standard",
    rollInfo: {
      en: "Play strongest board; add Psionic two for utility.",
      tr: "En güçlü tahtayı oynayın; fayda için Psionik iki ekleyin.",
    },
    traits: [
      { name: "Psionic", count: 2 },
      { name: "Bruiser", count: 2 },
    ],
    units: [
      { champion: "Gragas", items: ["Sunfire Aegis", "Warmog's Armor"], role: "tank", cost: 2 },
      { champion: "Pyke", items: ["Edge of Night", "Infinity Edge"], role: "flex", cost: 2 },
      { champion: "Viktor", items: ["Archangel's Staff", "Morellonomicon"], role: "carry", cost: 3 },
      { champion: "Zoe", items: ["Spear of Shojin", "Blue Buff"], role: "support", cost: 2 },
      { champion: "Cho'Gath", items: ["Warmog's Armor", "Sunfire Aegis"], role: "tank", cost: 1 },
      { champion: "Illaoi", items: ["Spirit Visage", "Steadfast Heart"], role: "tank", cost: 3 },
      { champion: "Maokai", items: ["Bramble Vest", "Warmog's Armor"], role: "tank", cost: 3 },
      { champion: "Aatrox", items: [], role: "flex", cost: 1 },
    ],
    notes: [
      {
        en: "Example eight-slot board: Psionic 2 for Viktor and Zoe; the rest is bruiser frontline.",
        tr: "Örnek sekiz slot tahtası: Viktor ve Zoe için Psionik 2; geri kalanı brawler ön saf.",
      },
      {
        en: "Not a full Psionic vertical — use when augments or shop push AP + frontline.",
        tr: "Tam Psionik dikey değil — augment veya dükkan AP + ön saf desteklerken kullanın.",
      },
      {
        en: "Psionic four is a big jump; only chase with a good emblem or opener.",
        tr: "Psionik dört büyük bir sıçramadır; yalnızca iyi bir amblem veya açılışla kovalayın.",
      },
      {
        en: "Kayle component packs help itemize flex carries.",
        tr: "Kayle bileşen paketleri esnek taşıyıcıları eşyalandırmaya yardımcı olur.",
      },
    ],
    godHint: {
      en: "Components: Kayle",
      tr: "Bileşenler: Kayle",
    },
  },
];
