import { jsxs, jsx } from "react/jsx-runtime";
import { S as SectionHeader } from "./SectionHeader-9m8yejMQ.js";
import { M as MapCard } from "./MapCard-DllQ33lj.js";
import { u as useI18n, D as DISCORD_INVITE, a as maps, m as mods } from "./router-BAvBtIbl.js";
import "react";
import "@tanstack/react-query";
import "@tanstack/react-router";
function JoinPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsx(SectionHeader, { eyebrow: t("nav.join"), title: t("join.title"), subtitle: t("join.lead") }) }) }),
    /* @__PURE__ */ jsx("section", { className: "relative pb-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(Step, { n: "01", icon: "fa-brands fa-steam", title: t("join.step1.title"), body: t("join.step1.body"), ctaLabel: "Steam Workshop", ctaHref: "https://steamcommunity.com/app/346110/workshop/" }),
      /* @__PURE__ */ jsx(Step, { n: "02", icon: "fa-solid fa-plug", title: t("join.step2.title"), body: t("join.step2.body") }),
      /* @__PURE__ */ jsx(Step, { n: "03", icon: "fa-brands fa-discord", title: t("join.step3.title"), body: t("join.step3.body"), ctaLabel: "Discord", ctaHref: DISCORD_INVITE, ctaTone: "discord" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: t("maps.eyebrow"), title: "Server Connection" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: maps.map((m) => /* @__PURE__ */ jsx(MapCard, { map: m }, m.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-8 shadow-deep md:p-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon", children: t("mods.required") }),
          /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-2xl font-bold uppercase tracking-wider sm:text-3xl", children: t("mods.title") })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "https://steamcommunity.com/app/346110/workshop/", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-lg border-neon bg-primary/15 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-neon", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-brands fa-steam" }),
          " Open Workshop"
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-2 sm:grid-cols-2", children: mods.map((m) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `https://steamcommunity.com/sharedfiles/filedetails/?id=${m.id}`, target: "_blank", rel: "noreferrer", className: "group flex items-center justify-between gap-3 rounded-lg border border-glass-border bg-black/30 px-4 py-3 transition-colors hover:border-neon-soft hover:bg-primary/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-brands fa-steam text-neon" }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("div", { className: "truncate font-display text-sm font-bold tracking-wide text-foreground", children: m.name }),
            /* @__PURE__ */ jsxs("div", { className: "truncate font-mono text-[10px] text-muted-foreground", children: [
              "ID ",
              m.id
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-up-right-from-square text-xs text-muted-foreground transition-colors group-hover:text-neon" })
      ] }) }, m.id)) })
    ] }) }) })
  ] });
}
function Step({
  n,
  icon,
  title,
  body,
  ctaLabel,
  ctaHref,
  ctaTone = "neon"
}) {
  const tone = ctaTone === "discord" ? "border-discord/50 bg-discord/15 hover:bg-discord/25 text-foreground" : "border-neon bg-primary/15 hover:bg-primary/25 text-neon";
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col gap-4 rounded-2xl border border-glass-border bg-card p-6 hover-lift", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "font-display text-3xl font-black text-neon/40", children: n }),
      /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl border-neon bg-primary/10 text-neon", children: /* @__PURE__ */ jsx("i", { className: `${icon} text-lg` }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h4", { className: "font-display text-lg font-bold uppercase tracking-wider", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: body })
    ] }),
    ctaHref && /* @__PURE__ */ jsxs("a", { href: ctaHref, target: "_blank", rel: "noreferrer", className: `mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-display text-xs font-bold uppercase tracking-widest ${tone}`, children: [
      ctaLabel,
      " ",
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right text-[10px]" })
    ] })
  ] });
}
export {
  JoinPage as component
};
