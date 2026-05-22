import { useState } from "react";
import type { ServerMap } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export function MapCard({ map }: { map: ServerMap }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const address = `${map.ip}:${map.port}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-glass-border bg-card hover-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={map.image}
          alt={map.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className={`pulse-dot absolute inset-0 rounded-full ${
                map.online ? "text-success" : "text-danger"
              }`}
            />
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${
                map.online ? "bg-success" : "bg-danger"
              }`}
            />
          </span>
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/90">
            {map.online ? t("maps.status.online") : t("maps.status.offline")}
          </span>
        </div>

        <div className="absolute right-4 top-4 rounded-md border border-glass-border bg-black/50 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-neon backdrop-blur-md">
          PVE
        </div>

        <img
          src={map.logo}
          alt=""
          className="absolute bottom-3 right-3 h-16 w-auto opacity-90 drop-shadow-[0_4px_20px_oklch(0_0_0/0.6)]"
        />
      </div>

      <div className="space-y-3 p-5">
        <div>
          <h3 className="font-display text-xl font-bold tracking-wide text-foreground">
            {map.name}
          </h3>
          <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <i className="fa-solid fa-users text-[10px]" />
              {map.players}/{map.maxPlayers} {t("maps.players")}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-glass-border bg-black/30 px-3 py-2">
          <i className="fa-solid fa-server text-xs text-neon" />
          <code className="flex-1 truncate font-mono text-xs text-foreground/90">{address}</code>
          <button
            onClick={copy}
            className="rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:bg-white/5 hover:text-neon"
            aria-label="Copy IP"
          >
            <i className={copied ? "fa-solid fa-check text-success" : "fa-regular fa-copy"} />
          </button>
        </div>

        <a
          href={`steam://connect/${address}`}
          className="flex w-full items-center justify-center gap-2 rounded-lg border-neon bg-primary/15 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-neon transition-colors hover:bg-primary/25"
        >
          <i className="fa-brands fa-steam" />
          {t("maps.connect")}
        </a>
      </div>
    </div>
  );
}
