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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`nav-wrap${scrolled ? " nav-scrolled" : ""}`}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "70px",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none" }}>
          <div style={{
            width: "38px", height: "38px", borderRadius: "11px",
            background: "linear-gradient(135deg, #7c3aed, #6366f1, #3b82f6)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            boxShadow: "0 3px 16px rgba(124,58,237,0.5)",
          }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: "14px", fontFamily: "Poppins, sans-serif" }}>JK</span>
          </div>
          <div>
            <p style={{ fontWeight: 800, fontSize: "16px", color: "#fff", fontFamily: "Poppins, sans-serif", letterSpacing: "-0.02em", lineHeight: 1.1 }}>JK Digital</p>
            <p style={{ fontSize: "8px", color: "rgba(196,181,253,0.45)", letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase" }}>Solutions</p>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="nav-desktop">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: "14px", fontWeight: 600, color: "rgba(228,220,255,0.65)",
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#c4b5fd"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(228,220,255,0.65)"}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="tel:+918651070831" style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontSize: "13px", fontWeight: 700, color: "rgba(196,181,253,0.65)",
            textDecoration: "none",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <span className="nav-phone">+91 86510 70831</span>
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "13px" }}>
            Free Audit →
          </a>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)} className="nav-ham" style={{
            background: "none", border: "none", cursor: "pointer", padding: "6px",
            display: "flex", flexDirection: "column", gap: "5px",
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px",
                background: "rgba(196,181,253,0.8)", borderRadius: "2px",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 1 ? "opacity(0) scale(0)"
                  : "rotate(-45deg) translate(5px, -5px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transition: "all 0.25s",
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(7,0,20,0.97)", borderTop: "1px solid rgba(167,139,250,0.12)",
          backdropFilter: "blur(24px)",
          padding: "20px 24px 28px",
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "14px 0",
              borderBottom: "1px solid rgba(167,139,250,0.08)",
              fontSize: "16px", fontWeight: 600, color: "rgba(228,220,255,0.7)",
              textDecoration: "none", transition: "color 0.2s",
            }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ display: "block", textAlign: "center", marginTop: "18px" }}>
            Free Audit লেন →
          </a>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-phone   { display: inline !important; }
        .nav-ham     { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-phone   { display: none !important; }
          .nav-ham     { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
