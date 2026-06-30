"use client";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "per month",
    desc: "Perfect for new businesses establishing their online presence.",
    features: [
      "Google Business Profile setup",
      "Basic SEO (5 keywords)",
      "Monthly performance report",
      "WhatsApp support",
      "1-page website",
    ],
    excluded: ["Google Ads management", "Advanced content creation"],
    cta: "Get started",
    cardStyle: { background: "linear-gradient(145deg,rgba(124,58,237,0.1),rgba(99,102,241,0.06))", border: "1px solid rgba(167,139,250,0.18)" },
    btnStyle: { background: "rgba(124,58,237,0.2)", border: "1px solid rgba(167,139,250,0.35)", color: "#c4b5fd" },
    checkG: "linear-gradient(135deg,#7c3aed,#818cf8)",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹9,999",
    period: "per month",
    desc: "The complete package for businesses ready to scale.",
    features: [
      "Everything in Starter",
      "5-page professional website",
      "Advanced SEO (20 keywords)",
      "Google Ads management",
      "GMB optimisation",
      "4 content pieces / month",
      "Competitor analysis",
      "Bi-weekly reports",
    ],
    excluded: [],
    cta: "Start free audit",
    cardStyle: { background: "linear-gradient(145deg,#2d0a3a,#5b21b6,#4338ca)", border: "1px solid rgba(167,139,250,0.45)" },
    btnStyle: { background: "#fff", color: "#5b21b6", border: "none" },
    checkG: "linear-gradient(135deg,#fff,#e9d5ff)",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹16,999",
    period: "per month",
    desc: "For market leaders who want total digital dominance.",
    features: [
      "Everything in Growth",
      "10-page custom website",
      "Full SEO strategy (50 keywords)",
      "Advanced Google Ads",
      "Social media management",
      "8 content pieces / month",
      "Dedicated account manager",
      "Weekly strategy calls",
    ],
    excluded: [],
    cta: "Get started",
    cardStyle: { background: "linear-gradient(145deg,rgba(6,182,212,0.1),rgba(59,130,246,0.06))", border: "1px solid rgba(34,211,238,0.22)" },
    btnStyle: { background: "linear-gradient(135deg,#0284c7,#06b6d4)", color: "#fff", border: "none" },
    checkG: "linear-gradient(135deg,#22d3ee,#3b82f6)",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{
      padding: "128px 0",
      background: "linear-gradient(180deg, #060011 0%, #080020 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", top: "-8%", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "320px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(124,58,237,0.09) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "16px" }}>Pricing</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Simple, honest <span className="accent">pricing</span>.
          </h2>
          <p className="t-body" style={{ maxWidth: "380px", margin: "0 auto" }}>
            No lock-in contracts. No hidden fees. Cancel any time.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "16px", alignItems: "start" }}>
          {plans.map((plan) => (
            <div key={plan.name} className="card" style={{
              ...plan.cardStyle, padding: "0",
              borderRadius: "18px", overflow: "hidden",
              transition: "transform 0.25s",
              boxShadow: plan.popular ? "0 12px 48px rgba(124,58,237,0.25)" : "none",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}>

              {plan.popular && (
                <div style={{
                  textAlign: "center", padding: "8px 0",
                  background: "rgba(255,255,255,0.1)",
                  fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>Most popular</div>
              )}

              <div style={{ padding: "28px" }}>
                <h3 className="t-h3" style={{ marginBottom: "8px" }}>{plan.name}</h3>
                <p style={{ fontSize: "13px", color: "rgba(230,220,255,0.45)", marginBottom: "24px", lineHeight: 1.6 }}>{plan.desc}</p>

                <div style={{ paddingBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: "24px" }}>
                  <div style={{ fontSize: "42px", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{plan.price}</div>
                  <div style={{ fontSize: "13px", color: "rgba(230,220,255,0.38)", marginTop: "6px" }}>{plan.period} · GST extra</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                      <div style={{
                        width: "16px", height: "16px", borderRadius: "50%",
                        background: plan.checkG, flexShrink: 0, marginTop: "2px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? "#5b21b6" : "#fff"} strokeWidth="4" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span style={{ fontSize: "14px", color: "rgba(230,220,255,0.7)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                  {plan.excluded.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px", opacity: 0.3 }}>
                      <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", flexShrink: 0, marginTop: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                      <span style={{ fontSize: "14px", color: "rgba(230,220,255,0.5)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: "block", textAlign: "center",
                  padding: "13px", borderRadius: "10px",
                  fontWeight: 600, fontSize: "15px", textDecoration: "none",
                  boxShadow: plan.popular ? "0 4px 20px rgba(255,255,255,0.15)" : "none",
                  transition: "opacity 0.15s",
                  ...plan.btnStyle,
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                  {plan.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom plan note */}
        <div style={{
          marginTop: "32px", padding: "24px 28px", borderRadius: "14px",
          background: "rgba(124,58,237,0.07)", border: "1px solid rgba(167,139,250,0.14)",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
        }}>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>Need a custom plan?</div>
            <p className="t-small">Tell us your budget and goals — we'll build something that fits.</p>
          </div>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            WhatsApp करें →
          </a>
        </div>
      </div>
    </section>
  );
}
