"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
      background: "linear-gradient(135deg, #0d0221 0%, #0a0118 40%, #050d2a 100%)",
    }}>
      {/* Gradient orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div className="anim-orb" style={{
          position: "absolute", top: "-20%", left: "-10%",
          width: "650px", height: "650px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.32) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "5%", right: "-15%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.24) 0%, transparent 70%)",
          animation: "orb-float 18s ease-in-out infinite reverse",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "35%",
          width: "420px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          animation: "orb-float 22s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="wrap" style={{ paddingTop: "130px", paddingBottom: "80px", position: "relative", zIndex: 1, width: "100%" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "8px 18px", borderRadius: "100px", marginBottom: "36px",
          background: "linear-gradient(135deg, rgba(124,58,237,0.22), rgba(99,102,241,0.16))",
          border: "1px solid rgba(167,139,250,0.32)",
        }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 10px rgba(167,139,250,0.9)", flexShrink: 0 }} />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#c4b5fd", letterSpacing: "0.08em" }}>
            Bihar का #1 Digital Marketing Agency · Forbesganj
          </span>
        </div>

        <h1 className="font-display anim-fade-up" style={{
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 900,
          letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "24px", color: "#fff",
        }}>
          अपने Business को<br />
          <span className="grad-text">Google का Star</span><br />
          बनाते हैं हम।
        </h1>

        <p className="anim-fade-up2" style={{
          color: "rgba(228,220,255,0.58)", fontSize: "clamp(16px,2vw,19px)",
          lineHeight: 1.8, maxWidth: "540px", marginBottom: "44px",
        }}>
          Website Development, Google SEO, GMB Optimization और Google Ads — एक agency में सभी solutions। Local businesses को market leaders बनाते हैं।
        </p>

        <div className="anim-fade-up3" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "60px" }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: "16px", padding: "16px 34px" }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            Free Audit लें
          </a>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="btn-wa">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
            WhatsApp करें
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            { v: "200+", l: "Businesses", g: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(99,102,241,0.18))", b: "rgba(167,139,250,0.25)" },
            { v: "4.9★", l: "Google Rating", g: "linear-gradient(135deg,rgba(245,158,11,0.25),rgba(251,191,36,0.15))", b: "rgba(251,191,36,0.25)" },
            { v: "3×",  l: "Lead Growth",   g: "linear-gradient(135deg,rgba(59,130,246,0.25),rgba(6,182,212,0.15))",  b: "rgba(96,165,250,0.25)" },
            { v: "30m", l: "Response",       g: "linear-gradient(135deg,rgba(16,185,129,0.22),rgba(6,182,212,0.15))", b: "rgba(52,211,153,0.22)" },
          ].map(s => (
            <div key={s.v} style={{
              padding: "16px 24px", borderRadius: "16px",
              background: s.g, border: `1px solid ${s.b}`, textAlign: "center",
            }}>
              <p className="font-display" style={{ fontWeight: 800, fontSize: "24px", color: "#fff", letterSpacing: "-0.02em" }}>{s.v}</p>
              <p style={{ fontSize: "11px", color: "rgba(228,220,255,0.5)", fontWeight: 500, marginTop: "2px" }}>{s.l}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "28px", fontSize: "13px", color: "rgba(196,181,253,0.45)", display: "flex", gap: "18px", flexWrap: "wrap" }}>
          <span>✓ Free Consultation</span>
          <span>✓ No Hidden Charges</span>
          <span>✓ Reply in 30 Minutes</span>
        </p>
      </div>
    </section>
  );
}
