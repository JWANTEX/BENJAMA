import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-ark.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Benjama — PVE ARK Survival Evolved Cluster" },
      {
        name: "description",
        content:
          "Benjama is a 100% PVE ARK cluster built by veteran survivors. No raids, no toxic combat — only the wild.",
      },
      { property: "og:title", content: "About Benjama" },
      { property: "og:description", content: "Veteran-run PVE ARK cluster across five maps." },
    ],
  }),
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <div>
      <section className="relative overflow-hidden py-24">
        <img src={aboutImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <SectionHeader
            eyebrow="About"
            title={t("about.title")}
            subtitle={t("about.lead")}
          />
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div className="glass rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-xl font-bold uppercase tracking-widest text-neon">
              Our Story
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("about.p2")}</p>
          </div>

          <div className="space-y-5">
            <Pillar icon="fa-solid fa-shield-halved" title="Zero raids" body="No PVP, no offline raiding, no toxic loot loss." />
            <Pillar icon="fa-solid fa-server" title="Dedicated hosting" body="Low-latency hardware with automated backups." />
            <Pillar icon="fa-solid fa-headset" title="Active admins" body="A real human is online to help — every day." />
            <Pillar icon="fa-solid fa-handshake" title="Fair play" body="Anti-cheat enforced. Equal start for every tribe." />
          </div>
        </div>
      </section>
    </div>
  );
}

function Pillar({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-glass-border bg-card p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border-neon bg-primary/10 text-neon">
        <i className={`${icon} text-lg`} />
      </div>
      <div>
        <h4 className="font-display text-base font-bold uppercase tracking-wider">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}
