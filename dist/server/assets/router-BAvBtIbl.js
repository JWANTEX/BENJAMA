import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext, useRef, useCallback } from "react";
const appCss = "/assets/styles-eWhIN_hO.css";
const dict = {
  en: {
    "nav.about": "About",
    "nav.maps": "Maps",
    "nav.mods": "Mods",
    "nav.shop": "Shop",
    "nav.join": "Join",
    "nav.rules": "Rules",
    "nav.discord": "Discord",
    "nav.steam": "Steam",
    "nav.settings": "Settings",
    "about.eyebrow": "About Us",
    "about.more": "Read more",
    "hero.tagline": "PVE • Season 01 • Cluster Online Soon",
    "hero.subtitle": "One of the best ARK Survival Evolved servers.",
    "hero.cta.join": "Join Server",
    "hero.cta.discord": "Join Discord",
    "why.eyebrow": "Why Benjama",
    "why.title": "Built for survivors. Crafted for legends.",
    "why.subtitle": "A 100% PVE cluster engineered for stability, fairness, and a cinematic ARK experience.",
    "why.f1.title": "PVE Only",
    "why.f1.body": "No raids. No wars. Pure survival, taming, breeding and exploration.",
    "why.f2.title": "5-Map Cluster",
    "why.f2.body": "Transfer freely across The Island, Ragnarok, Fjordur, Extinction and Genesis 2.",
    "why.f3.title": "Curated Mods",
    "why.f3.body": "A hand-picked mod stack focused on quality of life and immersion.",
    "why.f4.title": "Dedicated Hardware",
    "why.f4.body": "Low-latency servers with automated backups and 24/7 monitoring.",
    "maps.eyebrow": "The Cluster",
    "maps.title": "Five Worlds. One Cluster.",
    "maps.status.offline": "OFFLINE",
    "maps.status.online": "ONLINE",
    "maps.players": "Players",
    "maps.connect": "Connect",
    "maps.ip": "IP Address",
    "mods.eyebrow": "Workshop",
    "mods.title": "All Mods Are Required",
    "mods.subtitle": "Subscribe to every mod below before launching ARK. The server will refuse the connection otherwise.",
    "mods.required": "REQUIRED",
    "mods.view": "View on Steam Workshop",
    "shop.eyebrow": "Creature Market",
    "shop.title": "Tame Anything. Up to Level 300.",
    "shop.subtitle": "Browse every creature across every map. Delivered to your tribe instantly.",
    "shop.buy": "Add to Cart",
    "shop.level": "Level",
    "shop.viewAll": "Browse Full Shop",
    "about.title": "About Benjama",
    "about.lead": "Benjama is a PVE-only ARK Survival Evolved cluster built by veteran survivors. No raids, no toxic combat — only the wild.",
    "about.p1": "We launched Benjama with one rule: respect the world, respect each other. Our cluster spans five hand-tuned maps with shared progression, dedicated hardware, and a curated mod stack designed for long-term tribes.",
    "about.p2": "Whether you are a solo tamer, a builder, or a breeder chasing perfect mutations, Benjama is the cinematic home your character deserves.",
    "join.title": "Join the Cluster",
    "join.lead": "Steam connection details, mod subscriptions, and Discord access.",
    "join.step1.title": "Subscribe to the mods",
    "join.step1.body": "Open the Workshop, subscribe to every required mod, then launch ARK.",
    "join.step2.title": "Connect via Steam server browser",
    "join.step2.body": "Open Steam → View → Servers → Favorites → Add a Server, paste the IP, then Connect.",
    "join.step3.title": "Say hello in Discord",
    "join.step3.body": "Introduce yourself, claim your starter pack, and find a tribe.",
    "join.copy": "Copy IP",
    "join.copied": "Copied",
    "footer.tagline": "PVE ARK Survival Evolved cluster",
    "footer.rights": "All rights reserved.",
    "footer.notice": "Not affiliated with Studio Wildcard. ARK: Survival Evolved is a trademark of its respective owners.",
    "common.soon": "Coming Soon"
  },
  tr: {
    "nav.about": "Hakkımızda",
    "nav.maps": "Haritalar",
    "nav.mods": "Modlar",
    "nav.shop": "Market",
    "nav.join": "Katıl",
    "nav.rules": "Kurallar",
    "nav.discord": "Discord",
    "nav.steam": "Steam",
    "nav.settings": "Ayarlar",
    "about.eyebrow": "Hakkımızda",
    "about.more": "Devamını oku",
    "hero.tagline": "PVE • Sezon 01 • Cluster Yakında Açılıyor",
    "hero.subtitle": "En iyi ARK Survival Evolved sunucularından biri.",
    "hero.cta.join": "Sunucuya Katıl",
    "hero.cta.discord": "Discord'a Katıl",
    "why.eyebrow": "Neden Benjama",
    "why.title": "Hayatta kalanlar için. Efsaneler için.",
    "why.subtitle": "Stabilite, adalet ve sinematik ARK deneyimi için tasarlanmış %100 PVE cluster.",
    "why.f1.title": "Sadece PVE",
    "why.f1.body": "Raid yok. Savaş yok. Sadece saf survival, taming, breeding ve keşif.",
    "why.f2.title": "5 Haritalı Cluster",
    "why.f2.body": "The Island, Ragnarok, Fjordur, Extinction ve Genesis 2 arasında özgürce transfer.",
    "why.f3.title": "Seçili Modlar",
    "why.f3.body": "Konfor ve atmosfer için özenle seçilmiş mod paketi.",
    "why.f4.title": "Özel Donanım",
    "why.f4.body": "Düşük gecikme, otomatik yedek ve 7/24 izleme.",
    "maps.eyebrow": "Cluster",
    "maps.title": "Beş Dünya. Tek Cluster.",
    "maps.status.offline": "ÇEVRİMDIŞI",
    "maps.status.online": "ÇEVRİMİÇİ",
    "maps.players": "Oyuncular",
    "maps.connect": "Bağlan",
    "maps.ip": "IP Adresi",
    "mods.eyebrow": "Workshop",
    "mods.title": "Tüm Modlar Zorunludur",
    "mods.subtitle": "ARK'ı başlatmadan önce aşağıdaki tüm modlara abone ol. Aksi takdirde sunucu bağlantıyı reddeder.",
    "mods.required": "ZORUNLU",
    "mods.view": "Steam Workshop'ta Görüntüle",
    "shop.eyebrow": "Yaratık Pazarı",
    "shop.title": "Her şeyi evcilleştir. Seviye 300'e kadar.",
    "shop.subtitle": "Tüm haritalardaki her yaratığa göz at. Anında kabilene teslim.",
    "shop.buy": "Sepete Ekle",
    "shop.level": "Seviye",
    "shop.viewAll": "Tüm Mağazayı Gör",
    "about.title": "Benjama Hakkında",
    "about.lead": "Benjama, deneyimli oyuncular tarafından kurulmuş yalnızca PVE odaklı bir ARK Survival Evolved cluster'ıdır. Raid yok, toksik savaş yok — sadece vahşi doğa.",
    "about.p1": "Benjama'yı tek bir kuralla başlattık: dünyaya ve birbirimize saygı. Cluster'ımız beş elden ayarlanmış harita, paylaşımlı ilerleme, özel donanım ve uzun ömürlü kabileler için seçilmiş bir mod yığınından oluşur.",
    "about.p2": "İster solo tamer, ister inşaatçı, ister mükemmel mutasyonların peşinde bir breeder ol — Benjama, karakterinin hak ettiği sinematik yuvadır.",
    "join.title": "Cluster'a Katıl",
    "join.lead": "Steam bağlantı bilgileri, mod abonelikleri ve Discord erişimi.",
    "join.step1.title": "Modlara abone ol",
    "join.step1.body": "Workshop'u aç, tüm zorunlu modlara abone ol, ardından ARK'ı başlat.",
    "join.step2.title": "Steam sunucu tarayıcısından bağlan",
    "join.step2.body": "Steam → View → Servers → Favorites → Add a Server, IP'yi yapıştır, Connect.",
    "join.step3.title": "Discord'da merhaba de",
    "join.step3.body": "Kendini tanıt, başlangıç paketini al, kendine bir kabile bul.",
    "join.copy": "IP'yi Kopyala",
    "join.copied": "Kopyalandı",
    "footer.tagline": "PVE ARK Survival Evolved cluster'ı",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.notice": "Studio Wildcard ile bağlantılı değildir. ARK: Survival Evolved kendi sahiplerinin tescilli markasıdır.",
    "common.soon": "Yakında"
  }
};
const I18nCtx = createContext(null);
function I18nProvider({ children }) {
  const [lang, setLangState] = useState("en");
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("benjama_lang");
    if (saved === "tr" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("benjama_lang", l);
  };
  const t = (key) => dict[lang][key] ?? dict.en[key] ?? key;
  return /* @__PURE__ */ jsx(I18nCtx.Provider, { value: { lang, setLang, t }, children });
}
function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
function formatPrice(lang, prices) {
  if (lang === "tr") {
    return `${prices.try.toLocaleString("tr-TR")} ₺`;
  }
  return `$${prices.usd.toFixed(2)} / €${prices.eur.toFixed(2)}`;
}
const logo = "/assets/logo-BhipV840.png";
const islandImg = "/assets/map-island-BZykpH1G.jpg";
const ragnarokImg = "/assets/map-ragnarok-QDSOsP5u.jpg";
const fjordurImg = "/assets/map-fjordur-WcOCKFFx.jpg";
const extinctionImg = "/assets/map-extinction-QWH1MPt0.jpg";
const genesis2Img = "/assets/map-genesis2-CBao42U_.jpg";
const islandLogo = "/assets/logo-island-CAMky30G.png";
const ragnarokLogo = "/assets/logo-ragnarok-ByPrkvwI.png";
const fjordurLogo = "/assets/logo-fjordur-BMq6KCSH.png";
const extinctionLogo = "/assets/logo-extinction-BeNjx4j5.png";
const genesis2Logo = "/assets/logo-genesis2-DELBjts4.png";
const imgGiga = "/assets/Giganotosaurus-Ba2tJtKz.webp";
const imgRex = "/assets/rex-QOi6iPt6.webp";
const imgCarcha = "/assets/carcharodontosaurus-C5KUQOOY.webp";
const imgCrystal = "/assets/crystalwyvern-C8aJuK0F.webp";
const imgCrystalQueen = "/assets/crystalwyvernqueen-BVWzadgO.webp";
const imgEmber = "/assets/256px-Ember_Crystal_Wyvern_PaintRegion4-6pL-iw-q.webp";
const imgRockDrake = "/assets/rockdrake-SMT8K48B.webp";
const imgReaper = "/assets/reaper-DHciTgbn.webp";
const imgBasilisk = "/assets/basilisk-Bv87UZ51.webp";
const imgKarkinos = "/assets/karkinos-Dc1Cfv1Y.webp";
const imgRavager = "/assets/ravager-BAia3OqH.webp";
const imgRollRat = "/assets/rollrat-qMUqkXpK.webp";
const imgBulbdog = "/assets/bulbdog-CnFQbYLo.webp";
const imgShinehorn = "/assets/shinehorn-CnLvhTnP.webp";
const imgFeatherlight = "/assets/Featherlight-BwVjeRWI.webp";
const imgGlowtail = "/assets/glowtail-Dz_zjyG9.webp";
const imgWyvern = "/assets/wyvern-D0sIAX2c.webp";
const imgLightningWyvern = "/assets/Ark_LightningWyvern_Render-LQ_3P26K.webp";
const imgPoisonWyvern = "/assets/Ark_PoisonWyvern_Render-EpCvDLTu.webp";
const imgPhoenix = "/assets/phoenix-Lpvp0AoJ.webp";
const imgRockElem = "/assets/Rock_Elemental-kgW37hiJ.webp";
const imgJerboa = "/assets/jerboa-BFEG4KXf.webp";
const imgZombieWyvern = "/assets/Zombie_Fire_Wyvern_PaintRegion1-Bd2cfdVf.webp";
const imgZombieLightning = "/assets/Ark_ZombieLightningWyvern_Render-0B0aIDhN.webp";
const imgMorella = "/assets/morellatops-D9Lmqw3F.webp";
const imgThorny = "/assets/thornydragon-BdEdUwwL.webp";
const imgLymantria = "/assets/lymantria-luKUVSDh.webp";
const imgManagarmr = "/assets/managarmr-C0vEXUI0.webp";
const imgOwl = "/assets/owl-9PTVts8F.png";
const imgVelona = "/assets/velonasaur-eEL7ns5P.webp";
const imgEnforcer = "/assets/enforcer-gaLDGZcr.webp";
const imgGasbags = "/assets/gasbags-DLuz2b-8.webp";
const imgForestTitan = "/assets/foresttitan-BDU83Aj_.webp";
const imgIceTitan = "/assets/icetitan-CXovJss2.webp";
const imgDesertTitan = "/assets/deserttitan-fgI1dOtr.webp";
const imgBlood = "/assets/bloodstalker-BBu8ndGO.webp";
const imgMagma = "/assets/Magmasaur_PaintRegion2-B36alC6J.webp";
const imgFerox = "/assets/ferox-J-CR5kSe.webp";
const imgMegachelon = "/assets/megachelon-84K5IhvL.webp";
const imgAstrocetus = "/assets/astrocetus-C-lzroYt.webp";
const imgVoidwyrm = "/assets/voidwyrm-C0gmzWDJ.webp";
const imgAstrodelphis = "/assets/astrodelphis-6tuki-dN.webp";
const imgNoglin = "/assets/noglin-B3LqlfRf.webp";
const imgStryder = "/assets/stryder-5AqgjCOu.webp";
const imgMaewing = "/assets/maewing-BSr4uzLl.webp";
const imgTropeo = "/assets/tropeognathus-CHLKaePQ.webp";
const imgDinopith = "/assets/dinopithecus-CUTMzgm6.webp";
const imgSinomacrops = "/assets/sinomacrops-1Kx8btx3.webp";
const imgDodorex = "/assets/dodorex-BfPyGw2M.webp";
const SERVER_IP = "45.87.120.21";
const DISCORD_INVITE = "https://discord.gg/EkPHVcb8nj";
const STEAM_GROUP = "https://steamcommunity.com/groups/arkbenjama";
const maps = [
  { id: "island", name: "The Island", image: islandImg, logo: islandLogo, ip: SERVER_IP, port: 27015, players: 0, maxPlayers: 67, online: false },
  { id: "ragnarok", name: "Ragnarok", image: ragnarokImg, logo: ragnarokLogo, ip: SERVER_IP, port: 27017, players: 0, maxPlayers: 67, online: false },
  { id: "fjordur", name: "Fjordur", image: fjordurImg, logo: fjordurLogo, ip: SERVER_IP, port: 27019, players: 0, maxPlayers: 67, online: false },
  { id: "extinction", name: "Extinction", image: extinctionImg, logo: extinctionLogo, ip: SERVER_IP, port: 27021, players: 0, maxPlayers: 67, online: false },
  { id: "genesis2", name: "Genesis: Part 2", image: genesis2Img, logo: genesis2Logo, ip: SERVER_IP, port: 27023, players: 0, maxPlayers: 67, online: false }
];
const mods = [
  { id: "2103157852", name: "Super Structures", description: { en: "Quality-of-life building suite with auto-demo, structure picker, and snap fixes.", tr: "Otomatik yıkım, yapı seçici ve snap düzeltmeleriyle yapı kalite paketi." } },
  { id: "821530042", name: "Awesome SpyGlass!", description: { en: "Detailed creature stats, breeding info, taming readouts and stat overlays.", tr: "Detaylı yaratık istatistikleri, breeding bilgisi, taming değerleri ve stat overlay." } },
  { id: "2623890618", name: "Awesome Teleporters!", description: { en: "Linkable teleporter network for fast and safe cluster travel.", tr: "Hızlı ve güvenli cluster içi seyahat için bağlanabilir teleport ağı." } },
  { id: "1404697612", name: "Castles, Keeps and Forts Remastered", description: { en: "Medieval-grade building set with castles, keeps, gates and decor.", tr: "Kale, sur, kapı ve dekorlarla orta çağ kalitesinde yapı seti." } },
  { id: "889745138", name: "Awesome Teleporters", description: { en: "Original teleporter mod — paired waypoints for instant travel.", tr: "Orijinal teleport modu — eşlenmiş waypoint'lerle anlık seyahat." } },
  { id: "1591643730", name: "Structures Plus (S+)", description: { en: "Classic S+ structure set with auto-pulling, demo gun and pickup.", tr: "Auto-pull, demo gun ve pickup özellikleriyle klasik S+ yapı seti." } },
  { id: "924619115", name: "Platforms Plus", description: { en: "Extended platform saddles and movable bases.", tr: "Genişletilmiş platform saddle ve taşınabilir üs sistemleri." } },
  { id: "1295978823", name: "Dino Storage v2", description: { en: "Capture, store and trade tames as soul balls with no rot.", tr: "Tame'leri ruh küresi olarak yakala, depola ve takas et — bozulma yok." } },
  { id: "741203089", name: "Death Recovery Mod", description: { en: "Recover your full inventory after death via tracked bag.", tr: "Ölümden sonra eşyalarını takip edilen çantadan geri al." } },
  { id: "1999447172", name: "Awesome Teleporters Plus", description: { en: "Expanded teleporter platform with dino-aware transport.", tr: "Dino taşımayı destekleyen genişletilmiş teleport platformu." } }
];
const p = (usd, eur, t) => ({ usd, eur, try: t });
const creatures = [
  // Apex
  { id: "giga", name: "Giganotosaurus", image: imgGiga, level: 300, rarity: "legendary", category: "creature", prices: p(7, 7, 240) },
  { id: "rex", name: "Tyrannosaurus Rex", image: imgRex, level: 300, rarity: "rare", category: "creature", prices: p(3, 3, 100) },
  { id: "carcha", name: "Carcharodontosaurus", image: imgCarcha, level: 300, rarity: "legendary", category: "creature", prices: p(10, 10, 520) },
  // Crystal Wyverns
  { id: "cw-blood", name: "Blood Crystal Wyvern", image: imgCrystalQueen, level: 300, rarity: "legendary", category: "creature", prices: p(4, 4, 200) },
  { id: "cw-tropical", name: "Tropical Crystal Wyvern", image: imgCrystal, level: 300, rarity: "rare", category: "creature", prices: p(4, 4, 200) },
  { id: "cw-ember", name: "Ember Crystal Wyvern", image: imgEmber, level: 300, rarity: "rare", category: "creature", prices: p(4, 4, 200) },
  // Aberration
  { id: "rock-drake", name: "Rock Drake", image: imgRockDrake, level: 300, rarity: "legendary", category: "creature", prices: p(5, 5, 170) },
  { id: "reaper", name: "Reaper (Queen/King)", image: imgReaper, level: 300, rarity: "legendary", category: "creature", prices: p(5, 5, 200) },
  { id: "basilisk", name: "Basilisk", image: imgBasilisk, level: 300, rarity: "rare", category: "creature", prices: p(3, 3, 100) },
  { id: "karkinos", name: "Karkinos", image: imgKarkinos, level: 300, rarity: "rare", category: "creature", prices: p(3, 3, 100) },
  { id: "ravager", name: "Ravager", image: imgRavager, level: 300, rarity: "common", category: "creature", prices: p(2, 2, 70) },
  { id: "roll-rat", name: "Roll Rat", image: imgRollRat, level: 300, rarity: "common", category: "creature", prices: p(2, 2, 70) },
  { id: "bulbdog", name: "Bulbdog", image: imgBulbdog, level: 300, rarity: "common", category: "creature", prices: p(1, 1, 35) },
  { id: "shinehorn", name: "Shinehorn", image: imgShinehorn, level: 300, rarity: "common", category: "creature", prices: p(1, 1, 35) },
  { id: "featherlight", name: "Featherlight", image: imgFeatherlight, level: 300, rarity: "common", category: "creature", prices: p(1, 1, 35) },
  { id: "glowtail", name: "Glowtail", image: imgGlowtail, level: 300, rarity: "common", category: "creature", prices: p(1, 1, 35) },
  // Wyverns
  { id: "wyvern-fire", name: "Fire Wyvern", image: imgWyvern, level: 300, rarity: "legendary", category: "creature", prices: p(4, 4, 140) },
  { id: "wyvern-light", name: "Lightning Wyvern", image: imgLightningWyvern, level: 300, rarity: "legendary", category: "creature", prices: p(4, 4, 140) },
  { id: "wyvern-poison", name: "Poison Wyvern", image: imgPoisonWyvern, level: 300, rarity: "legendary", category: "creature", prices: p(4, 4, 140) },
  { id: "zombie-wyvern", name: "Zombie Wyvern", image: imgZombieWyvern, level: 300, rarity: "legendary", category: "creature", prices: p(7, 7, 300) },
  { id: "phoenix", name: "Phoenix", image: imgPhoenix, level: 300, rarity: "legendary", category: "creature", prices: p(7, 7, 440) },
  // Scorched / desert
  { id: "rock-elemental", name: "Rock Elemental", image: imgRockElem, level: 300, rarity: "rare", category: "creature", prices: p(4, 4, 140) },
  { id: "jerboa", name: "Jerboa", image: imgJerboa, level: 300, rarity: "common", category: "creature", prices: p(1, 1, 35) },
  { id: "morellatops", name: "Morellatops", image: imgMorella, level: 300, rarity: "common", category: "creature", prices: p(2, 2, 70) },
  { id: "thorny", name: "Thorny Dragon", image: imgThorny, level: 300, rarity: "common", category: "creature", prices: p(2, 2, 70) },
  { id: "lymantria", name: "Lymantria", image: imgLymantria, level: 300, rarity: "common", category: "creature", prices: p(2, 2, 70) },
  // Extinction
  { id: "managarmr", name: "Managarmr", image: imgManagarmr, level: 300, rarity: "rare", category: "creature", prices: p(4, 4, 140) },
  { id: "snow-owl", name: "Snow Owl", image: imgOwl, level: 300, rarity: "rare", category: "creature", prices: p(4, 4, 200) },
  { id: "velonasaur", name: "Velonasaur", image: imgVelona, level: 300, rarity: "rare", category: "creature", prices: p(3, 3, 100) },
  { id: "enforcer", name: "Enforcer", image: imgEnforcer, level: 300, rarity: "common", category: "creature", prices: p(2, 2, 70) },
  { id: "gasbags", name: "Gasbags", image: imgGasbags, level: 300, rarity: "common", category: "creature", prices: p(2, 2, 70) },
  // Titans
  { id: "forest-titan", name: "Forest Titan", image: imgForestTitan, level: 1500, rarity: "titan", category: "titan", prices: p(20, 20, 1e3) },
  { id: "ice-titan", name: "Ice Titan", image: imgIceTitan, level: 1500, rarity: "titan", category: "titan", prices: p(20, 20, 1e3) },
  { id: "desert-titan", name: "Desert Titan", image: imgDesertTitan, level: 1500, rarity: "titan", category: "titan", prices: p(20, 20, 1e3) },
  // Genesis
  { id: "bloodstalker", name: "Bloodstalker", image: imgBlood, level: 300, rarity: "rare", category: "creature", prices: p(4, 4, 140) },
  { id: "magmasaur", name: "Magmasaur", image: imgMagma, level: 300, rarity: "legendary", category: "creature", prices: p(5, 5, 170) },
  { id: "ferox", name: "Ferox", image: imgFerox, level: 300, rarity: "rare", category: "creature", prices: p(3, 3, 100) },
  { id: "megachelon", name: "Megachelon", image: imgMegachelon, level: 300, rarity: "rare", category: "creature", prices: p(3, 3, 100) },
  // Genesis 2
  { id: "astrocetus", name: "Astrocetus", image: imgAstrocetus, level: 300, rarity: "tek", category: "creature", prices: p(5, 5, 250) },
  { id: "voidwyrm", name: "Voidwyrm", image: imgVoidwyrm, level: 300, rarity: "tek", category: "creature", prices: p(5, 5, 250) },
  { id: "astrodelphis", name: "Astrodelphis", image: imgAstrodelphis, level: 300, rarity: "tek", category: "creature", prices: p(4, 4, 140) },
  { id: "noglin", name: "Noglin", image: imgNoglin, level: 300, rarity: "rare", category: "creature", prices: p(4, 4, 140) },
  { id: "stryder", name: "Tek Stryder", image: imgStryder, level: 300, rarity: "tek", category: "creature", prices: p(10, 10, 500) },
  { id: "maewing", name: "Maewing", image: imgMaewing, level: 300, rarity: "rare", category: "creature", prices: p(3, 3, 100) },
  // LWE
  { id: "tropeo", name: "Tropeognathus", image: imgTropeo, level: 300, rarity: "rare", category: "creature", prices: p(4, 4, 140) },
  { id: "dinopith", name: "Dinopithecus", image: imgDinopith, level: 300, rarity: "rare", category: "creature", prices: p(3, 3, 100) },
  { id: "sinomacrops", name: "Sinomacrops", image: imgSinomacrops, level: 300, rarity: "common", category: "creature", prices: p(2, 2, 70) },
  // Boss
  { id: "dodorex", name: "DodoRex", image: imgDodorex, level: 300, rarity: "legendary", category: "creature", prices: p(20, 20, 1100) },
  // Bonus zombie
  { id: "zombie-lightning", name: "Zombie Lightning Wyvern", image: imgZombieLightning, level: 300, rarity: "legendary", category: "creature", prices: p(7, 7, 300) }
];
const stations = [
  {
    id: "prim-upgrade",
    name: "Primitive Upgrade Station",
    tier: "primitive",
    kind: "upgrade",
    icon: "fa-solid fa-hammer",
    prices: p(9.99, 9.99, 399),
    description: { en: "Upgrade items from Primitive up to Ascendant tier.", tr: "Eşyaları Primitive'den Ascendant seviyesine yükselt." }
  },
  {
    id: "metal-upgrade",
    name: "Metal Upgrade Station",
    tier: "metal",
    kind: "upgrade",
    icon: "fa-solid fa-screwdriver-wrench",
    prices: p(14.99, 14.99, 599),
    description: { en: "High-tier upgrade bench with faster crafting & better rolls.", tr: "Daha hızlı craft ve daha iyi roll'lar sunan üst seviye bench." }
  },
  {
    id: "prim-bp",
    name: "Primitive Blueprint Station",
    tier: "primitive",
    kind: "blueprint",
    icon: "fa-solid fa-scroll",
    prices: p(9.99, 9.99, 399),
    description: { en: "Generate random blueprints up to Journeyman quality.", tr: "Journeyman kalitesine kadar rastgele blueprint üret." }
  },
  {
    id: "metal-bp",
    name: "Metal Blueprint Station",
    tier: "metal",
    kind: "blueprint",
    icon: "fa-solid fa-file-invoice",
    prices: p(14.99, 14.99, 599),
    description: { en: "Roll high-tier blueprints up to Ascendant quality.", tr: "Ascendant'a kadar üst seviye blueprint üret." }
  },
  {
    id: "prim-aug",
    name: "Primitive Augment Station",
    tier: "primitive",
    kind: "augment",
    icon: "fa-solid fa-flask",
    prices: p(4.99, 4.99, 199),
    description: { en: "Apply basic stat augments to weapons and armor.", tr: "Silah ve armor'a temel stat augment uygula." }
  },
  {
    id: "metal-aug",
    name: "Metal Augment Station",
    tier: "metal",
    kind: "augment",
    icon: "fa-solid fa-microchip",
    prices: p(5.99, 5.99, 299),
    description: { en: "Tek-grade augments with stronger modifiers and unique perks.", tr: "Daha güçlü modifier ve özel perk'li Tek kalite augment." }
  }
];
const packages = [
  {
    id: "starter",
    name: "Starter Pack",
    tagline: { en: "Perfect for new survivors", tr: "Yeni başlayanlar için ideal" },
    prices: { usd: 10, eur: 10, try: 300 },
    points: 150,
    items: [
      { icon: "🐉", label: { en: "Wyvern (random type)", tr: "Wyvern (rastgele tür)" } },
      { icon: "🦫", label: { en: "Maewing", tr: "Maewing" } },
      { icon: "🛡️", label: { en: "Full Flak Armor Set", tr: "Tam Flak Zırh Seti" } },
      { icon: "⛏️", label: { en: "Metal Pickaxe + Hatchet", tr: "Metal Kazma + Balta" } },
      { icon: "🍖", label: { en: "100× Cooked Meat", tr: "100× Pişmiş Et" } },
      { icon: "🧪", label: { en: "50× Medical Brew", tr: "50× Medical Brew" } },
      { icon: "❄️", label: { en: "3× Cryopod", tr: "3× Cryopod" } },
      { icon: "⚙️", label: { en: "100× Metal Ingot", tr: "100× Metal Ingot" } }
    ]
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
      { icon: "🐾", label: { en: "Shadowmane", tr: "Shadowmane" } },
      { icon: "🦉", label: { en: "Snow Owl", tr: "Snow Owl" } },
      { icon: "🔫", label: { en: "Ascendant Longneck Rifle", tr: "Ascendant Longneck Rifle" } },
      { icon: "💥", label: { en: "100× Advanced Rifle Ammo", tr: "100× Advanced Rifle Mermisi" } },
      { icon: "🛡️", label: { en: "Full Riot Armor Set", tr: "Tam Riot Zırh Seti" } },
      { icon: "🧪", label: { en: "200× Medical Brew", tr: "200× Medical Brew" } },
      { icon: "⚡", label: { en: "Cryofridge", tr: "Cryofridge" } },
      { icon: "❄️", label: { en: "5× Cryopod", tr: "5× Cryopod" } },
      { icon: "⚙️", label: { en: "500× Polymer", tr: "500× Polymer" } }
    ]
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
      { icon: "👑", label: { en: "Reaper", tr: "Reaper" } },
      { icon: "🐲", label: { en: "Voidwyrm", tr: "Voidwyrm" } },
      { icon: "⚡", label: { en: "Tek Rifle", tr: "Tek Rifle" } },
      { icon: "🔷", label: { en: "150× Element", tr: "150× Element" } },
      { icon: "🤖", label: { en: "Full Tek Armor Set", tr: "Tam Tek Zırh Seti" } },
      { icon: "🧪", label: { en: "300× Medical Brew", tr: "300× Medical Brew" } },
      { icon: "💥", label: { en: "200× Advanced Rifle Ammo", tr: "200× Advanced Rifle Mermisi" } },
      { icon: "⚡", label: { en: "Tek Generator", tr: "Tek Generator" } },
      { icon: "📡", label: { en: "Tek Transmitter", tr: "Tek Transmitter" } },
      { icon: "❄️", label: { en: "10× Cryopod", tr: "10× Cryopod" } }
    ]
  }
];
const ruleCategories = [
  {
    id: "general",
    icon: "fa-solid fa-scroll",
    title: { en: "General Rules", tr: "Genel Kurallar" },
    rules: [
      {
        en: "Respect every player. Toxic behavior, hate speech, racism, sexism and personal attacks result in an immediate ban.",
        tr: "Her oyuncuya saygılı ol. Toksik davranış, nefret söylemi, ırkçılık, cinsiyetçilik ve kişisel saldırılar anında ban sebebidir."
      },
      {
        en: "Cheating, exploiting bugs, duping or using third-party tools is strictly forbidden.",
        tr: "Hile, bug istismarı, dupe veya üçüncü parti araç kullanımı kesinlikle yasaktır."
      },
      {
        en: "Selling or trading in-game items for real money outside of the official shop is not allowed.",
        tr: "Resmi market dışında oyun içi eşyaların gerçek para ile alım-satımı yasaktır."
      },
      {
        en: "Multi-accounting to bypass timers, limits or punishments is forbidden.",
        tr: "Süre, limit veya cezalardan kaçmak için çoklu hesap kullanımı yasaktır."
      },
      {
        en: "Admin decisions are final. Disputes are handled in Discord tickets, not in global chat.",
        tr: "Yönetici kararı kesindir. İtirazlar global chat'te değil, Discord ticket üzerinden yapılır."
      }
    ]
  },
  {
    id: "pvp",
    icon: "fa-solid fa-shield-halved",
    title: { en: "PvP / PvE Rules", tr: "PvP / PvE Kuralları" },
    rules: [
      {
        en: "This is a PvE-only cluster. Intentionally killing other players or their tames is forbidden.",
        tr: "Bu cluster sadece PvE'dir. Diğer oyuncuları veya tame'lerini bilerek öldürmek yasaktır."
      },
      {
        en: "Stealing from unlocked structures, drops or bodies is treated as a PvE violation.",
        tr: "Kilitsiz yapı, drop veya cesetlerden eşya çalmak PvE ihlali sayılır."
      },
      {
        en: "Kiting wild creatures, bosses or titans onto another tribe's base is bannable.",
        tr: "Vahşi yaratık, boss veya titan'ı başka bir kabilenin üssüne çekmek ban sebebidir."
      },
      {
        en: "Trapping, blocking or harassing other players in any way is not tolerated.",
        tr: "Diğer oyuncuları tuzaklamak, yollarını kesmek veya taciz etmek tolere edilmez."
      }
    ]
  },
  {
    id: "build",
    icon: "fa-solid fa-helmet-safety",
    title: { en: "Base Building Rules", tr: "Üs İnşa Kuralları" },
    rules: [
      {
        en: "Do not block obelisks, terminals, drops, caves, artifact rooms or resource-rich spawn zones.",
        tr: "Obelisk, terminal, drop, mağara, artifact odası veya kaynak spawn bölgelerini kapatma."
      },
      {
        en: "Pillar / foundation spam beyond a reasonable build radius is forbidden and will be wiped.",
        tr: "Makul inşaat sınırını aşan pillar / foundation spamı yasaktır ve silinir."
      },
      {
        en: "Each tribe may own a maximum of 2 bases per map. Old or abandoned bases will be cleaned up.",
        tr: "Her kabile harita başına en fazla 2 üs sahibi olabilir. Eski / terkedilmiş üsler temizlenir."
      },
      {
        en: "Bases inactive for more than 14 days may be demolished without notice.",
        tr: "14 günden fazla aktif olmayan üsler haber verilmeden silinebilir."
      }
    ]
  },
  {
    id: "dino",
    icon: "fa-solid fa-dragon",
    title: { en: "Dino Rules", tr: "Dino Kuralları" },
    rules: [
      {
        en: "Do not release, kill or leave aggressive tames near other players' bases.",
        tr: "Saldırgan tame'leri başka oyuncuların yakınında serbest bırakma, öldürme veya bırakma."
      },
      {
        en: "Use cryopods for transport. Dinos left blocking spawns or paths will be removed.",
        tr: "Taşıma için cryopod kullan. Spawn veya yolları kapatan dinolar silinir."
      },
      {
        en: "Breeding lines must be tribe-owned. Selling mutated lines outside the shop is forbidden.",
        tr: "Breeding lineları kabileye ait olmalı. Mutasyonlu lineları market dışında satmak yasaktır."
      },
      {
        en: "Each tribe may keep a maximum of 250 tames across the cluster.",
        tr: "Her kabile cluster genelinde en fazla 250 tame bulundurabilir."
      }
    ]
  },
  {
    id: "market",
    icon: "fa-solid fa-cart-shopping",
    title: { en: "Market Rules", tr: "Market Kuralları" },
    rules: [
      {
        en: "All purchases are final. Refunds are only issued if a delivery failure is verified by an admin.",
        tr: "Tüm satın alımlar finaldir. İade yalnızca admin tarafından teslim hatası doğrulandığında verilir."
      },
      {
        en: "Account sharing for purchases is not allowed. Items are tied to the buying Steam account.",
        tr: "Satın alma için hesap paylaşımı yasaktır. Eşyalar satın alan Steam hesabına bağlıdır."
      },
      {
        en: "Chargebacks result in a permanent ban from the cluster and Discord.",
        tr: "Chargeback (ödeme iptali) cluster ve Discord'dan kalıcı ban ile sonuçlanır."
      },
      {
        en: "Shop items are delivered automatically via RCON within 60 seconds. Open a ticket if delayed.",
        tr: "Market eşyaları RCON üzerinden 60 saniye içinde otomatik teslim edilir. Gecikirse ticket aç."
      }
    ]
  },
  {
    id: "punish",
    icon: "fa-solid fa-gavel",
    title: { en: "Punishments", tr: "Cezalar" },
    rules: [
      {
        en: "1st offense — verbal warning + temporary mute.",
        tr: "1. ihlal — sözlü uyarı + geçici mute."
      },
      {
        en: "2nd offense — 24-hour ban from the cluster and Discord.",
        tr: "2. ihlal — cluster ve Discord'dan 24 saat ban."
      },
      {
        en: "3rd offense — 7-day ban and inventory confiscation.",
        tr: "3. ihlal — 7 günlük ban ve envanter müsaderesi."
      },
      {
        en: "Severe violations (cheating, chargeback, doxxing) — permanent ban with no appeal.",
        tr: "Ağır ihlaller (hile, chargeback, doxxing) — itirazsız kalıcı ban."
      }
    ]
  }
];
function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex w-full items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-300 ${scrolled ? "glass-strong shadow-deep" : "glass"}`,
            children: [
              /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-center gap-3 pl-1", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logo,
                    alt: "Benjama",
                    className: "h-10 w-10 object-contain drop-shadow-[0_0_18px_oklch(0.82_0.18_215/0.5)]"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "hidden flex-col leading-none sm:flex", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-bold tracking-[0.2em] text-gradient-neon", children: "BENJAMA" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "ARK Cluster" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-1 md:flex", children: [
                /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }),
                /* @__PURE__ */ jsx(NavLink, { to: "/about", children: t("nav.about") }),
                /* @__PURE__ */ jsx(NavLink, { to: "/maps", children: t("nav.maps") }),
                /* @__PURE__ */ jsx(NavLink, { to: "/mods", children: t("nav.mods") }),
                /* @__PURE__ */ jsx(NavLink, { to: "/shop", children: t("nav.shop") }),
                /* @__PURE__ */ jsx(NavLink, { to: "/rules", children: t("nav.rules") }),
                /* @__PURE__ */ jsx(NavLink, { to: "/join", children: t("nav.join") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(LangToggle, { lang, setLang }),
                /* @__PURE__ */ jsx(
                  UtilityIcon,
                  {
                    href: DISCORD_INVITE,
                    label: t("nav.discord"),
                    iconClass: "fa-brands fa-discord",
                    color: "discord"
                  }
                ),
                /* @__PURE__ */ jsx(
                  UtilityIcon,
                  {
                    href: STEAM_GROUP,
                    label: t("nav.steam"),
                    iconClass: "fa-brands fa-steam",
                    color: "steam"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/join",
                    className: "ml-1 hidden items-center gap-2 rounded-lg border-neon bg-primary/15 px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-neon transition-colors hover:bg-primary/25 sm:inline-flex",
                    children: [
                      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-plug" }),
                      t("nav.join")
                    ]
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "fixed inset-x-3 bottom-3 z-50 md:hidden", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong flex items-center justify-around rounded-2xl px-2 py-2 shadow-deep", children: [
          /* @__PURE__ */ jsx(MobileLink, { to: "/", icon: "fa-solid fa-house", label: "Home" }),
          /* @__PURE__ */ jsx(MobileLink, { to: "/maps", icon: "fa-solid fa-map", label: t("nav.maps") }),
          /* @__PURE__ */ jsx(MobileLink, { to: "/shop", icon: "fa-solid fa-shop", label: t("nav.shop") }),
          /* @__PURE__ */ jsx(MobileLink, { to: "/join", icon: "fa-solid fa-plug", label: t("nav.join") }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: DISCORD_INVITE,
              target: "_blank",
              rel: "noreferrer",
              className: "flex flex-col items-center gap-0.5 px-3 py-1 text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ jsx("i", { className: "fa-brands fa-discord text-base" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px]", children: "Discord" })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
function NavLink({ to, children }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to,
      className: "rounded-lg px-4 py-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
      activeProps: { className: "text-neon" },
      children
    }
  );
}
function MobileLink({ to, icon, label }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to,
      className: "flex flex-col items-center gap-0.5 px-3 py-1 text-xs text-muted-foreground",
      activeProps: { className: "text-neon" },
      children: [
        /* @__PURE__ */ jsx("i", { className: `${icon} text-base` }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px]", children: label })
      ]
    }
  );
}
function UtilityIcon({
  href,
  label,
  iconClass,
  color
}) {
  const colorClass = color === "discord" ? "hover:text-discord" : "hover:text-steam";
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": label,
      className: `flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-white/5 ${colorClass}`,
      children: /* @__PURE__ */ jsx("i", { className: `${iconClass} text-base` })
    }
  );
}
function LangToggle({ lang, setLang }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-lg border border-glass-border bg-black/30 p-0.5 text-[11px] font-bold tracking-widest", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setLang("en"),
        className: `rounded-md px-2 py-1 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
        children: "EN"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setLang("tr"),
        className: `rounded-md px-2 py-1 transition-colors ${lang === "tr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
        children: "TR"
      }
    )
  ] });
}
function Footer() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-32 border-t border-glass-border bg-black/40 pb-24 pt-16 md:pb-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "Benjama", className: "h-10 w-10 object-contain" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-lg font-bold tracking-[0.2em] text-gradient-neon", children: "BENJAMA" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: t("footer.tagline") })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground", children: t("footer.notice") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-xs font-bold uppercase tracking-[0.25em] text-neon", children: "Cluster" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-foreground", children: t("nav.about") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/maps", className: "hover:text-foreground", children: t("nav.maps") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/mods", className: "hover:text-foreground", children: t("nav.mods") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/shop", className: "hover:text-foreground", children: t("nav.shop") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/join", className: "hover:text-foreground", children: t("nav.join") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-xs font-bold uppercase tracking-[0.25em] text-neon", children: "Connect" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: DISCORD_INVITE, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-foreground", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-brands fa-discord" }),
            " Discord"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: STEAM_GROUP, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-foreground", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-brands fa-steam" }),
            " Steam Group"
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-12 max-w-7xl border-t border-glass-border px-6 pt-6 text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Benjama. ",
      t("footer.rights")
    ] })
  ] });
}
function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [fading, setFading] = useState(false);
  const videoRef = useRef(null);
  const finishedRef = useRef(false);
  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    console.log("skip triggered");
    const v = videoRef.current;
    try {
      v?.pause();
    } catch {
    }
    setFading(true);
    window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("benjama-intro-seen", "1");
      } catch {
      }
    }, 800);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("benjama-intro-seen")) {
        setShow(false);
        return;
      }
    } catch {
    }
    document.body.style.overflow = "hidden";
    const v = videoRef.current;
    if (v) {
      v.playbackRate = 1;
      const p2 = v.play();
      if (p2 && typeof p2.catch === "function") p2.catch(() => {
      });
    }
    const onEnded = () => finish();
    let timer;
    if (v) {
      timer = window.setTimeout(() => {
        finish();
      }, 6e3);
    }
    const onKey = (e) => {
      if (e.key === " " || e.code === "Space" || e.key === "Enter" || e.key === "Escape") {
        e.preventDefault();
        finish();
      }
    };
    document.addEventListener("keydown", onKey, true);
    window.addEventListener("keydown", onKey, true);
    v?.addEventListener("ended", onEnded);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      window.removeEventListener("keydown", onKey, true);
      v?.removeEventListener("ended", onEnded);
      if (timer) window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [finish]);
  if (!show) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-[800ms] ease-out ${fading ? "opacity-0 pointer-events-none scale-[1.04] blur-sm" : "opacity-100 scale-100 blur-0"}`,
      style: { pointerEvents: fading ? "none" : "auto" },
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            ref: videoRef,
            src: "/benjama3dvideo.mp4",
            autoPlay: true,
            muted: true,
            playsInline: true,
            preload: "auto",
            disableRemotePlayback: true,
            className: "absolute inset-0 h-full w-full object-cover",
            style: { filter: "contrast(1.02) saturate(1.05)", pointerEvents: "none" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]",
            style: { pointerEvents: "none" }
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Skip intro",
            onClick: (e) => {
              e.stopPropagation();
              finish();
            },
            onPointerDown: (e) => {
              e.stopPropagation();
              finish();
            },
            className: "absolute bottom-6 right-6 sm:bottom-8 sm:right-8 select-none rounded-full px-4 py-2 backdrop-blur-md cursor-pointer transition-transform hover:scale-[1.04] active:scale-[0.98]",
            style: {
              background: "oklch(0.16 0.03 250 / 0.55)",
              border: "1px solid oklch(0.82 0.18 215 / 0.3)",
              boxShadow: "0 0 24px -8px oklch(0.82 0.18 215 / 0.45), inset 0 0 12px -6px oklch(0.82 0.18 215 / 0.3)",
              animation: "intro-pulse 2.6s ease-in-out infinite",
              pointerEvents: "auto",
              zIndex: 10
            },
            children: /* @__PURE__ */ jsxs("p", { className: "font-display text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/85 whitespace-nowrap", children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2 text-white/55", children: "⏵" }),
              "Press any key to continue"
            ] })
          }
        ),
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes intro-pulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
      ` })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong max-w-md rounded-2xl p-10 text-center shadow-deep", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-7xl font-bold text-gradient-neon", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-xl font-semibold uppercase tracking-widest", children: "Lost in the ARK" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This page does not exist on the cluster." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center gap-2 rounded-lg border-neon bg-primary/15 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-neon",
        children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-house" }),
          " Return Home"
        ]
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong max-w-md rounded-2xl p-10 text-center shadow-deep", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-xl font-bold uppercase tracking-widest", children: "Connection Lost" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something disconnected. Refresh to re-establish the link." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-lg border-neon bg-primary/15 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-neon",
          children: "Reconnect"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-lg border border-glass-border px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Benjama — PVE ARK Survival Evolved Cluster" },
      { name: "description", content: "Benjama is a PVE-only ARK Survival Evolved cluster across The Island, Ragnarok, Fjordur, Extinction and Genesis 2." },
      { property: "og:title", content: "Benjama — ARK Survival Evolved Cluster" },
      { property: "og:description", content: "Cinematic PVE ARK cluster. Five maps. Curated mods. No raids, only survival." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
        crossOrigin: "anonymous",
        referrerPolicy: "no-referrer"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(I18nProvider, { children: [
    /* @__PURE__ */ jsx(IntroOverlay, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./shop-CFenqZhh.js");
const Route$6 = createFileRoute("/shop")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Market — Benjama ARK Cluster"
    }, {
      name: "description",
      content: "Premium ARK creatures, stations and bundle packages. Instant RCON delivery, PayPal & PayTR."
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./rules-DriGqCeB.js");
const Route$5 = createFileRoute("/rules")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Server Rules — Benjama ARK Cluster"
    }, {
      name: "description",
      content: "Official Benjama ARK cluster ruleset — general, PvE, building, dino, market, and punishments."
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./mods-CuMw1J0v.js");
const Route$4 = createFileRoute("/mods")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Required Mods — Benjama ARK Cluster"
    }, {
      name: "description",
      content: "All required Steam Workshop mods for the Benjama PVE ARK cluster."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./maps-BvSRzA7x.js");
const Route$3 = createFileRoute("/maps")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Maps — Benjama ARK Cluster"
    }, {
      name: "description",
      content: "Explore the 5-map Benjama PVE cluster: The Island, Ragnarok, Fjordur, Extinction and Genesis 2."
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./join-CWSTHVG1.js");
const Route$2 = createFileRoute("/join")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Join the Benjama ARK Cluster"
    }, {
      name: "description",
      content: "Connection IPs, required mods and Discord access for the Benjama PVE cluster."
    }, {
      property: "og:title",
      content: "Join Benjama"
    }, {
      property: "og:description",
      content: "Steam, IPs and required mods for the Benjama PVE ARK cluster."
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./about-nLDoHjD9.js");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "About Benjama — PVE ARK Survival Evolved Cluster"
    }, {
      name: "description",
      content: "Benjama is a 100% PVE ARK cluster built by veteran survivors. No raids, no toxic combat — only the wild."
    }, {
      property: "og:title",
      content: "About Benjama"
    }, {
      property: "og:description",
      content: "Veteran-run PVE ARK cluster across five maps."
    }]
  })
});
const $$splitComponentImporter = () => import("./index-Deb_lPrE.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Benjama — Cinematic PVE ARK Cluster"
    }, {
      name: "description",
      content: "Benjama is a PVE-only ARK Survival Evolved cluster. Cinematic survival, curated mods, dedicated hardware."
    }]
  })
});
const ShopRoute = Route$6.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$7
});
const RulesRoute = Route$5.update({
  id: "/rules",
  path: "/rules",
  getParentRoute: () => Route$7
});
const ModsRoute = Route$4.update({
  id: "/mods",
  path: "/mods",
  getParentRoute: () => Route$7
});
const MapsRoute = Route$3.update({
  id: "/maps",
  path: "/maps",
  getParentRoute: () => Route$7
});
const JoinRoute = Route$2.update({
  id: "/join",
  path: "/join",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  JoinRoute,
  MapsRoute,
  ModsRoute,
  RulesRoute,
  ShopRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  DISCORD_INVITE as D,
  STEAM_GROUP as S,
  maps as a,
  router as b,
  creatures as c,
  formatPrice as f,
  logo as l,
  mods as m,
  packages as p,
  ruleCategories as r,
  stations as s,
  useI18n as u
};
