"use client";

const reviews = [
  {
    name: "Rajan Kumar",
    role: "Medical Store, Araria",
    initials: "RK",
    avatarBg: "#EFF6FF",
    avatarColor: "#1D4ED8",
    text: "GMB अनुकूलित होने के बाद मासिक ग्राहक संख्या दोगुनी हो गई। 3 महीनों में नतीजे साफ़ दिखने लगे थे।",
    service: "GMB Optimization",
  },
  {
    name: "Sunita Devi",
    role: "Restaurant Owner, Forbesganj",
    initials: "SD",
    avatarBg: "#FFFBEB",
    avatarColor: "#D97706",
    text: "वेबसाइट बनने के बाद ऑनलाइन ऑर्डर शुरू हुए। सप्ताहांत में 50+ ऑर्डर आते हैं — सब ऑनलाइन।",
    service: "Website + GMB",
  },
  {
    name: "Amit Agarwal",
    role: "Property Dealer, Araria",
    initials: "AA",
    avatarBg: "#F0FDF4",
    avatarColor: "#16A34A",
    text: "Google Ads से हर महीने 40+ योग्य ग्राहक पूछताछ आ रही हैं। ROI 5 गुना है — इससे बेहतर क्या होगा।",
    service: "Google Ads",
  },
  {
    name: "Priya Sharma",
    role: "Beauty Salon, Forbesganj",
    initials: "PS",
    avatarBg: "#FDF2F8",
    avatarColor: "#DB2777",
    text: "Instagram और Google पर उपस्थिति बनी। हर सप्ताह नए ग्राहक विशेष रूप से ऑनलाइन देखकर आते हैं।",
    service: "Social + SEO",
  },
  {
    name: "Rakesh Yadav",
    role: "Coaching Centre, Araria",
    initials: "RY",
    avatarBg: "#ECFEFF",
    avatarColor: "#06B6D4",
    text: "इस सत्र में 120 नए दाख़िले हुए — सब ऑनलाइन पूछताछ से। SEO और वेबसाइट ने एक साथ काम किया।",
    service: "Website + SEO",
  },
  {
    name: "Mohan Lal",
    role: "Hardware Store, Forbesganj",
    initials: "ML",
    avatarBg: "#EEF2FF",
    avatarColor: "#4F46E5",
    text: "दुकान को ऑनलाइन लाया — WhatsApp पूछताछ आने लगीं। स्थानीय ग्राहक Google Maps से आते हैं।",
    service: "GMB + Website",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>ग्राहक क्या कहते हैं</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            हमारे ग्राहकों की <span className="accent">विकास</span> कहानियां।
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
