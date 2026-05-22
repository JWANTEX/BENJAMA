import islandImg from "@/assets/map-island.jpg";
import ragnarokImg from "@/assets/map-ragnarok.jpg";
import fjordurImg from "@/assets/map-fjordur.jpg";
import extinctionImg from "@/assets/map-extinction.jpg";
import genesis2Img from "@/assets/map-genesis2.jpg";
import islandLogo from "@/assets/logo-island.png";
import ragnarokLogo from "@/assets/logo-ragnarok.png";
import fjordurLogo from "@/assets/logo-fjordur.png";
import extinctionLogo from "@/assets/logo-extinction.png";
import genesis2Logo from "@/assets/logo-genesis2.png";

// Dino renders (from user-provided ZIP)
import imgGiga from "@/assets/dinos/Giganotosaurus.webp";
import imgRex from "@/assets/dinos/rex.webp";
import imgCarcha from "@/assets/dinos/carcharodontosaurus.webp";
import imgCrystal from "@/assets/dinos/crystalwyvern.webp";
import imgCrystalQueen from "@/assets/dinos/crystalwyvernqueen.webp";
import imgEmber from "@/assets/dinos/256px-Ember_Crystal_Wyvern_PaintRegion4.webp";
import imgRockDrake from "@/assets/dinos/rockdrake.webp";
import imgReaper from "@/assets/dinos/reaper.webp";
import imgBasilisk from "@/assets/dinos/basilisk.webp";
import imgKarkinos from "@/assets/dinos/karkinos.webp";
import imgRavager from "@/assets/dinos/ravager.webp";
import imgRollRat from "@/assets/dinos/rollrat.webp";
import imgBulbdog from "@/assets/dinos/bulbdog.webp";
import imgShinehorn from "@/assets/dinos/shinehorn.webp";
import imgFeatherlight from "@/assets/dinos/Featherlight.webp";
import imgGlowtail from "@/assets/dinos/glowtail.webp";
import imgWyvern from "@/assets/dinos/wyvern.webp";
import imgLightningWyvern from "@/assets/dinos/Ark_LightningWyvern_Render.webp";
import imgPoisonWyvern from "@/assets/dinos/Ark_PoisonWyvern_Render.webp";
import imgPhoenix from "@/assets/dinos/phoenix.webp";
import imgRockElem from "@/assets/dinos/Rock_Elemental.webp";
import imgJerboa from "@/assets/dinos/jerboa.webp";
import imgZombieWyvern from "@/assets/dinos/Zombie_Fire_Wyvern_PaintRegion1.webp";
import imgZombieLightning from "@/assets/dinos/Ark_ZombieLightningWyvern_Render.webp";
import imgMorella from "@/assets/dinos/morellatops.webp";
import imgThorny from "@/assets/dinos/thornydragon.webp";
import imgLymantria from "@/assets/dinos/lymantria.webp";
import imgManagarmr from "@/assets/dinos/managarmr.webp";
import imgOwl from "@/assets/dinos/owl.png";
import imgVelona from "@/assets/dinos/velonasaur.webp";
import imgEnforcer from "@/assets/dinos/enforcer.webp";
import imgGasbags from "@/assets/dinos/gasbags.webp";
import imgForestTitan from "@/assets/dinos/foresttitan.webp";
import imgIceTitan from "@/assets/dinos/icetitan.webp";
import imgDesertTitan from "@/assets/dinos/deserttitan.webp";
import imgBlood from "@/assets/dinos/bloodstalker.webp";
import imgMagma from "@/assets/dinos/Magmasaur_PaintRegion2.webp";
import imgFerox from "@/assets/dinos/ferox.webp";
import imgMegachelon from "@/assets/dinos/megachelon.webp";
import imgAstrocetus from "@/assets/dinos/astrocetus.webp";
import imgVoidwyrm from "@/assets/dinos/voidwyrm.webp";
import imgAstrodelphis from "@/assets/dinos/astrodelphis.webp";
import imgNoglin from "@/assets/dinos/noglin.webp";
import imgStryder from "@/assets/dinos/stryder.webp";
import imgMaewing from "@/assets/dinos/maewing.webp";
import imgTropeo from "@/assets/dinos/tropeognathus.webp";
import imgDinopith from "@/assets/dinos/dinopithecus.webp";
import imgSinomacrops from "@/assets/dinos/sinomacrops.webp";
import imgDodorex from "@/assets/dinos/dodorex.webp";

