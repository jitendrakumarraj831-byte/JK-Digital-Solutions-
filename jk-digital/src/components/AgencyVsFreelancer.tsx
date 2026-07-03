"use client";

const rows = [
  { label: "Accountability", agency: "A signed scope, timeline and invoice — every time.", freelancer: "Often informal, with little recourse if things go wrong." },
  { label: "Availability", agency: "A team covers you through leave, illness or a busy season.", freelancer: "One person. If they're unavailable, your project stalls." },
  { label: "Skill coverage", agency: "Design, development, SEO and ads handled by specialists.", freelancer: "Usually one skill set stretched across every task." },
  { label: "Quality control", agency: "Work is reviewed before it reaches you — fewer surprises.", freelancer: "No second pair of eyes; mistakes ship straight to you." },
  { label: "Scalability", agency: "Ready to take on more — new pages, new campaigns, more markets.", freelancer: "Growth is capped by one person's available hours." },
  { label: "Communication", agency: "A dedicated manager who knows your account, always reachable.", freelancer: "Response times vary with their other client workload." },
];

export default function AgencyVsFreelancer() {
  return (
    <section id="agency-vs-freelancer" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>A Fair Comparison</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Why a professional agency <span className="accent">beats</span> a freelancer.
          </h2>
          <p className="t-body" style={{ maxWidth: "520px", margin: "0 auto" }}>
            Freelancers can be cheaper upfront. But your business depends on this working — reliably, every month.
          </p>
        </div>

        <div style={{
          background: "#fff", border: "1px solid #E2E8F0", borderRadius: "24px",
          overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
        }}>
          {/* Header row */}
          <div className="avf-row" style={{
            display: "grid", gridTemplateColumns: "1fr 1.4fr 1.4fr",
            borderBottom: "1px solid #E2E8F0", background: "#F5F7FA",
          }}>
            <div style={{ padding: "18px 20px" }} />
            <div style={{ padding: "18px 20px", background: "#EFF6FF" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1D4ED8" }}>JK Digital Solutions</span>
              </div>
            </div>
            <div style={{ padding: "18px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></svg>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#4B5563" }}>A Freelancer</span>
              </div>
            </div>
          </div>

          {/* Body rows */}
          {rows.map((r, ri) => (
            <div key={r.label} className="avf-row" style={{
              display: "grid", gridTemplateColumns: "1fr 1.4fr 1.4fr",
              background: ri % 2 === 0 ? "#fff" : "#FCFCFD",
              borderBottom: ri < rows.length - 1 ? "1px solid #F1F5F9" : "none",
            }}>
              <div style={{ padding: "18px 20px", display: "flex", alignItems: "center", fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{r.label}</div>
              <div style={{ padding: "18px 20px", background: "#F5F9FF", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "3px" }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ fontSize: "13.5px", color: "#374151", lineHeight: 1.55 }}>{r.agency}</span>
              </div>
              <div style={{ padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "3px" }} aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span style={{ fontSize: "13.5px", color: "#6B7280", lineHeight: 1.55 }}>{r.freelancer}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            Work With a Team That Won&apos;t Disappear →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .avf-row { grid-template-columns: 1fr !important; }
          .avf-row > div:first-child { border-bottom: 1px solid #F1F5F9; }
        }
      `}</style>
    </section>
  );
}
