"use client";

const stats = [
  { n: "200+", l: "Businesses served" },
  { n: "4.9",  l: "Google rating" },
  { n: "3×",   l: "Average lead growth" },
  { n: "5 yr", l: "In the market" },
];

const reasons = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: "Local market expertise",
    desc: "We understand Bihar's buyers, local competition, and regional search behaviour — not just digital theory.",
    g: "linear-gradient(135deg,#4f46e5,#818cf8)", border: "rgba(129,140,248,0.22)",
    bg: "linear-gradient(145deg,rgba(79,70,229,0.15),rgba(99,102,241,0.08))",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Results guaranteed",
    desc: "We measure success in leads and revenue — not impressions and clicks. 30-day visible improvement or free extension.",
    g: "linear-gradient(135deg,#0d9488,#34d399)", border: "rgba(52,211,153,0.22)",
    bg: "linear-gradient(145deg,rgba(13,148,136,0.15),rgba(6,182,212,0.08))",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    title: "Direct WhatsApp access",
    desc: "You talk to us, not a ticketing system. Dedicated manager, WhatsApp-first communication, no waiting.",
    g: "linear-gradient(135deg,#1d4ed8,#38bdf8)", border: "rgba(96,165,250,0.22)",
    bg: "linear-gradient(145deg,rgba(29,78,216,0.15),rgba(56,189,248,0.08))",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    title: "Transparent pricing",
    desc: "No lock-in contracts. No surprise invoices. You see exactly where every rupee goes — every month.",
    g: "linear-gradient(135deg,#b45309,#fbbf24)", border: "rgba(251,191,36,0.22)",
    bg: "linear-gradient(145deg,rgba(180,83,9,0.15),rgba(251,191,36,0.08))",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Data-driven decisions",
    desc: "Every campaign decision is backed by data. Monthly reports with plain-language explanations — no jargon.",
    g: "linear-gradient(135deg,#7c3aed,#a855f7)", border: "rgba(167,139,250,0.22)",
    bg: "linear-gradient(145deg,rgba(124,58,237,0.15),rgba(168,85,247,0.08))",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: "Speed that matches yours",
    desc: "Website in 30 days. Ads live in 48 hours. We work at the pace your business demands.",
    g: "linear-gradient(135deg,#0e7490,#22d3ee)", border: "rgba(34,211,238,0.22)",
    bg: "linear-gradient(145deg,rgba(14,116,144,0.15),rgba(34,211,238,0.08))",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" style={{
      padding: "128px 0",
      background: "linear-gradient(180deg, #09001e 0%, #060014 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", bottom: "5%", left: "-18%",
        width: "440px", height: "440px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "16px" }}>Why us</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Built for Bihar's <span className="accent">market</span>.
          </h2>
          <p className="t-body" style={{ maxWidth: "400px" }}>
            We know your customers, your competitors, and your city.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))", gap: "8px", marginBottom: "64px" }}>
          {stats.map(s => (
            <div key={s.n} style={{
              padding: "24px 20px", borderRadius: "14px", textAlign: "center",
              background: "rgba(124,58,237,0.07)", border: "1px solid rgba(167,139,250,0.12)",
            }}>
              <div style={{ fontSize: "clamp(28px,3.5vw,36px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "rgba(230,220,255,0.42)", marginTop: "6px", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))", gap: "12px" }}>
          {reasons.map(r => (
            <div key={r.title} className="card" style={{
              padding: "24px", background: r.bg, border: `1px solid ${r.border}`,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${r.border}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "11px",
                background: r.g, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
              }}>{r.icon}</div>
              <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", letterSpacing: "-0.01em", marginBottom: "8px" }}>{r.title}</h3>
              <p className="t-small" style={{ lineHeight: 1.65 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
