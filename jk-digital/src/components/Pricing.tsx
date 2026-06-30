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
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Pricing</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Simple, honest <span className="accent">pricing</span>.
          </h2>
          <p className="t-body" style={{ maxWidth: "380px", margin: "0 auto" }}>
            No lock-in contracts. No hidden fees. Cancel any time.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px", alignItems: "start" }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              borderRadius: "22px", overflow: "hidden",
              border: plan.popular ? "2px solid #2563EB" : "1px solid #E2E8F0",
              background: plan.popular ? "#1E40AF" : "#fff",
              boxShadow: plan.popular ? "0 20px 60px rgba(37,99,235,0.25)" : "0 2px 12px rgba(0,0,0,0.04)",
              transition: "transform 0.25s, box-shadow 0.25s",
              position: "relative",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}>

              {plan.popular && (
                <div style={{
                  textAlign: "center", padding: "10px 0",
                  background: "#2563EB",
                  fontSize: "11px", fontWeight: 700, color: "#fff",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>⭐ Most Popular</div>
              )}

              <div style={{ padding: "32px 28px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: plan.popular ? "#fff" : "#111827", marginBottom: "8px" }}>{plan.name}</h3>
                <p style={{ fontSize: "13px", color: plan.popular ? "rgba(255,255,255,0.65)" : "#94A3B8", marginBottom: "24px", lineHeight: 1.6 }}>{plan.desc}</p>

                <div style={{ paddingBottom: "24px", borderBottom: `1px solid ${plan.popular ? "rgba(255,255,255,0.12)" : "#F1F5F9"}`, marginBottom: "24px" }}>
                  <div style={{ fontSize: "44px", fontWeight: 700, color: plan.popular ? "#fff" : "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>{plan.price}</div>
                  <div style={{ fontSize: "13px", color: plan.popular ? "rgba(255,255,255,0.5)" : "#94A3B8", marginTop: "6px" }}>{plan.period} · GST extra</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        background: plan.popular ? "rgba(255,255,255,0.15)" : "#EFF6FF",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? "#fff" : "#2563EB"} strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span style={{ fontSize: "14px", color: plan.popular ? "rgba(255,255,255,0.85)" : "#475569", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                  {plan.excluded.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", opacity: 0.4 }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        background: "#F1F5F9",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                      <span style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: "block", textAlign: "center",
                  padding: "14px", borderRadius: "12px",
                  fontWeight: 700, fontSize: "15px", textDecoration: "none",
                  background: plan.popular ? "#fff" : "#2563EB",
                  color: plan.popular ? "#1E40AF" : "#fff",
                  boxShadow: plan.popular ? "0 4px 16px rgba(255,255,255,0.2)" : "0 2px 10px rgba(37,99,235,0.3)",
                  transition: "opacity 0.15s",
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
          marginTop: "32px", padding: "28px 32px", borderRadius: "16px",
          background: "#F8FAFC", border: "1px solid #E2E8F0",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px",
        }}>
          <div>
            <div style={{ fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "4px" }}>Need a custom plan?</div>
            <p style={{ fontSize: "14px", color: "#64748B" }}>Tell us your budget and goals — we'll build something that fits.</p>
          </div>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            WhatsApp करें →
          </a>
        </div>
      </div>
    </section>
  );
}
