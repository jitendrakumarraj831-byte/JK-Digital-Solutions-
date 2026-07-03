"use client";

const posts = [
  {
    category: "Google SEO",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    title: "2026 में Local SEO कैसे करें — छोटे businesses के लिए complete guide",
    excerpt: "Google Maps पर rank करने के 7 practical steps, जो हर local business आज ही apply कर सकता है।",
    readTime: "6 min read",
    date: "12 Jun 2026",
  },
  {
    category: "Google Business Profile",
    color: "#06B6D4",
    bg: "#ECFEFF",
    title: "GMB पर 5-star reviews कैसे बढ़ाएं — बिना paid reviews के",
    excerpt: "Genuine customer reviews collect करने के आसान WhatsApp-based workflow जो हमारे clients इस्तेमाल करते हैं।",
    readTime: "4 min read",
    date: "28 May 2026",
  },
  {
    category: "Google Ads",
    color: "#4F46E5",
    bg: "#EEF2FF",
    title: "Google Ads का budget waste हो रहा है? ये 6 गलतियां check करें",
    excerpt: "सबसे common campaign mistakes जो cost-per-lead बढ़ाती हैं — और उन्हें कैसे ठीक करें।",
    readTime: "7 min read",
    date: "15 May 2026",
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ marginBottom: "56px", maxWidth: "520px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>हमारा ब्लॉग</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Insights जो <span className="accent">काम</span> आएं।
          </h2>
          <p className="t-body">
            Digital marketing पर practical guides — jargon नहीं, सिर्फ वो जो actually काम करता है।
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", color: "#4B5563", fontWeight: 500 }}>
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
