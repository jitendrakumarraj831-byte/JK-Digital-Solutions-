"use client";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter", badge: "", price: "₹4,999", period: "/month",
    sub: "नई शुरुआत के लिए perfect",
    popular: false,
    yes: ["5-Page Professional Website", "Google Business Profile Setup", "Basic On-page SEO", "WhatsApp Integration", "Monthly Performance Report", "6 Months Support"],
    no: ["Google Ads Management", "Advanced SEO (20+ Keywords)", "Priority Support"],
  },
  {
    name: "Professional", badge: "Most Popular", price: "₹9,999", period: "/month",
    sub: "Growing businesses का पसंदीदा",
    popular: true,
    yes: ["10-Page Premium Website", "GMB Full Optimization", "Advanced SEO — 20 Keywords", "Google Ads (₹5K budget included)", "Fortnightly Reports", "Review Management", "Landing Pages", "Priority WhatsApp Support"],
    no: [],
  },
  {
    name: "Enterprise", badge: "Best Value", price: "₹19,999", period: "/month",
    sub: "Market leader बनना हो तो",
    popular: false,
    yes: ["Unlimited Pages Website", "SEO — 50+ Keywords", "Google + Meta Ads (₹15K included)", "Dedicated Campaign Manager", "Weekly Reports + Analytics", "Content Creation", "CRO Optimization", "Emergency Support 24/7"],
    no: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "#060b18", padding: "100px 0" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Pricing</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px"
          }}>
            Transparent <span className="grad-text">Pricing</span>, Zero Surprises
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", maxWidth: "400px", margin: "0 auto" }}>
            जो plan में लिखा है, वही मिलेगा। कोई hidden charges नहीं।
          </p>
        </div>

        {/* Plans grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "20px", alignItems: "stretch" }}>
          {plans.map(p => (
            <div key={p.name} style={{
              borderRadius: "24px",
              padding: "32px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              ...(p.popular
                ? { background: "linear-gradient(160deg, #1e3a8a 0%, #1d4ed8 60%, #1e40af 100%)", border: "none", boxShadow: "0 0 60px rgba(37,99,235,0.3), 0 20px 60px rgba(0,0,0,0.3)" }
                : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }
              )
            }}>
              {/* Glow for popular */}
              {p.popular && (
                <div style={{ position: "absolute", top: "-30%", right: "-20%", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
              )}

              {/* Popular badge */}
              {p.badge && (
                <div style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)" }}>
                  <span style={{
                    display: "inline-block", padding: "6px 18px", borderRadius: "100px",
                    fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
                    background: p.popular ? "#ffffff" : "rgba(255,255,255,0.1)",
                    color: p.popular ? "#1d4ed8" : "rgba(255,255,255,0.8)",
                    whiteSpace: "nowrap"
                  }}>
                    {p.popular ? "⭐ " : ""}{p.badge}
                  </span>
                </div>
              )}

              <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "12px", color: p.popular ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)", marginBottom: "6px", marginTop: p.badge ? "8px" : "0" }}>{p.sub}</p>
                <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "20px" }}>{p.name}</h3>

                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "28px" }}>
                  <span className="font-display" style={{ fontSize: "2.6rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{p.price}</span>
                  <span style={{ fontSize: "13px", color: p.popular ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)" }}>{p.period}</span>
                </div>

                <div style={{ height: "1px", background: p.popular ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)", marginBottom: "24px" }} />

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px", flex: 1 }}>
                  {p.yes.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: p.popular ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)" }}>
                      <Check style={{ width: "15px", height: "15px", color: p.popular ? "#86efac" : "#10b981", flexShrink: 0, marginTop: "2px" }} />
                      {f}
                    </li>
                  ))}
                  {p.no.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,0.2)" }}>
                      <X style={{ width: "15px", height: "15px", flexShrink: 0, marginTop: "2px" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={`https://wa.me/918651070831?text=नमस्ते! मुझे ${p.name} Plan के बारे में जानकारी चाहिए।`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    padding: "14px", borderRadius: "14px", fontWeight: 700, fontSize: "14px",
                    textDecoration: "none", transition: "all 0.25s",
                    ...(p.popular
                      ? { background: "#ffffff", color: "#1d4ed8" }
                      : { background: "rgba(255,255,255,0.07)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)" }
                    )
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                  {p.name} Plan में Interested हूं
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "14px", marginTop: "32px" }}>
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
