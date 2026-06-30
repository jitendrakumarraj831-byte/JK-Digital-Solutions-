"use client";
import { ArrowRight } from "lucide-react";

const reasons = [
  { icon: "📍", color: "#3b82f6", bg: "rgba(59,130,246,0.1)", title: "Local Market Experts", desc: "Forbesganj में बैठे हैं। Bihar के customers की psychology, language और behavior personally जानते हैं।" },
  { icon: "📊", color: "#10b981", bg: "rgba(16,185,129,0.1)", title: "Results, Not Promises", desc: "हम vanity metrics नहीं देते — real phone calls, genuine leads और actual paying customers।" },
  { icon: "🔐", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", title: "Zero Hidden Charges", desc: "Contract में जो लिखा है, वही होगा। कोई surprise bills नहीं, कोई extra charges नहीं।" },
  { icon: "⚡", color: "#a78bfa", bg: "rgba(167,139,250,0.1)", title: "Lightning Fast Delivery", desc: "Website 30 days, GMB 7 days, Ads same day launch। Time is money — आपका और हमारा दोनों।" },
  { icon: "📱", color: "#06b6d4", bg: "rgba(6,182,212,0.1)", title: "Always Accessible", desc: "WhatsApp पर हमेशा available। Emergency में भी 30 minutes में respond करते हैं।" },
  { icon: "📈", color: "#f472b6", bg: "rgba(244,114,182,0.1)", title: "Data-Driven Strategy", desc: "हर decision data से। Analytics, A/B testing और competitor research से backed strategies।" },
];

const counter = [
  { n: "3+", label: "Years Experience" },
  { n: "150+", label: "Projects Delivered" },
  { n: "₹5Cr+", label: "Revenue Generated" },
  { n: "98%", label: "Client Retention" },
];

export default function WhyChooseUs() {
  return (
    <section style={{ background: "#070c1a", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      {/* Background accents */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "40%", height: "60%", background: "radial-gradient(ellipse 60% 80% at 0% 100%, rgba(139,92,246,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Why Choose Us</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px"
          }}>
            दूसरे Agency से हम <span className="grad-text">क्यों अलग हैं?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", maxWidth: "440px", margin: "0 auto" }}>
            सिर्फ claim नहीं, proof है। यहाँ बताते हैं।
          </p>
        </div>

        {/* Counter strip */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "20px", overflow: "hidden", marginBottom: "72px"
        }}>
          {counter.map(c => (
            <div key={c.label} style={{ background: "#070c1a", padding: "28px 20px", textAlign: "center" }}>
              <p className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{c.n}</p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "8px", fontWeight: 500, letterSpacing: "0.03em" }}>{c.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "16px", marginBottom: "60px" }}>
          {reasons.map(r => (
            <div key={r.title} style={{
              display: "flex", gap: "16px", padding: "24px",
              background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "18px", transition: "all 0.3s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.045)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: r.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "20px" }}>
                {r.icon}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "15px", marginBottom: "6px", letterSpacing: "-0.01em" }}>{r.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: "15px", padding: "15px 32px" }}>
              Free Strategy Call लें <ArrowRight style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="btn-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
              WhatsApp पर चैट करें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
