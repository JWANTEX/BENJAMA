import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { CreatureCard } from "@/components/CreatureCard";
import { creatures, stations, packages, type Pack, type Station } from "@/lib/data";
import { formatPrice, useI18n, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Market — Benjama ARK Cluster" },
      { name: "description", content: "Premium ARK creatures, stations and bundle packages. Instant RCON delivery, PayPal & PayTR." },
    ],
  }),
});

const FILTERS: { id: "all" | "common" | "rare" | "legendary" | "tek" | "titan"; label: { en: string; tr: string } }[] = [
  { id: "all",       label: { en: "All",        tr: "Tümü" } },
  { id: "common",    label: { en: "Common",     tr: "Sıradan" } },
  { id: "rare",      label: { en: "Rare",       tr: "Nadir" } },
  { id: "legendary", label: { en: "Legendary",  tr: "Efsanevi" } },
  { id: "tek",       label: { en: "Tek",        tr: "Tek" } },
  { id: "titan",     label: { en: "Titans",     tr: "Titanlar" } },
];

function ShopPage() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return creatures.filter((c) => {
      if (filter !== "all" && c.rarity !== filter) return false;
      if (q && !c.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filter, query]);

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-glass-border pb-12 pt-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon">
            <i className="fa-solid fa-store" />
            {lang === "tr" ? "Benjama Market" : "Benjama Marketplace"}
          </span>
          <h1 className="mt-4 font-display text-4xl font-black uppercase leading-tight tracking-tight text-gradient-neon sm:text-6xl">
            {lang === "tr" ? "Premium ARK Marketi" : "Premium ARK Market"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/80">
            {lang === "tr"
              ? "Lv 300 yaratıklar, end-game istasyonlar ve hazır bundle paketleri. RCON ile saniyeler içinde teslim."
              : "Lv 300 creatures, end-game stations and ready-made bundle packs. Delivered via RCON in seconds."}
          </p>

          {/* Payment / trust badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs">
            <TrustBadge icon="fa-brands fa-paypal" label="PayPal" />
            <TrustBadge icon="fa-solid fa-credit-card" label="PayTR" />
            <TrustBadge icon="fa-solid fa-bolt" label={lang === "tr" ? "Otomatik teslim" : "Auto delivery"} />
            <TrustBadge icon="fa-solid fa-shield-halved" label={lang === "tr" ? "Güvenli ödeme" : "Secure checkout"} />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow={lang === "tr" ? "Bundle Paketler" : "Bundle Packs"}
            title={lang === "tr" ? "En İyi Fiyatlı Paketler" : "Best Value Packages"}
            subtitle={
              lang === "tr"
                ? "Üç kademe — yeni başlayanlardan end-game oyunculara kadar her seviye için."
                : "Three tiers — built for everyone from fresh survivors to end-game tribes."
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((pack) => <PackCard key={pack.id} pack={pack} lang={lang} />)}
          </div>
        </div>
      </section>

      {/* CREATURES */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow={lang === "tr" ? "Yaratık Pazarı" : "Creature Market"}
            title={lang === "tr" ? "Her Yaratık. Lv 300." : "Every Creature. Lv 300."}
            subtitle={
              lang === "tr"
                ? "Titanlar Lv 1500 olarak teslim edilir. Tüm diğer yaratıklar Lv 300 standardındadır."
                : "Titans are delivered at Lv 1500. All other creatures are the Lv 300 standard."
            }
          />

          {/* Search + filter */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="relative w-full max-w-md">
              <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === "tr" ? "Yaratık ara..." : "Search creatures..."}
                className="w-full rounded-xl border border-glass-border bg-black/40 py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-soft focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-lg border px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                    filter === f.id
                      ? "border-neon-soft bg-primary/20 text-neon shadow-[0_0_18px_oklch(0.82_0.18_215/0.3)]"
                      : "border-glass-border bg-black/30 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.label[lang]}
                </button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              {lang === "tr" ? "Sonuç:" : "Showing:"}{" "}
              <span className="text-neon">{filtered.length}</span> / {creatures.length}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((c) => <CreatureCard key={c.id} creature={c} />)}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border border-glass-border bg-black/30 p-10 text-center text-muted-foreground">
              {lang === "tr" ? "Bu kriterlere uyan yaratık yok." : "No creatures match these filters."}
            </div>
          )}
        </div>
      </section>

      {/* STATIONS */}
      <section className="relative py-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow={lang === "tr" ? "İstasyonlar" : "Stations"}
            title={lang === "tr" ? "Tek-Tier Crafting İstasyonları" : "Tek-Tier Crafting Stations"}
            subtitle={
              lang === "tr"
                ? "Upgrade, blueprint ve augment istasyonları. Üssünde anında kurulur."
                : "Upgrade, blueprint and augment benches. Deployed straight to your base."
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stations.map((s) => <StationCard key={s.id} station={s} lang={lang} t={t} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

function TrustBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-black/40 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur">
      <i className={`${icon} text-neon`} />
      {label}
    </span>
  );
}

