"use client";

const months = [
  { label: "Month 1", value: 22 },
  { label: "Month 2", value: 34 },
  { label: "Month 3", value: 48 },
  { label: "Month 4", value: 63 },
  { label: "Month 5", value: 81 },
  { label: "Month 6", value: 100 },
];
const ramp = ["#B7D3F6", "#86B6F6", "#649BF1", "#4880EC", "#2E67E0", "#1D4ED8"];

const stats = [
  { v: "+180%", l: "Average traffic growth", sub: "within 6 months of launch" },
  { v: "3×", l: "Average lead growth", sub: "for local service businesses" },
  { v: "60–90", l: "Days to first ranking gains", sub: "for targeted local keywords" },
  { v: "48hr", l: "Time for ads to go live", sub: "once a campaign is approved" },
];

export default function Results() {
  return (
    <section id="results" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ marginBottom: "16px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Results</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            The growth pattern we aim for, <span className="accent">every time</span>.
          </h2>
          <p className="t-body">
            SEO and ads compound — slow in month one, unmistakable by month six. Here&apos;s the typical trajectory once a strategy is live.
          </p>
        </div>
        <p style={{ fontSize: "12.5px", color: "#6B7280", fontStyle: "italic", marginBottom: "48px" }}>
          Illustrative example based on typical outcomes across client engagements — not a guarantee of specific results.
        </p>

        <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "24px", alignItems: "stretch" }}>
          {/* Chart card */}
          <div style={{
            background: "#fff", border: "1px solid #E2E8F0", borderRadius: "24px",
            padding: "clamp(24px, 4vw, 36px)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827" }}>Website leads</h3>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#16A34A", whiteSpace: "nowrap" }}>↑ 4.5× in 6 months</span>
            </div>
            <p style={{ fontSize: "12.5px", color: "#6B7280", marginBottom: "28px" }}>Indexed to Month 1 = 22 leads</p>

            <div
              role="img"
              aria-label="Bar chart showing monthly website leads climbing steadily from 22 in month one to 100 in month six, an illustrative example of typical growth."
              style={{ display: "flex", alignItems: "flex-end", gap: "14px", height: "180px", borderBottom: "1px solid #F1F5F9", paddingBottom: "2px" }}
            >
              {months.map((m, i) => (
                <div key={m.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }}>
                  {i === months.length - 1 && (
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#111827", marginBottom: "6px" }}>{m.value}</span>
                  )}
                  <div style={{
                    width: "100%", maxWidth: "34px",
                    height: `${m.value}%`,
                    background: ramp[i],
                    borderRadius: "4px 4px 0 0",
                  }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
              {months.map(m => (
                <div key={m.label} style={{ flex: 1, textAlign: "center", fontSize: "11px", color: "#6B7280", fontWeight: 500 }}>
                  {m.label.replace("Month ", "M")}
                </div>
              ))}
            </div>
          </div>

          {/* Stat callouts */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {stats.map(s => (
              <div key={s.l} style={{
                background: "#F5F7FA", border: "1px solid #E2E8F0", borderRadius: "18px",
                padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "center",
              }}>
                <div style={{ fontSize: "clamp(24px,2.8vw,30px)", fontWeight: 700, color: "#1D4ED8", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#111827", marginTop: "8px" }}>{s.l}</div>
                <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "3px" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="#free-audit" className="btn btn-primary btn-lg">
            See What This Could Look Like For You →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .results-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
