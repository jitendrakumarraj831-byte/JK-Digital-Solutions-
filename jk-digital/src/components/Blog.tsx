"use client";

const posts = [
  {
    category: "SEO",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    title: "Local SEO in 2026 — the complete guide for small businesses",
    excerpt: "7 practical steps to rank on Google Maps that any local business can start using today.",
    readTime: "6 min read",
    date: "12 Jun 2026",
  },
  {
    category: "Google Business Profile",
    color: "#06B6D4",
    bg: "#ECFEFF",
    title: "How to get more 5-star reviews on your GMB profile — the honest way",
    excerpt: "The simple WhatsApp-based process our clients use to collect genuine customer reviews.",
    readTime: "4 min read",
    date: "28 May 2026",
  },
  {
    category: "Google Ads",
    color: "#4F46E5",
    bg: "#EEF2FF",
    title: "Is your Google Ads budget going to waste? Check these 6 mistakes",
    excerpt: "The most common campaign mistakes that inflate cost-per-lead — and how to fix them.",
    readTime: "7 min read",
    date: "15 May 2026",
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ marginBottom: "56px", maxWidth: "520px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Our Blog</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Insights that actually <span className="accent">help</span>.
          </h2>
          <p className="t-body">
            Practical guides on digital marketing — no jargon, just what actually works.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "20px" }}>
          {posts.map((p, i) => (
            <a key={i} href="#contact" className="card" style={{
              display: "block", textDecoration: "none",
              background: "#fff", border: "1px solid #E2E8F0", borderRadius: "20px",
              overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)"; }}>
              <div style={{ padding: "24px 24px 0" }}>
                <span style={{
                  display: "inline-block", padding: "4px 12px", borderRadius: "100px",
                  background: p.bg, color: p.color, fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em",
                }}>{p.category}</span>
              </div>
              <div style={{ padding: "16px 24px 24px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111827", lineHeight: 1.4, marginBottom: "10px", letterSpacing: "-0.01em" }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.65, marginBottom: "18px" }}>{p.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", color: "#6B7280", fontWeight: 500, marginBottom: "14px" }}>
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: p.color, paddingTop: "14px", borderTop: "1px solid #F1F5F9" }}>
                  Read article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