function PackCard({ pack, lang }: { pack: Pack; lang: Lang }) {
  const accent = pack.bestValue
    ? "from-amber-300/30 via-orange-400/15 to-rose-500/20"
    : pack.popular
    ? "from-primary/40 via-primary/15 to-fuchsia-500/20"
    : "from-primary/20 via-primary/5 to-transparent";

  return (
    <div className="group relative rounded-2xl p-[1.5px]">
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} ${
          pack.highlight ? "opacity-100" : "opacity-60"
        } transition-opacity duration-500 group-hover:opacity-100`}
      />
      {pack.highlight && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-60 blur-2xl">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent}`} />
        </div>
      )}

      <div className="relative h-full rounded-2xl border border-glass-border bg-card/95 p-6 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1">
        {pack.badge && (
          <div
            className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.25em] ${
              pack.bestValue
                ? "bg-gradient-to-r from-amber-300 to-orange-400 text-black shadow-[0_0_24px_oklch(0.85_0.18_75/0.6)]"
                : "bg-gradient-to-r from-primary to-fuchsia-400 text-primary-foreground shadow-[0_0_24px_oklch(0.82_0.18_215/0.55)]"
            }`}
          >
            <i className={`mr-1 fa-solid ${pack.bestValue ? "fa-crown" : "fa-fire"}`} />
            {pack.badge[lang]}
          </div>
        )}

        <div className="text-center">
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-gradient-neon">
            {pack.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">{pack.tagline[lang]}</p>
          <div className="mt-5 flex items-end justify-center gap-2">
            <span className="font-display text-5xl font-black leading-none text-neon">
              {formatPrice(lang, pack.prices)}
            </span>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-neon">
            <i className="fa-solid fa-coins" />
            +{pack.points} {lang === "tr" ? "Puan" : "Points"}
          </div>
        </div>

        <div className="my-5 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

        <ul className="space-y-2.5">
          {pack.items.map((it, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-glass-border bg-black/40 text-base">
                {it.icon}
              </span>
              <span>{it.label[lang]}</span>
            </li>
          ))}
        </ul>

        <button
          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.22em] transition-all ${
            pack.bestValue
              ? "bg-gradient-to-r from-amber-300 to-orange-400 text-black hover:shadow-[0_0_30px_oklch(0.85_0.18_75/0.55)]"
              : "bg-gradient-to-r from-primary to-primary/70 text-primary-foreground hover:shadow-[0_0_30px_oklch(0.82_0.18_215/0.55)]"
          }`}
        >
          <i className="fa-solid fa-cart-plus" />
          {lang === "tr" ? "Satın Al" : "Buy now"}
        </button>
      </div>
    </div>
  );
}

function StationCard({
  station, lang, t,
}: { station: Station; lang: Lang; t: (k: never) => string }) {
  void t;
  const tierAccent = station.tier === "metal"
    ? "from-fuchsia-400/40 to-primary/20"
    : "from-primary/40 to-slate-500/10";
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-glass-border bg-card p-6 backdrop-blur-md hover-lift">
      <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${tierAccent} blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-90`} />
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border-neon bg-primary/10 text-2xl text-neon">
          <i className={station.icon} />
        </div>
        <span
          className={`rounded-md px-2 py-0.5 font-display text-[10px] font-extrabold uppercase tracking-widest ${
            station.tier === "metal"
              ? "bg-fuchsia-400/20 text-fuchsia-300"
              : "bg-slate-300/10 text-slate-200"
          }`}
        >
          {station.tier === "metal" ? "Metal" : "Primitive"}
        </span>
      </div>
      <h3 className="relative mt-4 font-display text-lg font-bold uppercase tracking-wide text-foreground">
        {station.name}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
        {station.description[lang]}
      </p>
      <div className="relative mt-5 flex items-center justify-between">
        <div className="font-display text-xl font-extrabold text-neon">
          {formatPrice(lang, station.prices)}
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-lg border border-neon-soft bg-primary/15 px-3 py-2 font-display text-[10px] font-bold uppercase tracking-widest text-neon transition-all hover:bg-primary/25 hover:shadow-[0_0_18px_oklch(0.82_0.18_215/0.4)]">
          <i className="fa-solid fa-cart-plus" /> {lang === "tr" ? "Satın Al" : "Add"}
        </button>
      </div>
    </div>
  );
}
