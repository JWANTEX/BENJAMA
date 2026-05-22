export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${a}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-neon-soft bg-primary/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-neon">
          <i className="fa-solid fa-diamond text-[7px]" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-gradient-neon sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
