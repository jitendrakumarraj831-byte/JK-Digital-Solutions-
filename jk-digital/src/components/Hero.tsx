"use client";

const stats = [
  { n: "150+", label: "Projects Delivered" },
  { n: "120+", label: "Happy Clients" },
  { n: "4.9★", label: "Google Rating" },
  { n: "₹5Cr+", label: "Revenue Generated" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg hero-grid"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "-2%", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "60%", right: "35%", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div className="anim-fade-up" style={{ marginBottom: "28px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "8px 16px 8px 10px", borderRadius: "100px",
            background: "rgba(59,130,246,0.1)", border: "1px solid rgba(96,165,250,0.22)",
          }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "50%", background: "rgba(16,185,129,0.15)" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px rgba(16,185,129,0.8)", display: "block" }} />
            </span>
            <span style={{ color: "#93c5fd", fontSize: "12px", fontWeight: 600, letterSpacing: "0.03em" }}>
              Bihar का #1 Digital Marketing Agency &nbsp;·&nbsp; Forbesganj
            </span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display anim-fade-up2" style={{
          fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.06,
          letterSpacing: "-0.03em",
          marginBottom: "28px",
          maxWidth: "840px",
        }}>
          अपने Business को<br />
          <span className="grad-text">Google का Star</span><br />
          बनाते हैं हम।
        </h1>

        {/* Sub */}
        <p className="anim-fade-up3" style={{
          fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
          color: "rgba(255,255,255,0.52)",
          lineHeight: 1.8,
          maxWidth: "540px",
          marginBottom: "44px",
          fontWeight: 400,
        }}>
          Website Development, Google SEO, GMB Optimization और Google Ads —
          एक agency में सभी solutions। Local businesses को market leaders बनाते हैं।
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "24px" }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "16px 36px", borderRadius: "12px",
            background: "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)",
            color: "#fff", fontWeight: 700, fontSize: "16px", textDecoration: "none",
            boxShadow: "0 4px 28px rgba(59,130,246,0.4)",
            transition: "all 0.25s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(59,130,246,0.55)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 28px rgba(59,130,246,0.4)"; }}>
            Free Audit लें
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://wa.me/918651070831?text=नमस्ते! Free consultation चाहिए।" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "9px",
              padding: "16px 32px", borderRadius: "12px",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "16px", textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/>
            </svg>
            WhatsApp करें
          </a>
        </div>

        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)", marginBottom: "72px", fontWeight: 500 }}>
          ✓ Free Consultation &nbsp;&nbsp;·&nbsp;&nbsp; ✓ No Hidden Charges &nbsp;&nbsp;·&nbsp;&nbsp; ✓ Reply in 30 Minutes
        </p>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "44px" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              paddingRight: "40px", marginRight: "40px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              paddingBottom: "8px",
            }}>
              <p className="font-display" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.3rem)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", marginTop: "7px", fontWeight: 500, letterSpacing: "0.02em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "140px", background: "linear-gradient(to bottom, transparent, #05091a)", pointerEvents: "none" }} />
    </section>
  );
}
