"use client";

const projects = [
  {
    name: "Dr. Sharma Dental Clinic",
    location: "Araria, Bihar",
    tag: "Healthcare",
    service: "SEO + GMB",
    r1: { n: "#1", l: "Google rank" },
    r2: { n: "+180%", l: "New patients" },
    g: "linear-gradient(145deg,#0c2340,#1e4d8c,#0e7490)",
    border: "rgba(56,189,248,0.3)",
    glow: "rgba(14,165,233,0.15)",
  },
  {
    name: "Rajdhani Restaurant",
    location: "Forbesganj, Bihar",
    tag: "Restaurant",
    service: "GMB + Website",
    r1: { n: "4.8★", l: "Rating" },
    r2: { n: "3×",   l: "Online orders" },
    g: "linear-gradient(145deg,#2d1a04,#78350f,#92400e)",
    border: "rgba(251,191,36,0.3)",
    glow: "rgba(245,158,11,0.15)",
  },
  {
    name: "Bright Future Academy",
    location: "Forbesganj, Bihar",
    tag: "Education",
    service: "Ads + Website",
    r1: { n: "120+", l: "New admissions" },
    r2: { n: "+250%", l: "Lead growth" },
    g: "linear-gradient(145deg,#2d0a3a,#6d28d9,#7c3aed)",
    border: "rgba(167,139,250,0.3)",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    name: "Agarwal Properties",
    location: "Araria, Bihar",
    tag: "Real Estate",
    service: "Ads + SEO",
    r1: { n: "40+",  l: "Leads / month" },
    r2: { n: "5×",   l: "ROI on ads" },
    g: "linear-gradient(145deg,#0d2a1f,#065f46,#047857)",
    border: "rgba(52,211,153,0.3)",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    name: "Glamour Beauty Studio",
    location: "Forbesganj, Bihar",
    tag: "Beauty & Salon",
    service: "GMB + Content",
    r1: { n: "200+", l: "Monthly bookings" },
    r2: { n: "4.9★", l: "Rating" },
    g: "linear-gradient(145deg,#3b0764,#86198f,#a21caf)",
    border: "rgba(249,168,212,0.3)",
    glow: "rgba(236,72,153,0.15)",
  },
  {
    name: "Hotel Sunrise Palace",
    location: "Araria, Bihar",
    tag: "Hospitality",
    service: "Website + SEO",
    r1: { n: "85%",  l: "Occupancy rate" },
    r2: { n: "+140%", l: "Direct bookings" },
    g: "linear-gradient(145deg,#0c2340,#0e4f7a,#0369a1)",
    border: "rgba(34,211,238,0.3)",
    glow: "rgba(6,182,212,0.15)",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{
      padding: "128px 0",
      background: "linear-gradient(180deg, #060014 0%, #08001e 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", top: "-5%", right: "-18%",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "16px" }}>Results</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Real businesses. Real <span className="accent-cyan">results</span>.
          </h2>
          <p className="t-body" style={{ maxWidth: "380px" }}>
            From clinics to coaching centres — measured growth, not promises.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,340px),1fr))", gap: "16px" }}>
          {projects.map((p, i) => (
            <div key={i} className="card" style={{
              borderRadius: "16px", overflow: "hidden",
              border: `1px solid ${p.border}`,
              boxShadow: `0 4px 24px ${p.glow}`,
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${p.glow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${p.glow}`; }}>

              {/* Gradient header */}
              <div style={{ background: p.g, padding: "24px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{p.name}</span>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.55)", padding: "3px 9px", borderRadius: "100px", background: "rgba(255,255,255,0.1)" }}>{p.tag}</span>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{p.location}</p>
              </div>

              {/* Results */}
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
                  {[p.r1, p.r2].map(r => (
                    <div key={r.l} style={{
                      padding: "14px 12px", borderRadius: "10px", textAlign: "center",
                      background: "rgba(255,255,255,0.04)", border: `1px solid ${p.border}`,
                    }}>
                      <div style={{ fontSize: "20px", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{r.n}</div>
                      <div style={{ fontSize: "11px", color: "rgba(230,220,255,0.45)", marginTop: "3px", fontWeight: 500 }}>{r.l}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "12px", color: "rgba(230,220,255,0.4)", fontWeight: 500 }}>
                  Service: {p.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "56px", textAlign: "center" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            Start your success story →
          </a>
        </div>
      </div>
    </section>
  );
}
