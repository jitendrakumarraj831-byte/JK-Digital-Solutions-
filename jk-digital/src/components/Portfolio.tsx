"use client";

const projects = [
  {
    name: "Dr. Sharma Dental Clinic",
    location: "Araria, Bihar",
    tag: "Healthcare",
    service: "SEO + GMB",
    r1: { n: "#1", l: "Google rank" },
    r2: { n: "+180%", l: "New patients" },
    accentColor: "#0891B2",
    accentBg: "#ECFEFF",
    tagBg: "#ECFEFF",
    tagColor: "#0891B2",
  },
  {
    name: "Rajdhani Restaurant",
    location: "Forbesganj, Bihar",
    tag: "Restaurant",
    service: "GMB + Website",
    r1: { n: "4.8★", l: "Rating" },
    r2: { n: "3×",   l: "Online orders" },
    accentColor: "#D97706",
    accentBg: "#FFFBEB",
    tagBg: "#FFFBEB",
    tagColor: "#D97706",
  },
  {
    name: "Bright Future Academy",
    location: "Forbesganj, Bihar",
    tag: "Education",
    service: "Ads + Website",
    r1: { n: "120+", l: "New admissions" },
    r2: { n: "+250%", l: "Lead growth" },
    accentColor: "#4F46E5",
    accentBg: "#EEF2FF",
    tagBg: "#EEF2FF",
    tagColor: "#4F46E5",
  },
  {
    name: "Agarwal Properties",
    location: "Araria, Bihar",
    tag: "Real Estate",
    service: "Ads + SEO",
    r1: { n: "40+",  l: "Leads / month" },
    r2: { n: "5×",   l: "ROI on ads" },
    accentColor: "#16A34A",
    accentBg: "#F0FDF4",
    tagBg: "#F0FDF4",
    tagColor: "#16A34A",
  },
  {
    name: "Glamour Beauty Studio",
    location: "Forbesganj, Bihar",
    tag: "Beauty & Salon",
    service: "GMB + Content",
    r1: { n: "200+", l: "Monthly bookings" },
    r2: { n: "4.9★", l: "Rating" },
    accentColor: "#DB2777",
    accentBg: "#FDF2F8",
    tagBg: "#FDF2F8",
    tagColor: "#DB2777",
  },
  {
    name: "Hotel Sunrise Palace",
    location: "Araria, Bihar",
    tag: "Hospitality",
    service: "Website + SEO",
    r1: { n: "85%",  l: "Occupancy rate" },
    r2: { n: "+140%", l: "Direct bookings" },
    accentColor: "#2563EB",
    accentBg: "#EFF6FF",
    tagBg: "#EFF6FF",
    tagColor: "#2563EB",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div className="wrap">
        <div style={{ marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>हमारे नतीजे</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            असली बिज़नेस। असली <span className="accent-cyan">नतीजे</span>।
          </h2>
          <p className="t-body" style={{ maxWidth: "400px" }}>
            Clinics से coaching centres तक — measured growth, सिर्फ वादे नहीं।
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "20px" }}>
          {projects.map((p, i) => (
            <div key={i} className="card" style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)"; }}>

              {/* Header */}
              <div style={{
                background: p.accentBg,
                borderBottom: `1px solid ${p.accentColor}18`,
                padding: "20px 20px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", marginBottom: "3px" }}>{p.name}</div>
                  <p style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 500 }}>{p.location}</p>
                </div>
                <span style={{
                  fontSize: "11px", fontWeight: 700, color: p.tagColor,
                  padding: "4px 10px", borderRadius: "100px",
                  background: "#fff", border: `1px solid ${p.accentColor}25`,
                  whiteSpace: "nowrap",
                }}>{p.tag}</span>
              </div>

              {/* Results */}
              <div style={{ padding: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  {[p.r1, p.r2].map(r => (
                    <div key={r.l} style={{
                      padding: "16px 14px", borderRadius: "12px", textAlign: "center",
                      background: p.accentBg,
                      border: `1px solid ${p.accentColor}18`,
                    }}>
                      <div style={{ fontSize: "22px", fontWeight: 700, color: p.accentColor, letterSpacing: "-0.02em" }}>{r.n}</div>
                      <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "3px", fontWeight: 500 }}>{r.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 500 }}>
                    Service: <span style={{ color: p.accentColor, fontWeight: 600 }}>{p.service}</span>
                  </p>
                  <a href="#contact" style={{
                    fontSize: "12px", fontWeight: 600, color: p.accentColor,
                    textDecoration: "none", transition: "opacity 0.15s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                    Similar results →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "56px", textAlign: "center" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            अपनी success story शुरू करें →
          </a>
        </div>
      </div>
    </section>
  );
}
