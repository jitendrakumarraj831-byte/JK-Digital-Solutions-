"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "#FCFCFD",
    }}>

      {/* ── Background ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Subtle dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, #D1D9E4 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.15,
        }} />
        {/* Top-right blue glow — reduced */}
        <div style={{
          position: "absolute", top: "-20%", right: "-12%",
          width: "640px", height: "640px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.042) 0%, transparent 65%)",
        }} />
        {/* Bottom-left subtle glow — reduced */}
        <div style={{
          position: "absolute", bottom: "-10%", left: "-8%",
          width: "440px", height: "440px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,70,229,0.03) 0%, transparent 62%)",
        }} />
      </div>

      {/* ── Content ── */}
      <div className="wrap" style={{ paddingTop: "116px", paddingBottom: "88px", position: "relative", zIndex: 1, width: "100%" }}>
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.05fr",
          gap: "72px",
          alignItems: "center",
        }}>

          {/* ════ LEFT ════ */}
          <div>

            {/* Eyebrow badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 14px", borderRadius: "100px",
              background: "#F0F7FF", border: "1px solid #BFDBFE",
              fontSize: "13px", fontWeight: 600, color: "#2563EB",
              marginBottom: "32px",
              letterSpacing: "-0.01em",
            }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2563EB", display: "inline-block" }} />
              Forbesganj, Bihar · Digital Marketing
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(38px, 5vw, 58px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#111827",
              marginBottom: "22px",
            }}>
              Get More{" "}
              <span style={{ color: "#1D4ED8" }}>Customers</span>
              <br />
              From Google.
            </h1>

            {/* Sub-headline */}
            <p style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "#64748B",
              maxWidth: "450px",
              marginBottom: "36px",
              fontWeight: 400,
            }}>
              We build websites, run Google Ads, and grow your local SEO — so your business shows up first when customers search for you.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "44px" }}>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "15px 28px", borderRadius: "10px",
                background: "#2563EB", color: "#fff",
                fontWeight: 700, fontSize: "15px", textDecoration: "none",
                boxShadow: "0 4px 18px rgba(37,99,235,0.32)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 28px rgba(37,99,235,0.4)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 18px rgba(37,99,235,0.32)"; }}>
                Get Free Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="https://wa.me/918651070831?text=Hello! I want to grow my business online." target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "9px",
                padding: "15px 24px", borderRadius: "10px",
                background: "#fff", color: "#111827",
                fontWeight: 600, fontSize: "15px", textDecoration: "none",
                border: "1.5px solid #E2E8F0",
                transition: "border-color 0.15s, transform 0.15s",
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#16A34A"; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#E2E8F0"; el.style.transform = "translateY(0)"; }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#16A34A">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Social proof strip */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              {/* Avatars */}
              <div style={{ display: "flex" }}>
                {["#2563EB","#4F46E5","#0891B2","#16A34A"].map((c, i) => (
                  <div key={i} style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: c, border: "2px solid #fff",
                    marginLeft: i === 0 ? 0 : "-8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 700, color: "#fff",
                  }}>
                    {["R","S","A","M"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                  {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#F59E0B", fontSize: "14px" }}>★</span>)}
                </div>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0, fontWeight: 500 }}>
                  Helping local businesses <strong style={{ color: "#111827" }}>grow online</strong> across Bihar
                </p>
              </div>
            </div>
          </div>

          {/* ════ RIGHT ════ */}
          <div className="hero-right" style={{ position: "relative" }}>

            {/* ── LAPTOP ── */}
            <div style={{
              position: "relative", zIndex: 2,
              marginLeft: "8px",
              animation: "heroFloat 7s ease-in-out infinite",
            }}>
              {/* Lid */}
              <div style={{
                background: "linear-gradient(145deg, #1E293B 0%, #0F172A 100%)",
                borderRadius: "14px 14px 0 0",
                padding: "10px 10px 0",
                boxShadow: "0 28px 72px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08)",
              }}>
                {/* Webcam */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "6px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#334155" }} />
                </div>
                {/* Screen */}
                <div style={{ background: "#fff", borderRadius: "7px 7px 0 0", overflow: "hidden", height: "272px" }}>
                  {/* Browser chrome */}
                  <div style={{
                    background: "#F1F5F9", padding: "7px 10px",
                    borderBottom: "1px solid #E2E8F0",
                    display: "flex", alignItems: "center", gap: "6px",
                  }}>
                    <div style={{ display: "flex", gap: "4px" }}>
                      {["#F87171","#FCD34D","#4ADE80"].map(c => <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />)}
                    </div>
                    <div style={{
                      flex: 1, background: "#fff", borderRadius: "5px",
                      padding: "4px 10px", border: "1px solid #E2E8F0",
                      fontSize: "11px", color: "#94A3B8",
                      display: "flex", alignItems: "center", gap: "5px",
                    }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      yourbusiness.in
                    </div>
                  </div>
                  {/* Website hero block */}
                  <div style={{ background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)", padding: "20px 16px 16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: "rgba(255,255,255,0.25)" }} />
                        <div style={{ width: "48px", height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.65)" }} />
                      </div>
                      <div style={{ display: "flex", gap: "7px" }}>
                        {[36,28,28].map((w, i) => <div key={i} style={{ width: `${w}px`, height: "4px", borderRadius: "3px", background: "rgba(255,255,255,0.3)" }} />)}
                        <div style={{ width: "32px", height: "16px", borderRadius: "5px", border: "1px solid rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.15)" }} />
                      </div>
                    </div>
                    <div style={{ width: "64%", height: "9px", borderRadius: "4px", background: "rgba(255,255,255,0.9)", marginBottom: "6px" }} />
                    <div style={{ width: "48%", height: "7px", borderRadius: "4px", background: "rgba(255,255,255,0.55)", marginBottom: "14px" }} />
                    <div style={{ display: "flex", gap: "7px" }}>
                      <div style={{ width: "58px", height: "18px", borderRadius: "5px", background: "#fff" }} />
                      <div style={{ width: "46px", height: "18px", borderRadius: "5px", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.4)" }} />
                    </div>
                  </div>
                  {/* Service cards row */}
                  <div style={{ padding: "12px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "7px" }}>
                    {[["#EFF6FF","#DBEAFE","#BFDBFE"],["#F0FDF4","#DCFCE7","#BBF7D0"],["#FEF3C7","#FDE68A","#FCD34D"]].map(([bg, border, icon], i) => (
                      <div key={i} style={{ background: bg, borderRadius: "8px", padding: "9px 7px" }}>
                        <div style={{ width: "18px", height: "18px", borderRadius: "5px", background: icon, marginBottom: "5px" }} />
                        <div style={{ width: "100%", height: "4px", borderRadius: "2px", background: border, marginBottom: "3px" }} />
                        <div style={{ width: "65%", height: "3px", borderRadius: "2px", background: "#E2E8F0" }} />
                      </div>
                    ))}
                  </div>
                  {/* Mini stats bar */}
                  <div style={{ padding: "0 12px", display: "flex", gap: "6px" }}>
                    {[["#2563EB","82%"],["#16A34A","66%"],["#4F46E5","91%"]].map(([c, w], i) => (
                      <div key={i} style={{ flex: 1, background: "#F8FAFC", borderRadius: "5px", padding: "6px 7px" }}>
                        <div style={{ width: w, height: "3px", background: c, borderRadius: "2px", marginBottom: "3px" }} />
                        <div style={{ width: "55%", height: "3px", background: "#E2E8F0", borderRadius: "2px" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div style={{
                background: "linear-gradient(180deg, #334155 0%, #1E293B 100%)",
                height: "14px", borderRadius: "0 0 3px 3px",
              }}>
                <div style={{
                  margin: "0 auto", width: "56px", height: "4px",
                  background: "#475569", borderRadius: "0 0 5px 5px",
                }} />
              </div>
              <div style={{
                width: "130px", height: "7px", margin: "0 auto",
                background: "#0F172A", borderRadius: "0 0 8px 8px",
              }} />
            </div>

            {/* ── PHONE ── */}
            <div style={{
              position: "absolute", bottom: "2px", right: "-8px", zIndex: 4,
              animation: "heroFloat 8.5s ease-in-out infinite 2s",
            }}>
              <div style={{
                width: "106px",
                background: "linear-gradient(155deg, #1E293B, #0F172A)",
                borderRadius: "22px",
                padding: "8px 5px 10px",
                boxShadow: "0 20px 56px rgba(0,0,0,0.22), 0 4px 14px rgba(0,0,0,0.12)",
              }}>
                {/* Notch */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "6px" }}>
                  <div style={{ width: "26px", height: "5px", borderRadius: "4px", background: "#334155" }} />
                </div>
                {/* Screen */}
                <div style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", height: "190px" }}>
                  {/* GMB header */}
                  <div style={{ background: "linear-gradient(135deg, #15803D, #16A34A)", padding: "10px 8px 8px" }}>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center", marginBottom: "5px" }}>
                      <div style={{ fontSize: "12px" }}>📍</div>
                      <div>
                        <div style={{ width: "50px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.9)", marginBottom: "3px" }} />
                        <div style={{ width: "38px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.5)" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                      <span style={{ fontSize: "10px", color: "#FDE68A", letterSpacing: "1px" }}>★★★★★</span>
                      <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>4.9</span>
                    </div>
                  </div>
                  {/* GMB body */}
                  <div style={{ padding: "8px 7px" }}>
                    <div style={{ fontSize: "8px", fontWeight: 800, color: "#0F172A", marginBottom: "6px", letterSpacing: "-0.02em" }}>Google Business Profile</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginBottom: "7px" }}>
                      {[["📞","Call","#EFF6FF","#2563EB"],["🗺️","Route","#F0FDF4","#16A34A"]].map(([icon, label, bg, color]) => (
                        <div key={label as string} style={{ background: bg as string, borderRadius: "7px", padding: "5px 4px", textAlign: "center" }}>
                          <div style={{ fontSize: "11px", marginBottom: "2px" }}>{icon}</div>
                          <div style={{ fontSize: "8px", color: color as string, fontWeight: 700 }}>{label}</div>
                        </div>
                      ))}
                    </div>
                    {[
                      ["RS", "Excellent service, got 3x more leads!", "#EFF6FF"],
                      ["AP", "Best digital agency in Bihar.", "#F0FDF4"],
                    ].map(([init, text, bg]) => (
                      <div key={init} style={{ display: "flex", gap: "4px", marginBottom: "5px" }}>
                        <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: bg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6px", fontWeight: 800, color: "#2563EB" }}>{init}</div>
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

            {/* ── FLOATING CARD 1: Analytics ── */}
            <div style={{
              position: "absolute", top: "-20px", left: "-20px", zIndex: 5,
              background: "#fff", borderRadius: "16px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 12px 40px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.04)",
              padding: "16px 18px", width: "196px",
              animation: "heroFloat 6s ease-in-out infinite 0.5s",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#111827" }}>Monthly Leads</span>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#16A34A", background: "#F0FDF4", padding: "2px 8px", borderRadius: "100px" }}>↑ 180%</span>
              </div>
              {/* Bar chart */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "44px", marginBottom: "10px" }}>
                {[22, 36, 28, 48, 42, 60, 52, 76, 68, 92, 82, 110].map((h, i) => (
                  <div key={i} style={{
                    flex: 1, borderRadius: "3px 3px 0 0",
                    height: `${h / 1.1}%`,
                    background: i >= 9 ? "#2563EB" : "#DBEAFE",
                  }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {[["40+","Leads/mo","#111827"],["5×","ROI","#4F46E5"],["₹2L+","Revenue","#16A34A"]].map(([v, l, c]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: c }}>{v}</div>
                    <div style={{ fontSize: "9px", color: "#94A3B8", marginTop: "1px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── FLOATING CARD 2: Google Rating ── */}
            <div style={{
              position: "absolute", bottom: "200px", right: "-18px", zIndex: 5,
              background: "#fff", borderRadius: "16px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 12px 40px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.04)",
              padding: "14px 16px", width: "182px",
              animation: "heroFloat 9s ease-in-out infinite 1.5s",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "#FEF3C7",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                }}>⭐</div>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>4.9 / 5</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "1px" }}>Google Rating</div>
                </div>
              </div>
              {/* Star row */}
              <div style={{ display: "flex", gap: "2px", marginBottom: "8px" }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: "14px", color: "#F59E0B" }}>★</span>)}
              </div>
              {/* Progress bars */}
              {[[5,"#16A34A","88%"],[4,"#84CC16","8%"],[3,"#F59E0B","4%"]].map(([star, color, pct]) => (
                <div key={star as number} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <span style={{ fontSize: "10px", color: "#94A3B8", width: "10px", textAlign: "right" }}>{star}</span>
                  <div style={{ flex: 1, height: "5px", background: "#F1F5F9", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ width: pct as string, height: "100%", background: color as string, borderRadius: "3px" }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: "10px", color: "#94A3B8", margin: "6px 0 0", textAlign: "right" }}>200+ verified reviews</p>
            </div>

          </div>{/* end hero-right */}
        </div>{/* end hero-grid */}

        {/* ── STATS BAR ── */}
        <div className="stats-bar" style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderRadius: "16px",
          border: "1px solid #E2E8F0",
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
        }}>
          {[
            { n: "Local",   l: "Bihar Focused",      i: "📍" },
            { n: "Free",   l: "First Audit",        i: "🎯" },
            { n: "48hr",   l: "Ads Go Live",        i: "📈" },
            { n: "0",      l: "Lock-in Contract",   i: "✅" },
          ].map((s, idx) => (
            <div key={idx} style={{
              padding: "26px 16px",
              textAlign: "center",
              borderRight: idx < 3 ? "1px solid #E2E8F0" : "none",
              background: "#fff",
            }}>
              <div style={{ fontSize: "22px", marginBottom: "6px" }}>{s.i}</div>
              <div style={{ fontSize: "26px", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: "5px", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        @media (max-width: 1024px) {
          .hero-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-right { display: none !important; }
        }
        @media (max-width: 600px) {
          .stats-bar { grid-template-columns: 1fr 1fr !important; }
          .stats-bar > div { border-right: none !important; border-bottom: 1px solid #E2E8F0; }
        }
      `}</style>
    </section>
  );
}
