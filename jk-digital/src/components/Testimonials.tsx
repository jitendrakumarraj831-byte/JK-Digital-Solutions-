"use client";

const reviews = [
  {
    name: "Rajan Kumar",
    role: "Medical Store, Araria",
    initials: "RK",
    avatarBg: "#EFF6FF",
    avatarColor: "#1D4ED8",
    text: "Once our Google Business Profile was optimised, our monthly footfall doubled. We saw clear results within 3 months.",
    service: "GMB Optimization",
  },
  {
    name: "Sunita Devi",
    role: "Restaurant Owner, Forbesganj",
    initials: "SD",
    avatarBg: "#FFFBEB",
    avatarColor: "#D97706",
    text: "The moment our website launched, online orders started coming in. We now get 50+ orders every weekend — all online.",
    service: "Website + GMB",
  },
  {
    name: "Amit Agarwal",
    role: "Property Dealer, Araria",
    initials: "AA",
    avatarBg: "#F0FDF4",
    avatarColor: "#16A34A",
    text: "Google Ads brings in 40+ qualified enquiries every month now. Our ROI is 5x — it doesn't get much better than that.",
    service: "Google Ads",
  },
  {
    name: "Priya Sharma",
    role: "Beauty Salon, Forbesganj",
    initials: "PS",
    avatarBg: "#FDF2F8",
    avatarColor: "#DB2777",
    text: "We built a real presence on Instagram and Google. New clients tell us every week that they found us online.",
    service: "Social + SEO",
  },
  {
    name: "Rakesh Yadav",
    role: "Coaching Centre, Araria",
    initials: "RY",
    avatarBg: "#ECFEFF",
    avatarColor: "#06B6D4",
    text: "We had 120 new admissions this session — all from online enquiries. The website and SEO worked together perfectly.",
    service: "Website + SEO",
  },
  {
    name: "Mohan Lal",
    role: "Hardware Store, Forbesganj",
    initials: "ML",
    avatarBg: "#EEF2FF",
    avatarColor: "#4F46E5",
    text: "They brought our shop online — WhatsApp enquiries started coming in, and local customers now find us through Google Maps.",
    service: "GMB + Website",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Testimonials</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Growth stories from our <span className="accent">clients</span>.
          </h2>
          <a href="https://g.page/jkdigital" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "14px", fontWeight: 600, color: "#4B5563",
            textDecoration: "none", transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#111827"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4B5563"}>
            <span style={{ color: "#F59E0B" }}>★★★★★</span>
            4.9 on Google Reviews →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "16px" }}>
          {reviews.map((r, i) => (
            <div key={i} className="card" style={{
              padding: "28px",
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)"; }}>

              {/* Stars */}
              <div style={{ fontSize: "14px", color: "#F59E0B", marginBottom: "16px", letterSpacing: "2px" }}>★★★★★</div>

              {/* Quote */}
              <p style={{ fontSize: "15px", lineHeight: 1.72, color: "#374151", marginBottom: "24px", fontWeight: 400 }}>
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: r.avatarBg, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: 700, color: r.avatarColor,
                    border: `1px solid ${r.avatarColor}20`,
                  }}>{r.initials}</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{r.name}</div>
                    <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: "1px" }}>{r.role}</div>
                  </div>
                </div>
                <div style={{
                  fontSize: "11px", fontWeight: 600, color: "#94A3B8",
                  textAlign: "right", whiteSpace: "nowrap",
                }}>{r.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
