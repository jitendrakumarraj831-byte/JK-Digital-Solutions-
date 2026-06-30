"use client";
const reviews = [
  {
    name: "Rajan Kumar", role: "Owner, Rajan Medical Store", loc: "Forbesganj",
    avatar: "R", color: "#3b82f6",
    stars: 5,
    text: "JK Digital ने हमारी medical store की website बनाई और Google Maps पर top 3 में rank कराया। अब रोज 15-20 नए customers call करते हैं। Best investment था यह।",
    metric: "+180%", metricLabel: "Monthly Calls"
  },
  {
    name: "Sunita Devi", role: "Owner, Sunita Beauty Parlour", loc: "Araria",
    avatar: "S", color: "#8b5cf6",
    stars: 5,
    text: "पहले सिर्फ local लोग जानते थे। JK Digital की GMB service के बाद Google पर top पर आई। दूर-दूर से customers आते हैं। बहुत अच्छा team है।",
    metric: "3x", metricLabel: "New Clients"
  },
  {
    name: "Mohammad Iqbal", role: "Owner, Iqbal Hardware", loc: "Kishanganj",
    avatar: "M", color: "#10b981",
    stars: 5,
    text: "Google Ads start करने के पहले महीने में ही 45+ genuine inquiries आईं। Investment तो पहले week में ही वापस आ गई। अब रोज order आते हैं।",
    metric: "45+", metricLabel: "Leads/Month"
  },
  {
    name: "Priya Sharma", role: "Director, Success Coaching", loc: "Forbesganj",
    avatar: "P", color: "#f97316",
    stars: 5,
    text: "एक साल में admissions 3 गुना बढ़ गईं। Parents खुद Google पर search करके आते हैं। Website और SEO दोनों perfect हैं। Highly recommend करती हूं।",
    metric: "3x", metricLabel: "Admissions"
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#f8fafc", padding: "100px 0" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Testimonials</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, color: "#0f172a",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px"
          }}>
            Clients क्या <span style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>कहते हैं</span>
          </h2>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "10px 20px", borderRadius: "100px", background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <span style={{ color: "#f59e0b", fontSize: "16px", letterSpacing: "2px" }}>★★★★★</span>
            <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>4.9</span>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>/ 5 · 120+ Reviews</span>
          </div>
        </div>

        {/* Reviews */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "20px" }}>
          {reviews.map(r => (
            <div key={r.name} style={{
              background: "#fff", borderRadius: "24px",
              border: "1px solid #e2e8f0", padding: "28px 28px 24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.1)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = "#e2e8f0"; }}>

              {/* Stars */}
              <div style={{ color: "#f59e0b", fontSize: "15px", letterSpacing: "2px", marginBottom: "14px" }}>★★★★★</div>

              <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.75, marginBottom: "24px", fontStyle: "italic" }}>
                "{r.text}"
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "50%",
                    background: r.color, display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, boxShadow: `0 4px 12px ${r.color}40`
                  }}>
                    <span style={{ color: "#fff", fontWeight: 800, fontSize: "15px" }}>{r.avatar}</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>{r.name}</p>
                    <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "1px" }}>{r.role}</p>
                    <p style={{ color: "#94a3b8", fontSize: "11px" }}>📍 {r.loc}</p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "22px", fontWeight: 900, color: r.color, lineHeight: 1, fontFamily: "Poppins, sans-serif" }}>{r.metric}</p>
                  <p style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{r.metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
