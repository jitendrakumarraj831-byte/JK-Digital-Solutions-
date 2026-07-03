"use client";

const industries = [
  {
    name: "Schools",
    problem: "Fill admission seats before the season closes.",
    color: "#1D4ED8", bg: "#EFF6FF",
    icon: <><path d="M22 10L12 4 2 10l10 6 10-6z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></>,
  },
  {
    name: "Hospitals & Clinics",
    problem: "Be the first result when patients search nearby.",
    color: "#06B6D4", bg: "#ECFEFF",
    icon: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/>,
  },
  {
    name: "Restaurants",
    problem: "Turn Google searches into table bookings and orders.",
    color: "#D97706", bg: "#FFFBEB",
    icon: <><path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></>,
  },
  {
    name: "Real Estate",
    problem: "Turn property listings into qualified buyer enquiries.",
    color: "#16A34A", bg: "#F0FDF4",
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  },
  {
    name: "Interior Designers",
    problem: "Showcase a portfolio that converts browsers into clients.",
    color: "#9333EA", bg: "#FDF4FF",
    icon: <><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></>,
  },
  {
    name: "Coaching Institutes",
    problem: "Replace referral-only admissions with a steady enquiry pipeline.",
    color: "#4F46E5", bg: "#EEF2FF",
    icon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></>,
  },
  {
    name: "Hotels",
    problem: "Win direct bookings instead of paying OTA commissions.",
    color: "#DB2777", bg: "#FDF2F8",
    icon: <><path d="M2 4v16"/><path d="M2 8h18a2 2 0 012 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></>,
  },
  {
    name: "Retail Shops",
    problem: "Get found by local customers searching Google Maps.",
    color: "#EA580C", bg: "#FFF7ED",
    icon: <><path d="M6 2l1.5 5h9L18 2"/><path d="M3 7h18l-1.5 13a2 2 0 01-2 1.8H6.5a2 2 0 01-2-1.8L3 7z"/><path d="M9 11v3"/><path d="M15 11v3"/></>,
  },
  {
    name: "Startups",
    problem: "Launch a credible online presence before your first pitch.",
    color: "#059669", bg: "#ECFDF5",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  },
];

export default function Industries() {
  return (
    <section id="industries" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Industries We Serve</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Built for how <span className="accent">your</span> customers actually search.
          </h2>
          <p className="t-body" style={{ maxWidth: "500px", margin: "0 auto" }}>
            Every industry searches, books, and buys differently. Our strategy is built around yours — not a generic template.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
          {industries.map(ind => (
            <div key={ind.name} className="card" style={{
              display: "flex", alignItems: "flex-start", gap: "14px",
              padding: "22px", background: "#fff",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)"; }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "12px", flexShrink: 0,
                background: ind.bg, color: ind.color,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ind.icon}</svg>
              </div>
              <div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", marginBottom: "4px", letterSpacing: "-0.01em" }}>{ind.name}</h3>
                <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.55 }}>{ind.problem}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#4B5563" }}>
            Don&apos;t see your industry? {" "}
            <a href="#contact" style={{ color: "#1D4ED8", fontWeight: 600, textDecoration: "none" }}>We&apos;ve probably still got you covered — let&apos;s talk →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
