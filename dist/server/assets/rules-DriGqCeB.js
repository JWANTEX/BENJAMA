import { jsxs, jsx } from "react/jsx-runtime";
import { S as SectionHeader } from "./SectionHeader-9m8yejMQ.js";
import { u as useI18n, r as ruleCategories } from "./router-BAvBtIbl.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
function RulesPage() {
  const {
    lang
  } = useI18n();
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-glass-border pb-12 pt-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-gavel" }),
          lang === "tr" ? "Sunucu Kuralları" : "Server Rules"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl font-black uppercase leading-tight tracking-tight text-gradient-neon sm:text-6xl", children: lang === "tr" ? "Benjama Kural Seti" : "Benjama Ruleset" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-base text-foreground/80", children: lang === "tr" ? "Adil, güvenli ve sinematik bir survival deneyimi için lütfen aşağıdaki kurallara uy." : "For a fair, safe and cinematic survival experience, please follow the rules below." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: lang === "tr" ? "Kategoriler" : "Categories", title: lang === "tr" ? "Tüm Kurallar" : "All Rules" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: ruleCategories.map((cat, idx) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-glass-border bg-card p-6 backdrop-blur-md hover-lift", style: {
        animationDelay: `${idx * 60}ms`
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl border-neon bg-primary/10 text-xl text-neon", children: /* @__PURE__ */ jsx("i", { className: cat.icon }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold uppercase tracking-wide text-foreground", children: cat.title[lang] })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "relative mt-5 space-y-3", children: cat.rules.map((r, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm leading-relaxed text-foreground/90", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-triangle-exclamation mt-1 text-[11px] text-neon" }),
          /* @__PURE__ */ jsx("span", { children: r[lang] })
        ] }, i)) })
      ] }, cat.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-5 text-sm text-amber-200", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-circle-info mr-2" }),
        lang === "tr" ? "Kuralları bilmemek mazeret değildir. Sunucuya katılarak bu kuralları kabul etmiş sayılırsın." : "Ignorance of the rules is not an excuse. By joining the server you agree to this ruleset."
      ] })
    ] }) })
  ] });
}
export {
  RulesPage as component
};
