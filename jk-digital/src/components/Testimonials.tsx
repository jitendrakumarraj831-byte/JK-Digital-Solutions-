"use client";

const reviews = [
  {
    name: "Rajan Kumar",
    role: "Owner, Rajan Medical Store",
    loc: "Forbesganj",
    avatar: "R",
    color: "#3b82f6",
    stars: 5,
    text: "JK Digital ने हमारी medical store की website बनाई और Google Maps पर Top 3 में rank कराया। अब रोज 15-20 नए customers call करते हैं। यह सबसे बेहतरीन investment था।",
    metric: "+180%",
    metricLabel: "Monthly Calls",
  },
  {
    name: "Sunita Devi",
    role: "Owner, Sunita Beauty Parlour",
    loc: "Araria",
    avatar: "S",
    color: "#8b5cf6",
    stars: 5,
    text: "पहले सिर्फ local लोग जानते थे। GMB service के बाद Google पर Top पर आई। अब दूर-दूर से customers आते हैं। Team बहुत professional और responsive है।",
    metric: "3×",
    metricLabel: "New Clients",
  },
  {
    name: "Mohammad Iqbal",
    role: "Owner, Iqbal Hardware",
    loc: "Kishanganj",
    avatar: "M",
    color: "#10b981",
    stars: 5,
    text: "Google Ads start करने के पहले महीने में ही 45+ genuine inquiries आईं। Investment पहले week में ही वापस आ गई। अब रोज़ orders आते हैं।",
    metric: "45+",
    metricLabel: "Leads / Month",
  },
  {
    name: "Priya Sharma",
    role: "Director, Success Coaching Centre",
    loc: "Forbesganj",
    avatar: "P",
    color: "#f97316",
    stars: 5,
    text: "एक साल में admissions 3 गुना बढ़ गईं। Parents खुद Google पर search करके आते हैं। Website और SEO दोनों बिल्कुल perfect हैं। Highly recommend करती हूं।",
    metric: "3×",
    metricLabel: "Admissions",
  },
];

const Stars = () => (
  <div style={{ display: "flex", gap: "3px" }}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section style={{ background: "#05091a", padding: "112px 0" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Testimonials</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: "24px",
          }}>
            Clients क्या{" "}
            <span className="grad-text">कहते हैं</span>
          </h2>

          {/* Rating pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            padding: "12px 24px", borderRadius: "100px",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <div style={{ display: "flex", gap: "3px" }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="font-display" style={{ fontWeight: 800, color: "#fff", fontSize: "18px" }}>4.9</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>/ 5.0 &nbsp;·&nbsp; 120+ Google Reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "20px" }}>
          {reviews.map(r => (
            <div key={r.name}
              style={{
                borderRadius: "22px", padding: "32px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.065)";
                el.style.borderColor = `${r.color}30`;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = `0 20px 52px ${r.color}15`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}>

              {/* Quote mark */}
              <div style={{ position: "absolute", top: "24px", right: "28px", fontSize: "80px", lineHeight: 1, color: "rgba(255,255,255,0.04)", fontFamily: "Georgia, serif", userSelect: "none" }}>"</div>

              {/* Stars */}
              <div style={{ marginBottom: "18px" }}>
                <Stars />
              </div>

              {/* Review text */}
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.8, marginBottom: "28px", fontStyle: "normal", position: "relative", zIndex: 1 }}>
                "{r.text}"
              </p>

              {/* Footer */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: `linear-gradient(135deg, ${r.color}cc, ${r.color})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, boxShadow: `0 4px 16px ${r.color}40`,
                  }}>
                    <span style={{ color: "#fff", fontWeight: 800, fontSize: "16px" }}>{r.avatar}</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#fff", fontSize: "14px", marginBottom: "2px" }}>{r.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "12px" }}>{r.role}</p>
                    <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "11px" }}>📍 {r.loc}</p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className="font-display" style={{ fontSize: "1.9rem", fontWeight: 900, color: r.color, lineHeight: 1, letterSpacing: "-0.02em" }}>{r.metric}</p>
                  <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", marginTop: "4px" }}>{r.metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google badge */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "12px 24px", borderRadius: "12px",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", fontWeight: 600 }}>Google Reviews पर देखें</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
