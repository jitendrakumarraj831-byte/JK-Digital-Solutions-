"use client";

const steps = [
  {
    num: "01",
    title: "Consultation — मुफ्त बातचीत",
    desc: "30 minutes में आपकी online presence देखते हैं — website, Google ranking, GMB, और competitors।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    num: "02",
    title: "Planning — रणनीति तैयार",
    desc: "आपके goals, budget, और competition के हिसाब से 90-दिन का digital plan तैयार करते हैं।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    num: "03",
    title: "Design — पहला impression",
    desc: "Brand-aligned wireframes और visual design — आपकी approval के बाद ही development शुरू होता है।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    color: "#9333EA",
    bg: "#FDF4FF",
  },
  {
    num: "04",
    title: "Development — काम शुरू",
    desc: "हमारी team code में लग जाती है — website, campaigns, SEO, GMB — सब agreed timeline में बनते हैं।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    color: "#06B6D4",
    bg: "#ECFEFF",
  },
  {
    num: "05",
    title: "Launch — Live होता है",
    desc: "Final testing के बाद website और campaigns publicly launch होते हैं — पूरी team आपके साथ।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    num: "06",
    title: "Support — नतीजे देखें",
    desc: "Monthly reports, WhatsApp updates, और ongoing optimisation — results दिखते हैं, सिर्फ activity नहीं।",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>हम कैसे काम करते हैं</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Consultation से <span className="accent">Support</span> तक — हफ्तों में।
          </h2>
          <p className="t-body" style={{ maxWidth: "440px", margin: "0 auto" }}>
            छह simple steps — आपका business जल्दी grow करे, बिना किसी confusion के।
          </p>
        </div>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", position: "relative" }}>
          {steps.map((s, i) => {
            const isRowEnd = (i + 1) % 3 === 0;
            return (
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
                    fontSize: "40px", fontWeight: 900, letterSpacing: "-0.06em",
                    color: s.color, opacity: 0.12, lineHeight: 1, marginBottom: "8px",
                  }}>{s.num}</div>
                  {/* Icon */}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "13px",
                    background: s.bg, color: s.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "16px",
                  }}>{s.icon}</div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "10px", letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
                {/* Connector arrow */}
                {i < steps.length - 1 && !isRowEnd && (
                  <div className="process-arrow" style={{
                    position: "absolute", top: "50%", right: "-14px",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "#fff", border: "1px solid #E2E8F0",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            आज Free Audit शुरू करें →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .process-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .process-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px) { .process-arrow { display: none !important; } }
      `}</style>
    </section>
  );
}
