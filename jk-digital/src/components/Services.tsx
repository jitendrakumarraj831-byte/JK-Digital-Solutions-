"use client";

const services = [
  {
    bg: "linear-gradient(145deg, #1a0f4f 0%, #2d1b8e 50%, #1e40af 100%)",
    border: "rgba(129,140,248,0.4)",
    glow: "rgba(99,102,241,0.3)",
    badge: "MOST POPULAR",
    badgeBg: "rgba(129,140,248,0.2)",
    badgeColor: "#a5b4fc",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    iconBg: "linear-gradient(135deg, #6366f1, #818cf8)",
    title: "Website Development",
    sub: "24/7 Digital Presence जो Convert करे",
    desc: "Fast, beautiful और SEO-optimized websites जो visitors को loyal customers बनाए। Mobile-first, lightning-fast loading, और conversion के लिए optimize।",
    features: ["Mobile-First Design", "SEO-Ready Architecture", "30-Day Delivery", "1 Year Free Support", "Custom Domain Setup", "SSL Certificate"],
    price: "₹8,999",
    label: "से शुरू",
  },
  {
    bg: "linear-gradient(145deg, #0c2340 0%, #1e4d8c 50%, #0e7490 100%)",
    border: "rgba(56,189,248,0.4)",
    glow: "rgba(14,165,233,0.28)",
    badge: "BEST LONG-TERM ROI",
    badgeBg: "rgba(56,189,248,0.18)",
    badgeColor: "#7dd3fc",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    iconBg: "linear-gradient(135deg, #0284c7, #06b6d4)",
    title: "Google SEO",
    sub: "Ads खर्च किए बिना Organic Traffic",
    desc: "Paid ads के बिना Google के top results में rank करें। Sustainable growth strategy जो महीनों-सालों तक काम करे और ROI देती रहे।",
    features: ["Local + National SEO", "Keyword Research Strategy", "Monthly Performance Report", "Competitor Analysis", "On-Page Optimization", "Backlink Building"],
    price: "₹4,999",
    label: "/ month से",
  },
  {
    bg: "linear-gradient(145deg, #0d2a1f 0%, #0f5132 50%, #065f46 100%)",
    border: "rgba(52,211,153,0.4)",
    glow: "rgba(16,185,129,0.28)",
    badge: "FREE SETUP",
    badgeBg: "rgba(52,211,153,0.18)",
    badgeColor: "#6ee7b7",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    iconBg: "linear-gradient(135deg, #059669, #34d399)",
    title: "Google Business Profile",
    sub: "Local Search में #1 Position",
    desc: "Google Maps और Local Search में dominate करें। आपका business address, reviews, photos — सब optimize होगा। Nearby customers directly आपको find करें।",
    features: ["GMB Complete Setup", "Photo Optimization", "Review Management", "Local Ranking", "Q&A Management", "Monthly Updates"],
    price: "₹2,499",
    label: "/ month से",
  },
  {
    bg: "linear-gradient(145deg, #2d0a3a 0%, #6d28d9 40%, #9333ea 100%)",
    border: "rgba(216,180,254,0.4)",
    glow: "rgba(168,85,247,0.3)",
    badge: "FASTEST RESULTS",
    badgeBg: "rgba(216,180,254,0.18)",
    badgeColor: "#e9d5ff",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
    iconBg: "linear-gradient(135deg, #7c3aed, #a855f7)",
    title: "Google Ads",
    sub: "हर रुपये पर Maximum Return",
    desc: "Targeted Google Ads campaigns जो सही customers तक पहुँचे। Minimum budget में maximum leads। Expert management और ROI-focused strategy।",
    features: ["Campaign Setup & Management", "Keyword Bidding Strategy", "Ad Copywriting", "Landing Page Optimization", "Budget Optimization", "Weekly Reports"],
    price: "₹3,999",
    label: "/ month से",
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      padding: "112px 0",
      background: "linear-gradient(180deg, #0a0118 0%, #080025 50%, #060018 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background orb */}
      <div style={{
        position: "absolute", top: "20%", right: "-20%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>Our Services</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px",
          }}>
            एक Agency, <span className="grad-text">चार Powerful Solutions</span>
          </h2>
          <p style={{ color: "rgba(228,220,255,0.5)", fontSize: "17px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            आपके business को online dominate करने के लिए सभी tools एक ही छत के नीचे।
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,480px),1fr))", gap: "24px" }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: s.bg,
              border: `1px solid ${s.border}`,
              borderRadius: "28px",
              padding: "36px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.32s",
              boxShadow: `0 8px 40px ${s.glow}`,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${s.glow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${s.glow}`; }}>

              {/* Glow spot */}
              <div style={{
                position: "absolute", top: "-60px", right: "-60px",
                width: "200px", height: "200px", borderRadius: "50%",
                background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              {/* Badge */}
              <div style={{
                position: "absolute", top: "24px", right: "24px",
                padding: "4px 12px", borderRadius: "50px",
                background: s.badgeBg, border: `1px solid ${s.border}`,
                fontSize: "10px", fontWeight: 700, color: s.badgeColor, letterSpacing: "0.08em",
              }}>{s.badge}</div>

              {/* Icon */}
              <div style={{
                width: "58px", height: "58px", borderRadius: "16px",
                background: s.iconBg, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "22px", boxShadow: `0 6px 24px ${s.glow}`,
              }}>{s.icon}</div>

              <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "6px", letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p style={{ fontSize: "13px", color: s.badgeColor, fontWeight: 600, marginBottom: "14px", opacity: 0.85 }}>{s.sub}</p>
              <p style={{ color: "rgba(228,220,255,0.62)", fontSize: "14px", lineHeight: 1.75, marginBottom: "24px" }}>{s.desc}</p>

              {/* Features */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "28px" }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: s.iconBg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "12px", color: "rgba(228,220,255,0.65)", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "20px", borderTop: `1px solid ${s.border}` }}>
                <div>
                  <p style={{ fontSize: "11px", color: "rgba(228,220,255,0.4)", fontWeight: 600, marginBottom: "2px" }}>{s.label}</p>
                  <p className="font-display" style={{ fontSize: "26px", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>{s.price}</p>
                </div>
                <a href="#contact" style={{
                  padding: "10px 20px", borderRadius: "12px",
                  background: `rgba(255,255,255,0.12)`, border: `1px solid ${s.border}`,
                  color: "#fff", fontWeight: 700, fontSize: "13px", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"}>
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
