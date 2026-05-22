import { jsxs, jsx } from "react/jsx-runtime";
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center"
}) {
  const a = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return /* @__PURE__ */ jsxs("div", { className: `flex max-w-3xl flex-col gap-3 ${a}`, children: [
    eyebrow && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon", children: [
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-diamond text-[7px]" }),
      eyebrow
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold leading-tight tracking-tight text-gradient-neon sm:text-4xl md:text-5xl", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-base text-muted-foreground", children: subtitle })
  ] });
}
export {
  SectionHeader as S
};
