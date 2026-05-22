import { jsxs, jsx } from "react/jsx-runtime";
import { S as SectionHeader } from "./SectionHeader-9m8yejMQ.js";
import { u as useI18n } from "./router-BAvBtIbl.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
const aboutImg = "/assets/about-ark-B9hsOQq7.jpg";
function AboutPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden py-24", children: [
      /* @__PURE__ */ jsx("img", { src: aboutImg, alt: "", className: "absolute inset-0 h-full w-full object-cover opacity-25" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" }),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "About", title: t("about.title"), subtitle: t("about.lead") }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-8 shadow-card", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold uppercase tracking-widest text-neon", children: "Our Story" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: t("about.p1") }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: t("about.p2") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx(Pillar, { icon: "fa-solid fa-shield-halved", title: "Zero raids", body: "No PVP, no offline raiding, no toxic loot loss." }),
        /* @__PURE__ */ jsx(Pillar, { icon: "fa-solid fa-server", title: "Dedicated hosting", body: "Low-latency hardware with automated backups." }),
        /* @__PURE__ */ jsx(Pillar, { icon: "fa-solid fa-headset", title: "Active admins", body: "A real human is online to help — every day." }),
        /* @__PURE__ */ jsx(Pillar, { icon: "fa-solid fa-handshake", title: "Fair play", body: "Anti-cheat enforced. Equal start for every tribe." })
      ] })
    ] }) })
  ] });
}
function Pillar({
  icon,
  title,
  body
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-glass-border bg-card p-5", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl border-neon bg-primary/10 text-neon", children: /* @__PURE__ */ jsx("i", { className: `${icon} text-lg` }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h4", { className: "font-display text-base font-bold uppercase tracking-wider", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: body })
    ] })
  ] });
}
export {
  AboutPage as component
};
