"use client";

const projects = [
  {
    emoji: "🦷",
    title: "Araria Dental Clinic",
    category: "Healthcare",
    result: "+220%",
    metric: "Monthly Appointments",
    desc: "GMB Optimization + Local SEO से पहले 3 महीनों में appointments triple हो गईं।",
    tags: ["Website", "GMB", "SEO"],
    accent: "#3b82f6",
    headerBg: "linear-gradient(135deg, #1e3a8a, #1d4ed8, #2563eb)",
  },
  {
    emoji: "🍽️",
    title: "Forbesganj Sweet House",
    category: "Restaurant",
    result: "3×",
    metric: "Monthly Orders",
    desc: "Google Ads campaign से त्योहारी season में orders 3 गुना बढ़े — first month ROI 4x।",
    tags: ["Website", "Google Ads"],
    accent: "#f97316",
    headerBg: "linear-gradient(135deg, #7c2d12, #c2410c, #ea580c)",
  },
  {
    emoji: "🎓",
    title: "Success Coaching Centre",
    category: "Education",
    result: "+95",
    metric: "Admissions / Year",
    desc: "Website + SEO से organic admissions में 95 नए students — zero paid ads.",
    tags: ["Website", "SEO", "GMB"],
    accent: "#8b5cf6",
    headerBg: "linear-gradient(135deg, #3b0764, #6d28d9, #7c3aed)",
  },
  {
    emoji: "🏠",
    title: "Araria Properties",
    category: "Real Estate",
    result: "4×",
    metric: "Property Inquiries",
    desc: "SEO + Ads strategy से property inquiries 4x — 90-day ROI positive।",
    tags: ["Website", "Ads", "SEO"],
    accent: "#10b981",
    headerBg: "linear-gradient(135deg, #064e3b, #047857, #059669)",
  },
  {
    emoji: "🏨",
    title: "Bihar Grand Hotel",
    category: "Hospitality",
    result: "+150%",
    metric: "Direct Bookings",
    desc: "GMB + Website redesign से direct bookings में 150% growth — OTA dependency कम।",
    tags: ["Website", "GMB", "SEO"],
    accent: "#06b6d4",
    headerBg: "linear-gradient(135deg, #164e63, #0e7490, #0891b2)",
  },
  {
    emoji: "💊",
    title: "Forbesganj Medical",
    category: "Pharmacy",
    result: "Top 3",
    metric: "Google Maps Rank",
    desc: "GMB Optimization से 6 हफ्ते में Google Maps पर Top 3 position achieved।",
    tags: ["GMB", "SEO"],
    accent: "#f43f5e",
    headerBg: "linear-gradient(135deg, #881337, #be123c, #e11d48)",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: "#080d1f", padding: "112px 0" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Case Studies</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: "18px",
          }}>
            Real Businesses,{" "}
            <span className="grad-text">Real Results</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "17px", maxWidth: "460px", margin: "0 auto", lineHeight: 1.75 }}>
            इन local Bihar businesses को हमने digitally transform किया। आप next हो सकते हैं।
          </p>
        </div>

        {/* Projects grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 350px), 1fr))", gap: "20px", marginBottom: "56px" }}>
          {projects.map(p => (
            <div key={p.title}
              style={{
                borderRadius: "22px", overflow: "hidden",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-7px)";
                el.style.borderColor = `${p.accent}40`;
                el.style.boxShadow = `0 24px 56px ${p.accent}1a`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.boxShadow = "none";
              }}>

              {/* Card header */}
              <div style={{
                background: p.headerBg,
                padding: "28px 28px 24px",
                position: "relative", overflow: "hidden",
                minHeight: "130px",
              }}>
                <div style={{ position: "absolute", top: "-30%", right: "-10%", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "-40%", left: "20%", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

                <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <span style={{ fontSize: "40px", display: "block", marginBottom: "12px" }}>{p.emoji}</span>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {p.tags.map(t => (
                        <span key={t} style={{
                          padding: "3px 10px", borderRadius: "100px",
                          background: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.9)",
                          fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em",
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p className="font-display" style={{ fontSize: "2.4rem", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>{p.result}</p>
                    <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.72)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "4px" }}>{p.metric}</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "22px 28px 26px" }}>
                <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "16px", marginBottom: "3px", letterSpacing: "-0.01em" }}>{p.title}</h3>
                <p style={{ color: p.accent, fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>{p.category}</p>
                <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "13px", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center" }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "16px 36px", borderRadius: "12px",
            background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
            color: "#fff", fontWeight: 700, fontSize: "16px", textDecoration: "none",
            boxShadow: "0 4px 28px rgba(59,130,246,0.38)",
            transition: "all 0.22s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(59,130,246,0.52)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 28px rgba(59,130,246,0.38)"; }}>
            अपना Project शुरू करें
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
