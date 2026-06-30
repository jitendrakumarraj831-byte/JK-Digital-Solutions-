"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#portfolio" },
  { label: "Pricing",  href: "#pricing" },
  { label: "FAQ",      href: "#faq" },
  { label: "Contact",  href: "#contact" },
];

const WA_SVG = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/>
  </svg>
);

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        background: scrolled ? "rgba(5,9,26,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "11px", flexShrink: 0,
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 24px rgba(59,130,246,0.45)",
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: "15px", fontFamily: "Poppins,sans-serif", letterSpacing: "-0.02em" }}>JK</span>
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "16px", fontFamily: "Poppins,sans-serif", letterSpacing: "-0.02em", lineHeight: 1.1 }}>JK Digital</div>
              <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Solutions</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="desk-nav" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                color: "rgba(255,255,255,0.58)", fontSize: "14px", fontWeight: 500,
                padding: "8px 15px", borderRadius: "9px", textDecoration: "none",
                transition: "all 0.18s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.58)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >{l.label}</a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="desk-cta" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="tel:+918651070831" style={{
              color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 500, textDecoration: "none",
              display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +91 86510 70831
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "10px 22px", borderRadius: "10px",
              background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
              color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none",
              boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(59,130,246,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(59,130,246,0.35)"; }}>
              Free Audit
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="hamburger" style={{
            display: "none", padding: "9px",
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "9px", cursor: "pointer", color: "#fff",
            transition: "all 0.2s",
          }}>
            {open
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: "rgba(5,9,26,0.98)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(255,255,255,0.07)", padding: "12px 0 24px",
          }}>
            <div className="wrap">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  color: "rgba(255,255,255,0.72)", fontSize: "16px", fontWeight: 500,
                  padding: "14px 0", textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "color 0.18s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.72)"}>
                  {l.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
                </a>
              ))}
              <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <a href="#contact" onClick={() => setOpen(false)} style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                  padding: "14px", borderRadius: "11px",
                  background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
                  color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
                }}>Free Audit</a>
                <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
                  onClick={() => setOpen(false)} style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    padding: "14px", borderRadius: "11px",
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none",
                  }}>{WA_SVG} WhatsApp</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desk-nav  { display: none !important; }
          .desk-cta  { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
