"use client";
import { ArrowRight, Globe, TrendingUp, MapPin, Megaphone } from "lucide-react";

const services = [
  {
    icon: Globe, gradient: "linear-gradient(135deg, #1e3a8a, #2563eb, #06b6d4)",
    glow: "rgba(37,99,235,0.3)",
    badge: "Most Popular",
    title: "Website Development",
    sub: "आपकी 24/7 Digital Presence",
    desc: "Fast, beautiful और SEO-optimized websites जो visitors को loyal customers में convert करे। Mobile-first, lightning-fast.",
    points: ["Mobile-First Design", "SEO-Ready Architecture", "30-Day Delivery", "1 Year Free Support"],
  },
  {
    icon: TrendingUp, gradient: "linear-gradient(135deg, #4c1d95, #7c3aed, #a78bfa)",
    glow: "rgba(124,58,237,0.3)",
    badge: "Best Long-term ROI",
    title: "Google SEO",
    sub: "बिना Ads Free Organic Traffic",
    desc: "बिना ads खर्च किए Google के top results में आएं। Sustainable growth जो महीनों-सालों तक काम करे।",
    points: ["Local + National SEO", "Keyword Strategy", "Monthly Reporting", "Competitor Analysis"],
  },
  {
    icon: MapPin, gradient: "linear-gradient(135deg, #064e3b, #059669, #34d399)",
    glow: "rgba(5,150,105,0.3)",
    badge: "More Calls Daily",
    title: "Google Business Profile",
    sub: "Maps पर #1 Position",
    desc: "जब कोई nearby service खोजे, आपका नाम सबसे पहले दिखे। More calls, more walk-ins, more revenue.",
    points: ["Complete Profile Setup", "Photo Optimization", "Review Management", "Rank on Google Maps"],
  },
  {
    icon: Megaphone, gradient: "linear-gradient(135deg, #78350f, #d97706, #fbbf24)",
    glow: "rgba(217,119,6,0.3)",
    badge: "Instant Results",
    title: "Google Ads",
    sub: "आज Invest, आज Results",
    desc: "Targeted PPC campaigns जो केवल ready-to-buy customers को दिखें। हर rupee काम करे, हर click convert करे।",
    points: ["Search & Display Ads", "Daily Budget Optimization", "Conversion Tracking", "Starts at ₹5K/month"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#060b18", padding: "100px 0" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Our Services</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px"
          }}>
            एक Agency, चार Powerful <span className="grad-text">Solutions</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            आपके business को online dominate करने के लिए सभी tools एक जगह।
          </p>
        </div>

        {/* Service grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "20px" }}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "32px",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.055)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 20px 60px ${s.glow}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>

                {/* Background glow */}
                <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`, pointerEvents: "none", opacity: 0.5 }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Icon + Badge */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" }}>
                    <div style={{
                      width: "52px", height: "52px", borderRadius: "14px",
                      background: s.gradient, display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, boxShadow: `0 8px 24px ${s.glow}`
                    }}>
                      <Icon style={{ width: "22px", height: "22px", color: "#fff" }} />
                    </div>
                    <span style={{
                      fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.45)",
                      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                      padding: "5px 12px", borderRadius: "100px", letterSpacing: "0.05em", textTransform: "uppercase"
                    }}>{s.badge}</span>
                  </div>

                  <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "4px", letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>{s.sub}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>{s.desc}</p>

                  {/* Feature points */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
                    {s.points.map(p => (
                      <div key={p} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3b82f6", flexShrink: 0 }} />
                        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{p}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "14px", fontWeight: 700, color: "#60a5fa",
                    textDecoration: "none", transition: "gap 0.2s"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.gap = "10px"; }}
                    onMouseLeave={e => { e.currentTarget.style.gap = "6px"; }}>
                    Get Started <ArrowRight style={{ width: "14px", height: "14px" }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
