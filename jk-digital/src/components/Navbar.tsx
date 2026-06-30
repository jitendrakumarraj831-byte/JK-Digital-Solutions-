"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#portfolio" },
  { label: "Pricing",  href: "#pricing" },
  { label: "FAQ",      href: "#faq" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`nav-root${scrolled ? " nav-scrolled" : ""}`}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{
            width: "34px", height: "34px", borderRadius: "9px", flexShrink: 0,
            background: "linear-gradient(135deg, #7c3aed, #6366f1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 12px rgba(124,58,237,0.45)",
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px", letterSpacing: "-0.02em" }}>JK</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: "15px", color: "#fff", letterSpacing: "-0.02em" }}>JK Digital</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }} className="d-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: "14px", fontWeight: 500, color: "rgba(230,220,255,0.55)",
              textDecoration: "none", transition: "color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(230,220,255,0.9)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(230,220,255,0.55)"}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a href="tel:+918651070831" className="d-phone" style={{
            fontSize: "13px", fontWeight: 600, color: "rgba(196,181,253,0.6)",
            textDecoration: "none", display: "flex", alignItems: "center", gap: "5px",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +91 86510 70831
          </a>
          <a href="#contact" className="btn btn-primary" style={{ padding: "9px 18px", fontSize: "13px" }}>
            Free Audit
          </a>
          {/* Hamburger */}
          <button onClick={() => setOpen(o => !o)} className="d-ham" aria-label="Menu" style={{
            background: "none", border: "none", cursor: "pointer", padding: "4px",
            display: "flex", flexDirection: "column", gap: "4px",
          }}>
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "rgba(230,220,255,0.7)", borderRadius: "2px", transition: "all 0.2s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "rgba(230,220,255,0.7)", borderRadius: "2px", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "rgba(230,220,255,0.7)", borderRadius: "2px", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(6,0,17,0.97)", backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(167,139,250,0.1)",
          padding: "16px 24px 24px",
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "13px 0",
              borderBottom: "1px solid rgba(167,139,250,0.07)",
              fontSize: "15px", fontWeight: 500, color: "rgba(230,220,255,0.65)",
              textDecoration: "none",
            }}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary btn-lg" style={{ display: "block", textAlign: "center", marginTop: "16px" }}>
            Free Audit →
          </a>
        </div>
      )}

      <style>{`
        .d-nav   { display: flex !important; }
        .d-phone { display: flex !important; }
        .d-ham   { display: none !important; }
        @media (max-width: 768px) {
          .d-nav   { display: none !important; }
          .d-phone { display: none !important; }
          .d-ham   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
