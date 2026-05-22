import type { Creature } from "@/lib/data";
import { formatPrice, useI18n } from "@/lib/i18n";

const rarityRing: Record<Creature["rarity"], string> = {
  common:    "from-slate-300/40 to-slate-500/10",
  rare:      "from-primary/60 to-primary/10",
  legendary: "from-orange-400/70 to-rose-400/10",
  tek:       "from-fuchsia-400/70 to-cyan-400/10",
  titan:     "from-amber-300/80 via-orange-500/40 to-red-600/20",
};

const rarityLabel: Record<Creature["rarity"], string> = {
  common: "Common",
  rare: "Rare",
  legendary: "Legendary",
  tek: "Tek",
  titan: "Titan",
};

const rarityText: Record<Creature["rarity"], string> = {
  common: "text-slate-200",
  rare: "text-neon",
  legendary: "text-orange-300",
  tek: "text-fuchsia-300",
  titan: "text-amber-300",
};

export function CreatureCard({ creature }: { creature: Creature }) {
  const { t, lang } = useI18n();
  const isTitan = creature.rarity === "titan";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${
        isTitan ? "border-amber-400/30" : "border-glass-border"
      } bg-card backdrop-blur-md hover-lift`}
    >
      {/* Image */}
      <div
        className={`relative aspect-square overflow-hidden bg-gradient-to-br ${rarityRing[creature.rarity]} p-[1px]`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-t-2xl bg-gradient-to-b from-black/40 via-black/20 to-black/70">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <img
            src={creature.image}
            alt={creature.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain p-4 drop-shadow-[0_8px_30px_oklch(0_0_0/0.6)] transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* shine */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="shimmer absolute inset-0" />
          </div>

          <span
            className={`absolute left-2 top-2 rounded-md border border-glass-border bg-black/70 px-2 py-0.5 font-display text-[9px] font-bold uppercase tracking-widest ${rarityText[creature.rarity]} backdrop-blur`}
          >
            {rarityLabel[creature.rarity]}
          </span>
          <span
            className={`absolute right-2 top-2 rounded-md px-2 py-0.5 font-display text-[10px] font-extrabold tracking-widest ${
              isTitan
                ? "bg-amber-400 text-black shadow-[0_0_20px_oklch(0.85_0.18_75/0.6)]"
                : "bg-primary text-primary-foreground"
            }`}
          >
            Lv {creature.level}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 font-display text-sm font-bold uppercase tracking-wider text-foreground">
          {creature.name}
        </h3>

        <div className="flex items-end justify-between gap-2 pt-1">
          <div className="font-display text-base font-extrabold leading-none text-neon">
            {formatPrice(lang, creature.prices)}
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-neon-soft bg-primary/10 px-2.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-neon transition-all hover:bg-primary/25 hover:shadow-[0_0_18px_oklch(0.82_0.18_215/0.4)]">
            <i className="fa-solid fa-cart-plus" /> {t("shop.buy")}
          </button>
        </div>
      </div>
    </div>
  );
}
