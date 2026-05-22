import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { useI18n } from "@/lib/i18n";
import { DISCORD_INVITE, STEAM_GROUP, STEAM_LOGIN } from "@/lib/data";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <div
          className={`flex w-full items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-deep" : "glass"
          }`}
        >
          <Link to="/" className="group flex items-center gap-3 pl-1">
            <img
              src={logo}
              alt="Benjama"
              className="h-10 w-10 object-contain drop-shadow-[0_0_18px_oklch(0.82_0.18_215/0.5)]"
            />
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg font-bold tracking-[0.2em] text-gradient-neon">
                BENJAMA
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                ARK Cluster
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">{t("nav.about")}</NavLink>
            <NavLink to="/maps">{t("nav.maps")}</NavLink>
            <NavLink to="/mods">{t("nav.mods")}</NavLink>
            <NavLink to="/shop">{t("nav.shop")}</NavLink>
            <NavLink to="/rules">{t("nav.rules")}</NavLink>
            <NavLink to="/join">{t("nav.join")}</NavLink>
          </nav>

          <div className="flex items-center gap-1.5">
            <LangToggle lang={lang} setLang={setLang} />
            <UtilityIcon
              href={DISCORD_INVITE}
              label={t("nav.discord")}
              iconClass="fa-brands fa-discord"
              color="discord"
            />
            <UtilityIcon
              href={STEAM_GROUP}
              label={t("nav.steam")}
              iconClass="fa-brands fa-steam"
              color="steam"
            />
            <a
              href={STEAM_LOGIN}
              target="_blank"
              rel="noreferrer"
              className="ml-1 hidden h-9 items-center gap-2 rounded-full border-neon bg-primary/15 px-3 text-[11px] font-display font-bold uppercase tracking-[0.18em] text-neon transition-colors hover:bg-primary/25 sm:inline-flex"
            >
              <i className="fa-brands fa-steam text-sm" />
              {t("nav.steamLogin")}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <div className="glass-strong flex items-center justify-around rounded-2xl px-2 py-2 shadow-deep">
          <MobileLink to="/" icon="fa-solid fa-house" label="Home" />
          <MobileLink to="/maps" icon="fa-solid fa-map" label={t("nav.maps")} />
          <MobileLink to="/shop" icon="fa-solid fa-shop" label={t("nav.shop")} />
          <MobileLink to="/join" icon="fa-solid fa-plug" label={t("nav.join")} />
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-0.5 px-3 py-1 text-xs text-muted-foreground"
          >
            <i className="fa-brands fa-discord text-base" />
            <span className="text-[10px]">Discord</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-lg px-4 py-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
      activeProps={{ className: "text-neon" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, icon, label }: { to: string; icon: string; label: string }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center gap-0.5 px-3 py-1 text-xs text-muted-foreground"
      activeProps={{ className: "text-neon" }}
    >
      <i className={`${icon} text-base`} />
      <span className="text-[10px]">{label}</span>
    </Link>
  );
}

function UtilityIcon({
  href,
  label,
  iconClass,
  color,
}: {
  href: string;
  label: string;
  iconClass: string;
  color: "discord" | "steam";
}) {
  const colorClass = color === "discord" ? "hover:text-discord" : "hover:text-steam";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-white/5 ${colorClass}`}
    >
      <i className={`${iconClass} text-base`} />
    </a>
  );
}

function LangToggle({ lang, setLang }: { lang: "en" | "tr"; setLang: (l: "en" | "tr") => void }) {
  return (
    <div className="flex items-center rounded-lg border border-glass-border bg-black/30 p-0.5 text-[11px] font-bold tracking-widest">
      <button
        onClick={() => setLang("en")}
        className={`rounded-md px-2 py-1 transition-colors ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("tr")}
        className={`rounded-md px-2 py-1 transition-colors ${
          lang === "tr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        TR
      </button>
    </div>
  );
}