export type ServerMap = {
  id: string; name: string; image: string; logo: string;
  ip: string; port: number; players: number; maxPlayers: number; online: boolean;
};

export const SERVER_IP = "45.87.120.21";
export const DISCORD_INVITE = "https://discord.gg/EkPHVcb8nj";
export const STEAM_GROUP = "https://steamcommunity.com/groups/arkbenjama";
export const STEAM_LOGIN = "http://localhost:3000/auth/steam";

export const maps: ServerMap[] = [
  { id: "island",     name: "The Island",      image: islandImg,     logo: islandLogo,     ip: SERVER_IP, port: 27015, players: 0, maxPlayers: 67, online: false },
  { id: "ragnarok",   name: "Ragnarok",        image: ragnarokImg,   logo: ragnarokLogo,   ip: SERVER_IP, port: 27017, players: 0, maxPlayers: 67, online: false },
  { id: "fjordur",    name: "Fjordur",         image: fjordurImg,    logo: fjordurLogo,    ip: SERVER_IP, port: 27019, players: 0, maxPlayers: 67, online: false },
  { id: "extinction", name: "Extinction",      image: extinctionImg, logo: extinctionLogo, ip: SERVER_IP, port: 27021, players: 0, maxPlayers: 67, online: false },
  { id: "genesis2",   name: "Genesis: Part 2", image: genesis2Img,   logo: genesis2Logo,   ip: SERVER_IP, port: 27023, players: 0, maxPlayers: 67, online: false },
];

export type Mod = { id: string; name: string; description: { en: string; tr: string } };

export const mods: Mod[] = [
  { id: "2103157852", name: "Super Structures",                    description: { en: "Quality-of-life building suite with auto-demo, structure picker, and snap fixes.", tr: "Otomatik yıkım, yapı seçici ve snap düzeltmeleriyle yapı kalite paketi." } },
  { id: "821530042",  name: "Awesome SpyGlass!",                   description: { en: "Detailed creature stats, breeding info, taming readouts and stat overlays.",        tr: "Detaylı yaratık istatistikleri, breeding bilgisi, taming değerleri ve stat overlay." } },
  { id: "2623890618", name: "Awesome Teleporters!",                description: { en: "Linkable teleporter network for fast and safe cluster travel.",                    tr: "Hızlı ve güvenli cluster içi seyahat için bağlanabilir teleport ağı." } },
  { id: "1404697612", name: "Castles, Keeps and Forts Remastered", description: { en: "Medieval-grade building set with castles, keeps, gates and decor.",                tr: "Kale, sur, kapı ve dekorlarla orta çağ kalitesinde yapı seti." } },
  { id: "889745138",  name: "Awesome Teleporters",                 description: { en: "Original teleporter mod — paired waypoints for instant travel.",                    tr: "Orijinal teleport modu — eşlenmiş waypoint'lerle anlık seyahat." } },
  { id: "1591643730", name: "Structures Plus (S+)",                description: { en: "Classic S+ structure set with auto-pulling, demo gun and pickup.",                  tr: "Auto-pull, demo gun ve pickup özellikleriyle klasik S+ yapı seti." } },
  { id: "924619115",  name: "Platforms Plus",                      description: { en: "Extended platform saddles and movable bases.",                                     tr: "Genişletilmiş platform saddle ve taşınabilir üs sistemleri." } },
  { id: "1295978823", name: "Dino Storage v2",                     description: { en: "Capture, store and trade tames as soul balls with no rot.",                         tr: "Tame'leri ruh küresi olarak yakala, depola ve takas et — bozulma yok." } },
  { id: "741203089",  name: "Death Recovery Mod",                  description: { en: "Recover your full inventory after death via tracked bag.",                          tr: "Ölümden sonra eşyalarını takip edilen çantadan geri al." } },
  { id: "1999447172", name: "Awesome Teleporters Plus",            description: { en: "Expanded teleporter platform with dino-aware transport.",                          tr: "Dino taşımayı destekleyen genişletilmiş teleport platformu." } },
];

export type Rarity = "common" | "rare" | "legendary" | "tek" | "titan";
export type Creature = {
  id: string;
  name: string;
  image: string;
  level: number;
  rarity: Rarity;
  category: "creature" | "titan";
  prices: { usd: number; eur: number; try: number };
};

const p = (usd: number, eur: number, t: number) => ({ usd, eur, try: t });

