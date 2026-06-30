const industries = [
  "🏥 Hospitals & Clinics","🍽️ Restaurants","🎓 Coaching Centres","🏠 Real Estate",
  "💇 Beauty & Salon","🛒 Retail Shops","🏨 Hotels","⚙️ Service Providers",
  "🏗️ Builders","📱 Electronics","🚗 Auto Dealers","📚 Schools",
];

export default function TrustedBy() {
  const doubled = [...industries, ...industries];
  return (
    <section style={{ background: "#f9fafb", borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6", padding: "36px 0", overflow: "hidden" }}>
      <p style={{ textAlign: "center", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", marginBottom: "20px", padding: "0 24px" }}>
        इन Businesses को हम Google पर Grow करते हैं
      </p>
      <div style={{ display: "flex", gap: "12px", animation: "marquee 30s linear infinite", width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "100px", background: "#fff", border: "1px solid #e5e7eb", color: "#374151", fontSize: "13px", fontWeight: 600, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", whiteSpace: "nowrap" }}>
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
