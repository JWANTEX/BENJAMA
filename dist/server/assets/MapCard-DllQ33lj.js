import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { u as useI18n } from "./router-BAvBtIbl.js";
function MapCard({ map }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const address = `${map.ip}:${map.port}`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-glass-border bg-card hover-lift", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: map.image,
          alt: map.name,
          loading: "lazy",
          className: "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute left-4 top-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `pulse-dot absolute inset-0 rounded-full ${map.online ? "text-success" : "text-danger"}`
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `relative inline-flex h-2 w-2 rounded-full ${map.online ? "bg-success" : "bg-danger"}`
            }
          )
        ] }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/90", children: map.online ? t("maps.status.online") : t("maps.status.offline") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-4 rounded-md border border-glass-border bg-black/50 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-neon backdrop-blur-md", children: "PVE" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: map.logo,
          alt: "",
          className: "absolute bottom-3 right-3 h-16 w-auto opacity-90 drop-shadow-[0_4px_20px_oklch(0_0_0/0.6)]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 p-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold tracking-wide text-foreground", children: map.name }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 flex items-center gap-3 text-xs text-muted-foreground", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-users text-[10px]" }),
          map.players,
          "/",
          map.maxPlayers,
          " ",
          t("maps.players")
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-glass-border bg-black/30 px-3 py-2", children: [
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-server text-xs text-neon" }),
        /* @__PURE__ */ jsx("code", { className: "flex-1 truncate font-mono text-xs text-foreground/90", children: address }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: copy,
            className: "rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-white/5 hover:text-neon",
            "aria-label": "Copy IP",
            children: /* @__PURE__ */ jsx("i", { className: copied ? "fa-solid fa-check text-success" : "fa-regular fa-copy" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `steam://connect/${address}`,
          className: "flex w-full items-center justify-center gap-2 rounded-lg border-neon bg-primary/15 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-neon transition-colors hover:bg-primary/25",
          children: [
            /* @__PURE__ */ jsx("i", { className: "fa-brands fa-steam" }),
            t("maps.connect")
          ]
        }
      )
    ] })
  ] });
}
export {
  MapCard as M
};
