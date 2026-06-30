const reviews = [
  { name:"Rajan Kumar", biz:"Rajan Medical Store, Forbesganj", avatar:"R", color:"#2563eb",
    text:"JK Digital ने हमारी medical store की website बनाई और Google पर top पर rank कराया। अब रोज 10-15 नए customers आते हैं।" },
  { name:"Sunita Devi", biz:"Sunita Beauty Parlour, Araria", avatar:"S", color:"#7c3aed",
    text:"पहले सिर्फ local लोग जानते थे। अब Google Maps पर top पर आती हूं और दूर-दूर से customers call करते हैं।" },
  { name:"Mohammad Iqbal", biz:"Iqbal Hardware, Kishanganj", avatar:"M", color:"#059669",
    text:"Google Ads से पहले महीने में ही 40+ genuine inquiries आईं। Investment वापस आ गई और regular customers भी बन गए।" },
  { name:"Priya Sharma", biz:"Priya Coaching Centre, Forbesganj", avatar:"P", color:"#f97316",
    text:"हमारे coaching centre की admissions 3 गुना बढ़ गईं एक साल में। Parents खुद search करके contact करते हैं।" },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#fff", padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2563eb", marginBottom: "12px" }}>Reviews</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#111827", marginBottom: "8px" }}>Clients क्या कहते हैं</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#f59e0b", fontSize: "16px" }}>★★★★★</span>
            <span style={{ color: "#9ca3af", fontSize: "14px" }}>4.9/5 — 120+ reviews</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: "20px" }}>
          {reviews.map(r => (
            <div key={r.name} className="c" style={{ padding: "24px" }}>
              <p style={{ color: "#f59e0b", fontSize: "14px", marginBottom: "12px" }}>★★★★★</p>
              <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>"{r.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: r.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>{r.avatar}</span>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#111827", fontSize: "14px" }}>{r.name}</p>
                  <p style={{ color: "#9ca3af", fontSize: "12px" }}>{r.biz}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
