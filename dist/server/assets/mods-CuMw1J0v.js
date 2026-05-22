import { jsxs, jsx } from "react/jsx-runtime";
import { S as SectionHeader } from "./SectionHeader-9m8yejMQ.js";
import { u as useI18n, m as mods } from "./router-BAvBtIbl.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
function ModCard({ mod }) {
  const { t, lang } = useI18n();
  const url = `https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.id}`;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: url,
      target: "_blank",
      rel: "noreferrer",
      className: "group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-glass-border bg-card p-5 hover-lift",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-glass-border bg-black/40", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-steam text-xl text-neon" }) }),
          /* @__PURE__ */ jsx("span", { className: "rounded-md border border-danger/40 bg-danger/10 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-danger", children: t("mods.required") })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-base font-bold leading-tight tracking-wide text-foreground transition-colors group-hover:text-neon", children: mod.name }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 font-mono text-[10px] text-muted-foreground", children: [
            "ID ",
            mod.id
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: mod.description[lang] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto flex items-center justify-between border-t border-glass-border pt-3 text-xs", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-cube text-neon" }),
            "Steam Workshop"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 font-display font-bold uppercase tracking-widest text-neon transition-transform group-hover:translate-x-1", children: [
            t("mods.view"),
            " ",
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right text-[10px]" })
          ] })
        ] })
      ]
    }
  );
}
function ModsPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: t("mods.eyebrow"), title: t("mods.title"), subtitle: t("mods.subtitle") }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: mods.map((m) => /* @__PURE__ */ jsx(ModCard, { mod: m }, m.id)) })
  ] }) });
}
export {
  ModsPage as component
};
