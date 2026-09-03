"use client";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

export default function ScrollToTop() {
  const t = useT();
  const [pastFold, setPastFold] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setPastFold(window.scrollY > 600);

      // On narrow screens this button can sit over in-flow text as it
      // scrolls past its fixed position — hide mid-scroll, show once settled.
      if (window.innerWidth <= 600) {
        setScrolling(true);
        if (scrollTimer.current) clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => setScrolling(false), 450);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const visible = pastFold && !scrolling;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("Scroll to top", "ऊपर जाएं")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      title={t("Scroll to top", "ऊपर जाएं")}
      style={{
        position: "fixed",
        bottom: "24px", left: "24px",
        zIndex: 9999,
        width: "44px", height: "44px",
        borderRadius: "50%",
        background: "#fff",
        border: "1px solid #E2E8F0",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.9)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.25s ease, transform 0.25s ease, box-shadow 0.2s",
      }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px) scale(1)"; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.9)"; el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)"; }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
