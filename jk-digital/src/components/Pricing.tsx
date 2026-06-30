"use client";

const plans = [
  {
    name: "Starter",
    badge: "",
    price: "₹4,999",
    period: "/month",
    sub: "नई शुरुआत के लिए perfect",
    popular: false,
    features: [
      { t: "5-Page Professional Website", ok: true },
      { t: "Google Business Profile Setup", ok: true },
      { t: "Basic On-Page SEO", ok: true },
      { t: "WhatsApp Integration", ok: true },
      { t: "Monthly Performance Report", ok: true },
      { t: "6 Months Free Support", ok: true },
      { t: "Google Ads Management", ok: false },
      { t: "Advanced SEO (20+ Keywords)", ok: false },
      { t: "Priority Support", ok: false },
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    badge: "Most Popular",
    price: "₹9,999",
    period: "/month",
    sub: "Growing businesses का पसंदीदा",
    popular: true,
    features: [
      { t: "10-Page Premium Website", ok: true },
      { t: "GMB Full Optimization", ok: true },
      { t: "Advanced SEO — 20 Keywords", ok: true },
      { t: "Google Ads (₹5K budget included)", ok: true },
      { t: "Fortnightly Reports", ok: true },
      { t: "Review Management", ok: true },
      { t: "Custom Landing Pages", ok: true },
      { t: "Priority WhatsApp Support", ok: true },
    ],
    cta: "Start Growing",
  },
  {
    name: "Enterprise",
    badge: "Best Value",
    price: "₹19,999",
    period: "/month",
    sub: "Market leader बनना हो तो",
    popular: false,
    features: [
      { t: "Unlimited Pages Website", ok: true },
      { t: "SEO — 50+ Keywords", ok: true },
      { t: "Google + Meta Ads (₹15K included)", ok: true },
      { t: "Dedicated Campaign Manager", ok: true },
      { t: "Weekly Reports + Analytics", ok: true },
      { t: "Content Creation", ok: true },
      { t: "CRO Optimization", ok: true },
      { t: "24/7 Emergency Support", ok: true },
    ],
    cta: "Go Enterprise",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "#080d1f", padding: "112px 0" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Pricing</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: "18px",
          }}>
            Transparent{" "}
            <span className="grad-text">Pricing</span>
            , Zero Surprises
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "17px", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
            जो plan में लिखा है, वही मिलेगा। कोई hidden charge नहीं, कोई lock-in नहीं।
          </p>
        </div>

        {/* Plans grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "20px", alignItems: "stretch" }}>
          {plans.map(p => (
            <div key={p.name}
              style={{
                borderRadius: "24px", padding: "36px",
                position: "relative", display: "flex", flexDirection: "column",
                ...(p.popular
                  ? {
                    background: "linear-gradient(160deg, rgba(29,78,216,0.5) 0%, rgba(14,165,233,0.35) 100%)",
                    border: "1px solid rgba(96,165,250,0.35)",
                    boxShadow: "0 0 80px rgba(59,130,246,0.18), 0 24px 64px rgba(0,0,0,0.35)",
                  }
                  : {
                    background: "rgba(255,255,255,0.035)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }),
              }}>

              {/* Top glow for popular */}
              {p.popular && (
                <div style={{ position: "absolute", top: "-50%", right: "-20%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
              )}

              {/* Badge */}
              {p.badge && (
                <div style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    padding: "6px 18px", borderRadius: "100px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                    ...(p.popular
                      ? { background: "linear-gradient(135deg, #3b82f6, #06b6d4)", color: "#fff", boxShadow: "0 4px 20px rgba(59,130,246,0.45)" }
                      : { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }),
                  }}>
                    {p.popular && "⭐ "}{p.badge}
                  </span>
                </div>
              )}

              <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Plan header */}
                <div style={{ marginBottom: "24px", paddingTop: p.badge ? "12px" : "0" }}>
                  <p style={{ fontSize: "12px", color: p.popular ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.32)", marginBottom: "6px", fontWeight: 500 }}>{p.sub}</p>
                  <h3 className="font-display" style={{ fontSize: "24px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{p.name}</h3>
                </div>

                {/* Price */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "5px", marginBottom: "28px" }}>
                  <span className="font-display" style={{ fontSize: "clamp(2.4rem, 5vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>{p.price}</span>
                  <span style={{ fontSize: "14px", color: p.popular ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)", fontWeight: 500 }}>{p.period}</span>
                </div>

                <div style={{ height: "1px", background: p.popular ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.07)", marginBottom: "24px" }} />

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "13px", marginBottom: "32px", flex: 1 }}>
                  {p.features.map(f => (
                    <li key={f.t} style={{ display: "flex", alignItems: "flex-start", gap: "11px" }}>
                      <span style={{
                        width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: f.ok ? (p.popular ? "rgba(96,250,165,0.15)" : "rgba(16,185,129,0.12)") : "rgba(255,255,255,0.05)",
                      }}>
                        {f.ok
                          ? <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={p.popular ? "#6ee7b7" : "#10b981"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><line x1="3" y1="3" x2="9" y2="9" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round"/><line x1="9" y1="3" x2="3" y2="9" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round"/></svg>
                        }
                      </span>
                      <span style={{
                        fontSize: "14px", lineHeight: 1.4,
                        color: f.ok
                          ? (p.popular ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.62)")
                          : "rgba(255,255,255,0.2)",
                        fontWeight: f.ok ? 500 : 400,
                      }}>{f.t}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={`https://wa.me/918651070831?text=नमस्ते! मुझे ${p.name} Plan के बारे में जानकारी चाहिए।`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    padding: "15px", borderRadius: "14px", fontWeight: 700, fontSize: "14px",
                    textDecoration: "none", transition: "all 0.25s",
                    ...(p.popular
                      ? { background: "linear-gradient(135deg, #3b82f6, #0ea5e9)", color: "#fff", boxShadow: "0 4px 24px rgba(59,130,246,0.4)" }
                      : { background: "rgba(255,255,255,0.07)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)" }),
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.28)", fontSize: "14px", marginTop: "36px" }}>
          Custom requirement है?{" "}
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
            style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp पर बात करें →
          </a>
        </p>
      </div>
    </section>
  );
}
