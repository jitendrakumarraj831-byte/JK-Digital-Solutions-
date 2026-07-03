"use client";

const categories = [
  {
    title: "Websites & Development",
    color: "#1D4ED8", bg: "#EFF6FF",
    tools: [
      { name: "Next.js / React", icon: "N" },
      { name: "WordPress", icon: "W" },
      { name: "Shopify", icon: "S" },
      { name: "Webflow", icon: "Wf" },
    ],
  },
  {
    title: "Marketing & Ads",
    color: "#16A34A", bg: "#F0FDF4",
    tools: [
      { name: "Google Ads", icon: "G" },
      { name: "Meta Ads", icon: "f" },
      { name: "Google Analytics", icon: "GA" },
      { name: "Search Console", icon: "SC" },
    ],
  },
  {
    title: "Design & Branding",
    color: "#9333EA", bg: "#FDF4FF",
    tools: [
      { name: "Figma", icon: "Fg" },
      { name: "Canva", icon: "Cv" },
      { name: "Adobe Suite", icon: "Ai" },
      { name: "Photoshop", icon: "Ps" },
    ],
  },
  {
    title: "Automation & CRM",
    color: "#06B6D4", bg: "#ECFEFF",
    tools: [
      { name: "WhatsApp Business API", icon: "WA" },
      { name: "Google Business Profile", icon: "GMB" },
      { name: "Zapier", icon: "Z" },
      { name: "Mailchimp", icon: "Mc" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Our Technology Stack</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Modern tools. <span className="accent">No shortcuts.</span>
          </h2>
          <p className="t-body" style={{ maxWidth: "480px", margin: "0 auto" }}>
            No outdated templates or bloated plugins — every project runs on current, industry-standard platforms.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px" }}>
          {categories.map(cat => (
            <div key={cat.title} style={{
              background: "#fff", border: "1px solid #E2E8F0", borderRadius: "20px",
              padding: "24px", boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
            }}>
              <p style={{
                fontSize: "11px", fontWeight: 700, color: cat.color,
                textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "18px",
              }}>{cat.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {cat.tools.map(t => (
                  <div key={t.name} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "9px", flexShrink: 0,
                      background: cat.bg, color: cat.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "10px", fontWeight: 900, letterSpacing: "-0.03em",
                    }} aria-hidden="true">{t.icon}</div>
                    <span style={{ fontSize: "13.5px", fontWeight: 500, color: "#374151" }}>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
