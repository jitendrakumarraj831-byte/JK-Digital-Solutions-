"use client";

const projects = [
  {
    emoji: "🦷",
    name: "Dr. Sharma Dental Clinic",
    location: "Araria, Bihar",
    tag: "Healthcare",
    tagG: "linear-gradient(135deg,#0284c7,#06b6d4)",
    result1: { n: "1st", l: "Google Rank" },
    result2: { n: "180%", l: "More Patients" },
    service: "SEO + GMB Optimization",
    g: "linear-gradient(145deg, #0c2340 0%, #1e4d8c 50%, #0e7490 100%)",
    border: "rgba(56,189,248,0.35)",
    glow: "rgba(14,165,233,0.2)",
  },
  {
    emoji: "🍛",
    name: "Rajdhani Restaurant",
    location: "Forbesganj, Bihar",
    tag: "Restaurant",
    tagG: "linear-gradient(135deg,#d97706,#f59e0b)",
    result1: { n: "4.8★", l: "Google Reviews" },
    result2: { n: "3×", l: "Online Orders" },
    service: "GMB + Website + Content",
    g: "linear-gradient(145deg, #2d1a04 0%, #78350f 50%, #92400e 100%)",
    border: "rgba(251,191,36,0.35)",
    glow: "rgba(245,158,11,0.2)",
  },
  {
    emoji: "🎓",
    name: "Bright Future Academy",
    location: "Forbesganj, Bihar",
    tag: "Education",
    tagG: "linear-gradient(135deg,#7c3aed,#a855f7)",
    result1: { n: "120+", l: "New Admissions" },
    result2: { n: "250%", l: "Lead Growth" },
    service: "Google Ads + Website",
    g: "linear-gradient(145deg, #2d0a3a 0%, #6d28d9 50%, #7c3aed 100%)",
    border: "rgba(216,180,254,0.35)",
    glow: "rgba(168,85,247,0.2)",
  },
  {
    emoji: "🏠",
    name: "Agarwal Properties",
    location: "Araria, Bihar",
    tag: "Real Estate",
    tagG: "linear-gradient(135deg,#059669,#34d399)",
    result1: { n: "40+", l: "Property Leads / mo" },
    result2: { n: "5×", l: "ROI on Ads" },
    service: "Google Ads + SEO",
    g: "linear-gradient(145deg, #0d2a1f 0%, #065f46 50%, #047857 100%)",
    border: "rgba(52,211,153,0.35)",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    emoji: "💇",
    name: "Glamour Beauty Studio",
    location: "Forbesganj, Bihar",
    tag: "Beauty & Salon",
    tagG: "linear-gradient(135deg,#db2777,#ec4899)",
    result1: { n: "200+", l: "Monthly Bookings" },
    result2: { n: "4.9★", l: "Rating" },
    service: "GMB + Content + SEO",
    g: "linear-gradient(145deg, #3b0764 0%, #86198f 50%, #a21caf 100%)",
    border: "rgba(249,168,212,0.35)",
    glow: "rgba(236,72,153,0.2)",
  },
  {
    emoji: "🏨",
    name: "Hotel Sunrise Palace",
    location: "Araria, Bihar",
    tag: "Hospitality",
    tagG: "linear-gradient(135deg,#0891b2,#22d3ee)",
    result1: { n: "85%", l: "Occupancy Rate" },
    result2: { n: "140%", l: "Direct Bookings" },
    service: "Website + SEO + Ads",
    g: "linear-gradient(145deg, #0c2340 0%, #0e4f7a 50%, #0369a1 100%)",
    border: "rgba(34,211,238,0.35)",
    glow: "rgba(6,182,212,0.2)",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{
      padding: "112px 0",
      background: "linear-gradient(180deg, #08001f 0%, #0d0525 50%, #060018 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-10%", right: "-15%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>Our Work</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px",
          }}>
            Real Results, <span className="grad-text-cyan">Real Businesses</span>
          </h2>
          <p style={{ color: "rgba(228,220,255,0.5)", fontSize: "17px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Bihar के local businesses जो अब Google पर dominate कर रहे हैं।
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,340px),1fr))", gap: "20px" }}>
          {projects.map((p, i) => (
            <div key={i} style={{
              borderRadius: "24px", overflow: "hidden",
              border: `1px solid ${p.border}`,
              transition: "all 0.3s",
              boxShadow: `0 4px 30px ${p.glow}`,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-7px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${p.glow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${p.glow}`; }}>

              {/* Gradient header */}
              <div style={{
                background: p.g, padding: "28px 24px 22px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: "12px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "36px" }}>{p.emoji}</span>
                  <div>
                    <p className="font-display" style={{ fontWeight: 800, fontSize: "16px", color: "#fff", letterSpacing: "-0.01em" }}>{p.name}</p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>{p.location}</p>
                  </div>
                </div>
                <div style={{ padding: "4px 12px", borderRadius: "50px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}>{p.tag}</span>
                </div>
              </div>

              {/* Results + body */}
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "24px" }}>
                {/* Result boxes */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "18px" }}>
                  {[p.result1, p.result2].map(r => (
                    <div key={r.l} style={{
                      padding: "14px", borderRadius: "14px", textAlign: "center",
                      background: `${p.g.replace("145deg", "135deg")}`,
                      border: `1px solid ${p.border}`,
                    }}>
                      <p className="font-display" style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>{r.n}</p>
                      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{r.l}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: p.tagG, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: "12px", color: "rgba(228,220,255,0.55)", fontWeight: 500 }}>{p.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: "16px", padding: "16px 40px" }}>
            अपना Case Study देखें →
          </a>
        </div>
      </div>
    </section>
  );
}
