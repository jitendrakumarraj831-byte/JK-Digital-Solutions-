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
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.96)" : "#fff",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: "1px solid #f3f4f6",
      boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.3s ease"
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #2563eb, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: "11px" }}>JK</span>
          </div>
          <span style={{ fontWeight: 700, color: "#111827", fontSize: "15px" }}>JK Digital</span>
        </a>

        <nav style={{ display: "flex", gap: "32px" }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: "#6b7280", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#111827")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="hidden md:flex">
          <a href="tel:+918651070831" style={{ color: "#6b7280", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
            +91 86510 70831
          </a>
          <a href="#contact" style={{ padding: "8px 20px", borderRadius: "100px", background: "#111827", color: "#fff", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Free Audit →
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ padding: "8px", color: "#374151", background: "none", border: "none", cursor: "pointer" }}>
          {open ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid #f3f4f6", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }} className="md:hidden">
          <div className="wrap" style={{ paddingTop: "16px", paddingBottom: "16px" }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ display: "block", padding: "12px", color: "#374151", fontSize: "14px", fontWeight: 500, textDecoration: "none", borderRadius: "12px" }}>
                {l.label}
              </a>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "12px", borderTop: "1px solid #f3f4f6", marginTop: "8px" }}>
              <a href="tel:+918651070831"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", borderRadius: "12px", border: "1px solid #e5e7eb", color: "#374151", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                📞 +91 86510 70831
              </a>
              <a href="#contact" onClick={() => setOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", borderRadius: "12px", background: "#111827", color: "#fff", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                Get Free Audit →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
