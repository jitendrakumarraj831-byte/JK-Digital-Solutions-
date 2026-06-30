"use client";

const services = [
  "Website Development",
  "Google SEO",
  "Google Business Profile",
  "Google Ads",
  "Content Marketing",
];

const quickLinks = [
  { label: "Services",   href: "#services" },
  { label: "Our Work",   href: "#portfolio" },
  { label: "Pricing",    href: "#pricing" },
  { label: "FAQ",        href: "#faq" },
  { label: "Contact",    href: "#contact" },
];

const contactItems = [
  { v: "+91 86510 70831",                href: "tel:+918651070831" },
  { v: "+91 85418 49118",                href: "tel:+918541849118" },
  { v: "jkdigitalsolutionfbg@gmail.com", href: "mailto:jkdigitalsolutionfbg@gmail.com" },
  { v: "Forbesganj, Araria, Bihar 854318", href: "https://maps.google.com/?q=Forbesganj+Bihar" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#030714" }}>
      {/* Top gradient line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.45), rgba(6,182,212,0.45), transparent)" }} />

      <div className="wrap" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px 40px",
          marginBottom: "64px",
        }}>

          {/* Brand column */}
          <div>
            {/* Logo */}
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "22px" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "12px", flexShrink: 0,
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
              }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: "15px", fontFamily: "Poppins,sans-serif" }}>JK</span>
              </div>
              <div>
                <p style={{ fontWeight: 800, fontSize: "17px", color: "#fff", fontFamily: "Poppins,sans-serif", letterSpacing: "-0.02em", lineHeight: 1.1 }}>JK Digital Solutions</p>
                <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase" }}>Forbesganj, Bihar</p>
              </div>
            </a>

            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", lineHeight: 1.8, maxWidth: "280px", marginBottom: "28px" }}>
              Bihar के local businesses को Google पर dominate करने में help करने वाली trusted digital marketing agency।
            </p>

            {/* Social / quick contact */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 18px",
                  borderRadius: "10px", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.15)",
                  color: "#4ade80", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.15)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.08)"}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                WhatsApp
              </a>
              <a href="tel:+918651070831"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "7px", padding: "9px 18px",
                  borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Call
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "rgba(255,255,255,0.55)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "22px" }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {services.map(s => (
                <a key={s} href="#services" style={{ color: "rgba(255,255,255,0.38)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.82)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)"}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "rgba(255,255,255,0.55)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "22px" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {quickLinks.map(l => (
                <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.38)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.82)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)"}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "rgba(255,255,255,0.55)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "22px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {contactItems.map(c => (
                <a key={c.v} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.38)", fontSize: "13px", textDecoration: "none", wordBreak: "break-all", lineHeight: 1.6, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)"}>
                  {c.v}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "28px" }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "14px" }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px", fontWeight: 400 }}>
            © 2025 JK Digital Solutions · Forbesganj, Bihar · All Rights Reserved 🇮🇳
          </p>
          <a href="#" style={{
            width: "38px", height: "38px", borderRadius: "10px",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
            textDecoration: "none", transition: "all 0.2s",
          }}
            title="Back to top"
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.18)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.38)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .wrap > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer .wrap > div:first-child > div:first-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 540px) {
          footer .wrap > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer .wrap > div:first-child > div:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
}
