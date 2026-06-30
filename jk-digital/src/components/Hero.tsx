"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(160deg, #0e0225 0%, #060011 50%, #040d22 100%)",
    }}>
      {/* Background orbs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "-25%", left: "-12%",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)",
          animation: "orb-float 16s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "0%", right: "-18%",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 65%)",
          animation: "orb-float 20s ease-in-out infinite reverse",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "38%",
          width: "360px", height: "360px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 65%)",
          animation: "orb-float 24s ease-in-out infinite",
        }} />
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(167,139,250,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
      </div>

      <div className="wrap anim-up" style={{ paddingTop: "112px", paddingBottom: "96px", position: "relative", zIndex: 1, width: "100%" }}>

        {/* Eyebrow */}
        <div className="pill anim-up" style={{ marginBottom: "32px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 8px rgba(167,139,250,0.8)", flexShrink: 0 }} />
          Bihar का #1 Digital Agency · Forbesganj
        </div>

        {/* Headline */}
        <h1 className="t-h1 anim-up" style={{ marginBottom: "24px", maxWidth: "640px" }}>
          Google पर आएं.<br />
          <span className="accent">Leads</span> बढ़ाएं.
        </h1>

        {/* Subtext */}
        <p className="anim-up2" style={{
          fontSize: "18px", lineHeight: 1.7, color: "rgba(230,220,255,0.52)",
          maxWidth: "480px", marginBottom: "40px", fontWeight: 400,
        }}>
          Website, SEO, GMB, Google Ads — सब एक जगह।<br />
          200+ local businesses already growing with us.
        </p>

        {/* CTA buttons */}
        <div className="anim-up3" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            Free Audit लें
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="https://wa.me/918651070831?text=नमस्ते! Free audit चाहिए।" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
            WhatsApp करें
          </a>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[
            { n: "200+",  l: "Businesses" },
            { n: "4.9 ★", l: "Google Rating" },
            { n: "3×",    l: "Avg Lead Growth" },
            { n: "5 yrs", l: "Experience" },
          ].map(s => (
            <div key={s.n} style={{
              padding: "14px 20px",
              borderRadius: "12px",
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(167,139,250,0.14)",
            }}>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "rgba(230,220,255,0.42)", marginTop: "4px", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p style={{ marginTop: "24px", fontSize: "13px", color: "rgba(196,181,253,0.4)", fontWeight: 500 }}>
          Free consultation &nbsp;·&nbsp; No hidden charges &nbsp;·&nbsp; Reply in 30 minutes
        </p>
      </div>
    </section>
  );
}
