"use client";

export default function Hero() {
  return (
    <>
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #F0F7FF 0%, #FFFFFF 45%, #F8FAFF 100%)",
      }}>

        {/* ── BACKGROUND LAYER ── */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          {/* Dot grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.28,
          }} />
          {/* Blue glow — top right */}
          <div style={{
            position: "absolute", top: "-15%", right: "-10%",
            width: "700px", height: "700px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, rgba(79,70,229,0.04) 40%, transparent 70%)",
          }} />
          {/* Cyan glow — bottom left */}
          <div style={{
            position: "absolute", bottom: "-10%", left: "-8%",
            width: "520px", height: "520px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)",
          }} />
          {/* Indigo blob — mid left */}
          <div style={{
            position: "absolute", top: "40%", left: "-5%",
            width: "320px", height: "320px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 65%)",
          }} />
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="wrap" style={{ paddingTop: "120px", paddingBottom: "80px", position: "relative", zIndex: 1, width: "100%" }}>
          <div className="hero-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "64px",
            alignItems: "center",
          }}>

            {/* ════════════ LEFT ════════════ */}
            <div className="hero-left">

              {/* Trust badge */}
              <div className="anim-up" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "7px 16px", borderRadius: "100px",
                background: "linear-gradient(135deg, #EFF6FF, #EEF2FF)",
                border: "1px solid #BFDBFE",
                marginBottom: "28px",
                fontSize: "13px", fontWeight: 600, color: "#2563EB",
              }}>
                🚀 Trusted Digital Solutions for Growing Businesses
              </div>

              {/* Headline */}
              <h1 className="anim-up" style={{
                fontSize: "clamp(36px, 4.8vw, 60px)",
                fontWeight: 900,
                letterSpacing: "-0.045em",
                lineHeight: 1.04,
                color: "#0F172A",
                marginBottom: "24px",
              }}>
                Build a{" "}
                <span style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Powerful</span>
                {" "}Online<br />
                Presence That{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{
                    background: "linear-gradient(135deg, #0891B2 0%, #2563EB 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>Grows</span>
                  {/* Underline swoosh */}
                  <svg viewBox="0 0 120 10" style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "8px" }} fill="none" preserveAspectRatio="none">
                    <path d="M2 7 C30 2, 90 2, 118 7" stroke="url(#ug)" strokeWidth="2.5" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="ug" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0891B2"/>
                        <stop offset="100%" stopColor="#2563EB"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                {" "}Your Business
              </h1>

              {/* Sub-paragraph */}
              <p className="anim-up2" style={{
                fontSize: "17px", lineHeight: 1.75, color: "#64748B",
                maxWidth: "500px", marginBottom: "40px", fontWeight: 400,
              }}>
                We deliver <strong style={{ color: "#0F172A", fontWeight: 600 }}>Website Development</strong>,{" "}
                <strong style={{ color: "#0F172A", fontWeight: 600 }}>SEO</strong>,{" "}
                <strong style={{ color: "#0F172A", fontWeight: 600 }}>Google Business Profile</strong>,{" "}
                <strong style={{ color: "#0F172A", fontWeight: 600 }}>Google Ads</strong>,{" "}
                Branding, and Digital Marketing — everything a local business needs to win online. Based in Forbesganj, serving 200+ businesses across Bihar.
              </p>

              {/* CTAs */}
              <div className="anim-up3" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
                <a href="#contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  padding: "15px 28px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.35), 0 1px 3px rgba(0,0,0,0.1)",
                  transition: "transform 0.18s, box-shadow 0.18s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,99,235,0.45), 0 1px 3px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,99,235,0.35), 0 1px 3px rgba(0,0,0,0.1)"; }}>
                  Get Free Consultation
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="https://wa.me/918651070831?text=Hello! I need help with digital marketing." target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  padding: "15px 24px", borderRadius: "12px",
                  background: "#fff", color: "#0F172A",
                  fontWeight: 600, fontSize: "15px", textDecoration: "none",
                  border: "1.5px solid #E2E8F0",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                  transition: "border-color 0.18s, box-shadow 0.18s, transform 0.18s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#16A34A"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(22,163,74,0.15)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 8px rgba(0,0,0,0.06)"; }}>
                  {/* WhatsApp icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#16A34A">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust indicators */}
              <div className="anim-up4" style={{
                display: "flex", gap: "0", flexWrap: "wrap",
                background: "#F8FAFC", border: "1px solid #E2E8F0",
                borderRadius: "14px", overflow: "hidden",
              }}>
                {[
                  { icon: "⭐", value: "4.9", label: "Customer Rating" },
                  { icon: "👥", value: "200+", label: "Happy Clients" },
                  { icon: "⚡", value: "30 days", label: "Fast Delivery" },
                  { icon: "🔒", value: "24/7", label: "Trusted Support" },
                ].map((t, i) => (
                  <div key={i} style={{
                    flex: 1, minWidth: "100px",
                    padding: "14px 12px",
                    textAlign: "center",
                    borderRight: i < 3 ? "1px solid #E2E8F0" : "none",
                  }}>
                    <div style={{ fontSize: "18px", lineHeight: 1, marginBottom: "4px" }}>{t.icon}</div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>{t.value}</div>
                    <div style={{ fontSize: "10px", color: "#94A3B8", fontWeight: 500, marginTop: "2px" }}>{t.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ════════════ RIGHT — Premium Visual Mockup ════════════ */}
            <div className="hero-right" style={{ position: "relative", minHeight: "520px" }}>

              {/* ─── LAPTOP FRAME ─── */}
              <div className="laptop-wrap" style={{
                position: "relative", zIndex: 2,
                marginLeft: "24px", marginRight: "0",
              }}>
                {/* Laptop lid */}
                <div style={{
                  background: "linear-gradient(160deg, #1E293B 0%, #0F172A 100%)",
                  borderRadius: "16px 16px 0 0",
                  padding: "10px 10px 0",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.1)",
                  position: "relative",
                }}>
                  {/* Camera */}
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "6px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#334155" }} />
                  </div>
                  {/* Screen bezel */}
                  <div style={{
                    background: "#fff",
                    borderRadius: "8px 8px 0 0",
                    overflow: "hidden",
                    height: "280px",
                  }}>
                    {/* Browser chrome */}
                    <div style={{
                      background: "#F8FAFC",
                      padding: "8px 12px",
                      borderBottom: "1px solid #E2E8F0",
                      display: "flex", alignItems: "center", gap: "8px",
                    }}>
                      <div style={{ display: "flex", gap: "5px" }}>
                        {["#F87171","#FCD34D","#4ADE80"].map(c => <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />)}
                      </div>
                      {/* URL bar */}
                      <div style={{
                        flex: 1, background: "#fff", borderRadius: "6px",
                        padding: "4px 10px", border: "1px solid #E2E8F0",
                        fontSize: "11px", color: "#64748B", display: "flex", alignItems: "center", gap: "5px",
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        yourbusiness.in
                      </div>
                    </div>
                    {/* Website content */}
                    <div style={{ background: "#fff", height: "calc(100% - 33px)", overflow: "hidden", position: "relative" }}>
                      {/* Website hero */}
                      <div style={{ background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)", padding: "18px 16px 14px", position: "relative" }}>
                        {/* Navbar */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <div style={{ width: "18px", height: "18px", borderRadius: "5px", background: "rgba(255,255,255,0.3)" }} />
                            <div style={{ width: "52px", height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.7)" }} />
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            {[40, 32, 30].map((w, i) => <div key={i} style={{ width: `${w}px`, height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.35)" }} />)}
                            <div style={{ width: "36px", height: "18px", borderRadius: "5px", background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)" }} />
                          </div>
                        </div>
                        {/* Hero text */}
                        <div style={{ width: "70%", height: "10px", borderRadius: "4px", background: "rgba(255,255,255,0.9)", marginBottom: "6px" }} />
                        <div style={{ width: "55%", height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.6)", marginBottom: "6px" }} />
                        <div style={{ width: "45%", height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.4)", marginBottom: "12px" }} />
                        <div style={{ display: "flex", gap: "6px" }}>
                          <div style={{ width: "60px", height: "18px", borderRadius: "5px", background: "#fff" }} />
                          <div style={{ width: "50px", height: "18px", borderRadius: "5px", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)" }} />
                        </div>
                      </div>
                      {/* Services row */}
                      <div style={{ padding: "10px 12px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                        {["#EFF6FF","#F0FDF4","#FEF3C7"].map((bg, i) => (
                          <div key={i} style={{ background: bg, borderRadius: "6px", padding: "8px 6px" }}>
                            <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: ["#DBEAFE","#DCFCE7","#FDE68A"][i], marginBottom: "4px" }} />
                            <div style={{ width: "100%", height: "5px", borderRadius: "2px", background: ["#BFDBFE","#BBF7D0","#FCD34D"][i], marginBottom: "3px" }} />
                            <div style={{ width: "70%", height: "4px", borderRadius: "2px", background: "#E2E8F0" }} />
                          </div>
                        ))}
                      </div>
                      {/* Stats bar */}
                      <div style={{ padding: "0 12px", display: "flex", gap: "6px" }}>
                        {[["#2563EB","80%"],["#16A34A","65%"],["#4F46E5","90%"]].map(([c, w], i) => (
                          <div key={i} style={{ flex: 1, background: "#F8FAFC", borderRadius: "4px", padding: "5px 6px" }}>
                            <div style={{ width: w, height: "4px", background: c, borderRadius: "2px", marginBottom: "3px" }} />
                            <div style={{ width: "60%", height: "3px", background: "#E2E8F0", borderRadius: "2px" }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop base */}
                <div style={{
                  background: "linear-gradient(180deg, #334155 0%, #1E293B 100%)",
                  height: "16px", borderRadius: "0 0 4px 4px",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                    width: "60px", height: "5px", background: "#475569", borderRadius: "0 0 6px 6px",
                  }} />
                </div>
                {/* Laptop stand */}
                <div style={{
                  width: "140px", height: "8px", margin: "0 auto",
                  background: "linear-gradient(180deg, #1E293B, #0F172A)",
                  borderRadius: "0 0 8px 8px",
                }} />
              </div>

              {/* ─── PHONE FRAME ─── */}
              <div className="phone-wrap" style={{
                position: "absolute", bottom: "0px", right: "-12px", zIndex: 4,
                animation: "float 7s ease-in-out infinite 1.5s",
              }}>
                <div style={{
                  width: "110px",
                  background: "linear-gradient(160deg, #1E293B, #0F172A)",
                  borderRadius: "22px",
                  padding: "8px 5px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.15)",
                }}>
                  {/* Notch */}
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "5px" }}>
                    <div style={{ width: "28px", height: "5px", borderRadius: "4px", background: "#334155" }} />
                  </div>
                  {/* Phone screen */}
                  <div style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", height: "192px" }}>
                    {/* GMB header */}
                    <div style={{ background: "linear-gradient(135deg, #16A34A, #059669)", padding: "10px 8px 8px" }}>
                      <div style={{ display: "flex", gap: "4px", marginBottom: "5px" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "8px", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>📍</div>
                        <div>
                          <div style={{ width: "55px", height: "5px", borderRadius: "2px", background: "rgba(255,255,255,0.9)", marginBottom: "3px" }} />
                          <div style={{ width: "40px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.5)" }} />
                        </div>
                      </div>
                      {/* Stars */}
                      <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                        <span style={{ fontSize: "9px", color: "#FDE68A" }}>★★★★★</span>
                        <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.8)", fontWeight: 700 }}>4.9</span>
                      </div>
                    </div>
                    {/* GMB body */}
                    <div style={{ padding: "7px 7px" }}>
                      <div style={{ fontSize: "8px", fontWeight: 700, color: "#0F172A", marginBottom: "5px" }}>Google Business Profile</div>
                      {/* Action buttons */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginBottom: "6px" }}>
                        {[["📞","Call"],["🗺️","Route"]].map(([icon, label]) => (
                          <div key={label} style={{ background: "#EFF6FF", borderRadius: "6px", padding: "5px 4px", textAlign: "center" }}>
                            <div style={{ fontSize: "10px" }}>{icon}</div>
                            <div style={{ fontSize: "7px", color: "#2563EB", fontWeight: 600 }}>{label}</div>
                          </div>
                        ))}
                      </div>
                      {/* Reviews */}
                      {[["RK","Excellent service!","#EFF6FF"],["SD","Highly recommend!","#F0FDF4"]].map(([init,text,bg]) => (
                        <div key={init} style={{ display: "flex", gap: "4px", marginBottom: "4px", alignItems: "flex-start" }}>
                          <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6px", fontWeight: 700, color: "#2563EB", flexShrink: 0 }}>{init}</div>
                          <div>
                            <div style={{ fontSize: "7px", color: "#F59E0B", marginBottom: "1px" }}>★★★★★</div>
                            <div style={{ fontSize: "7px", color: "#475569", lineHeight: 1.3 }}>{text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── FLOATING WIDGET 1: SEO Rankings ─── */}
              <div className="seo-card" style={{
                position: "absolute", top: "-16px", left: "-12px", zIndex: 5,
                background: "#fff", borderRadius: "16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04)",
                padding: "14px 16px", width: "190px",
                animation: "float 6s ease-in-out infinite",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>SEO Rankings</span>
                  </div>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "#16A34A", background: "#F0FDF4", padding: "2px 7px", borderRadius: "100px" }}>↑ Live</span>
                </div>
                {[
                  { kw: "Digital marketing Araria", pos: "#1", color: "#16A34A" },
                  { kw: "Website design Bihar", pos: "#2", color: "#2563EB" },
                  { kw: "SEO agency Forbesganj", pos: "#1", color: "#16A34A" },
                ].map(r => (
                  <div key={r.kw} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #F8FAFC" }}>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>{r.kw}</span>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: r.color, minWidth: "24px", textAlign: "right" }}>{r.pos}</span>
                  </div>
                ))}
              </div>

              {/* ─── FLOATING WIDGET 2: Analytics ─── */}
              <div style={{
                position: "absolute", top: "48px", right: "-20px", zIndex: 5,
                background: "#fff", borderRadius: "16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04)",
                padding: "14px 16px", width: "180px",
                animation: "float 8s ease-in-out infinite 0.8s",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>Monthly Leads</span>
                  <span style={{ fontSize: "12px", fontWeight: 800, color: "#16A34A" }}>↑ 180%</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "44px", marginBottom: "8px" }}>
                  {[25, 38, 30, 50, 44, 65, 55, 80, 72, 95, 85, 110].map((h, i) => (
                    <div key={i} style={{
                      flex: 1, borderRadius: "3px 3px 0 0",
                      height: `${h / 1.1}%`,
                      background: i >= 9 ? "linear-gradient(180deg, #2563EB, #4F46E5)" : "#BFDBFE",
                    }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A" }}>40+</div>
                    <div style={{ fontSize: "9px", color: "#94A3B8" }}>Leads/mo</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#4F46E5" }}>5×</div>
                    <div style={{ fontSize: "9px", color: "#94A3B8" }}>ROI</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#16A34A" }}>₹2L+</div>
                    <div style={{ fontSize: "9px", color: "#94A3B8" }}>Revenue</div>
                  </div>
                </div>
              </div>

              {/* ─── FLOATING WIDGET 3: Google Ads ─── */}
              <div style={{
                position: "absolute", bottom: "110px", left: "-20px", zIndex: 5,
                background: "#fff", borderRadius: "16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04)",
                padding: "13px 15px", width: "200px",
                animation: "float 9s ease-in-out infinite 2s",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
                  <div style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>🎯</div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>Google Ads</div>
                    <div style={{ fontSize: "10px", color: "#94A3B8" }}>Campaign Performance</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                  {[
                    { label: "Impressions", value: "24.5K", color: "#4F46E5" },
                    { label: "Clicks", value: "1.2K", color: "#2563EB" },
                    { label: "Conversions", value: "42", color: "#16A34A" },
                  ].map(m => (
                    <div key={m.label} style={{ textAlign: "center", padding: "6px 4px", background: "#F8FAFC", borderRadius: "8px" }}>
                      <div style={{ fontSize: "13px", fontWeight: 800, color: m.color }}>{m.value}</div>
                      <div style={{ fontSize: "8px", color: "#94A3B8", marginTop: "1px" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ─── FLOATING WIDGET 4: Speed Score ─── */}
              <div style={{
                position: "absolute", bottom: "240px", right: "-16px", zIndex: 5,
                background: "#fff", borderRadius: "14px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 28px rgba(0,0,0,0.09)",
                padding: "12px 14px",
                animation: "float 5.5s ease-in-out infinite 3s",
              }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
                  ⚡ PageSpeed Score
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {/* Circle meter */}
                  <div style={{ position: "relative", width: "44px", height: "44px", flexShrink: 0 }}>
                    <svg width="44" height="44" viewBox="0 0 44 44" style={{ transform: "rotate(-90deg)" }}>
                      <circle cx="22" cy="22" r="18" fill="none" stroke="#E2E8F0" strokeWidth="4"/>
                      <circle cx="22" cy="22" r="18" fill="none" stroke="#16A34A" strokeWidth="4"
                        strokeDasharray="113" strokeDashoffset="17" strokeLinecap="round"/>
                    </svg>
                    <div style={{
                      position: "absolute", inset: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 800, color: "#16A34A",
                    }}>95</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#16A34A" }}>Excellent</div>
                    <div style={{ fontSize: "10px", color: "#94A3B8" }}>Performance</div>
                    <div style={{ fontSize: "10px", color: "#94A3B8" }}>Score</div>
                  </div>
                </div>
              </div>

              {/* ─── FLOATING WIDGET 5: New Lead notification ─── */}
              <div style={{
                position: "absolute", bottom: "58px", right: "90px", zIndex: 6,
                background: "#fff", borderRadius: "14px",
                border: "1px solid #BBF7D0",
                boxShadow: "0 8px 28px rgba(22,163,74,0.12), 0 2px 8px rgba(0,0,0,0.04)",
                padding: "11px 14px",
                display: "flex", alignItems: "center", gap: "10px",
                animation: "float 6.5s ease-in-out infinite 1s",
              }}>
                <div style={{
                  width: "34px", height: "34px", borderRadius: "10px",
                  background: "#F0FDF4", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px",
                }}>🔔</div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>New Lead!</div>
                  <div style={{ fontSize: "10px", color: "#16A34A", fontWeight: 600 }}>+1 enquiry via Google</div>
                  <div style={{ fontSize: "9px", color: "#94A3B8" }}>Just now</div>
                </div>
              </div>

            </div>{/* end hero-right */}
          </div>{/* end hero-grid */}

          {/* ── STATS BAR ── */}
          <div className="stats-bar" style={{
            marginTop: "72px",
            display: "grid", gridTemplateColumns: "repeat(4,1fr)",
            gap: "1px", background: "#E2E8F0",
            borderRadius: "20px", overflow: "hidden",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}>
            {[
              { n: "200+",  l: "Businesses Served",  sub: "Across Bihar",          icon: "🏢", color: "#2563EB" },
              { n: "4.9★",  l: "Google Rating",      sub: "200+ verified reviews", icon: "⭐", color: "#D97706" },
              { n: "3×",    l: "Average Lead Growth", sub: "In first 90 days",     icon: "📈", color: "#4F46E5" },
              { n: "5 yrs", l: "In the Market",       sub: "Bihar's trusted agency",icon: "🏆", color: "#16A34A" },
            ].map((s, i) => (
              <div key={i} style={{
                background: "#fff",
                padding: "28px 20px",
                textAlign: "center",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#F8FAFC"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#fff"}>
                <div style={{ fontSize: "26px", marginBottom: "6px" }}>{s.icon}</div>
                <div style={{ fontSize: "28px", fontWeight: 900, color: s.color, letterSpacing: "-0.05em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A", marginTop: "5px" }}>{s.l}</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @media (max-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .hero-right { display: none !important; }
          }
          @media (max-width: 640px) {
            .stats-bar { grid-template-columns: 1fr 1fr !important; }
            .hero-left > div:first-child { font-size: 12px !important; }
          }
          @media (max-width: 480px) {
            .stats-bar { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
