import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroOverlay } from "@/components/IntroOverlay";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass-strong max-w-md rounded-2xl p-10 text-center shadow-deep">
        <h1 className="font-display text-7xl font-bold text-gradient-neon">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold uppercase tracking-widest">
          Lost in the ARK
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page does not exist on the cluster.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border-neon bg-primary/15 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-neon"
          >
            <i className="fa-solid fa-house" /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass-strong max-w-md rounded-2xl p-10 text-center shadow-deep">
        <h1 className="font-display text-xl font-bold uppercase tracking-widest">
          Connection Lost
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something disconnected. Refresh to re-establish the link.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-lg border-neon bg-primary/15 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-neon"
          >
            Reconnect
          </button>
          <a href="/" className="rounded-lg border border-glass-border px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Benjama — PVE ARK Survival Evolved Cluster" },
      { name: "description", content: "Benjama is a PVE-only ARK Survival Evolved cluster across The Island, Ragnarok, Fjordur, Extinction and Genesis 2." },
      { property: "og:title", content: "Benjama — ARK Survival Evolved Cluster" },
      { property: "og:description", content: "Cinematic PVE ARK cluster. Five maps. Curated mods. No raids, only survival." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
        crossOrigin: "anonymous",
        referrerPolicy: "no-referrer",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (import.meta.env.PROD) {
      const hostname = window.location.hostname;
      if (hostname !== "arkbenjama.com" && hostname !== "www.arkbenjama.com") {
        window.location.replace(`https://arkbenjama.com${window.location.pathname}${window.location.search}${window.location.hash}`);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <IntroOverlay />
        <div className="relative min-h-screen">
          <Header />
          <main className="pt-20">
            <Outlet />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}
