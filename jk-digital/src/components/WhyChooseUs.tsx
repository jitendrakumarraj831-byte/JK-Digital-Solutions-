"use client";

const stats = [
  { n: "4.9★", l: "Average rating",     icon: "⭐" },
  { n: "200+", l: "Businesses served",  icon: "🤝" },
  { n: "3×",   l: "Average lead growth", icon: "📈" },
  { n: "24hr", l: "Support response",   icon: "💬" },
];

const reasons = [
  {
    iconBg: "#EFF6FF", iconColor: "#1D4ED8",
    title: "Fast Delivery",
    desc: "Websites launch in as little as 15 days, ad campaigns go live in 48 hours. We work at the pace your business needs.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    iconBg: "#F0FDF4", iconColor: "#16A34A",
    title: "Affordable Pricing",
    desc: "Premium quality without agency mark-ups. Transparent packages built for growing businesses, not big-brand budgets.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  },
  {
    iconBg: "#ECFEFF", iconColor: "#06B6D4",
    title: "Result Driven",
    desc: "We measure success in leads, calls, and revenue — not vanity metrics. Every decision is tied to a business outcome.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    iconBg: "#EEF2FF", iconColor: "#4F46E5",
    title: "Mobile First",
    desc: "Over 70% of your customers browse on a phone. Every site and campaign is designed mobile-first, then scaled up.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  },
  {
    iconBg: "#FFFBEB", iconColor: "#D97706",
    title: "SEO Friendly",
    desc: "Every website and page we ship is built on clean, search-optimised foundations — so you rank from day one.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    iconBg: "#FDF4FF", iconColor: "#9333EA",
    title: "Dedicated Support",
    desc: "A real person on WhatsApp, not a ticketing queue. Questions get answered the same day, every day.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    iconBg: "#F0FDF4", iconColor: "#16A34A",
    title: "Experienced Team",
    desc: "Designers, developers and marketers who've shipped for clinics, schools, restaurants, hotels and retailers alike.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  },
  {
    iconBg: "#EFF6FF", iconColor: "#1D4ED8",
    title: "Latest Technologies",
    desc: "Modern frameworks, fast hosting, and current best practice — no outdated templates or bloated page builders.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ marginBottom: "72px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Why Choose Us</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Built for businesses that want <span className="accent">real</span> growth.
          </h2>
          <p className="t-body">
            We combine premium design with measurable marketing — so your investment shows up as customers, not just clicks.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: "16px", marginBottom: "72px" }}>
          {stats.map(s => (
            <div key={s.n} style={{
              padding: "28px 20px", borderRadius: "20px", textAlign: "center",
              background: "#F5F7FA", border: "1px solid #E2E8F0",
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{s.icon}</div>
              <div style={{ fontSize: "clamp(28px,3.5vw,36px)", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "13px", color: "#94A3B8", marginTop: "6px", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "16px" }}>
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
              <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
