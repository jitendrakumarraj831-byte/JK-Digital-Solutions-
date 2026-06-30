"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBase: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
    background: scrolled ? "rgba(3,7,18,0.92)" : "rgba(3,7,18,0)",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
  };

  return (
    <>
      <header style={navBase}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(59,130,246,0.4)"
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: "13px", fontFamily: "Poppins, sans-serif" }}>JK</span>
            </div>
            <div>
              <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "16px", fontFamily: "Poppins, sans-serif", letterSpacing: "-0.01em" }}>
                JK Digital
              </span>
              <span style={{ display: "block", fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 500, letterSpacing: "0.05em", lineHeight: 1 }}>
                SOLUTIONS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", gap: "8px", alignItems: "center" }} className="hidden-mobile">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                color: "rgba(255,255,255,0.65)", fontSize: "14px", fontWeight: 500,
                textDecoration: "none", padding: "8px 14px", borderRadius: "8px",
                transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; e.currentTarget.style.background = "transparent"; }}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="hidden-mobile">
            <a href="tel:+918651070831" style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>
              +91 86510 70831
            </a>
            <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "13px" }}>
              Free Audit →
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} style={{
            display: "none", padding: "8px", color: "rgba(255,255,255,0.7)",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px", cursor: "pointer"
          }} className="show-mobile">
            {open ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: "rgba(7,12,26,0.98)", backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "8px 0 20px"
          }}>
            <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                  color: "rgba(255,255,255,0.7)", fontSize: "15px", fontWeight: 500,
                  textDecoration: "none", padding: "13px 16px", borderRadius: "12px",
                  transition: "all 0.2s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                  {l.label}
                </a>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <a href="tel:+918651070831" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "13px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 600, textDecoration: "none"
                }}>📞 +91 86510 70831</a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary" style={{ justifyContent: "center" }}>
                  Free Website Audit →
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
