import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { MapCard } from "@/components/MapCard";
import { maps } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/maps")({
  component: MapsPage,
  head: () => ({
    meta: [
      { title: "Maps — Benjama ARK Cluster" },
      { name: "description", content: "Explore the 5-map Benjama PVE cluster: The Island, Ragnarok, Fjordur, Extinction and Genesis 2." },
    ],
  }),
});

function MapsPage() {
  const { t } = useI18n();
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t("maps.eyebrow")} title={t("maps.title")} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {maps.map((m) => <MapCard key={m.id} map={m} />)}
        </div>
      </div>
    </section>
  );
}
