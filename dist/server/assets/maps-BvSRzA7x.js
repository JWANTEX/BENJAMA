import { jsx, jsxs } from "react/jsx-runtime";
import { S as SectionHeader } from "./SectionHeader-9m8yejMQ.js";
import { M as MapCard } from "./MapCard-DllQ33lj.js";
import { u as useI18n, a as maps } from "./router-BAvBtIbl.js";
import "react";
import "@tanstack/react-query";
import "@tanstack/react-router";
function MapsPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: t("maps.eyebrow"), title: t("maps.title") }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: maps.map((m) => /* @__PURE__ */ jsx(MapCard, { map: m }, m.id)) })
  ] }) });
}
export {
  MapsPage as component
};
