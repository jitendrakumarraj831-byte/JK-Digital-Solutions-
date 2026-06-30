"use client";

const reviews = [
  {
    name: "Rajan Kumar",
    role: "Medical Store, Araria",
    initials: "RK",
    avatarG: "linear-gradient(135deg,#7c3aed,#6366f1)",
    text: "GMB optimize होने के बाद monthly footfall 2x हो गया। 3 months में results clearly visible थे।",
    service: "GMB Optimization",
    border: "rgba(129,140,248,0.18)",
    bg: "linear-gradient(145deg,rgba(79,70,229,0.1),rgba(99,102,241,0.05))",
  },
  {
    name: "Sunita Devi",
    role: "Restaurant Owner, Forbesganj",
    initials: "SD",
    avatarG: "linear-gradient(135deg,#d97706,#f59e0b)",
    text: "Website के बाद online orders शुरू हुए। Weekends में 50+ orders आते हैं — सब online।",
    service: "Website + GMB",
    border: "rgba(251,191,36,0.18)",
    bg: "linear-gradient(145deg,rgba(217,119,6,0.1),rgba(245,158,11,0.05))",
  },
  {
    name: "Amit Agarwal",
    role: "Property Dealer, Araria",
    initials: "AA",
    avatarG: "linear-gradient(135deg,#059669,#34d399)",
    text: "Google Ads से 40+ qualified leads monthly आ रहे हैं। ROI 5x है — इससे बेहतर क्या होगा।",
    service: "Google Ads",
    border: "rgba(52,211,153,0.18)",
    bg: "linear-gradient(145deg,rgba(5,150,105,0.1),rgba(52,211,153,0.05))",
  },
  {
    name: "Priya Sharma",
    role: "Beauty Salon, Forbesganj",
    initials: "PS",
    avatarG: "linear-gradient(135deg,#db2777,#a855f7)",
    text: "Instagram और Google पर presence बनी। हर week नए customers आते हैं specifically online देखकर।",
    service: "Social + SEO",
    border: "rgba(249,168,212,0.18)",
    bg: "linear-gradient(145deg,rgba(219,39,119,0.1),rgba(168,85,247,0.05))",
  },
  {
    name: "Rakesh Yadav",
    role: "Coaching Centre, Araria",
    initials: "RY",
    avatarG: "linear-gradient(135deg,#0891b2,#3b82f6)",
    text: "इस session में 120 नए admissions — सब online inquiry से। SEO plus website एक साथ काम किया।",
    service: "Website + SEO",
    border: "rgba(96,165,250,0.18)",
    bg: "linear-gradient(145deg,rgba(8,145,178,0.1),rgba(59,130,246,0.05))",
  },
  {
    name: "Mohan Lal",
    role: "Hardware Store, Forbesganj",
    initials: "ML",
    avatarG: "linear-gradient(135deg,#ea580c,#f97316)",
    text: "Shop को online लाया — WhatsApp enquiries आने लगीं। Local customers Google Maps से आते हैं।",
    service: "GMB + Website",
    border: "rgba(253,186,116,0.18)",
    bg: "linear-gradient(145deg,rgba(234,88,12,0.1),rgba(249,115,22,0.05))",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: "128px 0",
      background: "linear-gradient(180deg, #08001e 0%, #060011 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", top: "20%", left: "-18%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{ marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "16px" }}>Testimonials</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            200+ businesses <span className="accent">trust</span> us.
          </h2>
          <a href="https://g.page/jkdigital" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "14px", fontWeight: 600, color: "rgba(230,220,255,0.45)",
            textDecoration: "none", transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(230,220,255,0.75)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(230,220,255,0.45)"}>
            <span style={{ color: "#fbbf24" }}>★★★★★</span>
            4.9 on Google Reviews →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "12px" }}>
          {reviews.map((r, i) => (
            <div key={i} className="card" style={{
              padding: "28px", background: r.bg, border: `1px solid ${r.border}`,
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${r.border}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>

              {/* Stars */}
              <div style={{ fontSize: "13px", color: "#fbbf24", marginBottom: "14px" }}>★★★★★</div>

              {/* Quote */}
              <p style={{ fontSize: "15px", lineHeight: 1.72, color: "rgba(230,220,255,0.7)", marginBottom: "22px", fontWeight: 400 }}>
                "{r.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    background: r.avatarG, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: 700, color: "#fff",
                  }}>{r.initials}</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{r.name}</div>
                    <div style={{ fontSize: "12px", color: "rgba(230,220,255,0.4)", marginTop: "1px" }}>{r.role}</div>
                  </div>
                </div>
                <div style={{
                  fontSize: "11px", fontWeight: 600, color: "rgba(230,220,255,0.35)",
                  textAlign: "right",
                }}>{r.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
