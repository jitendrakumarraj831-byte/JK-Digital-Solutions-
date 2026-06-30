"use client";

export default function CTASection() {
  return (
    <section style={{ padding: "0 0 128px", background: "#060011" }}>
      <div className="wrap">
        <div style={{
          borderRadius: "24px", overflow: "hidden", position: "relative",
          background: "linear-gradient(135deg, #3b0764 0%, #4c1d95 20%, #4338ca 55%, #1d4ed8 80%, #0369a1 100%)",
          padding: "clamp(56px, 8vw, 88px) clamp(32px, 6vw, 80px)",
          boxShadow: "0 24px 80px rgba(79,46,220,0.35)",
        }}>
          {/* Subtle grid overlay */}
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "56px 56px", pointerEvents: "none",
          }} />
          {/* Orb */}
          <div aria-hidden style={{
            position: "absolute", top: "-40%", right: "-8%",
            width: "380px", height: "380px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "560px" }}>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "5px 14px", borderRadius: "100px", marginBottom: "28px",
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
              fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "0.06em",
            }}>
              Free consultation · No commitment
            </div>

            <h2 style={{
              fontSize: "clamp(32px,5vw,52px)", fontWeight: 700,
              letterSpacing: "-0.04em", lineHeight: 1.05, color: "#fff", marginBottom: "16px",
            }}>
              Ready to <span style={{
                background: "linear-gradient(135deg,#fde68a,#fb923c)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>grow</span>?
            </h2>

            <p style={{
              fontSize: "17px", lineHeight: 1.7, color: "rgba(255,255,255,0.6)",
              marginBottom: "40px", fontWeight: 400,
            }}>
              Get a free audit — we'll analyse your business and tell you exactly what to fix to start getting leads from Google.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 28px", borderRadius: "11px",
                background: "#fff", color: "#4c1d95",
                fontWeight: 700, fontSize: "15px", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.25)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)"; }}>
                Start free audit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 24px", borderRadius: "11px",
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.22)",
                color: "#fff", fontWeight: 600, fontSize: "15px", textDecoration: "none",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                WhatsApp करें
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
