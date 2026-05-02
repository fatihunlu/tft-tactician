import type { Champion } from "@/types/champion";

/**
 * Curated Set 17 champion reference for units that appear in SET17_COMPS.
 * `name` must match `CompUnit.champion` exactly; `slug` is stable for URLs.
 */
export const SET17_CHAMPIONS: Champion[] = [
  {
    slug: "aatrox",
    name: "Aatrox",
    cost: 1,
    traits: ["Bruiser", "Darkin"],
    ability: {
      name: { en: "World Ender", tr: "Dünya Sonu" },
      summary: {
        en: "Transforms and slam-downs for AoE damage and self-healing — strong frontline tempo.",
        tr: "Alan hasarı ve kendini iyileştirme için dönüşür ve yere çakar — güçlü ön saf temposu.",
      },
    },
  },
  {
    slug: "akali",
    name: "Akali",
    cost: 2,
    traits: ["Assassin", "Psionic"],
    ability: {
      name: { en: "Five Point Strike", tr: "Beş Nokta Vuruşu" },
      summary: {
        en: "Dashes through the board, striking marked enemies for burst magic damage.",
        tr: "Tahta içinden atlar, işaretli düşmanlara patlama büyü hasarı vurur.",
      },
    },
  },
  {
    slug: "aurora",
    name: "Aurora",
    cost: 3,
    traits: ["Arcanist", "Psionic"],
    ability: {
      name: { en: "Between Worlds", tr: "Dünyalar Arası" },
      summary: {
        en: "Channels zones of magic damage and repositioning — scales well with AP items.",
        tr: "Büyü hasarı ve yeniden konumlanma alanları oluşturur — AP eşyalarıyla iyi ölçeklenir.",
      },
    },
  },
  {
    slug: "bard",
    name: "Bard",
    cost: 5,
    traits: ["Mystic", "Caretaker"],
    ability: {
      name: { en: "Tempered Fate", tr: "Yumuşatılmış Kader" },
      summary: {
        en: "Utility and scaling damage with meep-powered bonuses — flex carry or support.",
        tr: "Meep destekli bonuslarla fayda ve ölçeklenen hasar — taşıyıcı veya destek olarak esnek.",
      },
    },
  },
  {
    slug: "belveth",
    name: "Bel'Veth",
    cost: 2,
    traits: ["Slayer", "Void"],
    ability: {
      name: { en: "Endless Banquet", tr: "Sonsuz Ziyafet" },
      summary: {
        en: "Ramp-up attack speed and true-damage procs — itemizes like an on-hit carry.",
        tr: "Saldırı hızı ve doğru hasar tetiklemeleri artar — on-hit taşıyıcı gibi eşyalanır.",
      },
    },
  },
  {
    slug: "briar",
    name: "Briar",
    cost: 1,
    traits: ["Slayer", "Dark Star"],
    ability: {
      name: { en: "Blood Frenzy / Snack Attack", tr: "Kan Çılgınlığı" },
      summary: {
        en: "Leaps onto a target for heavy physical damage and self-sustain in melee.",
        tr: "Hedefe atlar; yakın dövüşte yüksek fiziksel hasar ve kendini sürdürme sağlar.",
      },
    },
  },
  {
    slug: "caitlyn",
    name: "Caitlyn",
    cost: 1,
    traits: ["Sniper", "N.O.V.A."],
    ability: {
      name: { en: "Ace in the Hole", tr: "Delici Atış" },
      summary: {
        en: "Long-range shot that finishes low targets — pairs with attack-speed builds.",
        tr: "Düşük canlı hedefleri bitiren uzun menzilli atış — saldırı hızı dizilimleriyle uyumludur.",
      },
    },
  },
  {
    slug: "chogath",
    name: "Cho'Gath",
    cost: 1,
    traits: ["Bruiser", "Colossus"],
    ability: {
      name: { en: "Feast", tr: "Ziyafet" },
      summary: {
        en: "Chomps a foe for magic damage and grows tankier as the fight goes on.",
        tr: "Bir düşmanı ısırır; savaş ilerledikçe daha tank hale gelir.",
      },
    },
  },
  {
    slug: "corki",
    name: "Corki",
    cost: 4,
    traits: ["Marksman", "N.O.V.A."],
    ability: {
      name: { en: "Missile Barrage", tr: "Füze Yağmuru" },
      summary: {
        en: "Mixed damage rockets with repeat casts — wants AD/AP hybrid itemization.",
        tr: "Tekrarlanan büyülü roketler — AD/AP hibrit eşyalanma ister.",
      },
    },
  },
  {
    slug: "ezreal",
    name: "Ezreal",
    cost: 1,
    traits: ["Prodigy", "Slayer"],
    ability: {
      name: { en: "Trueshot Barrage", tr: "Saf Atış Yağmuru" },
      summary: {
        en: "Skillshots and ramping autos — early item holder that scales with crit and AS.",
        tr: "Yetenek atışları ve artan otolar — krit ve AS ile ölçeklenen erken eşya tutucusu.",
      },
    },
  },
  {
    slug: "fiora",
    name: "Fiora",
    cost: 5,
    traits: ["Duelist", "Slayer"],
    ability: {
      name: { en: "Grand Challenge", tr: "Büyük Meydan Okuma" },
      summary: {
        en: "Vitals and true damage duels — premium five-cost carry when itemized.",
        tr: "Zayıf noktalar ve doğru hasar düelloları — eşyalandığında üst düzey beş maliyet taşıyıcı.",
      },
    },
  },
  {
    slug: "fizz",
    name: "Fizz",
    cost: 3,
    traits: ["Assassin", "Psionic"],
    ability: {
      name: { en: "Chum the Waters", tr: "Suları Yemle" },
      summary: {
        en: "Untargetable dive patterns with burst magic damage onto backline threats.",
        tr: "Arka sıra tehditlerine patlama büyü hasarıyla hedef alınamayan dalış kalıpları.",
      },
    },
  },
  {
    slug: "gnar",
    name: "Gnar",
    cost: 2,
    traits: ["Bruiser", "Caretaker"],
    ability: {
      name: { en: "GNAR!", tr: "GNAR!" },
      summary: {
        en: "Ranged harass into mega-form CC — flexible frontline or disruptor.",
        tr: "Menzil tacizi ve mega form CC — esnek ön saf veya kesinti.",
      },
    },
  },
  {
    slug: "gragas",
    name: "Gragas",
    cost: 2,
    traits: ["Bruiser", "Caretaker"],
    ability: {
      name: { en: "Drunken Rage", tr: "Sarhoş Öfke" },
      summary: {
        en: "AoE disruption and tank steroids — classic Sunfire/Warmog stacker.",
        tr: "Alan kesintisi ve tank güçlendirmeleri — klasik Sunfire/Warmog istifleyicisi.",
      },
    },
  },
  {
    slug: "illaoi",
    name: "Illaoi",
    cost: 3,
    traits: ["Bruiser", "Conduit"],
    ability: {
      name: { en: "Leap of Faith", tr: "İnanç Sıçraması" },
      summary: {
        en: "Spawns tentacles for sustained AoE pressure — rewards durable front items.",
        tr: "Sürekli alan baskısı için dokunaçlar çıkarır — dayanıklı ön eşyaları ödüllendirir.",
      },
    },
  },
  {
    slug: "jax",
    name: "Jax",
    cost: 2,
    traits: ["Bruiser", "Vanquisher"],
    ability: {
      name: { en: "Counter Strike", tr: "Karşı Vuruş" },
      summary: {
        en: "Dodge window then slam — cheap tank slot that soaks physical pressure.",
        tr: "Kaçınma penceresi ve sonra vuruş — ucuz tank slotu, fiziksel baskıyı emer.",
      },
    },
  },
  {
    slug: "jhin",
    name: "Jhin",
    cost: 5,
    traits: ["Marksman", "Dark Star"],
    ability: {
      name: { en: "Curtain Call", tr: "Perde Çağrısı" },
      summary: {
        en: "Fourth-shot executes and long-range execution windows — premium AD carry.",
        tr: "Dördüncü atış infazları ve uzun menzil infaz pencereleri — üst düzey AD taşıyıcı.",
      },
    },
  },
  {
    slug: "jinx",
    name: "Jinx",
    cost: 2,
    traits: ["Slayer", "N.O.V.A."],
    ability: {
      name: { en: "Super Mega Death Rocket!", tr: "Süper Mega Ölüm Roketi!" },
      summary: {
        en: "Rocket splash and ramping chaos damage — strong mid-tier ADC tempo.",
        tr: "Roket sıçraması ve artan kaos hasarı — güçlü orta seviye ADC temposu.",
      },
    },
  },
  {
    slug: "kaisa",
    name: "Kaisa",
    cost: 4,
    traits: ["Void", "Corrupted"],
    ability: {
      name: { en: "Icathian Rain", tr: "Icath Yağmuru" },
      summary: {
        en: "Hybrid missiles that evolve with items — flex AP or on-hit builds.",
        tr: "Eşyalarla gelişen hibrit füzeler — AP veya on-hit dizilimlerinde esnek.",
      },
    },
  },
  {
    slug: "karma",
    name: "Karma",
    cost: 4,
    traits: ["Arcanist", "Psionic"],
    ability: {
      name: { en: "Inner Flame / Renewal", tr: "İç Alev / Yenilenme" },
      summary: {
        en: "Shielding and burst magic waves — primary AP carry when stacked.",
        tr: "Kalkan ve patlama büyü dalgaları — istiflendiğinde ana AP taşıyıcı.",
      },
    },
  },
  {
    slug: "kindred",
    name: "Kindred",
    cost: 4,
    traits: ["Marksman", "Dark Star"],
    ability: {
      name: { en: "Lamb's Respite", tr: "Kuzunun Molası" },
      summary: {
        en: "Zones denial of death while Wolf bites — scales hard with attack speed.",
        tr: "Ölümü reddeden alan oluştururken Kurt ısırır — saldırı hızıyla sert ölçeklenir.",
      },
    },
  },
  {
    slug: "leblanc",
    name: "LeBlanc",
    cost: 4,
    traits: ["Arcanist", "Psionic"],
    ability: {
      name: { en: "Sigil of Malice", tr: "Kötülük Mührü" },
      summary: {
        en: "Chains burst on marked targets — AP assassin tempo with clone tricks.",
        tr: "İşaretli hedeflere patlama zinciri — klon numaralarıyla AP suikast temposu.",
      },
    },
  },
  {
    slug: "leona",
    name: "Leona",
    cost: 1,
    traits: ["Warden", "Lightshield"],
    ability: {
      name: { en: "Solar Flare", tr: "Güneş Parlaması" },
      summary: {
        en: "AoE stun and armor steroids — cheap opener tank with CC.",
        tr: "Alan sersemletmesi ve zırh güçlendirmesi — CC\'li ucuz açılış tankı.",
      },
    },
  },
  {
    slug: "lissandra",
    name: "Lissandra",
    cost: 1,
    traits: ["Arcanist", "Dark Star"],
    ability: {
      name: { en: "Ring of Frost", tr: "Don Halkası" },
      summary: {
        en: "Roots and shatters clumped enemies — solid one-cost AP opener.",
        tr: "Kümelenmiş düşmanları kökler ve parçalar — sağlam bir maliyet AP açılışı.",
      },
    },
  },
  {
    slug: "lulu",
    name: "Lulu",
    cost: 3,
    traits: ["Enchanter", "Caretaker"],
    ability: {
      name: { en: "Wild Growth", tr: "Vahşi Büyüme" },
      summary: {
        en: "Polymorph and ally buffs — core support for AP carries.",
        tr: "Polimorf ve müttefik güçlendirmeleri — AP taşıyıcıları için çekirdek destek.",
      },
    },
  },
  {
    slug: "master-yi",
    name: "Master Yi",
    cost: 4,
    traits: ["Slayer", "N.O.V.A."],
    ability: {
      name: { en: "Alpha Strike", tr: "Alfa Vuruşu" },
      summary: {
        en: "Untargetable bounce strikes into sustained true damage — wants QS and AD.",
        tr: "Hedef alınamayan sıçrama vuruşları ve sürekli doğru hasar — QS ve AD ister.",
      },
    },
  },
  {
    slug: "maokai",
    name: "Maokai",
    cost: 3,
    traits: ["Warden", "Colossus"],
    ability: {
      name: { en: "Nature's Grasp", tr: "Doğanın Pençesi" },
      summary: {
        en: "Roots and zone CC from the frontline — Sunfire/Warmog staple.",
        tr: "Ön saf kökleri ve alan CC — Sunfire/Warmog temel taşıyıcısı.",
      },
    },
  },
  {
    slug: "meepsie",
    name: "Meepsie",
    cost: 2,
    traits: ["Caretaker", "Meeps"],
    ability: {
      name: { en: "Chime Parade", tr: "Çan Geçidi" },
      summary: {
        en: "Utility tempo unit tied to Bard-like bonuses — flex slot for tempo boards.",
        tr: "Benzersiz bonularla fayda temposu — tempo tahtalarında esnek slot.",
      },
    },
  },
  {
    slug: "milio",
    name: "Milio",
    cost: 2,
    traits: ["Enchanter", "Caretaker"],
    ability: {
      name: { en: "Breath of Life", tr: "Hayat Nefesi" },
      summary: {
        en: "Cleanses and shields allies — premium support item holder.",
        tr: "Müttefikleri temizler ve kalkanlar — üst düzey destek eşya tutucusu.",
      },
    },
  },
  {
    slug: "miss-fortune",
    name: "Miss Fortune",
    cost: 1,
    traits: ["Marksman", "Conduit"],
    ability: {
      name: { en: "Bullet Time", tr: "Mermi Zamanı" },
      summary: {
        en: "Cone ultimate that wipes clumped fights — wants AD and mana items.",
        tr: "Kümelenmiş savaşları süpüren konili ulti — AD ve mana eşyaları ister.",
      },
    },
  },
  {
    slug: "mordekaiser",
    name: "Mordekaiser",
    cost: 2,
    traits: ["Arcanist", "Dark Star"],
    ability: {
      name: { en: "Realm of Death", tr: "Ölüm Diyarı" },
      summary: {
        en: "Isolates a duel for stolen stats — flex AP bruiser or drain tank.",
        tr: "Çalıntı istatistikler için düello izolasyonu — esnek AP dövüşçü veya emici tank.",
      },
    },
  },
  {
    slug: "nunu-willump",
    name: "Nunu & Willump",
    cost: 4,
    traits: ["Colossus", "Caretaker"],
    ability: {
      name: { en: "Absolute Zero", tr: "Mutlak Sıfır" },
      summary: {
        en: "Channel that zones and shreds MR — tank slot with big AoE.",
        tr: "Alan oluşturan ve MR eriten kanal — büyük AoE\'li tank slotu.",
      },
    },
  },
  {
    slug: "ornn",
    name: "Ornn",
    cost: 3,
    traits: ["Blacksmith", "Colossus"],
    ability: {
      name: { en: "Call of the Forge God", tr: "Demirci Tanrı Çağrısı" },
      summary: {
        en: "Knock-up engage and item upgrades — anchor tank for slow-roll boards.",
        tr: "Sersemletme girişi ve eşya yükseltmeleri — yavaş açılım tahtaları için çapa tank.",
      },
    },
  },
  {
    slug: "pantheon",
    name: "Pantheon",
    cost: 2,
    traits: ["Warden", "Vanquisher"],
    ability: {
      name: { en: "Grand Skyfall", tr: "Büyük Gök Düşüşü" },
      summary: {
        en: "Spear stab into AoE slam — cheap tank engage with defensive stacking.",
        tr: "Mızrak saplaması ve ardından alan vuruşu — ucuz tank girişi ve savunma istifleme.",
      },
    },
  },
  {
    slug: "poppy",
    name: "Poppy",
    cost: 1,
    traits: ["Warden", "Caretaker"],
    ability: {
      name: { en: "Keeper's Verdict", tr: "Bekçinin Kararı" },
      summary: {
        en: "Hammer knockbacks and shields — one-cost frontline glue.",
        tr: "Çekiç geri itmeleri ve kalkanlar — bir maliyet ön saf yapıştırıcısı.",
      },
    },
  },
  {
    slug: "pyke",
    name: "Pyke",
    cost: 2,
    traits: ["Assassin", "Slayer"],
    ability: {
      name: { en: "Death From Below", tr: "Aşağıdan Ölüm" },
      summary: {
        en: "Executes low HP targets and shares gold — flex AD opener.",
        tr: "Düşük canlı hedefleri infaz eder ve altın paylaşır — esnek AD açılışı.",
      },
    },
  },
  {
    slug: "rammus",
    name: "Rammus",
    cost: 4,
    traits: ["Colossus", "Vanquisher"],
    ability: {
      name: { en: "Soaring Slam", tr: "Yükselen Çarpma" },
      summary: {
        en: "Taunt and armor spike — anti-AD wall that stacks resist items.",
        tr: "Kışkırtma ve zırh patlaması — direnç eşyaları istifleyen anti-AD duvar.",
      },
    },
  },
  {
    slug: "reksai",
    name: "Rek'Sai",
    cost: 1,
    traits: ["Bruiser", "Void"],
    ability: {
      name: { en: "Void Rush", tr: "Boşluk Hücumu" },
      summary: {
        en: "Burrow resets and true damage bites — cheap flex frontliner.",
        tr: "Gömülme sıfırları ve doğru hasar ısırıkları — ucuz esnek ön hat.",
      },
    },
  },
  {
    slug: "rhaast",
    name: "Rhaast",
    cost: 3,
    traits: ["Slayer", "Darkin"],
    ability: {
      name: { en: "Reaping Slash", tr: "Biçme Kesimi" },
      summary: {
        en: "Drain tank path with %HP damage — flex slot when itemized tanky.",
        tr: "Yüzde can hasarıyla emici tank yolu — tank eşyalandığında esnek slot.",
      },
    },
  },
  {
    slug: "riven",
    name: "Riven",
    cost: 4,
    traits: ["Duelist", "Slayer"],
    ability: {
      name: { en: "Blade of the Exile", tr: "Sürgünün Kılıcı" },
      summary: {
        en: "Empowered slashes with revive-style tempo — AD carry flex.",
        tr: "Canlanma tarzı tempo ile güçlendirilmiş kesikler — AD taşıyıcı esnekliği.",
      },
    },
  },
  {
    slug: "shen",
    name: "Shen",
    cost: 5,
    traits: ["Warden", "Spirit Walker"],
    ability: {
      name: { en: "Stand United", tr: "Birlikte Dur" },
      summary: {
        en: "Global shield and zone protection — premium tank capstone.",
        tr: "Küresel kalkan ve alan koruması — üst düzey tank taşı.",
      },
    },
  },
  {
    slug: "tahm-kench",
    name: "Tahm Kench",
    cost: 4,
    traits: ["Colossus", "Caretaker"],
    ability: {
      name: { en: "Devour", tr: "Yutma" },
      summary: {
        en: "Eats allies or foes for reposition and mitigation — thick HP sponge.",
        tr: "Yeniden konumlanma ve azaltma için müttefik veya düşman yer — kalın can süngeri.",
      },
    },
  },
  {
    slug: "talon",
    name: "Talon",
    cost: 1,
    traits: ["Assassin", "Slayer"],
    ability: {
      name: { en: "Blade's End", tr: "Kılıcın Sonu" },
      summary: {
        en: "Bleed chains on isolated targets — cheap AD tempo opener.",
        tr: "İzole hedeflerde kanama zinciri — ucuz AD tempo açılışı.",
      },
    },
  },
  {
    slug: "twisted-fate",
    name: "Twisted Fate",
    cost: 1,
    traits: ["Arcanist", "Conduit"],
    ability: {
      name: { en: "Loaded Dice", tr: "Yüklü Zarlar" },
      summary: {
        en: "Card cycles for mixed magic damage — stat-stik opener.",
        tr: "Karışık büyü hasarı için kart döngüsü — Statikk açılışı.",
      },
    },
  },
  {
    slug: "urgot",
    name: "Urgot",
    cost: 3,
    traits: ["Gunner", "Corrupted"],
    ability: {
      name: { en: "Fear Beyond Death", tr: "Ölüm Ötesi Korku" },
      summary: {
        en: "Grind shots and execute chains — mid-cost carry flex.",
        tr: "Öğütücü atışlar ve infaz zinciri — orta maliyet taşıyıcı esnekliği.",
      },
    },
  },
  {
    slug: "viktor",
    name: "Viktor",
    cost: 3,
    traits: ["Arcanist", "Psionic"],
    ability: {
      name: { en: "Death Ray", tr: "Ölüm Işını" },
      summary: {
        en: "Laser line damage that ramps with casts — core AP carry for conduit boards.",
        tr: "Atışlarla artan lazer çizgisi hasarı — conduit tahtaları için çekirdek AP taşıyıcı.",
      },
    },
  },
  {
    slug: "xayah",
    name: "Xayah",
    cost: 4,
    traits: ["Marksman", "Corrupted"],
    ability: {
      name: { en: "Bladecaller", tr: "Bıçak Çağıran" },
      summary: {
        en: "Feathers for AoE recalls — AD carry that loves IE/LW.",
        tr: "Alan geri çağırmaları için tüyler — IE/LW seven AD taşıyıcı.",
      },
    },
  },
  {
    slug: "zoe",
    name: "Zoe",
    cost: 2,
    traits: ["Arcanist", "Conduit"],
    ability: {
      name: { en: "Sleepy Trouble Bubble", tr: "Uykulu Bela Balonu" },
      summary: {
        en: "Long-range pick CC and poke damage — support or secondary AP threat.",
        tr: "Uzun menzil yakalama CC ve dürtme hasarı — destek veya ikincil AP tehdidi.",
      },
    },
  },
];
