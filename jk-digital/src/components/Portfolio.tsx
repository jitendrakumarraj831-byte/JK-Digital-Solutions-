"use client";
const projects = [
  { emoji: "🦷", title: "Araria Dental Clinic", cat: "Healthcare", result: "+220%", metric: "Monthly Appointments", tags: ["Website", "GMB", "SEO"], accent: "#3b82f6", bg: "linear-gradient(135deg, #1e3a8a, #2563eb)" },
  { emoji: "🍽️", title: "Forbesganj Sweet House", cat: "Restaurant", result: "3x", metric: "Monthly Orders", tags: ["Website", "Google Ads"], accent: "#f97316", bg: "linear-gradient(135deg, #92400e, #f97316)" },
  { emoji: "🎓", title: "Success Coaching Centre", cat: "Education", result: "+95", metric: "New Admissions/Year", tags: ["Website", "SEO", "GMB"], accent: "#8b5cf6", bg: "linear-gradient(135deg, #4c1d95, #7c3aed)" },
  { emoji: "🏠", title: "Araria Properties", cat: "Real Estate", result: "4x", metric: "Property Inquiries", tags: ["Website", "Ads", "SEO"], accent: "#10b981", bg: "linear-gradient(135deg, #064e3b, #059669)" },
  { emoji: "🏨", title: "Bihar Grand Hotel", cat: "Hospitality", result: "+150%", metric: "Direct Bookings", tags: ["Website", "GMB", "SEO"], accent: "#06b6d4", bg: "linear-gradient(135deg, #164e63, #0891b2)" },
  { emoji: "💊", title: "Forbesganj Medical", cat: "Pharmacy", result: "Top 3", metric: "Google Maps Rank", tags: ["GMB", "SEO"], accent: "#f43f5e", bg: "linear-gradient(135deg, #881337, #e11d48)" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: "#030712", padding: "100px 0" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Case Studies</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px"
          }}>
            Real Businesses, <span className="grad-text">Real Results</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", maxWidth: "440px", margin: "0 auto" }}>
            इन local businesses को हमने digital में grow किया। आप next हो सकते हैं।
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "16px", marginBottom: "48px" }}>
          {projects.map(p => (
            <div key={p.title} style={{
              borderRadius: "20px", overflow: "hidden",
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = `${p.accent}40`; e.currentTarget.style.boxShadow = `0 20px 48px ${p.accent}20`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow = "none"; }}>

              {/* Card header */}
              <div style={{ background: p.bg, padding: "28px 24px", position: "relative", overflow: "hidden", minHeight: "120px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "140px", height: "140px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                <div>
                  <span style={{ fontSize: "36px", display: "block", marginBottom: "6px" }}>{p.emoji}</span>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ padding: "3px 10px", borderRadius: "100px", background: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.9)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", lineHeight: 1, fontFamily: "Poppins, sans-serif" }}>{p.result}</p>
                  <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{p.metric}</p>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "18px 24px" }}>
                <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "15px" }}>{p.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginTop: "3px" }}>{p.cat}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: "15px", padding: "15px 32px" }}>
            अपना Project शुरू करें →
          </a>
        </div>
      </div>
    </section>
  );
}
