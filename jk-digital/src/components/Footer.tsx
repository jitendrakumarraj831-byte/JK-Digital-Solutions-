"use client";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "#services" },
      { label: "Google SEO",           href: "#services" },
      { label: "Google Business Profile", href: "#services" },
      { label: "Google Ads",           href: "#services" },
      { label: "Content Marketing",    href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Work",   href: "#portfolio" },
      { label: "Pricing",    href: "#pricing" },
      { label: "FAQ",        href: "#faq" },
      { label: "Contact",    href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "+91 86510 70831",          href: "tel:+918651070831" },
      { label: "+91 85418 49118",          href: "tel:+918541849118" },
      { label: "Email us",                 href: "mailto:jkdigitalsolutionfbg@gmail.com" },
      { label: "Forbesganj, Bihar 854318", href: "https://maps.google.com/?q=Forbesganj+Bihar" },
    ],
  },
];

const linkStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 400,
  color: "rgba(230,220,255,0.38)",
  textDecoration: "none",
  transition: "color 0.15s",
  lineHeight: 1,
};

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg,#040010,#020009)", position: "relative" }}>
      {/* Top border */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(99,102,241,0.4), rgba(59,130,246,0.3), transparent)" }} />

      <div className="wrap" style={{ paddingTop: "72px", paddingBottom: "56px" }}>
        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px 40px",
          marginBottom: "56px",
        }}>

          {/* Brand */}
          <div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "18px" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "9px",
                background: "linear-gradient(135deg,#7c3aed,#6366f1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 12px rgba(124,58,237,0.4)",
              }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px", letterSpacing: "-0.02em" }}>JK</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: "15px", color: "#fff", letterSpacing: "-0.02em" }}>JK Digital Solutions</span>
            </a>

            <p style={{ fontSize: "14px", color: "rgba(230,220,255,0.32)", lineHeight: 1.7, maxWidth: "240px", marginBottom: "24px" }}>
              Bihar's digital marketing agency helping local businesses grow on Google.
            </p>

            <div style={{ display: "flex", gap: "8px" }}>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "8px 14px", borderRadius: "9px",
                background: "rgba(22,163,74,0.1)", border: "1px solid rgba(52,211,153,0.18)",
                color: "#4ade80", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(22,163,74,0.18)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(22,163,74,0.1)"}>
                WhatsApp
              </a>
              <a href="tel:+918651070831" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "8px 14px", borderRadius: "9px",
                background: "rgba(124,58,237,0.08)", border: "1px solid rgba(167,139,250,0.15)",
                color: "rgba(196,181,253,0.65)", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)"}>
                Call us
              </a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(196,181,253,0.38)", marginBottom: "20px" }}>
                {col.title}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map(l => (
                  <a key={l.label} href={l.href} style={linkStyle}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(230,220,255,0.72)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(230,220,255,0.38)"}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ height: "1px", background: "rgba(167,139,250,0.07)", marginBottom: "24px" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "13px", color: "rgba(230,220,255,0.2)" }}>
            © 2025 JK Digital Solutions · Forbesganj, Bihar
          </p>
          <a href="#" style={{
            width: "32px", height: "32px", borderRadius: "8px",
            background: "rgba(124,58,237,0.1)", border: "1px solid rgba(167,139,250,0.14)",
            display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none",
            transition: "background 0.15s",
          }}
            title="Back to top"
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.22)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.1)"}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(196,181,253,0.55)" strokeWidth="2.5" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .wrap > div:first-of-type { grid-template-columns: 1fr 1fr !important; }
          footer .wrap > div:first-of-type > div:first-child { grid-column: span 2; }
        }
        @media (max-width: 540px) {
          footer .wrap > div:first-of-type { grid-template-columns: 1fr !important; }
          footer .wrap > div:first-of-type > div:first-child { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
}