export const creatures: Creature[] = [
  // Apex
  { id: "giga",            name: "Giganotosaurus",        image: imgGiga,           level: 300, rarity: "legendary", category: "creature", prices: p(7, 7, 240) },
  { id: "rex",             name: "Tyrannosaurus Rex",     image: imgRex,            level: 300, rarity: "rare",      category: "creature", prices: p(3, 3, 100) },
  { id: "carcha",          name: "Carcharodontosaurus",   image: imgCarcha,         level: 300, rarity: "legendary", category: "creature", prices: p(10, 10, 520) },
  // Crystal Wyverns
  { id: "cw-blood",        name: "Blood Crystal Wyvern",  image: imgCrystalQueen,   level: 300, rarity: "legendary", category: "creature", prices: p(4, 4, 200) },
  { id: "cw-tropical",     name: "Tropical Crystal Wyvern", image: imgCrystal,      level: 300, rarity: "rare",      category: "creature", prices: p(4, 4, 200) },
  { id: "cw-ember",        name: "Ember Crystal Wyvern",  image: imgEmber,          level: 300, rarity: "rare",      category: "creature", prices: p(4, 4, 200) },
  // Aberration
  { id: "rock-drake",      name: "Rock Drake",            image: imgRockDrake,      level: 300, rarity: "legendary", category: "creature", prices: p(5, 5, 170) },
  { id: "reaper",          name: "Reaper (Queen/King)",   image: imgReaper,         level: 300, rarity: "legendary", category: "creature", prices: p(5, 5, 200) },
  { id: "basilisk",        name: "Basilisk",              image: imgBasilisk,       level: 300, rarity: "rare",      category: "creature", prices: p(3, 3, 100) },
  { id: "karkinos",        name: "Karkinos",              image: imgKarkinos,       level: 300, rarity: "rare",      category: "creature", prices: p(3, 3, 100) },
  { id: "ravager",         name: "Ravager",               image: imgRavager,        level: 300, rarity: "common",    category: "creature", prices: p(2, 2, 70) },
  { id: "roll-rat",        name: "Roll Rat",              image: imgRollRat,        level: 300, rarity: "common",    category: "creature", prices: p(2, 2, 70) },
  { id: "bulbdog",         name: "Bulbdog",               image: imgBulbdog,        level: 300, rarity: "common",    category: "creature", prices: p(1, 1, 35) },
  { id: "shinehorn",       name: "Shinehorn",             image: imgShinehorn,      level: 300, rarity: "common",    category: "creature", prices: p(1, 1, 35) },
  { id: "featherlight",    name: "Featherlight",          image: imgFeatherlight,   level: 300, rarity: "common",    category: "creature", prices: p(1, 1, 35) },
  { id: "glowtail",        name: "Glowtail",              image: imgGlowtail,       level: 300, rarity: "common",    category: "creature", prices: p(1, 1, 35) },
  // Wyverns
  { id: "wyvern-fire",     name: "Fire Wyvern",           image: imgWyvern,         level: 300, rarity: "legendary", category: "creature", prices: p(4, 4, 140) },
  { id: "wyvern-light",    name: "Lightning Wyvern",      image: imgLightningWyvern,level: 300, rarity: "legendary", category: "creature", prices: p(4, 4, 140) },
  { id: "wyvern-poison",   name: "Poison Wyvern",         image: imgPoisonWyvern,   level: 300, rarity: "legendary", category: "creature", prices: p(4, 4, 140) },
  { id: "zombie-wyvern",   name: "Zombie Wyvern",         image: imgZombieWyvern,   level: 300, rarity: "legendary", category: "creature", prices: p(7, 7, 300) },
  { id: "phoenix",         name: "Phoenix",               image: imgPhoenix,        level: 300, rarity: "legendary", category: "creature", prices: p(7, 7, 440) },
  // Scorched / desert
  { id: "rock-elemental",  name: "Rock Elemental",        image: imgRockElem,       level: 300, rarity: "rare",      category: "creature", prices: p(4, 4, 140) },
  { id: "jerboa",          name: "Jerboa",                image: imgJerboa,         level: 300, rarity: "common",    category: "creature", prices: p(1, 1, 35) },
  { id: "morellatops",     name: "Morellatops",           image: imgMorella,        level: 300, rarity: "common",    category: "creature", prices: p(2, 2, 70) },
  { id: "thorny",          name: "Thorny Dragon",         image: imgThorny,         level: 300, rarity: "common",    category: "creature", prices: p(2, 2, 70) },
  { id: "lymantria",       name: "Lymantria",             image: imgLymantria,      level: 300, rarity: "common",    category: "creature", prices: p(2, 2, 70) },
  // Extinction
  { id: "managarmr",       name: "Managarmr",             image: imgManagarmr,      level: 300, rarity: "rare",      category: "creature", prices: p(4, 4, 140) },
  { id: "snow-owl",        name: "Snow Owl",              image: imgOwl,            level: 300, rarity: "rare",      category: "creature", prices: p(4, 4, 200) },
  { id: "velonasaur",      name: "Velonasaur",            image: imgVelona,         level: 300, rarity: "rare",      category: "creature", prices: p(3, 3, 100) },
  { id: "enforcer",        name: "Enforcer",              image: imgEnforcer,       level: 300, rarity: "common",    category: "creature", prices: p(2, 2, 70) },
  { id: "gasbags",         name: "Gasbags",               image: imgGasbags,        level: 300, rarity: "common",    category: "creature", prices: p(2, 2, 70) },
  // Titans
  { id: "forest-titan",    name: "Forest Titan",          image: imgForestTitan,    level: 1500, rarity: "titan",    category: "titan",    prices: p(20, 20, 1000) },
  { id: "ice-titan",       name: "Ice Titan",             image: imgIceTitan,       level: 1500, rarity: "titan",    category: "titan",    prices: p(20, 20, 1000) },
  { id: "desert-titan",    name: "Desert Titan",          image: imgDesertTitan,    level: 1500, rarity: "titan",    category: "titan",    prices: p(20, 20, 1000) },
  // Genesis
  { id: "bloodstalker",    name: "Bloodstalker",          image: imgBlood,          level: 300, rarity: "rare",      category: "creature", prices: p(4, 4, 140) },
  { id: "magmasaur",       name: "Magmasaur",             image: imgMagma,          level: 300, rarity: "legendary", category: "creature", prices: p(5, 5, 170) },
  { id: "ferox",           name: "Ferox",                 image: imgFerox,          level: 300, rarity: "rare",      category: "creature", prices: p(3, 3, 100) },
  { id: "megachelon",      name: "Megachelon",            image: imgMegachelon,     level: 300, rarity: "rare",      category: "creature", prices: p(3, 3, 100) },
  // Genesis 2
  { id: "astrocetus",      name: "Astrocetus",            image: imgAstrocetus,     level: 300, rarity: "tek",       category: "creature", prices: p(5, 5, 250) },
  { id: "voidwyrm",        name: "Voidwyrm",              image: imgVoidwyrm,       level: 300, rarity: "tek",       category: "creature", prices: p(5, 5, 250) },
  { id: "astrodelphis",    name: "Astrodelphis",          image: imgAstrodelphis,   level: 300, rarity: "tek",       category: "creature", prices: p(4, 4, 140) },
  { id: "noglin",          name: "Noglin",                image: imgNoglin,         level: 300, rarity: "rare",      category: "creature", prices: p(4, 4, 140) },
  { id: "stryder",         name: "Tek Stryder",           image: imgStryder,        level: 300, rarity: "tek",       category: "creature", prices: p(10, 10, 500) },
  { id: "maewing",         name: "Maewing",               image: imgMaewing,        level: 300, rarity: "rare",      category: "creature", prices: p(3, 3, 100) },
  // LWE
  { id: "tropeo",          name: "Tropeognathus",         image: imgTropeo,         level: 300, rarity: "rare",      category: "creature", prices: p(4, 4, 140) },
  { id: "dinopith",        name: "Dinopithecus",          image: imgDinopith,       level: 300, rarity: "rare",      category: "creature", prices: p(3, 3, 100) },
  { id: "sinomacrops",     name: "Sinomacrops",           image: imgSinomacrops,    level: 300, rarity: "common",    category: "creature", prices: p(2, 2, 70) },
  // Boss
  { id: "dodorex",         name: "DodoRex",               image: imgDodorex,        level: 300, rarity: "legendary", category: "creature", prices: p(20, 20, 1100) },
  // Bonus zombie
  { id: "zombie-lightning",name: "Zombie Lightning Wyvern", image: imgZombieLightning, level: 300, rarity: "legendary", category: "creature", prices: p(7, 7, 300) },
];

