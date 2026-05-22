import { createFileRoute } from "@tanstack/react-router";

import { SectionHeader } from "@/components/SectionHeader";
import { MapCard } from "@/components/MapCard";
import { DISCORD_INVITE, maps, mods } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/join")({
  component: JoinPage,
  head: () => ({
    meta: [
      { title: "Join the Benjama ARK Cluster" },
      { name: "description", content: "Connection IPs, required mods and Discord access for the Benjama PVE cluster." },
      { property: "og:title", content: "Join Benjama" },
      { property: "og:description", content: "Steam, IPs and required mods for the Benjama PVE ARK cluster." },
    ],
  }),
});

function JoinPage() {
  const { t } = useI18n();

  return (
    <div>
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeader eyebrow={t("nav.join")} title={t("join.title")} subtitle={t("join.lead")} />
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-3">
          <Step
            n="01"
            icon="fa-brands fa-steam"
            title={t("join.step1.title")}
            body={t("join.step1.body")}
            ctaLabel="Steam Workshop"
            ctaHref="https://steamcommunity.com/app/346110/workshop/"
          />
          <Step
            n="02"
            icon="fa-solid fa-plug"
            title={t("join.step2.title")}
            body={t("join.step2.body")}
          />
          <Step
            n="03"
            icon="fa-brands fa-discord"
            title={t("join.step3.title")}
            body={t("join.step3.body")}
            ctaLabel="Discord"
            ctaHref={DISCORD_INVITE}
            ctaTone="discord"
          />
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow={t("maps.eyebrow")} title="Server Connection" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {maps.map((m) => <MapCard key={m.id} map={m} />)}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass-strong rounded-3xl p-8 shadow-deep md:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon">
                  {t("mods.required")}
                </div>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-wider sm:text-3xl">
                  {t("mods.title")}
                </h3>
              </div>
              <a
                href="https://steamcommunity.com/app/346110/workshop/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-neon bg-primary/15 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-neon"
              >
                <i className="fa-brands fa-steam" /> Open Workshop
              </a>
            </div>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {mods.map((m) => (
                <li key={m.id}>
                  <a
                    href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${m.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-glass-border bg-black/30 px-4 py-3 transition-colors hover:border-neon-soft hover:bg-primary/10"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <i className="fa-brands fa-steam text-neon" />
                      <div className="min-w-0">
                        <div className="truncate font-display text-sm font-bold tracking-wide text-foreground">
                          {m.name}
                        </div>
                        <div className="truncate font-mono text-[10px] text-muted-foreground">ID {m.id}</div>
                      </div>
                    </div>
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs text-muted-foreground transition-colors group-hover:text-neon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Step({
  n, icon, title, body, ctaLabel, ctaHref, ctaTone = "neon",
}: {
  n: string; icon: string; title: string; body: string;
  ctaLabel?: string; ctaHref?: string; ctaTone?: "neon" | "discord";
}) {
  const tone =
    ctaTone === "discord"
      ? "border-discord/50 bg-discord/15 hover:bg-discord/25 text-foreground"
      : "border-neon bg-primary/15 hover:bg-primary/25 text-neon";
  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-glass-border bg-card p-6 hover-lift">
      <div className="flex items-center justify-between">
        <span className="font-display text-3xl font-black text-neon/40">{n}</span>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border-neon bg-primary/10 text-neon">
          <i className={`${icon} text-lg`} />
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg font-bold uppercase tracking-wider">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
      {ctaHref && (
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-display text-xs font-bold uppercase tracking-widest ${tone}`}
        >
          {ctaLabel} <i className="fa-solid fa-arrow-right text-[10px]" />
        </a>
      )}
    </div>
  );
}
