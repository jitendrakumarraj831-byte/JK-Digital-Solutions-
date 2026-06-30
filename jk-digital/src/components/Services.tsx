"use client";

const services = [
  {
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #06b6d4 100%)",
    glow: "rgba(37,99,235,0.3)",
    iconBg: "rgba(59,130,246,0.15)",
    badge: "Most Popular",
    badgeColor: "#60a5fa",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Website Development",
    sub: "24/7 Digital Presence जो Convert करे",
    desc: "Fast, beautiful और SEO-optimized websites जो visitors को loyal customers बनाए। Mobile-first, lightning-fast loading, और conversion के लिए optimize।",
    points: ["Mobile-First Design", "SEO-Ready Architecture", "30-Day Delivery", "1 Year Free Support"],
  },
  {
    gradient: "linear-gradient(135deg, #3b0764 0%, #7c3aed 50%, #a78bfa 100%)",
    glow: "rgba(124,58,237,0.28)",
    iconBg: "rgba(139,92,246,0.15)",
    badge: "Best Long-term ROI",
    badgeColor: "#a78bfa",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Google SEO",
    sub: "Ads खर्च किए बिना Organic Traffic",
    desc: "Paid ads के बिना Google के top results में rank करें। Sustainable growth strategy जो महीनों-सालों तक काम करे और ROI देती रहे।",
    points: ["Local + National SEO", "Keyword Research Strategy", "Monthly Performance Report", "Competitor Analysis"],
  },
  {
    gradient: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #34d399 100%)",
    glow: "rgba(5,150,105,0.28)",
    iconBg: "rgba(16,185,129,0.15)",
    badge: "More Calls Daily",
    badgeColor: "#34d399",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Google Business Profile",
    sub: "Google Maps पर #1 Position",
    desc: "जब कोई आपकी nearby service खोजे, आपका business सबसे पहले दिखे। More calls, more walk-ins, और consistent revenue growth।",
    points: ["Complete Profile Setup", "Photo & Post Optimization", "Review Management", "Top Google Maps Rank"],
  },
  {
    gradient: "linear-gradient(135deg, #78350f 0%, #d97706 50%, #fbbf24 100%)",
    glow: "rgba(217,119,6,0.28)",
    iconBg: "rgba(245,158,11,0.15)",
    badge: "Instant Results",
    badgeColor: "#fbbf24",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Google Ads",
    sub: "आज Invest, आज Results",
    desc: "Targeted PPC campaigns जो केवल ready-to-buy customers को दिखें। हर rupee strategically खर्च हो और हर click conversion में बदले।",
    points: ["Search & Display Ads", "Daily Budget Optimization", "Conversion Tracking", "Starts at ₹5K/month"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#080d1f", padding: "112px 0" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Our Services</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: "18px",
          }}>
            एक Agency,{" "}
            <span className="grad-text">चार Powerful Solutions</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "17px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            आपके business को online dominate करने के लिए सभी tools एक ही छत के नीचे।
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))", gap: "20px" }}>
          {services.map((s) => (
            <div key={s.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px", padding: "36px",
                position: "relative", overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                cursor: "default",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.055)";
                el.style.borderColor = "rgba(255,255,255,0.13)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 24px 64px ${s.glow}`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}>

              {/* Background gradient accent */}
              <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`, pointerEvents: "none", opacity: 0.55 }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Icon row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "28px" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "16px",
                    background: s.gradient,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, boxShadow: `0 8px 28px ${s.glow}`,
                  }}>
                    {s.icon}
                  </div>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                    padding: "5px 12px", borderRadius: "100px",
                    background: `${s.iconBg}`,
                    color: s.badgeColor,
                    border: `1px solid ${s.glow}`,
                  }}>{s.badge}</span>
                </div>

                {/* Text */}
                <h3 style={{ fontSize: "21px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "5px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.38)", marginBottom: "18px" }}>{s.sub}</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.75, marginBottom: "28px" }}>{s.desc}</p>

                {/* Feature list */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
                  {s.points.map(p => (
                    <div key={p} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "6px", background: s.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={s.badgeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.52)", fontWeight: 500 }}>{p}</span>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <a href="#contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontSize: "14px", fontWeight: 700, color: s.badgeColor,
                  textDecoration: "none", transition: "gap 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = "11px"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = "6px"}>
                  Get Started
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
