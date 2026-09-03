"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage, useT } from "@/lib/i18n";

const links = [
  { en: "Home",      hi: "होम",        href: "#" },
  { en: "Services",  hi: "सेवाएं",      href: "#services" },
  { en: "Portfolio", hi: "पोर्टफोलियो", href: "#portfolio" },
  { en: "Pricing",   hi: "मूल्य",       href: "#pricing" },
  { en: "About",     hi: "हमारे बारे में", href: "#why" },
  { en: "Contact",   hi: "संपर्क करें",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = useT();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: scrolled ? "60px" : "76px",
      background: scrolled ? "rgba(252,252,253,0.92)" : "rgba(252,252,253,0.85)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      borderBottom: scrolled ? "1px solid #E9EEF4" : "1px solid transparent",
      boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.05)" : "none",
      transition: "height 0.25s cubic-bezier(0.4,0,0.2,1), border-color 0.25s, box-shadow 0.25s, background 0.25s",
    }}>
      <div className="wrap" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}>

        {/* ── Logo ── */}
        <a href="#" aria-label="JK Digital Solutions — home" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/jk-icon.png"
            alt=""
            width={34}
            height={34}
            priority
            style={{
              width: scrolled ? "28px" : "32px",
              height: scrolled ? "28px" : "32px",
              borderRadius: "8px",
              flexShrink: 0,
              display: "block",
              transition: "width 0.25s, height 0.25s",
            }}
          />
          <span style={{
            fontWeight: 700, fontSize: "14.5px", color: "#111827",
            letterSpacing: "-0.02em", lineHeight: 1,
          }}>
            JK Digital Solutions
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <nav className="desk-nav" aria-label="Primary" style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}>
          {links.map(l => (
            <a key={l.en} href={l.href} style={{
              padding: "8px 14px",
              borderRadius: "8px",
              fontSize: "13.5px",
              fontWeight: 500,
              color: "#4B5563",
              textDecoration: "none",
              transition: "color 0.14s, background 0.14s",
              whiteSpace: "nowrap",
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#111827";
                el.style.background = "#F1F5F9";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#4B5563";
                el.style.background = "transparent";
              }}>
              {lang === "hi" ? l.hi : l.en}
            </a>
          ))}
        </nav>

        {/* ── Right side ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label={lang === "hi" ? "Switch to English" : "हिन्दी में देखें"}
            style={{
              display: "flex", alignItems: "center", gap: "2px",
              padding: "4px", borderRadius: "100px",
              background: "#EFF6FF", border: "1px solid #BFDBFE",
              cursor: "pointer", flexShrink: 0,
            }}>
            {(["en", "hi"] as const).map(l => (
              <span key={l} style={{
                padding: "5px 10px",
                borderRadius: "100px",
                fontSize: "12px",
                fontWeight: 700,
                color: lang === l ? "#fff" : "#1D4ED8",
                background: lang === l ? "#1D4ED8" : "transparent",
                transition: "background 0.18s, color 0.18s",
              }}>
                {l === "en" ? "EN" : "हिं"}
              </span>
            ))}
          </button>

          {/* Phone — desktop only */}
          <a href="tel:+918651070831" className="desk-phone" style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontSize: "13px", fontWeight: 500, color: "#4B5563",
            textDecoration: "none",
            padding: "8px 4px",
            transition: "color 0.14s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#111827"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4B5563"}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +91 86510 70831
          </a>

          <div className="desk-phone" aria-hidden="true" style={{ width: "1px", height: "20px", background: "#E2E8F0" }} />

          {/* WhatsApp CTA */}
          <a href="https://wa.me/918651070831?text=Hi! I'd like help with digital marketing." target="_blank" rel="noopener noreferrer" className="desk-phone" style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "8px 16px", borderRadius: "8px",
            background: "#F0FDF4", color: "#16A34A",
            border: "1px solid #BBF7D0",
            fontSize: "13.5px", fontWeight: 600,
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "background 0.15s, transform 0.15s",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#DCFCE7"; el.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#F0FDF4"; el.style.transform = "translateY(0)"; }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
            {t("WhatsApp", "व्हाट्सएप")}
          </a>

          {/* Free Consultation CTA — desktop only; the mobile dropdown has its own */}
          <a href="#contact" className="desk-phone" style={{
            display: "inline-flex", alignItems: "center",
            padding: "8px 18px", borderRadius: "8px",
            background: "#1D4ED8", color: "#fff",
            fontSize: "13.5px", fontWeight: 600,
            textDecoration: "none", whiteSpace: "nowrap",
            boxShadow: "0 2px 10px rgba(29,78,216,0.28)",
            transition: "background 0.15s, box-shadow 0.15s, transform 0.15s",
          }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#1D4ED8";
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 4px 16px rgba(29,78,216,0.38)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#1D4ED8";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 2px 10px rgba(29,78,216,0.28)";
            }}>
            {t("Free Consultation", "मुफ्त परामर्श")}
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(o => !o)}
            className="mob-ham"
            aria-label={open ? t("Close menu", "मेनू बंद करें") : t("Open menu", "मेनू खोलें")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            style={{
              background: "none", border: "1px solid #E2E8F0",
              cursor: "pointer", padding: "7px 8px",
              borderRadius: "8px",
              display: "flex", flexDirection: "column",
              justifyContent: "center",
              gap: "4px",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#CBD5E1"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"}>
            <span style={{
              display: "block", width: "18px", height: "1.5px",
              background: "#374151", borderRadius: "2px",
              transition: "transform 0.2s, opacity 0.2s",
              transform: open ? "rotate(45deg) translate(3.5px, 3.5px)" : "none",
            }} />
            <span style={{
              display: "block", width: "18px", height: "1.5px",
              background: "#374151", borderRadius: "2px",
              transition: "opacity 0.2s",
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "18px", height: "1.5px",
              background: "#374151", borderRadius: "2px",
              transition: "transform 0.2s",
              transform: open ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none",
            }} />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        style={{
          background: "#fff",
          borderTop: "1px solid #F1F5F9",
          overflow: "hidden",
          maxHeight: open ? "420px" : "0",
          transition: "max-height 0.28s ease",
          boxShadow: open ? "0 16px 40px rgba(0,0,0,0.07)" : "none",
        }}>
        <div style={{ padding: "8px 24px 20px" }}>
          {/* Language toggle — mobile */}
          <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
            <button
              onClick={toggleLang}
              style={{
                display: "flex", alignItems: "center", gap: "2px",
                padding: "4px", borderRadius: "100px",
                background: "#EFF6FF", border: "1px solid #BFDBFE",
                cursor: "pointer",
              }}>
              {(["en", "hi"] as const).map(l => (
                <span key={l} style={{
                  padding: "6px 18px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: lang === l ? "#fff" : "#1D4ED8",
                  background: lang === l ? "#1D4ED8" : "transparent",
                  transition: "background 0.18s, color 0.18s",
                }}>
                  {l === "en" ? "English" : "हिन्दी"}
                </span>
              ))}
            </button>
          </div>
          {links.map((l, i) => (
            <a key={l.en} href={l.href} onClick={() => setOpen(false)} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "13px 0",
              borderBottom: i < links.length - 1 ? "1px solid #F5F7FA" : "none",
              fontSize: "15px", fontWeight: 500, color: "#111827",
              textDecoration: "none",
            }}>
              {lang === "hi" ? l.hi : l.en}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            display: "block", textAlign: "center", marginTop: "14px",
            padding: "13px", borderRadius: "10px",
            background: "#1D4ED8", color: "#fff",
            fontSize: "15px", fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 2px 10px rgba(29,78,216,0.3)",
          }}>
            {t("Get Free Consultation →", "मुफ्त परामर्श लें →")}
          </a>
        </div>
      </nav>

      <style>{`
        .desk-nav   { display: flex !important; }
        .desk-phone { display: flex !important; }
        .mob-ham    { display: none !important; }
        @media (max-width: 900px) {
          .desk-nav   { display: none !important; }
          .desk-phone { display: none !important; }
          .mob-ham    { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
