import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { ruleCategories } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/rules")({
  component: RulesPage,
  head: () => ({
    meta: [
      { title: "Server Rules — Benjama ARK Cluster" },
      { name: "description", content: "Official Benjama ARK cluster ruleset — general, PvE, building, dino, market, and punishments." },
    ],
  }),
});

function RulesPage() {
  const { lang } = useI18n();

  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-glass-border pb-12 pt-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon">
            <i className="fa-solid fa-gavel" />
            {lang === "tr" ? "Sunucu Kuralları" : "Server Rules"}
          </span>
          <h1 className="mt-4 font-display text-4xl font-black uppercase leading-tight tracking-tight text-gradient-neon sm:text-6xl">
            {lang === "tr" ? "Benjama Kural Seti" : "Benjama Ruleset"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/80">
            {lang === "tr"
              ? "Adil, güvenli ve sinematik bir survival deneyimi için lütfen aşağıdaki kurallara uy."
              : "For a fair, safe and cinematic survival experience, please follow the rules below."}
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow={lang === "tr" ? "Kategoriler" : "Categories"}
            title={lang === "tr" ? "Tüm Kurallar" : "All Rules"}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ruleCategories.map((cat, idx) => (
              <div
                key={cat.id}
                className="group relative overflow-hidden rounded-2xl border border-glass-border bg-card p-6 backdrop-blur-md hover-lift"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-neon bg-primary/10 text-xl text-neon">
                    <i className={cat.icon} />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {cat.title[lang]}
                  </h3>
                </div>

                <ul className="relative mt-5 space-y-3">
                  {cat.rules.map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                      <i className="fa-solid fa-triangle-exclamation mt-1 text-[11px] text-neon" />
                      <span>{r[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-5 text-sm text-amber-200">
            <i className="fa-solid fa-circle-info mr-2" />
            {lang === "tr"
              ? "Kuralları bilmemek mazeret değildir. Sunucuya katılarak bu kuralları kabul etmiş sayılırsın."
              : "Ignorance of the rules is not an excuse. By joining the server you agree to this ruleset."}
          </div>
        </div>
      </section>
    </div>
  );
}
