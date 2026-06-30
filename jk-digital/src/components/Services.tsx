"use client";

const services = [
  {
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
    badge: "Most Popular",
    badgeBg: "#EFF6FF",
    badgeColor: "#2563EB",
    title: "Website Development",
    tagline: "Your 24/7 sales representative.",
    desc: "Fast, mobile-first websites built to convert visitors into customers. SEO-ready from day one.",
    features: ["Mobile-first design", "SEO architecture", "30-day delivery", "1 year free support"],
    price: "₹8,999",
    priceNote: "onwards",
    cardBorder: "#BFDBFE",
    checkColor: "#2563EB",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
    badge: "Best ROI",
    badgeBg: "#F0FDF4",
    badgeColor: "#16A34A",
    title: "Google SEO",
    tagline: "Rank higher. Pay nothing for clicks.",
    desc: "Get your business to the top of Google search results organically — and stay there.",
    features: ["Local + national SEO", "Keyword research", "Monthly reports", "Competitor analysis"],
    price: "₹4,999",
    priceNote: "/ month",
    cardBorder: "#BBF7D0",
    checkColor: "#16A34A",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    iconBg: "#ECFEFF",
    iconColor: "#0891B2",
    badge: "Free Setup",
    badgeBg: "#ECFEFF",
    badgeColor: "#0891B2",
    title: "Google Business Profile",
    tagline: "Own local search. Get found nearby.",
    desc: "Optimise your GMB listing so customers searching near you find your business first.",
    features: ["Complete GMB setup", "Review management", "Photo optimisation", "Local ranking"],
    price: "₹2,499",
    priceNote: "/ month",
    cardBorder: "#A5F3FC",
    checkColor: "#0891B2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    iconBg: "#EEF2FF",
    iconColor: "#4F46E5",
    badge: "Fastest Results",
    badgeBg: "#EEF2FF",
    badgeColor: "#4F46E5",
    title: "Google Ads",
    tagline: "Pay only for results, not visibility.",
    desc: "Targeted campaigns that bring qualified leads within days. Expert management, measurable ROI.",
    features: ["Campaign setup", "Bid optimisation", "Ad copywriting", "Weekly reports"],
    price: "₹3,999",
    priceNote: "/ month",
    cardBorder: "#C7D2FE",
    checkColor: "#4F46E5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "112px 0", background: "#F8FAFC" }}>
      <div className="wrap">
        {/* Section header */}
        <div style={{ marginBottom: "72px", maxWidth: "520px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Services</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Four services. <span className="accent">One</span> agency.
          </h2>
          <p className="t-body">
            Everything your business needs to dominate online — nothing you don't.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: "20px" }}>
          {services.map((s, i) => (
            <div key={i} className="card" style={{
              background: "#fff",
              border: `1px solid #E2E8F0`,
              borderTop: `3px solid ${s.cardBorder}`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              padding: "32px",
              position: "relative",
              borderRadius: "20px",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; }}>

              {/* Badge */}
              <div style={{
                position: "absolute", top: "24px", right: "24px",
                padding: "4px 12px", borderRadius: "100px",
                background: s.badgeBg,
                fontSize: "11px", fontWeight: 700, color: s.badgeColor, letterSpacing: "0.04em",
              }}>{s.badge}</div>

              {/* Icon */}
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: s.iconBg, color: s.iconColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                {s.icon}
              </div>

              <h3 className="t-h3" style={{ marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontSize: "13px", color: s.iconColor, fontWeight: 600, marginBottom: "12px" }}>{s.tagline}</p>
              <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "24px", lineHeight: 1.7 }}>{s.desc}</p>

              {/* Features */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "16px", height: "16px", borderRadius: "50%",
                      background: s.iconBg, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={s.checkColor} strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: "20px", borderTop: "1px solid #F1F5F9",
              }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 600, marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.priceNote}</div>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.price}</div>
                </div>
                <a href="#contact" style={{
                  padding: "10px 20px", borderRadius: "10px",
                  background: s.iconBg,
                  color: s.iconColor, fontWeight: 600, fontSize: "14px", textDecoration: "none",
                  border: `1px solid ${s.cardBorder}`,
                  transition: "opacity 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.8"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                  Get started →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
