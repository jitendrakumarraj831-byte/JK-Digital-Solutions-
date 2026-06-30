"use client";

const steps = [
  {
    num: "01",
    title: "Free Audit — मुफ्त जांच",
    desc: "30 minutes में आपकी online presence देखते हैं — website, Google ranking, GMB, और competitors।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    num: "02",
    title: "Custom Strategy — आपकी योजना",
    desc: "आपके goals, budget, और competition के हिसाब से 90-दिन का digital plan तैयार करते हैं।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    num: "03",
    title: "Execution — काम शुरू",
    desc: "हमारी team काम में लग जाती है — website, campaigns, SEO, GMB — सब agreed timeline में live।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    color: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    num: "04",
    title: "Growth & Reporting — नतीजे देखें",
    desc: "Monthly reports, WhatsApp updates, और ongoing optimisation — results दिखते हैं, सिर्फ activity नहीं।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "112px 0", background: "#F8FAFC" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>हम कैसे काम करते हैं</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Audit से <span className="accent">नतीजे</span> तक — हफ्तों में।
          </h2>
          <p className="t-body" style={{ maxWidth: "440px", margin: "0 auto" }}>
            Simple और transparent process — आपका business जल्दी grow करे।
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "24px", position: "relative" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: "20px",
                padding: "32px 24px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
                height: "100%",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)"; }}>
                {/* Step number */}
                <div style={{
                  fontSize: "48px", fontWeight: 900, letterSpacing: "-0.06em",
                  color: s.color, opacity: 0.12, lineHeight: 1, marginBottom: "8px",
                }}>{s.num}</div>
                {/* Icon */}
                <div style={{
                  width: "48px", height: "48px", borderRadius: "13px",
                  background: s.bg, color: s.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "16px",
                }}>{s.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "10px", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="process-arrow" style={{
                  position: "absolute", top: "50%", right: "-14px",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "#fff", border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            आज Free Audit शुरू करें →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .process-arrow { display: none !important; } }
      `}</style>
    </section>
  );
}
