import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { S as SectionHeader } from "./SectionHeader-9m8yejMQ.js";
import { u as useI18n, f as formatPrice, c as creatures, p as packages, s as stations } from "./router-BAvBtIbl.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
const rarityRing = {
  common: "from-slate-300/40 to-slate-500/10",
  rare: "from-primary/60 to-primary/10",
  legendary: "from-orange-400/70 to-rose-400/10",
  tek: "from-fuchsia-400/70 to-cyan-400/10",
  titan: "from-amber-300/80 via-orange-500/40 to-red-600/20"
};
const rarityLabel = {
  common: "Common",
  rare: "Rare",
  legendary: "Legendary",
  tek: "Tek",
  titan: "Titan"
};
const rarityText = {
  common: "text-slate-200",
  rare: "text-neon",
  legendary: "text-orange-300",
  tek: "text-fuchsia-300",
  titan: "text-amber-300"
};
function CreatureCard({ creature }) {
  const { t, lang } = useI18n();
  const isTitan = creature.rarity === "titan";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `group relative overflow-hidden rounded-2xl border ${isTitan ? "border-amber-400/30" : "border-glass-border"} bg-card backdrop-blur-md hover-lift`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `relative aspect-square overflow-hidden bg-gradient-to-br ${rarityRing[creature.rarity]} p-[1px]`,
            children: /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-t-2xl bg-gradient-to-b from-black/40 via-black/20 to-black/70", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: creature.image,
                  alt: creature.name,
                  loading: "lazy",
                  className: "absolute inset-0 h-full w-full object-contain p-4 drop-shadow-[0_8px_30px_oklch(0_0_0/0.6)] transition-transform duration-700 ease-out group-hover:scale-110"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "shimmer absolute inset-0" }) }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `absolute left-2 top-2 rounded-md border border-glass-border bg-black/70 px-2 py-0.5 font-display text-[9px] font-bold uppercase tracking-widest ${rarityText[creature.rarity]} backdrop-blur`,
                  children: rarityLabel[creature.rarity]
                }
              ),
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: `absolute right-2 top-2 rounded-md px-2 py-0.5 font-display text-[10px] font-extrabold tracking-widest ${isTitan ? "bg-amber-400 text-black shadow-[0_0_20px_oklch(0.85_0.18_75/0.6)]" : "bg-primary text-primary-foreground"}`,
                  children: [
                    "Lv ",
                    creature.level
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 p-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "line-clamp-1 font-display text-sm font-bold uppercase tracking-wider text-foreground", children: creature.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-2 pt-1", children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-base font-extrabold leading-none text-neon", children: formatPrice(lang, creature.prices) }),
            /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-lg border border-neon-soft bg-primary/10 px-2.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-neon transition-all hover:bg-primary/25 hover:shadow-[0_0_18px_oklch(0.82_0.18_215/0.4)]", children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-cart-plus" }),
              " ",
              t("shop.buy")
            ] })
          ] })
        ] })
      ]
    }
  );
}
const FILTERS = [{
  id: "all",
  label: {
    en: "All",
    tr: "Tümü"
  }
}, {
  id: "common",
  label: {
    en: "Common",
    tr: "Sıradan"
  }
}, {
  id: "rare",
  label: {
    en: "Rare",
    tr: "Nadir"
  }
}, {
  id: "legendary",
  label: {
    en: "Legendary",
    tr: "Efsanevi"
  }
}, {
  id: "tek",
  label: {
    en: "Tek",
    tr: "Tek"
  }
}, {
  id: "titan",
  label: {
    en: "Titans",
    tr: "Titanlar"
  }
}];
function ShopPage() {
  const {
    t,
    lang
  } = useI18n();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return creatures.filter((c) => {
      if (filter !== "all" && c.rarity !== filter) return false;
      if (q && !c.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filter, query]);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-glass-border pb-12 pt-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-store" }),
          lang === "tr" ? "Benjama Market" : "Benjama Marketplace"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl font-black uppercase leading-tight tracking-tight text-gradient-neon sm:text-6xl", children: lang === "tr" ? "Premium ARK Marketi" : "Premium ARK Market" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-base text-foreground/80", children: lang === "tr" ? "Lv 300 yaratıklar, end-game istasyonlar ve hazır bundle paketleri. RCON ile saniyeler içinde teslim." : "Lv 300 creatures, end-game stations and ready-made bundle packs. Delivered via RCON in seconds." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsx(TrustBadge, { icon: "fa-brands fa-paypal", label: "PayPal" }),
          /* @__PURE__ */ jsx(TrustBadge, { icon: "fa-solid fa-credit-card", label: "PayTR" }),
          /* @__PURE__ */ jsx(TrustBadge, { icon: "fa-solid fa-bolt", label: lang === "tr" ? "Otomatik teslim" : "Auto delivery" }),
          /* @__PURE__ */ jsx(TrustBadge, { icon: "fa-solid fa-shield-halved", label: lang === "tr" ? "Güvenli ödeme" : "Secure checkout" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: lang === "tr" ? "Bundle Paketler" : "Bundle Packs", title: lang === "tr" ? "En İyi Fiyatlı Paketler" : "Best Value Packages", subtitle: lang === "tr" ? "Üç kademe — yeni başlayanlardan end-game oyunculara kadar her seviye için." : "Three tiers — built for everyone from fresh survivors to end-game tribes." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: packages.map((pack) => /* @__PURE__ */ jsx(PackCard, { pack, lang }, pack.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: lang === "tr" ? "Yaratık Pazarı" : "Creature Market", title: lang === "tr" ? "Her Yaratık. Lv 300." : "Every Creature. Lv 300.", subtitle: lang === "tr" ? "Titanlar Lv 1500 olarak teslim edilir. Tüm diğer yaratıklar Lv 300 standardındadır." : "Titans are delivered at Lv 1500. All other creatures are the Lv 300 standard." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-magnifying-glass pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: lang === "tr" ? "Yaratık ara..." : "Search creatures...", className: "w-full rounded-xl border border-glass-border bg-black/40 py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-soft focus:outline-none focus:ring-2 focus:ring-primary/40" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(f.id), className: `rounded-lg border px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${filter === f.id ? "border-neon-soft bg-primary/20 text-neon shadow-[0_0_18px_oklch(0.82_0.18_215/0.3)]" : "border-glass-border bg-black/30 text-muted-foreground hover:text-foreground"}`, children: f.label[lang] }, f.id)) }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
          lang === "tr" ? "Sonuç:" : "Showing:",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-neon", children: filtered.length }),
          " / ",
          creatures.length
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", children: filtered.map((c) => /* @__PURE__ */ jsx(CreatureCard, { creature: c }, c.id)) }),
      filtered.length === 0 && /* @__PURE__ */ jsx("div", { className: "mt-10 rounded-2xl border border-glass-border bg-black/30 p-10 text-center text-muted-foreground", children: lang === "tr" ? "Bu kriterlere uyan yaratık yok." : "No creatures match these filters." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsx(SectionHeader, { eyebrow: lang === "tr" ? "İstasyonlar" : "Stations", title: lang === "tr" ? "Tek-Tier Crafting İstasyonları" : "Tek-Tier Crafting Stations", subtitle: lang === "tr" ? "Upgrade, blueprint ve augment istasyonları. Üssünde anında kurulur." : "Upgrade, blueprint and augment benches. Deployed straight to your base." }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: stations.map((s) => /* @__PURE__ */ jsx(StationCard, { station: s, lang, t }, s.id)) })
      ] })
    ] })
  ] });
}
function TrustBadge({
  icon,
  label
}) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-lg border border-glass-border bg-black/40 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur", children: [
    /* @__PURE__ */ jsx("i", { className: `${icon} text-neon` }),
    label
  ] });
}
function PackCard({
  pack,
  lang
}) {
  const accent = pack.bestValue ? "from-amber-300/30 via-orange-400/15 to-rose-500/20" : pack.popular ? "from-primary/40 via-primary/15 to-fuchsia-500/20" : "from-primary/20 via-primary/5 to-transparent";
  return /* @__PURE__ */ jsxs("div", { className: "group relative rounded-2xl p-[1.5px]", children: [
    /* @__PURE__ */ jsx("div", { className: `absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} ${pack.highlight ? "opacity-100" : "opacity-60"} transition-opacity duration-500 group-hover:opacity-100` }),
    pack.highlight && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 rounded-2xl opacity-60 blur-2xl", children: /* @__PURE__ */ jsx("div", { className: `absolute inset-0 rounded-2xl bg-gradient-to-br ${accent}` }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative h-full rounded-2xl border border-glass-border bg-card/95 p-6 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1", children: [
      pack.badge && /* @__PURE__ */ jsxs("div", { className: `absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.25em] ${pack.bestValue ? "bg-gradient-to-r from-amber-300 to-orange-400 text-black shadow-[0_0_24px_oklch(0.85_0.18_75/0.6)]" : "bg-gradient-to-r from-primary to-fuchsia-400 text-primary-foreground shadow-[0_0_24px_oklch(0.82_0.18_215/0.55)]"}`, children: [
        /* @__PURE__ */ jsx("i", { className: `mr-1 fa-solid ${pack.bestValue ? "fa-crown" : "fa-fire"}` }),
        pack.badge[lang]
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-extrabold uppercase tracking-wide text-gradient-neon", children: pack.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: pack.tagline[lang] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex items-end justify-center gap-2", children: /* @__PURE__ */ jsx("span", { className: "font-display text-5xl font-black leading-none text-neon", children: formatPrice(lang, pack.prices) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-neon", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-coins" }),
          "+",
          pack.points,
          " ",
          lang === "tr" ? "Puan" : "Points"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "my-5 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: pack.items.map((it, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-foreground/90", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-glass-border bg-black/40 text-base", children: it.icon }),
        /* @__PURE__ */ jsx("span", { children: it.label[lang] })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("button", { className: `mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.22em] transition-all ${pack.bestValue ? "bg-gradient-to-r from-amber-300 to-orange-400 text-black hover:shadow-[0_0_30px_oklch(0.85_0.18_75/0.55)]" : "bg-gradient-to-r from-primary to-primary/70 text-primary-foreground hover:shadow-[0_0_30px_oklch(0.82_0.18_215/0.55)]"}`, children: [
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-cart-plus" }),
        lang === "tr" ? "Satın Al" : "Buy now"
      ] })
    ] })
  ] });
}
function StationCard({
  station,
  lang,
  t
}) {
  const tierAccent = station.tier === "metal" ? "from-fuchsia-400/40 to-primary/20" : "from-primary/40 to-slate-500/10";
  return /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-glass-border bg-card p-6 backdrop-blur-md hover-lift", children: [
    /* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${tierAccent} blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-90` }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-xl border-neon bg-primary/10 text-2xl text-neon", children: /* @__PURE__ */ jsx("i", { className: station.icon }) }),
      /* @__PURE__ */ jsx("span", { className: `rounded-md px-2 py-0.5 font-display text-[10px] font-extrabold uppercase tracking-widest ${station.tier === "metal" ? "bg-fuchsia-400/20 text-fuchsia-300" : "bg-slate-300/10 text-slate-200"}`, children: station.tier === "metal" ? "Metal" : "Primitive" })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "relative mt-4 font-display text-lg font-bold uppercase tracking-wide text-foreground", children: station.name }),
    /* @__PURE__ */ jsx("p", { className: "relative mt-2 text-sm leading-relaxed text-muted-foreground", children: station.description[lang] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-extrabold text-neon", children: formatPrice(lang, station.prices) }),
      /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-lg border border-neon-soft bg-primary/15 px-3 py-2 font-display text-[10px] font-bold uppercase tracking-widest text-neon transition-all hover:bg-primary/25 hover:shadow-[0_0_18px_oklch(0.82_0.18_215/0.4)]", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-cart-plus" }),
        " ",
        lang === "tr" ? "Satın Al" : "Add"
      ] })
    ] })
  ] });
}
export {
  ShopPage as component
};
