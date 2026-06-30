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
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 10px rgba(37,99,235,0.4)",
              }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px", letterSpacing: "-0.02em" }}>JK</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: "16px", color: "#fff", letterSpacing: "-0.02em" }}>JK Digital Solutions</span>
            </a>

            <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7, maxWidth: "240px", marginBottom: "28px" }}>
              Bihar की digital marketing agency — local businesses को Google पर grow कराते हैं।
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
                background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)",
                color: "#93C5FD", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.18)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.1)"}>
                Call us
              </a>
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
                    fontSize: "14px", fontWeight: 400, color: "#64748B",
                    textDecoration: "none", transition: "color 0.15s", lineHeight: 1,
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CBD5E1"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748B"}>
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
            © 2025 JK Digital Solutions · Forbesganj, Bihar
          </p>
          <a href="#" style={{
            width: "34px", height: "34px", borderRadius: "8px",
            background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none",
            transition: "background 0.15s",
          }}
            title="Back to top"
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.2)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.1)"}>
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