// ─── Stations ────────────────────────────────────────────────
export type Station = {
  id: string; name: string; tier: "primitive" | "metal";
  kind: "upgrade" | "blueprint" | "augment"; icon: string;
  description: { en: string; tr: string };
  prices: { usd: number; eur: number; try: number };
};

export const stations: Station[] = [
  { id: "prim-upgrade",  name: "Primitive Upgrade Station",  tier: "primitive", kind: "upgrade",   icon: "fa-solid fa-hammer",     prices: p(9.99, 9.99, 399),
    description: { en: "Upgrade items from Primitive up to Ascendant tier.", tr: "Eşyaları Primitive'den Ascendant seviyesine yükselt." } },
  { id: "metal-upgrade", name: "Metal Upgrade Station",      tier: "metal",     kind: "upgrade",   icon: "fa-solid fa-screwdriver-wrench", prices: p(14.99, 14.99, 599),
    description: { en: "High-tier upgrade bench with faster crafting & better rolls.", tr: "Daha hızlı craft ve daha iyi roll'lar sunan üst seviye bench." } },
  { id: "prim-bp",       name: "Primitive Blueprint Station", tier: "primitive", kind: "blueprint", icon: "fa-solid fa-scroll",     prices: p(9.99, 9.99, 399),
    description: { en: "Generate random blueprints up to Journeyman quality.", tr: "Journeyman kalitesine kadar rastgele blueprint üret." } },
  { id: "metal-bp",      name: "Metal Blueprint Station",    tier: "metal",     kind: "blueprint", icon: "fa-solid fa-file-invoice", prices: p(14.99, 14.99, 599),
    description: { en: "Roll high-tier blueprints up to Ascendant quality.", tr: "Ascendant'a kadar üst seviye blueprint üret." } },
  { id: "prim-aug",      name: "Primitive Augment Station",  tier: "primitive", kind: "augment",   icon: "fa-solid fa-flask",       prices: p(4.99, 4.99, 199),
    description: { en: "Apply basic stat augments to weapons and armor.", tr: "Silah ve armor'a temel stat augment uygula." } },
  { id: "metal-aug",     name: "Metal Augment Station",      tier: "metal",     kind: "augment",   icon: "fa-solid fa-microchip",   prices: p(5.99, 5.99, 299),
    description: { en: "Tek-grade augments with stronger modifiers and unique perks.", tr: "Daha güçlü modifier ve özel perk'li Tek kalite augment." } },
];

