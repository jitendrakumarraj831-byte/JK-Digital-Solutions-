export default function Loading() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 999,
      background: "#FCFCFD",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: "44px", height: "44px", margin: "0 auto 16px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #1D4ED8, #06B6D4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "loader-pulse 1.1s ease-in-out infinite",
        }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "16px", letterSpacing: "-0.02em" }}>JK</span>
        </div>
        <p style={{ fontSize: "13px", fontWeight: 600, color: "#4B5563" }}>Loading…</p>
      </div>
      <style>{`
        @keyframes loader-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(0.88); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
