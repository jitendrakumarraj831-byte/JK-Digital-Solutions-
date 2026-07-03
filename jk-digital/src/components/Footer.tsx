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

export default function Footer() {
  return (
    <footer style={{ background: "#0F172A", position: "relative" }}>
      <div className="wrap" style={{ paddingTop: "72px", paddingBottom: "48px" }}>
        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px 40px",
          marginBottom: "56px",
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "18px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                background: "linear-gradient(135deg, #1D4ED8, #4F46E5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 10px rgba(29,78,216,0.4)",
              }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px", letterSpacing: "-0.02em" }}>JK</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: "16px", color: "#fff", letterSpacing: "-0.02em" }}>JK Digital Solutions</span>
            </a>

            <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7, maxWidth: "240px", marginBottom: "28px" }}>
              Bihar की डिजिटल मार्केटिंग एजेंसी — स्थानीय व्यवसायों को Google पर आगे बढ़ाते हैं।
            </p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "9px 16px", borderRadius: "10px",
                background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.25)",
                color: "#4ADE80", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(22,163,74,0.2)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(22,163,74,0.12)"}>
                WhatsApp
              </a>
              <a href="tel:+918651070831" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "9px 16px", borderRadius: "10px",
                background: "rgba(29,78,216,0.1)", border: "1px solid rgba(29,78,216,0.2)",
                color: "#93C5FD", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(29,78,216,0.18)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(29,78,216,0.1)"}>
                Call us
              </a>
            </div>

            {/* Social media */}
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              {[
                { label: "Instagram", href: "https://instagram.com/jkdigitalsolutions", path: <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
                { label: "Facebook", href: "https://facebook.com/jkdigitalsolutions", path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/> },
                { label: "YouTube", href: "https://youtube.com/@jkdigitalsolutions", path: <><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></> },
                { label: "LinkedIn", href: "https://linkedin.com/company/jkdigitalsolutions", path: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} style={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  background: "rgba(148,163,184,0.08)", border: "1px solid rgba(148,163,184,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none",
                  transition: "background 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(148,163,184,0.18)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(148,163,184,0.08)"}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.path}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569", marginBottom: "20px" }}>
                {col.title}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map(l => (
                  <a key={l.label} href={l.href} style={{
                    fontSize: "14px", fontWeight: 400, color: "#4B5563",
                    textDecoration: "none", transition: "color 0.15s", lineHeight: 1,
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CBD5E1"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4B5563"}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ height: "1px", background: "#1E293B", marginBottom: "24px" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "13px", color: "#475569" }}>
            © {new Date().getFullYear()} JK Digital Solutions · Forbesganj, Bihar
          </p>
          <a href="#" style={{
            width: "34px", height: "34px", borderRadius: "8px",
            background: "rgba(29,78,216,0.1)", border: "1px solid rgba(29,78,216,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none",
            transition: "background 0.15s",
          }}
            title="Back to top"
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(29,78,216,0.2)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(29,78,216,0.1)"}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 2; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
}
