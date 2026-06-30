const projects = [
  { emoji:"🦷", title:"Araria Dental Care", type:"Clinic", result:"+220%", metric:"Appointments", tags:["Website","GMB","SEO"], bg:"#2563eb" },
  { emoji:"🍰", title:"Forbesganj Sweet House", type:"Restaurant", result:"+180%", metric:"Orders", tags:["Website","Ads"], bg:"#f97316" },
  { emoji:"🎓", title:"Success Coaching Centre", type:"Education", result:"+95", metric:"Admissions", tags:["Website","SEO","GMB"], bg:"#7c3aed" },
  { emoji:"🏠", title:"Araria Real Estate", type:"Property", result:"+300%", metric:"Inquiries", tags:["Website","Ads","SEO"], bg:"#059669" },
  { emoji:"🏨", title:"Bihar Hotel & Resort", type:"Hospitality", result:"+150%", metric:"Bookings", tags:["Website","GMB","SEO"], bg:"#0891b2" },
  { emoji:"🛋️", title:"Modern Interior Studio", type:"Design", result:"+85", metric:"New Clients", tags:["Website","Ads"], bg:"#e11d48" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: "#f9fafb", padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2563eb", marginBottom: "12px" }}>Our Work</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#111827", marginBottom: "12px" }}>Real Results, Real Businesses</h2>
          <p style={{ color: "#6b7280" }}>इन businesses को हमने grow किया। आपका business next हो सकता है।</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "20px" }}>
          {projects.map(p => (
            <div key={p.title} className="c" style={{ overflow: "hidden" }}>
              <div style={{ background: p.bg, height: "140px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)" }} />
                <span style={{ fontSize: "40px", position: "relative", zIndex: 1 }}>{p.emoji}</span>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", padding: "0 16px", position: "relative", zIndex: 1 }}>
                  {p.tags.map(t => <span key={t} style={{ padding: "2px 10px", borderRadius: "100px", background: "rgba(255,255,255,0.25)", color: "#fff", fontSize: "11px", fontWeight: 700 }}>{t}</span>)}
                </div>
              </div>
              <div style={{ padding: "16px 20px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontWeight: 700, color: "#111827", fontSize: "14px" }}>{p.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: "12px", marginTop: "2px" }}>{p.type}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ color: "#059669", fontWeight: 900, fontSize: "18px", lineHeight: 1 }}>{p.result}</p>
                  <p style={{ color: "#9ca3af", fontSize: "11px" }}>{p.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "100px", background: "#111827", color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            अपना Project Start करें →
          </a>
        </div>
      </div>
    </section>
  );
}
