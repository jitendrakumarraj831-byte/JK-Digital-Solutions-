"use client";

const stats = [
  { n: "200+", label: "Clients Served", g: "linear-gradient(135deg,#a78bfa,#818cf8)", b: "rgba(167,139,250,0.25)" },
  { n: "4.9★", label: "Google Rating",  g: "linear-gradient(135deg,#fde68a,#f59e0b)", b: "rgba(251,191,36,0.25)" },
  { n: "3×",   label: "Avg Lead Growth",g: "linear-gradient(135deg,#67e8f9,#22d3ee)", b: "rgba(34,211,238,0.25)" },
  { n: "5yr",  label: "Experience",     g: "linear-gradient(135deg,#86efac,#4ade80)", b: "rgba(74,222,128,0.22)" },
];

const reasons = [
  {
    g: "linear-gradient(145deg, rgba(124,58,237,0.22), rgba(99,102,241,0.14))",
    border: "rgba(167,139,250,0.28)",
    iconG: "linear-gradient(135deg, #7c3aed, #818cf8)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: "Local Market Experts",
    desc: "Bihar और Forbesganj के local market को deeply समझते हैं। आपके competitors की हर strategy हमें पता है।",
  },
  {
    g: "linear-gradient(145deg, rgba(37,99,235,0.22), rgba(6,182,212,0.14))",
    border: "rgba(96,165,250,0.28)",
    iconG: "linear-gradient(135deg, #2563eb, #06b6d4)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Results Guaranteed",
    desc: "हम सिर्फ services नहीं, results देते हैं। 30 दिन में measurable improvement — वरना free extension।",
  },
  {
    g: "linear-gradient(145deg, rgba(13,148,136,0.22), rgba(16,185,129,0.14))",
    border: "rgba(52,211,153,0.28)",
    iconG: "linear-gradient(135deg, #0d9488, #34d399)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    title: "Dedicated Support",
    desc: "आपके लिए dedicated account manager। WhatsApp पर directly connect — कोई waiting नहीं, कोई queue नहीं।",
  },
  {
    g: "linear-gradient(145deg, rgba(245,158,11,0.2), rgba(251,191,36,0.12))",
    border: "rgba(251,191,36,0.28)",
    iconG: "linear-gradient(135deg, #d97706, #fbbf24)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    title: "Affordable Pricing",
    desc: "Premium quality, pocket-friendly rates। No hidden charges, no surprise bills। Clear pricing upfront।",
  },
  {
    g: "linear-gradient(145deg, rgba(236,72,153,0.2), rgba(168,85,247,0.14))",
    border: "rgba(249,168,212,0.25)",
    iconG: "linear-gradient(135deg, #db2777, #a855f7)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Data-Driven Approach",
    desc: "हर decision data पर based। Monthly detailed reports — exactly जानें आपका पैसा कहाँ और कैसे काम कर रहा है।",
  },
  {
    g: "linear-gradient(145deg, rgba(6,182,212,0.2), rgba(59,130,246,0.14))",
    border: "rgba(34,211,238,0.25)",
    iconG: "linear-gradient(135deg, #0891b2, #3b82f6)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: "Fast Turnaround",
    desc: "30 minutes में reply, 15 days में website delivery। Speed हमारी USP है — आपका time हम waste नहीं करते।",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" style={{
      padding: "112px 0",
      background: "linear-gradient(180deg, #060018 0%, #0a041e 50%, #080025 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: "10%", left: "-15%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>Why Choose Us</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px",
          }}>
            हम क्यों हैं <span className="grad-text-warm">अलग?</span>
          </h2>
          <p style={{ color: "rgba(228,220,255,0.5)", fontSize: "17px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Bihar के हजारों businesses ने हम पर trust किया — यहाँ है reason।
          </p>
        </div>

        {/* Stats strip */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))",
          gap: "12px", marginBottom: "60px",
        }}>
          {stats.map(s => (
            <div key={s.n} style={{
              padding: "28px 20px", borderRadius: "20px", textAlign: "center",
              background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              border: `1px solid ${s.b}`,
            }}>
              <p className="font-display" style={{
                fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em",
                background: s.g, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{s.n}</p>
              <p style={{ fontSize: "12px", color: "rgba(228,220,255,0.5)", fontWeight: 600, marginTop: "6px" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px),1fr))", gap: "16px" }}>
          {reasons.map(r => (
            <div key={r.title} style={{
              padding: "28px", borderRadius: "22px",
              background: r.g, border: `1px solid ${r.border}`,
              transition: "all 0.28s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 50px ${r.border}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              <div style={{
                width: "50px", height: "50px", borderRadius: "14px",
                background: r.iconG, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "18px",
              }}>{r.icon}</div>
              <h3 className="font-display" style={{ fontSize: "17px", fontWeight: 800, color: "#fff", marginBottom: "10px", letterSpacing: "-0.01em" }}>{r.title}</h3>
              <p style={{ color: "rgba(228,220,255,0.58)", fontSize: "14px", lineHeight: 1.75 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
