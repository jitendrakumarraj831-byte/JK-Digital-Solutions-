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
    pro: false,
  },
  {
    name: "Business",
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
    cta: "Start free consultation",
    popular: true,
    pro: false,
  },
  {
    name: "Professional",
    price: "₹16,999",
    period: "per month",
    desc: "For market leaders who want total digital dominance.",
    features: [
      "Everything in Business",
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
    pro: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to you",
    desc: "For chains, franchises and large teams with multi-location needs.",
    features: [
      "Everything in Professional",
      "Unlimited website pages",
      "Multi-location SEO & GMB",
      "Business automation & CRM",
      "Custom reporting dashboard",
      "Priority 24/7 support",
    ],
    excluded: [],
    cta: "Talk to sales",
    popular: false,
    pro: false,
  },
];

const comparisonRows = [
  { label: "Website pages", values: ["1 page", "5 pages", "10 pages", "Unlimited"] },
  { label: "SEO keywords", values: ["5", "20", "50", "Custom"] },
  { label: "Google Ads management", values: [false, true, true, true] },
  { label: "GMB optimisation", values: [true, true, true, true] },
  { label: "Content pieces / month", values: ["—", "4", "8", "Custom"] },
  { label: "Social media management", values: [false, false, true, true] },
  { label: "Business automation / CRM", values: [false, false, false, true] },
  { label: "Dedicated account manager", values: [false, false, true, true] },
  { label: "Reporting", values: ["Monthly", "Bi-weekly", "Weekly", "Custom dashboard"] },
  { label: "Support", values: ["WhatsApp", "WhatsApp", "WhatsApp + calls", "Priority 24/7"] },
];

const planNames = plans.map(p => p.name);

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "112px 0", background: "#FCFCFD" }}>
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px", alignItems: "start" }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              borderRadius: "22px", overflow: "hidden",
              border: plan.popular ? "2px solid #1D4ED8" : "1px solid #E2E8F0",
              background: plan.popular ? "#1E3A8A" : "#fff",
              boxShadow: plan.popular ? "0 20px 60px rgba(29,78,216,0.25)" : "0 2px 12px rgba(0,0,0,0.04)",
              transition: "transform 0.25s, box-shadow 0.25s",
              position: "relative",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}>

              {plan.popular && (
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  padding: "10px 0",
                  background: "#1D4ED8",
                  fontSize: "11px", fontWeight: 700, color: "#fff",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7-5.4-4.7 7.1-.6L12 2z"/></svg>
                  Most Popular
                </div>
              )}

              {plan.pro && (
                <div style={{
                  position: "absolute", top: "20px", right: "20px",
                  display: "flex", alignItems: "center", gap: "5px",
                  padding: "5px 12px", borderRadius: "100px",
                  background: "linear-gradient(135deg, #FCD34D, #F59E0B)",
                  boxShadow: "0 4px 12px rgba(245,158,11,0.35)",
                  fontSize: "11px", fontWeight: 800, color: "#78350F",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 20h20l-2-9-5 4-3-8-3 8-5-4z"/></svg>
                  Pro
                </div>
              )}

              <div style={{ padding: "32px 24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: plan.popular ? "#fff" : "#111827", marginBottom: "8px" }}>{plan.name}</h3>
                <p style={{ fontSize: "13px", color: plan.popular ? "rgba(255,255,255,0.65)" : "#4B5563", marginBottom: "24px", lineHeight: 1.6, minHeight: "40px" }}>{plan.desc}</p>

                <div style={{ paddingBottom: "24px", borderBottom: `1px solid ${plan.popular ? "rgba(255,255,255,0.12)" : "#F1F5F9"}`, marginBottom: "24px" }}>
                  <div style={{ fontSize: "40px", fontWeight: 700, color: plan.popular ? "#fff" : "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>{plan.price}</div>
                  <div style={{ fontSize: "13px", color: plan.popular ? "rgba(255,255,255,0.5)" : "#4B5563", marginTop: "6px" }}>{plan.period}{plan.price !== "Custom" ? " · GST extra" : ""}</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        background: plan.popular ? "rgba(255,255,255,0.15)" : "#EFF6FF",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? "#fff" : "#1D4ED8"} strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span style={{ fontSize: "13.5px", color: plan.popular ? "rgba(255,255,255,0.85)" : "#374151", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                  {plan.excluded.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", opacity: 0.4 }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        background: "#F1F5F9",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                      <span style={{ fontSize: "13.5px", color: "#4B5563", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: "block", textAlign: "center",
                  padding: "14px", borderRadius: "12px",
                  fontWeight: 700, fontSize: "15px", textDecoration: "none",
                  background: plan.popular ? "#fff" : "#1D4ED8",
                  color: plan.popular ? "#1E3A8A" : "#fff",
                  boxShadow: plan.popular ? "0 4px 16px rgba(255,255,255,0.2)" : "0 2px 10px rgba(29,78,216,0.3)",
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

        {/* Feature comparison table */}
        <div style={{ marginTop: "72px" }}>
          <h3 className="t-h3" style={{ textAlign: "center", marginBottom: "32px" }}>Feature Comparison</h3>
          <div style={{
            overflowX: "auto", border: "1px solid #E2E8F0", borderRadius: "18px",
            background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "620px" }}>
              <thead>
                <tr style={{ background: "#F5F7FA" }}>
                  <th style={{ textAlign: "left", padding: "16px 20px", fontSize: "12px", fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #E2E8F0" }}>Feature</th>
                  {planNames.map((n, ni) => (
                    <th key={n} style={{
                      textAlign: "center", padding: "16px 16px", fontSize: "13px", fontWeight: 700,
                      color: plans[ni].popular ? "#1D4ED8" : "#111827",
                      background: plans[ni].popular ? "#EFF6FF" : "transparent",
                      borderBottom: plans[ni].popular ? "2px solid #1D4ED8" : "1px solid #E2E8F0",
                    }}>{n}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, ri) => (
                  <tr key={row.label} style={{ background: ri % 2 === 0 ? "#fff" : "#FCFCFD" }}>
                    <td style={{ padding: "14px 20px", fontSize: "13.5px", color: "#374151", fontWeight: 500, borderBottom: "1px solid #F1F5F9" }}>{row.label}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} style={{
                        textAlign: "center", padding: "14px 16px", borderBottom: "1px solid #F1F5F9",
                        background: plans[vi].popular ? "#F5F9FF" : "transparent",
                      }}>
                        {typeof v === "boolean" ? (
                          v ? (
                            <>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" style={{ display: "inline-block" }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                              <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>Included</span>
                            </>
                          ) : (
                            <span style={{ color: "#94A3B8", fontSize: "14px" }} aria-label="Not included">—</span>
                          )
                        ) : (
                          <span style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500 }}>{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom plan note */}
        <div style={{
          marginTop: "32px", padding: "28px 32px", borderRadius: "16px",
          background: "#F5F7FA", border: "1px solid #E2E8F0",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px",
        }}>
          <div>
            <div style={{ fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "4px" }}>Need a custom plan?</div>
            <p style={{ fontSize: "14px", color: "#4B5563" }}>Tell us your budget and goals — we&apos;ll put together something that fits.</p>
          </div>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            Message us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
