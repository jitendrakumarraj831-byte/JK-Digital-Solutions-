"use client";

const services = ["Website Development", "Google SEO", "Google Business Profile", "Google Ads", "Content Marketing"];
const quickLinks = [{ label: "Services", href: "#services" }, { label: "Our Work", href: "#portfolio" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }];
const contactItems = [
  { v: "+91 86510 70831", href: "tel:+918651070831" },
  { v: "+91 85418 49118", href: "tel:+918541849118" },
  { v: "jkdigitalsolutionfbg@gmail.com", href: "mailto:jkdigitalsolutionfbg@gmail.com" },
  { v: "Forbesganj, Araria, Bihar 854318", href: "https://maps.google.com/?q=Forbesganj+Bihar" },
];

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #040010 0%, #020008 100%)", position: "relative" }}>
      {/* Top gradient border */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(99,102,241,0.6), rgba(59,130,246,0.4), rgba(6,182,212,0.3), transparent)" }} />

      {/* Background orb */}
      <div style={{
        position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap" style={{ paddingTop: "80px", paddingBottom: "64px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px 40px", marginBottom: "64px",
        }}>

          {/* Brand */}
          <div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "13px",
                background: "linear-gradient(135deg, #7c3aed, #6366f1, #3b82f6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 24px rgba(124,58,237,0.5)",
              }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: "15px", fontFamily: "Poppins,sans-serif" }}>JK</span>
              </div>
              <div>
                <p style={{ fontWeight: 800, fontSize: "17px", color: "#fff", fontFamily: "Poppins,sans-serif", letterSpacing: "-0.02em", lineHeight: 1.1 }}>JK Digital Solutions</p>
                <p style={{ fontSize: "9px", color: "rgba(196,181,253,0.4)", letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase" }}>Forbesganj, Bihar</p>
              </div>
            </a>

            <p style={{ color: "rgba(228,220,255,0.32)", fontSize: "14px", lineHeight: 1.8, maxWidth: "260px", marginBottom: "28px" }}>
              Bihar के local businesses को Google पर dominate करने में help करने वाली trusted digital marketing agency।
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "7px", padding: "9px 16px",
                borderRadius: "10px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(52,211,153,0.2)",
                color: "#4ade80", fontSize: "13px", fontWeight: 700, textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.18)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.1)"}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                WhatsApp
              </a>
              <a href="tel:+918651070831" style={{
                display: "inline-flex", alignItems: "center", gap: "7px", padding: "9px 16px",
                borderRadius: "10px", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(167,139,250,0.18)",
                color: "rgba(196,181,253,0.7)", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#c4b5fd"; (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.18)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,181,253,0.7)"; (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.1)"; }}>
                📞 Call
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "rgba(196,181,253,0.4)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "22px" }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {services.map(s => (
                <a key={s} href="#services" style={{ color: "rgba(228,220,255,0.32)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(196,181,253,0.8)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(228,220,255,0.32)"}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "rgba(196,181,253,0.4)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "22px" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map(l => (
                <a key={l.label} href={l.href} style={{ color: "rgba(228,220,255,0.32)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(196,181,253,0.8)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(228,220,255,0.32)"}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "rgba(196,181,253,0.4)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "22px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {contactItems.map(c => (
                <a key={c.v} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "rgba(228,220,255,0.32)", fontSize: "13px", textDecoration: "none", wordBreak: "break-all", lineHeight: 1.6, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(196,181,253,0.75)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(228,220,255,0.32)"}>
                  {c.v}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(167,139,250,0.08)", marginBottom: "28px" }} />

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "14px" }}>
          <p style={{ color: "rgba(228,220,255,0.18)", fontSize: "13px" }}>
            © 2025 JK Digital Solutions · Forbesganj, Bihar · All Rights Reserved 🇮🇳
          </p>
          <a href="#" style={{
            width: "36px", height: "36px", borderRadius: "10px",
            background: "rgba(124,58,237,0.12)", border: "1px solid rgba(167,139,250,0.18)",
            display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.25)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(167,139,250,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(167,139,250,0.18)"; }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(196,181,253,0.6)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .wrap > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
          footer .wrap > div:first-of-type > div:first-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 540px) {
          footer .wrap > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
          footer .wrap > div:first-of-type > div:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
}
