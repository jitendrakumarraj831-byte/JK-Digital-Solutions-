"use client";

const projects = [
  {
    name: "Dr. Sharma Dental Clinic",
    url: "drsharmadental.in",
    location: "Araria, Bihar",
    tag: "Healthcare",
    service: "SEO + GMB",
    r1: { n: "#1", l: "Google rank" },
    r2: { n: "+180%", l: "New patients" },
    accentColor: "#06B6D4",
    accentBg: "#ECFEFF",
    tagBg: "#ECFEFF",
    tagColor: "#06B6D4",
  },
  {
    name: "Rajdhani Restaurant",
    url: "rajdhanieats.in",
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
    url: "brightfutureacademy.in",
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
    url: "agarwalproperties.in",
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
    url: "glamourbeauty.in",
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
    url: "hotelsunrisepalace.in",
    location: "Araria, Bihar",
    tag: "Hospitality",
    service: "Website + SEO",
    r1: { n: "85%",  l: "Occupancy rate" },
    r2: { n: "+140%", l: "Direct bookings" },
    accentColor: "#1D4ED8",
    accentBg: "#EFF6FF",
    tagBg: "#EFF6FF",
    tagColor: "#1D4ED8",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ marginBottom: "48px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Our Work</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Real businesses. Real <span className="accent-cyan">results</span>.
          </h2>
          <p className="t-body">
            From clinics to coaching centres — measured growth, not just promises.
          </p>
        </div>
        <p style={{ fontSize: "12.5px", color: "#6B7280", fontStyle: "italic", marginBottom: "24px" }}>
          Project names and figures below are illustrative examples representing the type of results we deliver.
        </p>

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
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-5px)"; el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)"; const zoom = el.querySelector<HTMLElement>(".portfolio-zoom"); if (zoom) zoom.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)"; const zoom = el.querySelector<HTMLElement>(".portfolio-zoom"); if (zoom) zoom.style.transform = "scale(1)"; }}>

              {/* Website preview mockup */}
              <div style={{ overflow: "hidden" }}>
                {/* Browser chrome */}
                <div style={{
                  background: "#F1F5F9", padding: "9px 12px",
                  borderBottom: "1px solid #E2E8F0",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <div style={{ display: "flex", gap: "5px" }} aria-hidden="true">
                    {["#F87171", "#FCD34D", "#4ADE80"].map(c => <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />)}
                  </div>
                  <div style={{
                    flex: 1, background: "#fff", borderRadius: "6px",
                    padding: "4px 10px", border: "1px solid #E2E8F0",
                    fontSize: "11px", color: "#94A3B8",
                    display: "flex", alignItems: "center", gap: "5px",
                  }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    {p.url}
                  </div>
                </div>
                {/* Mock page content — zooms slightly on card hover */}
                <div className="portfolio-zoom" style={{ transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
                  <div style={{ background: `linear-gradient(135deg, ${p.accentColor}E6, ${p.accentColor})`, padding: "18px 16px 14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: "rgba(255,255,255,0.35)" }} />
                        <div style={{ width: "42px", height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.7)" }} />
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {[30, 24, 24].map((w, wi) => <div key={wi} style={{ width: `${w}px`, height: "4px", borderRadius: "3px", background: "rgba(255,255,255,0.35)" }} />)}
                      </div>
                    </div>
                    <div style={{ width: "58%", height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.95)", marginBottom: "6px" }} />
                    <div style={{ width: "40%", height: "6px", borderRadius: "4px", background: "rgba(255,255,255,0.6)", marginBottom: "12px" }} />
                    <div style={{ width: "52px", height: "16px", borderRadius: "5px", background: "#fff" }} />
                  </div>
                  <div style={{ padding: "10px 12px", display: "flex", gap: "6px", background: "#fff" }}>
                    {[1, 2, 3].map(n => (
                      <div key={n} style={{ flex: 1, background: p.accentBg, borderRadius: "7px", padding: "8px 6px" }}>
                        <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: p.accentColor, opacity: 0.25, marginBottom: "5px" }} />
                        <div style={{ width: "100%", height: "3px", borderRadius: "2px", background: p.accentColor, opacity: 0.3 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Header */}
              <div style={{
                background: p.accentBg,
                borderBottom: `1px solid ${p.accentColor}18`,
                padding: "16px 20px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", marginBottom: "3px" }}>{p.name}</div>
                  <p style={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>{p.location}</p>
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
                      <div style={{ fontSize: "11px", color: "#6B7280", marginTop: "3px", fontWeight: 500 }}>{r.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>
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
            Start Your Success Story →
          </a>
        </div>
      </div>
    </section>
  );
}
