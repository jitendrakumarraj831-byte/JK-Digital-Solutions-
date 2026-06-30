const industries = [
  { icon: "🏥", label: "Hospitals & Clinics" },
  { icon: "🍽️", label: "Restaurants & Dhabas" },
  { icon: "🎓", label: "Coaching Centres" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "💇", label: "Beauty & Salons" },
  { icon: "🛒", label: "Retail Shops" },
  { icon: "🏨", label: "Hotels" },
  { icon: "⚙️", label: "Service Providers" },
  { icon: "🏗️", label: "Builders" },
  { icon: "📱", label: "Electronics" },
  { icon: "🚗", label: "Auto Dealers" },
  { icon: "📚", label: "Schools" },
  { icon: "💊", label: "Pharmacies" },
  { icon: "🎂", label: "Bakeries" },
  { icon: "👗", label: "Fashion & Clothing" },
  { icon: "🔧", label: "Hardware Stores" },
];

export default function TrustedBy() {
  const doubled = [...industries, ...industries];
  return (
    <section style={{
      background: "#080d1f",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "40px 0",
      overflow: "hidden",
    }}>
      <p style={{
        textAlign: "center",
        fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.18em", color: "rgba(255,255,255,0.22)",
        marginBottom: "22px",
      }}>
        इन Industries में हम काम करते हैं
      </p>

      <div className="marquee-wrap" style={{ overflow: "hidden" }}>
        <div className="marquee-track" style={{ display: "flex", gap: "10px", width: "max-content" }}>
          {doubled.map((item, i) => (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "9px 20px", borderRadius: "100px",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.52)", fontSize: "13px", fontWeight: 600,
              whiteSpace: "nowrap", userSelect: "none",
            }}>
              <span style={{ fontSize: "15px" }}>{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
