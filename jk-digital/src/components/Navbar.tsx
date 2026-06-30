"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home",      href: "#" },
  { label: "Services",  href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing",   href: "#pricing" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      height: "68px",
      background: scrolled ? "rgba(252,252,253,0.92)" : "rgba(252,252,253,0.85)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      borderBottom: scrolled ? "1px solid #E9EEF4" : "1px solid transparent",
      boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.05)" : "none",
      transition: "border-color 0.25s, box-shadow 0.25s, background 0.25s",
    }}>
      <div className="wrap" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}>

        {/* ── Logo ── */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            width: "30px", height: "30px", borderRadius: "8px", flexShrink: 0,
            background: "linear-gradient(135deg, #2563EB, #4F46E5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(37,99,235,0.28)",
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "11px", letterSpacing: "-0.01em" }}>JK</span>
          </div>
          <span style={{
            fontWeight: 700, fontSize: "14px", color: "#111827",
            letterSpacing: "-0.02em", lineHeight: 1,
          }}>
            JK Digital
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <nav className="desk-nav" style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              padding: "6px 12px",
              borderRadius: "7px",
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
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── Right side ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>

          {/* Phone — desktop only */}
          <a href="tel:+918651070831" className="desk-phone" style={{
            display: "flex", alignItems: "center", gap: "5px",
            fontSize: "13px", fontWeight: 500, color: "#64748B",
            textDecoration: "none",
            padding: "6px 4px",
            transition: "color 0.14s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#111827"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +91 86510 70831
          </a>

          {/* Free Audit CTA */}
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center",
            padding: "8px 18px", borderRadius: "8px",
            background: "#2563EB", color: "#fff",
            fontSize: "13.5px", fontWeight: 600,
            textDecoration: "none", whiteSpace: "nowrap",
            boxShadow: "0 2px 10px rgba(37,99,235,0.28)",
            transition: "background 0.15s, box-shadow 0.15s, transform 0.15s",
          }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#1D4ED8";
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 4px 16px rgba(37,99,235,0.38)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#2563EB";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 2px 10px rgba(37,99,235,0.28)";
            }}>
            Free Audit
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(o => !o)}
            className="mob-ham"
            aria-label={open ? "Close menu" : "Open menu"}
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
      <div style={{
        background: "#fff",
        borderTop: "1px solid #F1F5F9",
        overflow: "hidden",
        maxHeight: open ? "420px" : "0",
        transition: "max-height 0.28s ease",
        boxShadow: open ? "0 16px 40px rgba(0,0,0,0.07)" : "none",
      }}>
        <div style={{ padding: "8px 24px 20px" }}>
          {links.map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "13px 0",
              borderBottom: i < links.length - 1 ? "1px solid #F8FAFC" : "none",
              fontSize: "15px", fontWeight: 500, color: "#111827",
              textDecoration: "none",
            }}>
              {l.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            display: "block", textAlign: "center", marginTop: "14px",
            padding: "13px", borderRadius: "10px",
            background: "#2563EB", color: "#fff",
            fontSize: "15px", fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 2px 10px rgba(37,99,235,0.3)",
          }}>
            Get Free Audit →
          </a>
        </div>
      </div>

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
