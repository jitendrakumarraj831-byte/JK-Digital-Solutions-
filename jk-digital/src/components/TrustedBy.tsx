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
      borderTop: "1px solid #E2E8F0",
      borderBottom: "1px solid #E2E8F0",
      background: "#F8FAFC",
      padding: "28px 0",
      overflow: "hidden",
    }}>
      <p style={{
        textAlign: "center",
        fontSize: "11px",
        fontWeight: 700,
        color: "#94A3B8",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        marginBottom: "20px",
      }}>Serving 200+ businesses across Bihar</p>

      <div className="marquee-wrap" style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}>
        <div className="marquee-track" style={{ display: "flex", gap: "8px", width: "max-content" }}>
          {doubled.map((item, i) => (
            <div key={i} style={{
              padding: "7px 18px",
              borderRadius: "100px",
              background: "#fff",
              border: "1px solid #E2E8F0",
              fontSize: "13px",
              fontWeight: 500,
              color: "#475569",
              whiteSpace: "nowrap",
              flexShrink: 0,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
