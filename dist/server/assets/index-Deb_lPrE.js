import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { u as useI18n, l as logo, D as DISCORD_INVITE, S as STEAM_GROUP } from "./router-BAvBtIbl.js";
import "@tanstack/react-query";
import "react";
const bgVideo = "/assets/background-BAm9t6eJ.gif";
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(FeaturesSection, {})
  ] });
}
function Hero() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxs("section", { className: "relative -mt-20 flex min-h-[100svh] items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("img", { src: bgVideo, alt: "", className: "absolute inset-0 h-full w-full object-cover scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto w-full max-w-7xl px-6 pt-24 text-center", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-3xl flex-col items-center gap-6 animate-fade-up", children: [
      /* @__PURE__ */ jsx("img", { src: logo, alt: "Benjama", className: "h-40 w-40 object-contain drop-shadow-[0_0_60px_oklch(0.82_0.18_215/0.4)] sm:h-56 sm:w-56" }),
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-neon-soft bg-black/50 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon backdrop-blur-md", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "pulse-dot absolute inset-0 rounded-full text-success" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })
        ] }),
        t("hero.tagline")
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl font-black uppercase leading-[0.95] tracking-[0.05em] text-gradient-neon sm:text-7xl", children: "BENJAMA" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl text-base text-foreground/80 sm:text-lg", children: t("hero.subtitle") }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/join", className: "group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-glow transition-all hover:scale-[1.02]", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-plug" }),
          t("hero.cta.join")
        ] }),
        /* @__PURE__ */ jsxs("a", { href: DISCORD_INVITE, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-3 rounded-xl border border-glass-border bg-black/40 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-colors hover:bg-discord/20", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-brands fa-discord text-discord" }),
          t("hero.cta.discord")
        ] }),
        /* @__PURE__ */ jsxs("a", { href: STEAM_GROUP, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-3 rounded-xl border border-glass-border bg-black/40 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-colors hover:bg-white/10", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-brands fa-steam" }),
          "Steam Group"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-down animate-float text-lg" }) })
  ] });
}
function AboutSection() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
    /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon", children: [
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-diamond text-[7px]" }),
      t("about.eyebrow")
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-gradient-neon sm:text-5xl", children: t("about.title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-foreground/80", children: t("about.lead") }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: t("about.p1") }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap justify-center gap-3", children: /* @__PURE__ */ jsxs(Link, { to: "/about", className: "inline-flex items-center gap-2 rounded-xl border-neon bg-primary/15 px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-neon transition-colors hover:bg-primary/25", children: [
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-book-open" }),
      " ",
      t("about.more")
    ] }) })
  ] }) });
}
function FeaturesSection() {
  const {
    lang
  } = useI18n();
  const features = lang === "tr" ? [{
    icon: "fa-solid fa-server",
    title: "Güçlü Sunucular",
    body: "Yüksek performanslı, düşük ping'li sunucularla kesintisiz oyun. 7/24 çalışan altyapı ve %99+ uptime garantisi."
  }, {
    icon: "fa-solid fa-shopping-cart",
    title: "Güvenli Market",
    body: "PayTR güvenli ödeme altyapısıyla Gold yükle. Otomatik RCON teslimatıyla item ve dino anında oyun içinde."
  }, {
    icon: "fa-solid fa-users",
    title: "Aktif Topluluk",
    body: "2018'den beri büyüyen Türk oyuncu topluluğu. Discord, etkinlikler ve yardımlaşma kültürüyle sizi bekliyor."
  }, {
    icon: "fa-solid fa-shield-alt",
    title: "Adil Oyun",
    body: "Anti-cheat koruması, aktif moderasyon ve şeffaf kural seti ile hakkaniyetli bir oyun ortamı sunuyoruz."
  }, {
    icon: "fa-solid fa-puzzle-piece",
    title: "Kaliteli Modlar",
    body: "Test edilmiş, uyumlu mod koleksiyonuyla ARK deneyimini üst seviyeye taşıyın. Modlar hazır ve kurulu."
  }, {
    icon: "fa-solid fa-headset",
    title: "7/24 Destek",
    body: "Türkçe konuşan yönetici ve moderatör kadromuz her an yardıma hazır. Discord üzerinden anlık destek."
  }] : [{
    icon: "fa-solid fa-server",
    title: "Powerful Servers",
    body: "High-performance, low-ping hardware for uninterrupted play. 24/7 infrastructure with 99%+ uptime guarantee."
  }, {
    icon: "fa-solid fa-shopping-cart",
    title: "Secure Market",
    body: "PayTR & PayPal secure payments. Automatic RCON delivery — items and dinos arrive instantly in-game."
  }, {
    icon: "fa-solid fa-users",
    title: "Active Community",
    body: "A growing community since 2018. Discord, events and a real culture of helping each other."
  }, {
    icon: "fa-solid fa-shield-alt",
    title: "Fair Play",
    body: "Anti-cheat protection, active moderation and a transparent ruleset for a level playing field."
  }, {
    icon: "fa-solid fa-puzzle-piece",
    title: "Quality Mods",
    body: "A tested, compatible mod collection that elevates the ARK experience. All mods preinstalled."
  }, {
    icon: "fa-solid fa-headset",
    title: "24/7 Support",
    body: "Our admin and moderator team is always ready to help via Discord — real humans, real time."
  }];
  return /* @__PURE__ */ jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl text-center", children: /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold uppercase tracking-tight text-gradient-neon sm:text-4xl", children: lang === "tr" ? "Neden Benjama?" : "Why Benjama?" }) }),
    /* @__PURE__ */ jsx("div", { className: "seo-features mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "seo-feature-card group relative overflow-hidden rounded-2xl border border-glass-border bg-card p-6 hover-lift", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl border-neon bg-primary/10 text-neon", children: /* @__PURE__ */ jsx("i", { className: `${f.icon} text-xl` }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-bold uppercase tracking-wider text-foreground", children: f.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.body })
    ] }, f.title)) })
  ] }) });
}
export {
  Home as component
};
