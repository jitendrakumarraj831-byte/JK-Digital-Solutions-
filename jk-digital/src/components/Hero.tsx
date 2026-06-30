"use client";
import { ArrowRight, Play, Star } from "lucide-react";

const stats = [
  { n: "150+", label: "Projects" },
  { n: "120+", label: "Clients" },
  { n: "4.9★", label: "Rating" },
  { n: "₹5Cr+", label: "Revenue Generated" },
];

export default function Hero() {
  return (
    <section id="home" className="hero-bg hero-grid" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "80px", paddingBottom: "60px", position: "relative", overflow: "hidden" }}>

      {/* Floating orbs */}
      <div style={{ position: "absolute", top: "15%", right: "8%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", left: "5%", width: "240px", height: "240px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "760px" }}>

          {/* Live badge */}
          <div className="animate-fade-up" style={{ marginBottom: "24px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: "100px", padding: "8px 16px", fontSize: "12px",
              fontWeight: 600, color: "#93c5fd", letterSpacing: "0.03em"
            }}>
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%", background: "#10b981",
                boxShadow: "0 0 8px #10b981", animation: "pulse-dot 2s infinite"
              }} />
              Bihar का #1 Digital Marketing Agency · Forbesganj
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display animate-fade-up-delay" style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: "24px"
          }}>
            अपने Business को<br />
            <span className="grad-text">Google का Star</span><br />
            बनाते हैं हम।
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up-delay2" style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            maxWidth: "560px",
            marginBottom: "40px",
            fontWeight: 400
          }}>
            Website बनाना, Google SEO, GMB Optimization, Google Ads —
            एक agency, सब solutions। Local businesses को national brands बनाते हैं।
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: "15px", padding: "15px 32px" }}>
              Free Audit लें <ArrowRight style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://wa.me/918651070831?text=नमस्ते! Free consultation चाहिए।"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost" style={{ fontSize: "15px", padding: "15px 32px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
              WhatsApp करें
            </a>
          </div>

          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginBottom: "64px" }}>
            ✓ Free consultation &nbsp;·&nbsp; ✓ No hidden charges &nbsp;·&nbsp; ✓ 30 min reply
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "40px" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding: "0 32px 0 0",
                marginRight: "32px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none"
              }}>
                <p className="font-display" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "6px", fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, transparent, rgba(3,7,18,0.6))", pointerEvents: "none" }} />
    </section>
  );
}
