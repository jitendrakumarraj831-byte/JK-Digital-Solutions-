"use client";

const services = [
  {
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    badge: "Most Popular",
    badgeBg: "#EFF6FF",
    badgeColor: "#1D4ED8",
    title: "Website Development",
    tagline: "आपका 24/7 ऑनलाइन बिक्री प्रतिनिधि।",
    desc: "Fast, mobile-first websites built to convert visitors into customers. SEO-ready from day one.",
    descHi: "तेज़, mobile-first वेबसाइट जो आगंतुकों को ग्राहकों में बदले। पहले दिन से SEO के लिए तैयार।",
    features: ["Mobile-first design", "SEO architecture", "30-day delivery", "1 year free support"],
    price: "₹8,999",
    priceNote: "onwards",
    cardBorder: "#BFDBFE",
    checkColor: "#1D4ED8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
    badge: "Best ROI",
    badgeBg: "#F0FDF4",
    badgeColor: "#16A34A",
    title: "Google SEO",
    tagline: "ऊपर रैंक करें। क्लिक के लिए कुछ न दें।",
    desc: "Get your business to the top of Google search results organically — and stay there.",
    descHi: "अपने व्यवसाय को Google खोज परिणामों में स्वाभाविक रूप से शीर्ष पर लाएं — और वहीं बनाए रखें।",
    features: ["Local + national SEO", "Keyword research", "Monthly reports", "Competitor analysis"],
    price: "₹4,999",
    priceNote: "/ month",
    cardBorder: "#BBF7D0",
    checkColor: "#16A34A",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    iconBg: "#ECFEFF",
    iconColor: "#06B6D4",
    badge: "Free Setup",
    badgeBg: "#ECFEFF",
    badgeColor: "#06B6D4",
    title: "Google Business Profile",
    tagline: "स्थानीय खोज में जीतें। आस-पास के ग्राहकों तक पहुंचें।",
    desc: "Optimise your GMB listing so customers searching near you find your business first.",
    descHi: "अपनी GMB लिस्टिंग को अनुकूलित करें ताकि आस-पास खोजने वाले ग्राहक सबसे पहले आपका व्यवसाय पाएं।",
    features: ["Complete GMB setup", "Review management", "Photo optimisation", "Local ranking"],
    price: "₹2,499",
    priceNote: "/ month",
    cardBorder: "#A5F3FC",
    checkColor: "#06B6D4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    iconBg: "#EEF2FF",
    iconColor: "#4F46E5",
    badge: "Fastest Results",
    badgeBg: "#EEF2FF",
    badgeColor: "#4F46E5",
    title: "Google Ads",
    tagline: "नतीजों के लिए भुगतान करें, दिखावे के लिए नहीं।",
    desc: "Targeted campaigns that bring qualified leads within days. Expert management, measurable ROI.",
    descHi: "लक्षित अभियान जो कुछ ही दिनों में योग्य ग्राहक लाएं। विशेषज्ञ प्रबंधन, मापने योग्य ROI।",
    features: ["Campaign setup", "Bid optimisation", "Ad copywriting", "Weekly reports"],
    price: "₹3,999",
    priceNote: "/ month",
    cardBorder: "#C7D2FE",
    checkColor: "#4F46E5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    iconBg: "#FDF2F8",
    iconColor: "#DB2777",
    badge: "Trending",
    badgeBg: "#FDF2F8",
    badgeColor: "#DB2777",
    title: "Social Media Marketing",
    tagline: "जहां आपके ग्राहक हैं, वहां दिखें।",
    desc: "Consistent, on-brand content across Instagram and Facebook that builds trust and drives enquiries.",
    descHi: "Instagram और Facebook पर लगातार, ब्रांड के अनुरूप सामग्री जो भरोसा बनाए और पूछताछ लाए।",
    features: ["Content calendar", "Reels & graphics", "Community management", "Monthly insights"],
    price: "₹5,999",
    priceNote: "/ month",
    cardBorder: "#FBCFE8",
    checkColor: "#DB2777",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    iconBg: "#FDF4FF",
    iconColor: "#9333EA",
    badge: "First Impression",
    badgeBg: "#FDF4FF",
    badgeColor: "#9333EA",
    title: "Logo & Branding",
    tagline: "एक पहचान जो याद रह जाए।",
    desc: "Professional logo, colour system, and brand guidelines that make your business instantly recognisable.",
    descHi: "पेशेवर लोगो, रंग प्रणाली, और ब्रांड दिशा-निर्देश जो आपके व्यवसाय को तुरंत पहचानने योग्य बनाएं।",
    features: ["Logo design (3 concepts)", "Brand colour palette", "Visiting cards", "Brand guideline PDF"],
    price: "₹4,999",
    priceNote: "onwards",
    cardBorder: "#E9D5FF",
    checkColor: "#9333EA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    badge: "Save Time",
    badgeBg: "#ECFDF5",
    badgeColor: "#059669",
    title: "Business Automation",
    tagline: "पूछताछ का फॉलो-अप करें, बिना मैन्युअल काम के।",
    desc: "WhatsApp auto-replies, lead capture, and CRM workflows so no enquiry ever slips through.",
    descHi: "WhatsApp के स्वचालित उत्तर, लीड कैप्चर, और CRM वर्कफ़्लो — ताकि कोई भी पूछताछ कभी छूटे नहीं।",
    features: ["WhatsApp auto-reply", "Lead capture forms", "CRM setup", "Appointment reminders"],
    price: "₹6,999",
    priceNote: "onwards",
    cardBorder: "#A7F3D0",
    checkColor: "#059669",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        {/* Section header */}
        <div style={{ marginBottom: "72px", maxWidth: "520px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>हमारी सेवाएं</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            सात सेवाएं। <span className="accent">एक</span> एजेंसी।
          </h2>
          <p className="t-body">
            आपके व्यवसाय को ऑनलाइन बढ़ाने के लिए सब कुछ — एक ही जगह।
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "20px" }}>
          {services.map((s, i) => (
            <div key={i} className="card" style={{
              background: "#fff",
              border: `1px solid #E2E8F0`,
              borderTop: `3px solid ${s.cardBorder}`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              padding: "32px",
              position: "relative",
              borderRadius: "20px",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; }}>

              {/* Badge */}
              <div style={{
                position: "absolute", top: "24px", right: "24px",
                padding: "4px 12px", borderRadius: "100px",
                background: s.badgeBg,
                fontSize: "11px", fontWeight: 700, color: s.badgeColor, letterSpacing: "0.04em",
              }}>{s.badge}</div>

              {/* Icon */}
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: s.iconBg, color: s.iconColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                {s.icon}
              </div>

              <h3 className="t-h3" style={{ marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontSize: "13px", color: s.iconColor, fontWeight: 600, marginBottom: "12px" }}>{s.tagline}</p>
              <p style={{ fontSize: "14px", color: "#4B5563", marginBottom: "6px", lineHeight: 1.7 }}>{s.desc}</p>
              <p lang="hi" style={{ fontSize: "14px", color: "#4B5563", marginBottom: "24px", lineHeight: 1.7 }}>{s.descHi}</p>

              {/* Features */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "16px", height: "16px", borderRadius: "50%",
                      background: s.iconBg, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={s.checkColor} strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: "20px", borderTop: "1px solid #F1F5F9",
              }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 600, marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.priceNote}</div>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.price}</div>
                </div>
                <a href="#contact" style={{
                  padding: "10px 20px", borderRadius: "10px",
                  background: s.iconBg,
                  color: s.iconColor, fontWeight: 600, fontSize: "14px", textDecoration: "none",
                  border: `1px solid ${s.cardBorder}`,
                  transition: "opacity 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.8"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                  शुरू करें →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