// ─── Packages ────────────────────────────────────────────────
export type Pack = {
  id: string;
  name: string;
  tagline: { en: string; tr: string };
  prices: { usd: number; eur: number; try: number };
  points: number;
  badge?: { en: string; tr: string };
  highlight?: boolean;
  popular?: boolean;
  bestValue?: boolean;
  items: { icon: string; label: { en: string; tr: string } }[];
};

export const packages: Pack[] = [
  {
    id: "starter",
    name: "Starter Pack",
    tagline: { en: "Perfect for new survivors", tr: "Yeni başlayanlar için ideal" },
    prices: { usd: 10, eur: 10, try: 300 },
    points: 150,
    items: [
      { icon: "🐉", label: { en: "Wyvern (random type)",   tr: "Wyvern (rastgele tür)" } },
      { icon: "🦫", label: { en: "Maewing",                tr: "Maewing" } },
      { icon: "🛡️", label: { en: "Full Flak Armor Set",    tr: "Tam Flak Zırh Seti" } },
      { icon: "⛏️", label: { en: "Metal Pickaxe + Hatchet",tr: "Metal Kazma + Balta" } },
      { icon: "🍖", label: { en: "100× Cooked Meat",       tr: "100× Pişmiş Et" } },
      { icon: "🧪", label: { en: "50× Medical Brew",       tr: "50× Medical Brew" } },
      { icon: "❄️", label: { en: "3× Cryopod",             tr: "3× Cryopod" } },
      { icon: "⚙️", label: { en: "100× Metal Ingot",       tr: "100× Metal Ingot" } },
    ],
  },
  {
    id: "vip",
    name: "VIP Pack",
    tagline: { en: "Most popular survivor bundle", tr: "En çok tercih edilen paket" },
    prices: { usd: 25, eur: 25, try: 800 },
    points: 250,
    popular: true,
    highlight: true,
    badge: { en: "POPULAR", tr: "POPÜLER" },
    items: [
      { icon: "🐾", label: { en: "Shadowmane",                 tr: "Shadowmane" } },
      { icon: "🦉", label: { en: "Snow Owl",                   tr: "Snow Owl" } },
      { icon: "🔫", label: { en: "Ascendant Longneck Rifle",   tr: "Ascendant Longneck Rifle" } },
      { icon: "💥", label: { en: "100× Advanced Rifle Ammo",   tr: "100× Advanced Rifle Mermisi" } },
      { icon: "🛡️", label: { en: "Full Riot Armor Set",        tr: "Tam Riot Zırh Seti" } },
      { icon: "🧪", label: { en: "200× Medical Brew",          tr: "200× Medical Brew" } },
      { icon: "⚡", label: { en: "Cryofridge",                 tr: "Cryofridge" } },
      { icon: "❄️", label: { en: "5× Cryopod",                 tr: "5× Cryopod" } },
      { icon: "⚙️", label: { en: "500× Polymer",               tr: "500× Polymer" } },
    ],
  },
  {
    id: "legend",
    name: "Legend Pack",
    tagline: { en: "Best value end-game bundle", tr: "En iyi fiyatlı end-game paket" },
    prices: { usd: 40, eur: 40, try: 1300 },
    points: 500,
    bestValue: true,
    badge: { en: "BEST VALUE", tr: "EN İYİ FİYAT" },
    items: [
      { icon: "👑", label: { en: "Reaper",                    tr: "Reaper" } },
      { icon: "🐲", label: { en: "Voidwyrm",                  tr: "Voidwyrm" } },
      { icon: "⚡", label: { en: "Tek Rifle",                  tr: "Tek Rifle" } },
      { icon: "🔷", label: { en: "150× Element",              tr: "150× Element" } },
      { icon: "🤖", label: { en: "Full Tek Armor Set",        tr: "Tam Tek Zırh Seti" } },
      { icon: "🧪", label: { en: "300× Medical Brew",         tr: "300× Medical Brew" } },
      { icon: "💥", label: { en: "200× Advanced Rifle Ammo",  tr: "200× Advanced Rifle Mermisi" } },
      { icon: "⚡", label: { en: "Tek Generator",             tr: "Tek Generator" } },
      { icon: "📡", label: { en: "Tek Transmitter",           tr: "Tek Transmitter" } },
      { icon: "❄️", label: { en: "10× Cryopod",               tr: "10× Cryopod" } },
    ],
  },
];

