const industries = [
  { icon: "🏥", label: "Hospitals" },
  { icon: "🍽️", label: "Restaurants" },
  { icon: "🎓", label: "Coaching Centres" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "💇", label: "Beauty & Salon" },
  { icon: "🛒", label: "Retail Shops" },
  { icon: "🏨", label: "Hotels" },
  { icon: "⚙️", label: "Service Providers" },
  { icon: "🏗️", label: "Builders" },
  { icon: "📱", label: "Electronics" },
  { icon: "🚗", label: "Auto Dealers" },
  { icon: "📚", label: "Schools" },
  { icon: "💊", label: "Pharmacies" },
  { icon: "🎂", label: "Bakeries" },
];

export default function TrustedBy() {
  const doubled = [...industries, ...industries];
  return (
    <section style={{ background: "#030712", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "36px 0", overflow: "hidden" }}>
      <p style={{ textAlign: "center", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>
        इन Businesses को हम Grow करते हैं
      </p>
      <div style={{ display: "flex", gap: "10px", animation: "marquee 32s linear infinite", width: "max-content", paddingLeft: "10px" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "9px 18px", borderRadius: "100px",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.55)", fontSize: "13px", fontWeight: 600,
            whiteSpace: "nowrap", transition: "all 0.2s"
          }}>
            <span style={{ fontSize: "15px" }}>{item.icon}</span> {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
