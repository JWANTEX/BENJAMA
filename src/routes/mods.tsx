import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { ModCard } from "@/components/ModCard";
import { mods } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/mods")({
  component: ModsPage,
  head: () => ({
    meta: [
      { title: "Required Mods — Benjama ARK Cluster" },
      { name: "description", content: "All required Steam Workshop mods for the Benjama PVE ARK cluster." },
    ],
  }),
});

function ModsPage() {
  const { t } = useI18n();
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t("mods.eyebrow")} title={t("mods.title")} subtitle={t("mods.subtitle")} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mods.map((m) => <ModCard key={m.id} mod={m} />)}
        </div>
      </div>
    </section>
  );
}
