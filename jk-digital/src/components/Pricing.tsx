"use client";

const plans = [
  {
    name: "Starter",
    badge: null,
    price: "₹4,999",
    period: "/ month",
    desc: "New businesses के लिए perfect starting point।",
    g: "linear-gradient(145deg, rgba(124,58,237,0.14), rgba(99,102,241,0.08))",
    border: "rgba(167,139,250,0.2)",
    btnG: "linear-gradient(135deg,#7c3aed,#6366f1)",
    btnShadow: "rgba(124,58,237,0.35)",
    features: [
      "Google Business Profile Setup",
      "Basic SEO Optimization",
      "5 Target Keywords",
      "Monthly Report",
      "WhatsApp Support",
      "1 Page Website",
    ],
    notIncluded: ["Google Ads Management", "Advanced Content Marketing"],
  },
  {
    name: "Growth",
    badge: "MOST POPULAR",
    price: "₹9,999",
    period: "/ month",
    desc: "Growing businesses के लिए best value package।",
    g: "linear-gradient(145deg, #2d0a3a 0%, #6d28d9 50%, #4f46e5 100%)",
    border: "rgba(216,180,254,0.5)",
    glow: "rgba(124,58,237,0.3)",
    btnG: "linear-gradient(135deg, #fff, #e9d5ff)",
    btnColor: "#7c3aed",
    btnShadow: "rgba(255,255,255,0.2)",
    features: [
      "Everything in Starter",
      "5-Page Professional Website",
      "Advanced SEO (20 Keywords)",
      "Google Ads Management",
      "GMB Optimization",
      "Content Creation (4/month)",
      "Competitor Analysis",
      "Bi-weekly Reports",
    ],
    notIncluded: [],
  },
  {
    name: "Premium",
    badge: "BEST ROI",
    price: "₹16,999",
    period: "/ month",
    desc: "Market leaders बनने के लिए complete solution।",
    g: "linear-gradient(145deg, rgba(6,182,212,0.14), rgba(59,130,246,0.09))",
    border: "rgba(34,211,238,0.25)",
    btnG: "linear-gradient(135deg,#0284c7,#06b6d4)",
    btnShadow: "rgba(6,182,212,0.35)",
    features: [
      "Everything in Growth",
      "10-Page Custom Website",
      "Full SEO Strategy (50 Keywords)",
      "Advanced Google Ads",
      "Social Media Management",
      "Weekly Content (8/month)",
      "Dedicated Account Manager",
      "Weekly Strategy Calls",
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{
      padding: "112px 0",
      background: "linear-gradient(180deg, #06001a 0%, #0a041e 50%, #080025 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>Pricing</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px",
          }}>
            Transparent Pricing,<br />
            <span className="grad-text">Zero Hidden Charges</span>
          </h2>
          <p style={{ color: "rgba(228,220,255,0.5)", fontSize: "17px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Budget के हिसाब से plan choose करें। सभी plans में free consultation included है।
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))", gap: "20px", alignItems: "start" }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              borderRadius: "28px", overflow: "hidden",
              background: plan.g,
              border: `1px solid ${plan.border}`,
              boxShadow: plan.glow ? `0 12px 60px ${plan.glow}` : "none",
              transition: "transform 0.3s",
              position: "relative",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>

              {plan.badge && (
                <div style={{
                  textAlign: "center", padding: "8px",
                  background: "rgba(255,255,255,0.12)",
                  fontSize: "11px", fontWeight: 800, color: "#fff",
                  letterSpacing: "0.1em",
                }}>✦ {plan.badge} ✦</div>
              )}

              <div style={{ padding: "32px 28px" }}>
                <h3 className="font-display" style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>{plan.name}</h3>
                <p style={{ fontSize: "13px", color: "rgba(228,220,255,0.5)", marginBottom: "20px", lineHeight: 1.6 }}>{plan.desc}</p>

                <div style={{ marginBottom: "28px", paddingBottom: "24px", borderBottom: `1px solid ${plan.border}` }}>
                  <p className="font-display" style={{ fontSize: "42px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {plan.price}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(228,220,255,0.45)", marginTop: "6px" }}>{plan.period} · GST extra</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "28px" }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%",
                        background: plan.btnG, flexShrink: 0, marginTop: "1px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={plan.btnColor || "#fff"} strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span style={{ fontSize: "13px", color: "rgba(228,220,255,0.75)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded?.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", opacity: 0.4 }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", flexShrink: 0, marginTop: "1px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                      <span style={{ fontSize: "13px", color: "rgba(228,220,255,0.4)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: "block", textAlign: "center", padding: "14px",
                  borderRadius: "14px", fontWeight: 700, fontSize: "15px",
                  background: plan.btnG, color: plan.btnColor || "#fff",
                  textDecoration: "none", boxShadow: `0 4px 20px ${plan.btnShadow}`,
                  transition: "all 0.25s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${plan.btnShadow}`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${plan.btnShadow}`; }}>
                  {plan.badge ? "Get Started — Free Audit" : "Get Started →"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom */}
        <div style={{
          marginTop: "40px", padding: "28px 32px", borderRadius: "20px",
          background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(59,130,246,0.08))",
          border: "1px solid rgba(167,139,250,0.2)",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
        }}>
          <div>
            <p className="font-display" style={{ fontWeight: 800, fontSize: "18px", color: "#fff", marginBottom: "6px" }}>Custom Package चाहिए?</p>
            <p style={{ fontSize: "14px", color: "rgba(228,220,255,0.5)", lineHeight: 1.6 }}>
              हर business unique है। आपकी specific requirements के लिए custom quote लें।
            </p>
          </div>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="btn-wa">
            WhatsApp करें →
          </a>
        </div>
      </div>
    </section>
  );
}
