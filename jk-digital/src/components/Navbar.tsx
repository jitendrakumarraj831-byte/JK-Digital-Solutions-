"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Services",    href: "#services" },
  { label: "Results",     href: "#portfolio" },
  { label: "Pricing",     href: "#pricing" },
  { label: "FAQ",         href: "#faq" },
  { label: "Contact",     href: "#contact" },
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
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
            background: "linear-gradient(135deg, #2563EB, #4F46E5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 10px rgba(37,99,235,0.3)",
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px", letterSpacing: "-0.02em" }}>JK</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#0F172A", letterSpacing: "-0.02em" }}>JK Digital</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="d-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: "14px", fontWeight: 500, color: "#475569",
              textDecoration: "none", transition: "color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#0F172A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#475569"}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a href="tel:+918651070831" className="d-phone" style={{
            fontSize: "13px", fontWeight: 600, color: "#475569",
            textDecoration: "none", display: "flex", alignItems: "center", gap: "5px",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +91 86510 70831
          </a>
          <a href="#contact" className="btn btn-primary" style={{ padding: "9px 20px", fontSize: "14px" }}>
            Free Audit
          </a>
          {/* Hamburger */}
          <button onClick={() => setOpen(o => !o)} className="d-ham" aria-label="Menu" style={{
            background: "none", border: "none", cursor: "pointer", padding: "4px",
            display: "flex", flexDirection: "column", gap: "5px",
          }}>
            <span style={{ display: "block", width: "22px", height: "2px", background: "#475569", borderRadius: "2px", transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "#475569", borderRadius: "2px", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "#475569", borderRadius: "2px", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "#fff",
          borderTop: "1px solid #E2E8F0",
          padding: "16px 24px 24px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "14px 0",
              borderBottom: "1px solid #F1F5F9",
              fontSize: "16px", fontWeight: 500, color: "#0F172A",
              textDecoration: "none",
            }}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary btn-lg" style={{ display: "block", textAlign: "center", marginTop: "16px", width: "100%" }}>
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