// ─── Rules ────────────────────────────────────────────────
export type RuleCategory = {
  id: string;
  icon: string;
  title: { en: string; tr: string };
  rules: { en: string; tr: string }[];
};

export const ruleCategories: RuleCategory[] = [
  {
    id: "general", icon: "fa-solid fa-scroll",
    title: { en: "General Rules", tr: "Genel Kurallar" },
    rules: [
      { en: "Respect every player. Toxic behavior, hate speech, racism, sexism and personal attacks result in an immediate ban.",
        tr: "Her oyuncuya saygılı ol. Toksik davranış, nefret söylemi, ırkçılık, cinsiyetçilik ve kişisel saldırılar anında ban sebebidir." },
      { en: "Cheating, exploiting bugs, duping or using third-party tools is strictly forbidden.",
        tr: "Hile, bug istismarı, dupe veya üçüncü parti araç kullanımı kesinlikle yasaktır." },
      { en: "Selling or trading in-game items for real money outside of the official shop is not allowed.",
        tr: "Resmi market dışında oyun içi eşyaların gerçek para ile alım-satımı yasaktır." },
      { en: "Multi-accounting to bypass timers, limits or punishments is forbidden.",
        tr: "Süre, limit veya cezalardan kaçmak için çoklu hesap kullanımı yasaktır." },
      { en: "Admin decisions are final. Disputes are handled in Discord tickets, not in global chat.",
        tr: "Yönetici kararı kesindir. İtirazlar global chat'te değil, Discord ticket üzerinden yapılır." },
    ],
  },
  {
    id: "pvp", icon: "fa-solid fa-shield-halved",
    title: { en: "PvP / PvE Rules", tr: "PvP / PvE Kuralları" },
    rules: [
      { en: "This is a PvE-only cluster. Intentionally killing other players or their tames is forbidden.",
        tr: "Bu cluster sadece PvE'dir. Diğer oyuncuları veya tame'lerini bilerek öldürmek yasaktır." },
      { en: "Stealing from unlocked structures, drops or bodies is treated as a PvE violation.",
        tr: "Kilitsiz yapı, drop veya cesetlerden eşya çalmak PvE ihlali sayılır." },
      { en: "Kiting wild creatures, bosses or titans onto another tribe's base is bannable.",
        tr: "Vahşi yaratık, boss veya titan'ı başka bir kabilenin üssüne çekmek ban sebebidir." },
      { en: "Trapping, blocking or harassing other players in any way is not tolerated.",
        tr: "Diğer oyuncuları tuzaklamak, yollarını kesmek veya taciz etmek tolere edilmez." },
    ],
  },
  {
    id: "build", icon: "fa-solid fa-helmet-safety",
    title: { en: "Base Building Rules", tr: "Üs İnşa Kuralları" },
    rules: [
      { en: "Do not block obelisks, terminals, drops, caves, artifact rooms or resource-rich spawn zones.",
        tr: "Obelisk, terminal, drop, mağara, artifact odası veya kaynak spawn bölgelerini kapatma." },
      { en: "Pillar / foundation spam beyond a reasonable build radius is forbidden and will be wiped.",
        tr: "Makul inşaat sınırını aşan pillar / foundation spamı yasaktır ve silinir." },
      { en: "Each tribe may own a maximum of 2 bases per map. Old or abandoned bases will be cleaned up.",
        tr: "Her kabile harita başına en fazla 2 üs sahibi olabilir. Eski / terkedilmiş üsler temizlenir." },
      { en: "Bases inactive for more than 14 days may be demolished without notice.",
        tr: "14 günden fazla aktif olmayan üsler haber verilmeden silinebilir." },
    ],
  },
  {
    id: "dino", icon: "fa-solid fa-dragon",
    title: { en: "Dino Rules", tr: "Dino Kuralları" },
    rules: [
      { en: "Do not release, kill or leave aggressive tames near other players' bases.",
        tr: "Saldırgan tame'leri başka oyuncuların yakınında serbest bırakma, öldürme veya bırakma." },
      { en: "Use cryopods for transport. Dinos left blocking spawns or paths will be removed.",
        tr: "Taşıma için cryopod kullan. Spawn veya yolları kapatan dinolar silinir." },
      { en: "Breeding lines must be tribe-owned. Selling mutated lines outside the shop is forbidden.",
        tr: "Breeding lineları kabileye ait olmalı. Mutasyonlu lineları market dışında satmak yasaktır." },
      { en: "Each tribe may keep a maximum of 250 tames across the cluster.",
        tr: "Her kabile cluster genelinde en fazla 250 tame bulundurabilir." },
    ],
  },
  {
    id: "market", icon: "fa-solid fa-cart-shopping",
    title: { en: "Market Rules", tr: "Market Kuralları" },
    rules: [
      { en: "All purchases are final. Refunds are only issued if a delivery failure is verified by an admin.",
        tr: "Tüm satın alımlar finaldir. İade yalnızca admin tarafından teslim hatası doğrulandığında verilir." },
      { en: "Account sharing for purchases is not allowed. Items are tied to the buying Steam account.",
        tr: "Satın alma için hesap paylaşımı yasaktır. Eşyalar satın alan Steam hesabına bağlıdır." },
      { en: "Chargebacks result in a permanent ban from the cluster and Discord.",
        tr: "Chargeback (ödeme iptali) cluster ve Discord'dan kalıcı ban ile sonuçlanır." },
      { en: "Shop items are delivered automatically via RCON within 60 seconds. Open a ticket if delayed.",
        tr: "Market eşyaları RCON üzerinden 60 saniye içinde otomatik teslim edilir. Gecikirse ticket aç." },
    ],
  },
  {
    id: "punish", icon: "fa-solid fa-gavel",
    title: { en: "Punishments", tr: "Cezalar" },
    rules: [
      { en: "1st offense — verbal warning + temporary mute.",
        tr: "1. ihlal — sözlü uyarı + geçici mute." },
      { en: "2nd offense — 24-hour ban from the cluster and Discord.",
        tr: "2. ihlal — cluster ve Discord'dan 24 saat ban." },
      { en: "3rd offense — 7-day ban and inventory confiscation.",
        tr: "3. ihlal — 7 günlük ban ve envanter müsaderesi." },
      { en: "Severe violations (cheating, chargeback, doxxing) — permanent ban with no appeal.",
        tr: "Ağır ihlaller (hile, chargeback, doxxing) — itirazsız kalıcı ban." },
    ],
  },
];
