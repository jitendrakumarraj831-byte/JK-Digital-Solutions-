const industries = [
  { icon: "🏥", label: "Hospitals & Clinics" },
  { icon: "🍽️", label: "Restaurants & Dhabas" },
  { icon: "🎓", label: "Coaching Centres" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "💇", label: "Beauty & Salons" },
  { icon: "🔧", label: "Hardware Shops" },
  { icon: "🏨", label: "Hotels & Lodges" },
  { icon: "⚡", label: "Service Providers" },
  { icon: "🛒", label: "E-commerce Stores" },
  { icon: "🏍️", label: "Auto Dealers" },
];

const doubled = [...industries, ...industries];

export default function TrustedBy() {
  return (
    <div style={{
      background: "linear-gradient(180deg, #0a0118 0%, #0d0525 100%)",
      padding: "0",
      borderTop: "1px solid rgba(167,139,250,0.08)",
      borderBottom: "1px solid rgba(167,139,250,0.08)",
      overflow: "hidden",
    }}>
      {/* Top gradient line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(59,130,246,0.5), rgba(6,182,212,0.3), transparent)" }} />

      <div style={{ padding: "28px 0" }}>
        {/* Label */}
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(196,181,253,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            इन businesses को मिल रहा है results →
          </span>
        </div>

        {/* Marquee */}
        <div className="marquee-wrap" style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <div className="marquee-track" style={{ display: "flex", gap: "12px", width: "max-content" }}>
            {doubled.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "10px 20px", borderRadius: "50px", flexShrink: 0,
                background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(99,102,241,0.08))",
                border: "1px solid rgba(167,139,250,0.15)",
              }}>
                <span style={{ fontSize: "20px" }}>{item.icon}</span>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(228,220,255,0.65)", whiteSpace: "nowrap" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(59,130,246,0.5), rgba(6,182,212,0.3), transparent)" }} />
    </div>
  );
}
