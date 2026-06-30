"use client";

const reviews = [
  {
    name: "Rajan Kumar", role: "Medical Store Owner, Araria",
    avatar: "RK", g: "linear-gradient(135deg,#7c3aed,#6366f1)",
    text: "JK Digital ने मेरे medical store की GMB optimize की और 3 महीने में monthly footfall 2x हो गया। Highly recommended!",
    rating: 5, service: "GMB Optimization",
    card: "linear-gradient(145deg, rgba(124,58,237,0.18), rgba(99,102,241,0.1))",
    border: "rgba(167,139,250,0.25)",
  },
  {
    name: "Sunita Devi", role: "Restaurant Owner, Forbesganj",
    avatar: "SD", g: "linear-gradient(135deg,#d97706,#f59e0b)",
    text: "Website बनने के बाद online orders शुरू हुए। अब weekends में 50+ orders online आते हैं। Bahut khush हूँ!",
    rating: 5, service: "Website + GMB",
    card: "linear-gradient(145deg, rgba(217,119,6,0.18), rgba(245,158,11,0.1))",
    border: "rgba(251,191,36,0.25)",
  },
  {
    name: "Amit Agarwal", role: "Property Dealer, Araria",
    avatar: "AA", g: "linear-gradient(135deg,#059669,#34d399)",
    text: "Google Ads से monthly 40+ qualified leads आ रहे हैं। ROI bahut amazing है। JK Digital पर 100% भरोसा है।",
    rating: 5, service: "Google Ads",
    card: "linear-gradient(145deg, rgba(5,150,105,0.18), rgba(52,211,153,0.1))",
    border: "rgba(52,211,153,0.25)",
  },
  {
    name: "Priya Sharma", role: "Beauty Salon, Forbesganj",
    avatar: "PS", g: "linear-gradient(135deg,#db2777,#a855f7)",
    text: "Instagram और Google दोनों पर presence बन गई। अब हर week नए customers आते हैं specifically online देखकर।",
    rating: 5, service: "Social + SEO",
    card: "linear-gradient(145deg, rgba(219,39,119,0.18), rgba(168,85,247,0.1))",
    border: "rgba(249,168,212,0.25)",
  },
  {
    name: "Rakesh Yadav", role: "Coaching Centre, Araria",
    avatar: "RY", g: "linear-gradient(135deg,#0891b2,#3b82f6)",
    text: "Website और SEO दोनों मिलकर काम किया। इस session में 120 नए admissions — सब online inquiry से। Unbelievable!",
    rating: 5, service: "Website + SEO",
    card: "linear-gradient(145deg, rgba(8,145,178,0.18), rgba(59,130,246,0.1))",
    border: "rgba(96,165,250,0.25)",
  },
  {
    name: "Mohan Lal", role: "Hardware Store, Forbesganj",
    avatar: "ML", g: "linear-gradient(135deg,#ea580c,#f97316)",
    text: "छोटे से hardware shop को JK Digital ने online bring किया। WhatsApp orders आने लगे। बहुत अच्छा team है।",
    rating: 5, service: "GMB + Website",
    card: "linear-gradient(145deg, rgba(234,88,12,0.18), rgba(249,115,22,0.1))",
    border: "rgba(253,186,116,0.25)",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: "112px 0",
      background: "linear-gradient(180deg, #080025 0%, #0a0118 50%, #06001a 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "30%", left: "-20%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>Testimonials</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px",
          }}>
            वो लोग जिन्होंने <span className="grad-text">Trust किया</span>
          </h2>

          {/* Google rating */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "10px 20px", borderRadius: "100px",
            background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(251,191,36,0.1))",
            border: "1px solid rgba(251,191,36,0.28)",
          }}>
            <span style={{ fontSize: "16px" }}>⭐</span>
            <span style={{ fontWeight: 700, fontSize: "14px", color: "#fde68a" }}>4.9 / 5 · Google Reviews पर देखें</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px),1fr))", gap: "16px" }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              padding: "28px", borderRadius: "24px",
              background: r.card, border: `1px solid ${r.border}`,
              transition: "all 0.28s", position: "relative",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${r.border}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>

              {/* Quote mark */}
              <div style={{ fontSize: "48px", lineHeight: 1, color: r.border, fontFamily: "Georgia", marginBottom: "16px", opacity: 0.7 }}>"</div>

              <p style={{ color: "rgba(228,220,255,0.75)", fontSize: "14px", lineHeight: 1.8, marginBottom: "22px" }}>{r.text}</p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "50%",
                    background: r.g, display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "14px", color: "#fff", flexShrink: 0,
                  }}>{r.avatar}</div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "14px", color: "#fff" }}>{r.name}</p>
                    <p style={{ fontSize: "12px", color: "rgba(228,220,255,0.45)", marginTop: "1px" }}>{r.role}</p>
                  </div>
                </div>
                <div>
                  <div className="stars" style={{ fontSize: "12px", marginBottom: "2px" }}>{"★".repeat(r.rating)}</div>
                  <p style={{ fontSize: "10px", color: "rgba(228,220,255,0.4)", fontWeight: 600, textAlign: "right" }}>{r.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
