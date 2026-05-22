import type { Mod } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export function ModCard({ mod }: { mod: Mod }) {
  const { t, lang } = useI18n();
  const url = `https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.id}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-glass-border bg-card p-5 hover-lift"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-glass-border bg-black/40">
          <i className="fa-brands fa-steam text-xl text-neon" />
        </div>
        <span className="rounded-md border border-danger/40 bg-danger/10 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-danger">
          {t("mods.required")}
        </span>
      </div>

      <div>
        <h3 className="font-display text-base font-bold leading-tight tracking-wide text-foreground transition-colors group-hover:text-neon">
          {mod.name}
        </h3>
        <p className="mt-1 font-mono text-[10px] text-muted-foreground">ID {mod.id}</p>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{mod.description[lang]}</p>

      <div className="mt-auto flex items-center justify-between border-t border-glass-border pt-3 text-xs">
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <i className="fa-solid fa-cube text-neon" />
          Steam Workshop
        </span>
        <span className="inline-flex items-center gap-1.5 font-display font-bold uppercase tracking-widest text-neon transition-transform group-hover:translate-x-1">
          {t("mods.view")} <i className="fa-solid fa-arrow-right text-[10px]" />
        </span>
      </div>
    </a>
  );
}
