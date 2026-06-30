"use client";

export default function CTASection() {
  return (
    <section style={{ background: "#080d1f", padding: "40px 0 112px" }}>
      <div className="wrap">
        <div style={{
          position: "relative", borderRadius: "32px", overflow: "hidden",
          padding: "clamp(56px, 8vw, 100px) clamp(28px, 6vw, 88px)",
          textAlign: "center",
          background: "linear-gradient(135deg, #0a1628 0%, #0f1e3d 40%, #0a1628 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}>
          {/* Gradient orbs */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 60% at 25% 50%, rgba(59,130,246,0.18) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 60% at 80% 50%, rgba(6,182,212,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 50% 100%, rgba(139,92,246,0.1) 0%, transparent 55%)", pointerEvents: "none" }} />

          {/* Top line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.5), rgba(6,182,212,0.5), transparent)" }} />
          {/* Bottom line */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="section-label" style={{ display: "block", marginBottom: "20px", color: "#93c5fd" }}>अभी शुरू करें</span>

            <h2 className="font-display" style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", fontWeight: 900, color: "#fff",
              letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: "22px",
            }}>
              आपके Business को Google पर<br />
              <span className="grad-text">Top पर लाने का समय है।</span>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.48)", fontSize: "18px", lineHeight: 1.75,
              marginBottom: "48px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto",
            }}>
              Free consultation में हम personally analyze करेंगे कि आपके business के लिए exactly क्या strategy काम करेगी। कोई commitment नहीं।
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginBottom: "32px" }}>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "17px 40px", borderRadius: "13px",
                background: "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)",
                color: "#fff", fontWeight: 700, fontSize: "16px", textDecoration: "none",
                boxShadow: "0 4px 32px rgba(59,130,246,0.45)",
                transition: "all 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 48px rgba(59,130,246,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 32px rgba(59,130,246,0.45)"; }}>
                Free Audit Request करें
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="https://wa.me/918651070831?text=नमस्ते! Free consultation चाहिए।" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  padding: "17px 36px", borderRadius: "13px",
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  color: "#fff", fontWeight: 700, fontSize: "16px", textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(37,211,102,0.3)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(37,211,102,0.45)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(37,211,102,0.3)"; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                WhatsApp पर बात करें
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", justifyContent: "center" }}>
              {["✓ 100% Free Consultation", "✓ No Hidden Charges", "✓ 30 Min Reply Guarantee"].map(t => (
                <span key={t} style={{ fontSize: "13px", color: "rgba(255,255,255,0.32)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
