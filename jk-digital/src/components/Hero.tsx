"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      background: "#FFFFFF",
    }}>
      {/* Background decorations */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {/* Top-right blue blob */}
        <div style={{
          position: "absolute", top: "-10%", right: "-8%",
          width: "560px", height: "560px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)",
        }} />
        {/* Bottom-left cyan blob */}
        <div style={{
          position: "absolute", bottom: "0%", left: "-10%",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)",
        }} />
        {/* Subtle dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }} />
      </div>

      <div className="wrap" style={{ paddingTop: "120px", paddingBottom: "100px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }} className="hero-grid">

          {/* Left content */}
          <div>
            {/* Eyebrow */}
            <div className="pill anim-up" style={{ marginBottom: "28px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2563EB", flexShrink: 0 }} />
              Bihar का #1 Digital Agency · Forbesganj
            </div>

            {/* Headline */}
            <h1 className="t-h1 anim-up" style={{ marginBottom: "24px" }}>
              Google पर आएं.<br />
              <span className="accent">Leads</span> बढ़ाएं.
            </h1>

            {/* Subtext */}
            <p className="anim-up2" style={{
              fontSize: "18px", lineHeight: 1.7, color: "#64748B",
              maxWidth: "480px", marginBottom: "40px", fontWeight: 400,
            }}>
              Website, SEO, GMB, Google Ads — सब एक जगह।<br />
              200+ local businesses already growing with us.
            </p>

            {/* CTA buttons */}
            <div className="anim-up3" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "56px" }}>
              <a href="#contact" className="btn btn-primary btn-lg">
                Free Audit लें
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="https://wa.me/918651070831?text=नमस्ते! Free audit चाहिए।" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                WhatsApp करें
              </a>
            </div>

            {/* Trust line */}
            <div className="anim-up4" style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              {["Free consultation", "No hidden charges", "Reply in 30 min"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="hero-right" style={{ position: "relative" }}>
            {/* Floating card — main dashboard */}
            <div style={{
              background: "#fff",
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 24px 80px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.04)",
              overflow: "hidden",
              animation: "float 6s ease-in-out infinite",
            }}>
              {/* Dashboard header */}
              <div style={{ background: "#F8FAFC", padding: "14px 20px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "8px" }}>
                {["#F87171","#FCD34D","#34D399"].map(c => (
                  <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                ))}
                <span style={{ fontSize: "12px", color: "#94A3B8", marginLeft: "8px", fontWeight: 500 }}>Business Dashboard</span>
              </div>
              <div style={{ padding: "24px 20px" }}>
                {/* Stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", marginBottom: "20px" }}>
                  {[
                    { label: "Google Rank", value: "#1", color: "#2563EB", up: true },
                    { label: "Leads / mo", value: "40+", color: "#16A34A", up: true },
                    { label: "ROI", value: "5×", color: "#4F46E5", up: true },
                  ].map(s => (
                    <div key={s.label} style={{
                      padding: "14px 12px", borderRadius: "12px",
                      background: s.color + "08", border: `1px solid ${s.color}18`,
                      textAlign: "center",
                    }}>
                      <div style={{ fontSize: "22px", fontWeight: 800, color: s.color, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "4px", fontWeight: 500 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Mini bar chart */}
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#475569" }}>Monthly Leads</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#16A34A" }}>↑ 180%</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "52px" }}>
                    {[30, 45, 38, 55, 70, 62, 85, 90, 78, 100, 88, 115].map((h, i) => (
                      <div key={i} style={{
                        flex: 1, borderRadius: "4px 4px 0 0",
                        height: `${h}%`,
                        background: i >= 9 ? "#2563EB" : "#BFDBFE",
                      }} />
                    ))}
                  </div>
                </div>
                {/* Google rating */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 14px", borderRadius: "10px", background: "#FFFBEB",
                  border: "1px solid #FDE68A",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "16px" }}>⭐</span>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>4.9 Google Rating</span>
                  </div>
                  <span style={{ fontSize: "12px", color: "#92400E", fontWeight: 600 }}>200+ reviews</span>
                </div>
              </div>
            </div>

            {/* Floating badge — top left */}
            <div style={{
              position: "absolute", top: "-16px", left: "-20px",
              background: "#fff", borderRadius: "14px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              padding: "12px 16px",
              display: "flex", alignItems: "center", gap: "10px",
              animation: "float 5s ease-in-out infinite 1s",
            }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>+180%</div>
                <div style={{ fontSize: "11px", color: "#94A3B8" }}>Lead Growth</div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div style={{
              position: "absolute", bottom: "-16px", right: "-16px",
              background: "#fff", borderRadius: "14px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              padding: "12px 16px",
              display: "flex", alignItems: "center", gap: "10px",
              animation: "float 7s ease-in-out infinite 2s",
            }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Results Guaranteed</div>
                <div style={{ fontSize: "11px", color: "#94A3B8" }}>30-day visible improvement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px",
          marginTop: "72px",
          padding: "32px 40px",
          borderRadius: "20px",
          background: "#F8FAFC",
          border: "1px solid #E2E8F0",
        }} className="stats-grid">
          {[
            { n: "200+",  l: "Businesses Served",     icon: "🏢" },
            { n: "4.9 ★", l: "Google Rating",         icon: "⭐" },
            { n: "3×",    l: "Avg Lead Growth",        icon: "📈" },
            { n: "5 yrs", l: "In the Market",          icon: "🏆" },
          ].map(s => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "4px" }}>{s.icon}</div>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "13px", color: "#94A3B8", marginTop: "6px", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-right { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  );
}
