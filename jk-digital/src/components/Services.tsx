"use client";

const S = {
  label: { fontSize: "11px", fontWeight: 600 as const, textTransform: "uppercase" as const, letterSpacing: "0.1em" },
};

const services = [
  {
    cardClass: "card card-indigo",
    iconG: "linear-gradient(135deg,#4f46e5,#818cf8)",
    iconColor: "#a5b4fc",
    badge: "Most Popular",
    title: "Website Development",
    tagline: "Your 24/7 sales representative.",
    desc: "Fast, mobile-first websites built to convert visitors into customers. SEO-ready from day one.",
    features: ["Mobile-first design", "SEO architecture", "30-day delivery", "1 year free support"],
    price: "₹8,999",
    priceNote: "onwards",
  },
  {
    cardClass: "card card-blue",
    iconG: "linear-gradient(135deg,#1d4ed8,#0ea5e9)",
    iconColor: "#7dd3fc",
    badge: "Best ROI",
    title: "Google SEO",
    tagline: "Rank higher. Pay nothing for clicks.",
    desc: "Get your business to the top of Google search results organically — and stay there.",
    features: ["Local + national SEO", "Keyword research", "Monthly reports", "Competitor analysis"],
    price: "₹4,999",
    priceNote: "/ month",
  },
  {
    cardClass: "card card-teal",
    iconG: "linear-gradient(135deg,#0f766e,#22d3ee)",
    iconColor: "#6ee7b7",
    badge: "Free Setup",
    title: "Google Business Profile",
    tagline: "Own local search. Get found nearby.",
    desc: "Optimise your GMB listing so customers searching near you find your business first.",
    features: ["Complete GMB setup", "Review management", "Photo optimisation", "Local ranking"],
    price: "₹2,499",
    priceNote: "/ month",
  },
  {
    cardClass: "card card-purple",
    iconG: "linear-gradient(135deg,#7c3aed,#a855f7)",
    iconColor: "#e9d5ff",
    badge: "Fastest Results",
    title: "Google Ads",
    tagline: "Pay only for results, not visibility.",
    desc: "Targeted campaigns that bring qualified leads within days. Expert management, measurable ROI.",
    features: ["Campaign setup", "Bid optimisation", "Ad copywriting", "Weekly reports"],
    price: "₹3,999",
    priceNote: "/ month",
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      padding: "128px 0",
      background: "linear-gradient(180deg, #060011 0%, #09001e 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", top: "10%", right: "-20%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        {/* Section header */}
        <div style={{ marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "16px" }}>Services</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Four services. <span className="accent">One</span> agency.
          </h2>
          <p className="t-body" style={{ maxWidth: "420px" }}>
            Everything your business needs to dominate online — nothing you don't.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,440px),1fr))", gap: "16px" }}>
          {services.map((s, i) => (
            <div key={i} className={s.cardClass} style={{ padding: "32px", position: "relative" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}>

              {/* Badge */}
              <div style={{
                position: "absolute", top: "24px", right: "24px",
                padding: "3px 10px", borderRadius: "100px",
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
                fontSize: "11px", fontWeight: 600, color: s.iconColor, letterSpacing: "0.06em",
              }}>{s.badge}</div>

              {/* Icon */}
              <div style={{
                width: "48px", height: "48px", borderRadius: "13px",
                background: s.iconG, display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>}
                  {i === 1 && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>}
                  {i === 2 && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>}
                  {i === 3 && <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
                </svg>
              </div>

              <h3 className="t-h3" style={{ marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontSize: "13px", color: s.iconColor, fontWeight: 600, marginBottom: "12px", opacity: 0.8 }}>{s.tagline}</p>
              <p className="t-small" style={{ marginBottom: "24px", lineHeight: 1.7 }}>{s.desc}</p>

              {/* Features */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "28px" }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <div style={{ width: "15px", height: "15px", borderRadius: "50%", background: s.iconG, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "13px", color: "rgba(230,220,255,0.6)", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(230,220,255,0.35)", fontWeight: 600, marginBottom: "2px" }}>{s.priceNote}</div>
                  <div style={{ fontSize: "26px", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.price}</div>
                </div>
                <a href="#contact" style={{
                  padding: "9px 18px", borderRadius: "9px",
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff", fontWeight: 600, fontSize: "13px", textDecoration: "none",
                  transition: "background 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.14)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"}>
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
