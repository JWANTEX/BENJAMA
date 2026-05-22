import { useEffect, useRef, useState, useCallback } from "react";

export function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    console.log("skip triggered");
    const v = videoRef.current;
    try {
      v?.pause();
    } catch {
      // ignore pause errors on some browsers
    }
    setFading(true);
    window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("benjama-intro-seen", "1");
      } catch {
        // ignore storage errors
      }
    }, 800);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("benjama-intro-seen")) {
        setShow(false);
        return;
      }
    } catch {
      // ignore read errors
    }

    document.body.style.overflow = "hidden";
    const v = videoRef.current;

    if (v) {
      v.playbackRate = 1;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }

    const onEnded = () => finish();
    let timer: ReturnType<typeof window.setTimeout> | undefined;

    if (v) {
      timer = window.setTimeout(() => {
        finish();
      }, 6000);
    }

    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === " " ||
        e.code === "Space" ||
        e.key === "Enter" ||
        e.key === "Escape"
      ) {
        e.preventDefault();
        finish();
      }
    };

    document.addEventListener("keydown", onKey, true);
    window.addEventListener("keydown", onKey, true);
    v?.addEventListener("ended", onEnded);

    return () => {
      document.removeEventListener("keydown", onKey, true);
      window.removeEventListener("keydown", onKey, true);
      v?.removeEventListener("ended", onEnded);
      if (timer) window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [finish]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-[800ms] ease-out ${
        fading
          ? "opacity-0 pointer-events-none scale-[1.04] blur-sm"
          : "opacity-100 scale-100 blur-0"
      }`}
      style={{ pointerEvents: fading ? "none" : "auto" }}
    >
      <video
        ref={videoRef}
        src="/benjama3dvideo.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        disableRemotePlayback
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "contrast(1.02) saturate(1.05)", pointerEvents: "none" }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]"
        style={{ pointerEvents: "none" }}
      />

      {/* Skip pill */}
      <button
        type="button"
        aria-label="Skip intro"
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          finish();
        }}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 select-none rounded-full px-4 py-2 backdrop-blur-md cursor-pointer transition-transform hover:scale-[1.04] active:scale-[0.98]"
        style={{
          background: "oklch(0.16 0.03 250 / 0.55)",
          border: "1px solid oklch(0.82 0.18 215 / 0.3)",
          boxShadow:
            "0 0 24px -8px oklch(0.82 0.18 215 / 0.45), inset 0 0 12px -6px oklch(0.82 0.18 215 / 0.3)",
          animation: "intro-pulse 2.6s ease-in-out infinite",
          pointerEvents: "auto",
          zIndex: 10,
        }}
      >
        <p className="font-display text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/85 whitespace-nowrap">
          <span className="mr-2 text-white/55">⏵</span>
          Press any key to continue
        </p>
      </button>

      <style>{`
        @keyframes intro-pulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
