"use client";

const services = [
  {
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    badge: "Most Popular",
    badgeBg: "#EFF6FF",
    badgeColor: "#1D4ED8",
    title: "Website Development",
    tagline: "Your 24/7 online sales representative.",
    features: ["Mobile-first design", "SEO architecture", "30-day delivery", "1 year free support"],
    price: "₹8,999",
    priceNote: "onwards",
    cardBorder: "#BFDBFE",
    checkColor: "#1D4ED8",
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
    title: "SEO",
    tagline: "Rank higher. Pay nothing for the click.",
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
    iconColor: "#06B6D4",
    badge: "Free Setup",
    badgeBg: "#ECFEFF",
    badgeColor: "#06B6D4",
    title: "Google Business Profile",
    tagline: "Win local search. Reach customers nearby.",
    features: ["Complete GMB setup", "Review management", "Photo optimisation", "Local ranking"],
    price: "₹2,499",
    priceNote: "/ month",
    cardBorder: "#A5F3FC",
    checkColor: "#06B6D4",
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
    tagline: "Pay for results, not just impressions.",
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
  {
    iconBg: "#FDF2F8",
    iconColor: "#DB2777",
    badge: "Trending",
    badgeBg: "#FDF2F8",
    badgeColor: "#DB2777",
    title: "Social Media Marketing",
    tagline: "Show up where your customers already are.",
    features: ["Content calendar", "Reels & graphics", "Community management", "Monthly insights"],
    price: "₹5,999",
    priceNote: "/ month",
    cardBorder: "#FBCFE8",
    checkColor: "#DB2777",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    iconBg: "#FDF4FF",
    iconColor: "#9333EA",
    badge: "Build Trust",
    badgeBg: "#FDF4FF",
    badgeColor: "#9333EA",
    title: "Brand Identity",
    tagline: "A consistent look, everywhere your business appears.",
    features: ["Brand colour palette", "Typography system", "Brand guideline PDF", "Templates for social & print"],
    price: "₹6,999",
    priceNote: "onwards",
    cardBorder: "#E9D5FF",
    checkColor: "#9333EA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 000 20"/><path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    iconBg: "#FFF1F2",
    iconColor: "#E11D48",
    badge: "First Impression",
    badgeBg: "#FFF1F2",
    badgeColor: "#E11D48",
    title: "Logo Design",
    tagline: "An identity that's remembered.",
    features: ["3 unique concepts", "Unlimited revisions", "All file formats", "Visiting card design"],
    price: "₹3,499",
    priceNote: "onwards",
    cardBorder: "#FECDD3",
    checkColor: "#E11D48",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    badge: "Save Time",
    badgeBg: "#ECFDF5",
    badgeColor: "#059669",
    title: "Business Automation",
    tagline: "Follow up on every enquiry — without manual work.",
    features: ["WhatsApp auto-reply", "Lead capture forms", "CRM setup", "Appointment reminders"],
    price: "₹6,999",
    priceNote: "onwards",
    cardBorder: "#A7F3D0",
    checkColor: "#059669",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        {/* Section header */}
        <div style={{ marginBottom: "72px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Our Services</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Eight services. <span className="accent">One</span> agency.
          </h2>
          <p className="t-body">
            Everything your business needs to grow online — under one roof, one team, one point of contact.
          </p>
        </div>

        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "20px", alignItems: "stretch" }}>
          {services.map((s, i) => (
            <div key={i} className="card" style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
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

              <h3 className="t-h3" style={{ marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: s.iconColor, fontWeight: 600, marginBottom: "24px", lineHeight: 1.6 }}>{s.tagline}</p>

              {/* Features */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "16px", height: "16px", borderRadius: "50%",
                      background: s.iconBg, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={s.checkColor} strokeWidth="3.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Footer — pinned to bottom so every card lines up */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: "20px", borderTop: "1px solid #F1F5F9",
                marginTop: "auto",
              }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#6B7280", fontWeight: 600, marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.priceNote}</div>
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
