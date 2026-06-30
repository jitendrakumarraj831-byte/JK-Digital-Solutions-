"use client";

const techLogos = [
  { name: "Google", color: "#4285F4", bg: "#EFF6FF", icon: "G" },
  { name: "Meta Ads", color: "#1877F2", bg: "#EFF6FF", icon: "f" },
  { name: "WordPress", color: "#21759B", bg: "#EFF6FF", icon: "W" },
  { name: "Shopify", color: "#96BF48", bg: "#F0FDF4", icon: "S" },
  { name: "Google Analytics", color: "#E37400", bg: "#FFF7ED", icon: "GA" },
  { name: "Semrush", color: "#FF642D", bg: "#FFF7ED", icon: "SR" },
  { name: "Canva", color: "#00C4CC", bg: "#ECFEFF", icon: "Cv" },
  { name: "Mailchimp", color: "#FFE01B", bg: "#FEFCE8", icon: "Mc" },
  { name: "Google Search", color: "#34A853", bg: "#F0FDF4", icon: "GS" },
  { name: "YouTube", color: "#FF0000", bg: "#FFF5F5", icon: "YT" },
  { name: "WhatsApp Business", color: "#25D366", bg: "#F0FDF4", icon: "WA" },
  { name: "Google My Business", color: "#4285F4", bg: "#EFF6FF", icon: "GMB" },
];

const doubled = [...techLogos, ...techLogos];

const industries = [
  "Hospitals & Clinics",
  "Restaurants & Dhabas",
  "Coaching Centres",
  "Real Estate Agents",
  "Beauty Salons",
  "Hardware Stores",
  "Hotels & Lodges",
  "Service Businesses",
  "E-commerce Stores",
  "Auto Dealers",
  "Pharmacies",
  "Jewellers",
];
const doubledIndustry = [...industries, ...industries];

export default function TrustedBy() {
  return (
    <div style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0", overflow: "hidden", padding: "44px 0" }}>

      {/* Header */}
      <p style={{
        textAlign: "center",
        fontSize: "12px", fontWeight: 700, color: "#94A3B8",
        textTransform: "uppercase", letterSpacing: "0.12em",
        marginBottom: "28px",
      }}>
        Platforms & Tools We Master
      </p>

      {/* ── Tech logos marquee (left to right) ── */}
      <div className="marquee-wrap" style={{
        overflow: "hidden",
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        marginBottom: "28px",
      }}>
        <div style={{ display: "flex", gap: "10px", width: "max-content", animation: "marquee 30s linear infinite" }}>
          {doubled.map((logo, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "9px 18px", borderRadius: "12px",
              background: "#fff", border: "1px solid #E2E8F0",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              whiteSpace: "nowrap", flexShrink: 0,
            }}>
              {/* Logo circle */}
              <div style={{
                width: "28px", height: "28px", borderRadius: "8px",
                background: logo.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "10px", fontWeight: 900, color: logo.color,
                flexShrink: 0, letterSpacing: "-0.03em",
              }}>
                {logo.icon}
              </div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#CBD5E1", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Industries We Serve
        </span>
      </div>

      {/* ── Industry marquee (right to left) ── */}
      <div className="marquee-wrap" style={{
        overflow: "hidden",
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}>
        <div style={{ display: "flex", gap: "8px", width: "max-content", animation: "marqueeRev 36s linear infinite" }}>
          {doubledIndustry.map((item, i) => (
            <div key={i} style={{
              padding: "7px 18px", borderRadius: "100px",
              background: "#fff", border: "1px solid #E2E8F0",
              fontSize: "13px", fontWeight: 500, color: "#475569",
              whiteSpace: "nowrap", flexShrink: 0,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              display: "flex", alignItems: "center", gap: "6px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#BFDBFE", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
