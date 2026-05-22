import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useI18n } from "@/lib/i18n";
import { DISCORD_INVITE, STEAM_GROUP } from "@/lib/data";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative mt-32 border-t border-glass-border bg-black/40 pb-24 pt-16 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Benjama" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-display text-lg font-bold tracking-[0.2em] text-gradient-neon">
                BENJAMA
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {t("footer.tagline")}
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">{t("footer.notice")}</p>
        </div>

        <div>
          <div className="font-display text-xs font-bold uppercase tracking-[0.25em] text-neon">
            Cluster
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">{t("nav.about")}</Link></li>
            <li><Link to="/maps" className="hover:text-foreground">{t("nav.maps")}</Link></li>
            <li><Link to="/mods" className="hover:text-foreground">{t("nav.mods")}</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">{t("nav.shop")}</Link></li>
            <li><Link to="/join" className="hover:text-foreground">{t("nav.join")}</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display text-xs font-bold uppercase tracking-[0.25em] text-neon">
            Connect
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={DISCORD_INVITE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <i className="fa-brands fa-discord" /> Discord
              </a>
            </li>
            <li>
              <a href={STEAM_GROUP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <i className="fa-brands fa-steam" /> Steam Group
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-glass-border px-6 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Benjama. {t("footer.rights")}
      </div>
    </footer>
  );
}
