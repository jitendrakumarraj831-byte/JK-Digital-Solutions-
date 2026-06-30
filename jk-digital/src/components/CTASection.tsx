"use client";

export default function CTASection() {
  return (
    <section style={{ padding: "40px 0 112px", background: "linear-gradient(180deg, #060018 0%, #0a041e 100%)" }}>
      <div className="wrap">
        <div style={{
          borderRadius: "32px", overflow: "hidden", position: "relative",
          background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 20%, #4338ca 45%, #1d4ed8 70%, #0e7490 100%)",
          padding: "clamp(48px,8vw,80px) clamp(28px,6vw,72px)",
          textAlign: "center",
          boxShadow: "0 24px 80px rgba(124,58,237,0.4), 0 4px 20px rgba(59,130,246,0.3)",
        }}>
          {/* Orbs */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div className="anim-orb" style={{
              position: "absolute", top: "-30%", left: "-15%",
              width: "350px", height: "350px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
            }} />
            <div style={{
              position: "absolute", bottom: "-25%", right: "-10%",
              width: "280px", height: "280px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
              animation: "orb-float 16s ease-in-out infinite reverse",
            }} />
            {/* Grid overlay */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }} />
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "7px 16px", borderRadius: "100px", marginBottom: "28px",
              background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)",
            }}>
              <span style={{ fontSize: "14px" }}>🚀</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", letterSpacing: "0.08em" }}>आज ही शुरू करें</span>
            </div>

            <h2 className="font-display" style={{
              fontSize: "clamp(2rem,6vw,4rem)", fontWeight: 900, color: "#fff",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "18px",
            }}>
              Ready हैं Google पर<br />
              <span style={{
                background: "linear-gradient(135deg, #fde68a, #fb923c, #f9a8d4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Number One</span> बनने के लिए?
            </h2>

            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "17px", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto 44px" }}>
              Free consultation में हम analyze करेंगे — आपके business के लिए exactly क्या strategy work करेगी।
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "36px" }}>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "16px 36px", borderRadius: "14px",
                background: "#fff", color: "#5b21b6",
                fontWeight: 800, fontSize: "16px", textDecoration: "none",
                boxShadow: "0 4px 28px rgba(0,0,0,0.2)",
                transition: "all 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 28px rgba(0,0,0,0.2)"; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Free Audit लें — आज ही
              </a>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                WhatsApp करें
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
              {["✓ Free Consultation", "✓ No Hidden Charges", "✓ 30 Min Response"].map(t => (
                <span key={t} style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
