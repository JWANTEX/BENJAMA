import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "tr";

type Dict = Record<string, string>;

const dict: Record<Lang, Dict> = {
  en: {
    "nav.about": "About",
    "nav.maps": "Maps",
    "nav.mods": "Mods",
    "nav.shop": "Shop",
    "nav.join": "Join",
    "nav.rules": "Rules",
    "nav.discord": "Discord",
    "nav.steam": "Steam",
    "nav.steamLogin": "Steam Login",
    "nav.settings": "Settings",
    "about.eyebrow": "About Us",
    "about.more": "Read more",

    "hero.tagline": "PVE • Season 01 • Cluster Online Soon",
    "hero.subtitle": "One of the best ARK Survival Evolved servers.",
    "hero.cta.join": "Join Server",
    "hero.cta.discord": "Join Discord",

    "why.eyebrow": "Why Benjama",
    "why.title": "Built for survivors. Crafted for legends.",
    "why.subtitle":
      "A 100% PVE cluster engineered for stability, fairness, and a cinematic ARK experience.",
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
    "mods.subtitle":
      "Subscribe to every mod below before launching ARK. The server will refuse the connection otherwise.",
    "mods.required": "REQUIRED",
    "mods.view": "View on Steam Workshop",

    "shop.eyebrow": "Creature Market",
    "shop.title": "Tame Anything. Up to Level 300.",
    "shop.subtitle":
      "Browse every creature across every map. Delivered to your tribe instantly.",
    "shop.buy": "Add to Cart",
    "shop.level": "Level",
    "shop.viewAll": "Browse Full Shop",

    "about.title": "About Benjama",
    "about.lead":
      "Benjama is a PVE-only ARK Survival Evolved cluster built by veteran survivors. No raids, no toxic combat — only the wild.",
    "about.p1":
      "We launched Benjama with one rule: respect the world, respect each other. Our cluster spans five hand-tuned maps with shared progression, dedicated hardware, and a curated mod stack designed for long-term tribes.",
    "about.p2":
      "Whether you are a solo tamer, a builder, or a breeder chasing perfect mutations, Benjama is the cinematic home your character deserves.",

    "join.title": "Join the Cluster",
    "join.lead": "Steam connection details, mod subscriptions, and Discord access.",
    "join.step1.title": "Subscribe to the mods",
    "join.step1.body": "Open the Workshop, subscribe to every required mod, then launch ARK.",
    "join.step2.title": "Connect via Steam server browser",
    "join.step2.body":
      "Open Steam → View → Servers → Favorites → Add a Server, paste the IP, then Connect.",
    "join.step3.title": "Say hello in Discord",
    "join.step3.body": "Introduce yourself, claim your starter pack, and find a tribe.",
    "join.copy": "Copy IP",
    "join.copied": "Copied",

    "footer.tagline": "PVE ARK Survival Evolved cluster",
    "footer.rights": "All rights reserved.",
    "footer.notice":
      "Not affiliated with Studio Wildcard. ARK: Survival Evolved is a trademark of its respective owners.",

    "common.soon": "Coming Soon",
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
    "nav.steamLogin": "Steam Giriş",
    "nav.settings": "Ayarlar",
    "about.eyebrow": "Hakkımızda",
    "about.more": "Devamını oku",

    "hero.tagline": "PVE • Sezon 01 • Cluster Yakında Açılıyor",
    "hero.subtitle": "En iyi ARK Survival Evolved sunucularından biri.",
    "hero.cta.join": "Sunucuya Katıl",
    "hero.cta.discord": "Discord'a Katıl",

    "why.eyebrow": "Neden Benjama",
    "why.title": "Hayatta kalanlar için. Efsaneler için.",
    "why.subtitle":
      "Stabilite, adalet ve sinematik ARK deneyimi için tasarlanmış %100 PVE cluster.",
    "why.f1.title": "Sadece PVE",
    "why.f1.body": "Raid yok. Savaş yok. Sadece saf survival, taming, breeding ve keşif.",
    "why.f2.title": "5 Haritalı Cluster",
    "why.f2.body":
      "The Island, Ragnarok, Fjordur, Extinction ve Genesis 2 arasında özgürce transfer.",
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
    "mods.subtitle":
      "ARK'ı başlatmadan önce aşağıdaki tüm modlara abone ol. Aksi takdirde sunucu bağlantıyı reddeder.",
    "mods.required": "ZORUNLU",
    "mods.view": "Steam Workshop'ta Görüntüle",

    "shop.eyebrow": "Yaratık Pazarı",
    "shop.title": "Her şeyi evcilleştir. Seviye 300'e kadar.",
    "shop.subtitle":
      "Tüm haritalardaki her yaratığa göz at. Anında kabilene teslim.",
    "shop.buy": "Sepete Ekle",
    "shop.level": "Seviye",
    "shop.viewAll": "Tüm Mağazayı Gör",

    "about.title": "Benjama Hakkında",
    "about.lead":
      "Benjama, deneyimli oyuncular tarafından kurulmuş yalnızca PVE odaklı bir ARK Survival Evolved cluster'ıdır. Raid yok, toksik savaş yok — sadece vahşi doğa.",
    "about.p1":
      "Benjama'yı tek bir kuralla başlattık: dünyaya ve birbirimize saygı. Cluster'ımız beş elden ayarlanmış harita, paylaşımlı ilerleme, özel donanım ve uzun ömürlü kabileler için seçilmiş bir mod yığınından oluşur.",
    "about.p2":
      "İster solo tamer, ister inşaatçı, ister mükemmel mutasyonların peşinde bir breeder ol — Benjama, karakterinin hak ettiği sinematik yuvadır.",

    "join.title": "Cluster'a Katıl",
    "join.lead": "Steam bağlantı bilgileri, mod abonelikleri ve Discord erişimi.",
    "join.step1.title": "Modlara abone ol",
    "join.step1.body":
      "Workshop'u aç, tüm zorunlu modlara abone ol, ardından ARK'ı başlat.",
    "join.step2.title": "Steam sunucu tarayıcısından bağlan",
    "join.step2.body":
      "Steam → View → Servers → Favorites → Add a Server, IP'yi yapıştır, Connect.",
    "join.step3.title": "Discord'da merhaba de",
    "join.step3.body":
      "Kendini tanıt, başlangıç paketini al, kendine bir kabile bul.",
    "join.copy": "IP'yi Kopyala",
    "join.copied": "Kopyalandı",

    "footer.tagline": "PVE ARK Survival Evolved cluster'ı",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.notice":
      "Studio Wildcard ile bağlantılı değildir. ARK: Survival Evolved kendi sahiplerinin tescilli markasıdır.",

    "common.soon": "Yakında",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict.en) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("benjama_lang")) as Lang | null;
    if (saved === "tr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("benjama_lang", l);
  };

  const t = (key: keyof typeof dict.en) => dict[lang][key] ?? dict.en[key] ?? key;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function formatPrice(
  lang: Lang,
  prices: { usd: number; eur: number; try: number },
): string {
  if (lang === "tr") {
    return `${prices.try.toLocaleString("tr-TR")} ₺`;
  }
  return `$${prices.usd.toFixed(2)} / €${prices.eur.toFixed(2)}`;
}
