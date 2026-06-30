const items = [
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

const doubled = [...items, ...items];

export default function TrustedBy() {
  return (
    <div style={{
      borderTop: "1px solid rgba(167,139,250,0.08)",
      borderBottom: "1px solid rgba(167,139,250,0.08)",
      background: "rgba(124,58,237,0.03)",
      padding: "24px 0",
      overflow: "hidden",
    }}>
      <p style={{
        textAlign: "center",
        fontSize: "11px",
        fontWeight: 600,
        color: "rgba(196,181,253,0.35)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "18px",
      }}>Serving businesses across Bihar</p>

      <div className="marquee-wrap" style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}>
        <div className="marquee-track" style={{ display: "flex", gap: "8px", width: "max-content" }}>
          {doubled.map((item, i) => (
            <div key={i} style={{
              padding: "7px 16px",
              borderRadius: "100px",
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(167,139,250,0.12)",
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(230,220,255,0.5)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
