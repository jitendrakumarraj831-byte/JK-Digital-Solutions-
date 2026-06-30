"use client";

const stats = [
  { n: "200+", l: "Businesses served",    icon: "🏢" },
  { n: "4.9",  l: "Google rating",        icon: "⭐" },
  { n: "3×",   l: "Average lead growth",  icon: "📈" },
  { n: "5 yr", l: "In the market",        icon: "🏆" },
];

const reasons = [
  {
    iconBg: "#EFF6FF", iconColor: "#2563EB",
    title: "Local Market Expertise",
    desc: "We understand Bihar's buyers, local competition, and regional search behaviour — not just digital theory.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    iconBg: "#F0FDF4", iconColor: "#16A34A",
    title: "Results Guaranteed",
    desc: "We measure success in leads and revenue — not impressions. 30-day visible improvement or free extension.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    iconBg: "#ECFEFF", iconColor: "#0891B2",
    title: "Direct WhatsApp Access",
    desc: "You talk to us, not a ticketing system. Dedicated manager, WhatsApp-first, no waiting.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    iconBg: "#FFFBEB", iconColor: "#D97706",
    title: "Transparent Pricing",
    desc: "No lock-in contracts. No surprise invoices. You see exactly where every rupee goes — every month.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  },
  {
    iconBg: "#EEF2FF", iconColor: "#4F46E5",
    title: "Data-Driven Decisions",
    desc: "Every campaign decision is backed by data. Monthly reports in plain language — no jargon.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    iconBg: "#FDF4FF", iconColor: "#9333EA",
    title: "Speed That Matches Yours",
    desc: "Website in 30 days. Ads live in 48 hours. We work at the pace your business demands.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div className="wrap">
        <div style={{ marginBottom: "72px", maxWidth: "520px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Why us</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Built for Bihar's <span className="accent">market</span>.
          </h2>
          <p className="t-body">
            We know your customers, your competitors, and your city.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: "16px", marginBottom: "72px" }}>
          {stats.map(s => (
            <div key={s.n} style={{
              padding: "28px 20px", borderRadius: "20px", textAlign: "center",
              background: "#F8FAFC", border: "1px solid #E2E8F0",
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{s.icon}</div>
              <div style={{ fontSize: "clamp(28px,3.5vw,36px)", fontWeight: 800, color: "#111827", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "13px", color: "#94A3B8", marginTop: "6px", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
          {reasons.map(r => (
            <div key={r.title} className="card" style={{
              padding: "28px", background: "#fff",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)"; }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: r.iconBg, color: r.iconColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
              }}>{r.icon}</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", marginBottom: "8px" }}>{r.title}</h3>
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
