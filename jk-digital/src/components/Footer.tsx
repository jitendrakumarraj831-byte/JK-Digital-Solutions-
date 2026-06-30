"use client";
import { ArrowUp } from "lucide-react";

const services = ["Website Development", "Google SEO", "Google Business Profile", "Google Ads", "Content Marketing"];
const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#020609", color: "#fff" }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)" }} />

      <div className="wrap" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "48px 40px", marginBottom: "56px" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0,
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(59,130,246,0.3)"
              }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: "14px", fontFamily: "Poppins, sans-serif" }}>JK</span>
              </div>
              <div>
                <p style={{ fontWeight: 800, fontSize: "17px", color: "#fff", fontFamily: "Poppins, sans-serif", letterSpacing: "-0.01em" }}>JK Digital Solutions</p>
                <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", fontWeight: 500 }}>FORBESGANJ, BIHAR</p>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", lineHeight: 1.75, maxWidth: "300px", marginBottom: "24px" }}>
              Bihar के local businesses को Google पर dominate करने में help करने वाली trusted digital marketing agency।
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 18px", borderRadius: "100px", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.15)", color: "#4ade80", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(37,211,102,0.15)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(37,211,102,0.08)"}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#4ade80"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                WhatsApp
              </a>
              <a href="tel:+918651070831"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 18px", borderRadius: "100px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                📞 Call
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "13px", marginBottom: "20px", letterSpacing: "0.05em" }}>SERVICES</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {services.map(s => (
                <a key={s} href="#services" style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "13px", marginBottom: "20px", letterSpacing: "0.05em" }}>QUICK LINKS</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map(l => (
                <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "13px", marginBottom: "20px", letterSpacing: "0.05em" }}>CONTACT</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { v: "+91 86510 70831", href: "tel:+918651070831" },
                { v: "+91 85418 49118", href: "tel:+918541849118" },
                { v: "jkdigitalsolutionfbg@gmail.com", href: "mailto:jkdigitalsolutionfbg@gmail.com" },
                { v: "Forbesganj, Araria, Bihar 854318", href: "#" },
              ].map(c => (
                <a key={c.v} href={c.href} style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", textDecoration: "none", wordBreak: "break-all", lineHeight: 1.5, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                  {c.v}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "24px" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>
            © 2025 JK Digital Solutions · Forbesganj, Bihar · All Rights Reserved 🇮🇳
          </p>
          <a href="#home" style={{
            width: "36px", height: "36px", borderRadius: "10px",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
            textDecoration: "none", transition: "all 0.2s"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.2)"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
            <ArrowUp style={{ width: "16px", height: "16px", color: "rgba(255,255,255,0.4)" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
