import { Globe, TrendingUp, MapPin, Megaphone, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, color: "#eff6ff", iconColor: "#2563eb", badge: "Most Popular",
    title: "Website Development", sub: "आपकी 24/7 Online Shop",
    desc: "Fast, beautiful और mobile-friendly website जो Google पर rank करे और visitors को customers में convert करे।",
    points: ["Mobile-First Design", "SEO-Ready Code", "30 Days Delivery", "1 Year Maintenance"] },
  { icon: TrendingUp, color: "#f5f3ff", iconColor: "#7c3aed", badge: "Best ROI",
    title: "Google SEO", sub: "बिना Ads के Free Traffic",
    desc: "Organic search results में top पर आएं। एक बार rank होने के बाद free में customers आते रहते हैं।",
    points: ["Local + National SEO", "Keyword Research", "Monthly Reports", "Competitor Analysis"] },
  { icon: MapPin, color: "#ecfdf5", iconColor: "#059669", badge: "Get More Calls",
    title: "Google Business Profile", sub: "Google Maps पर Top पर",
    desc: "जब कोई nearby service search करे तो सबसे पहले आपका नाम और number दिखे।",
    points: ["Profile Complete Setup", "Photos Optimization", "Review Management", "Weekly Posts"] },
  { icon: Megaphone, color: "#fff7ed", iconColor: "#ea580c", badge: "Instant Results",
    title: "Google Ads", sub: "आज Ads, आज Customers",
    desc: "Targeted campaigns जो सिर्फ उन्हें दिखते हैं जो पहले से आपकी service ढूंढ रहे हैं।",
    points: ["Search & Display Ads", "Daily Optimization", "Conversion Tracking", "₹5K Budget से शुरू"] },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#fff", padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2563eb", marginBottom: "12px" }}>Services</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#111827", marginBottom: "12px" }}>हम क्या करते हैं</h2>
          <p style={{ color: "#6b7280", fontSize: "16px" }}>चार services, एक goal — आपके business की growth।</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "20px" }}>
          {services.map(s => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="c" style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: "20px", height: "20px", color: s.iconColor }} />
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#9ca3af", background: "#f9fafb", border: "1px solid #e5e7eb", padding: "4px 12px", borderRadius: "100px" }}>{s.badge}</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#111827", marginBottom: "4px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#2563eb", marginBottom: "12px" }}>{s.sub}</p>
                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.65, marginBottom: "20px" }}>{s.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "20px" }}>
                  {s.points.map(p => (
                    <div key={p} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#374151", fontWeight: 500 }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#93c5fd", flexShrink: 0 }} />
                      {p}
                    </div>
                  ))}
                </div>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 700, color: "#2563eb", textDecoration: "none" }}>
                  Get Started <ArrowRight style={{ width: "14px", height: "14px" }} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
