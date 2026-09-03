"use client";
import { useLanguage, useT } from "@/lib/i18n";

const services = [
  {
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    badge: { en: "Most Popular", hi: "सबसे लोकप्रिय" },
    badgeBg: "#EFF6FF",
    badgeColor: "#1D4ED8",
    title: { en: "Website Development", hi: "वेबसाइट डेवलपमेंट" },
    tagline: { en: "Your 24/7 online sales representative.", hi: "आपका 24/7 ऑनलाइन सेल्स प्रतिनिधि।" },
    features: [
      { en: "Mobile-first design", hi: "मोबाइल-फर्स्ट डिज़ाइन" },
      { en: "SEO architecture", hi: "SEO आर्किटेक्चर" },
      { en: "30-day delivery", hi: "30 दिन में डिलीवरी" },
      { en: "1 year free support", hi: "1 साल मुफ्त सपोर्ट" },
    ],
    price: "₹8,999",
    priceNote: { en: "onwards", hi: "से शुरू" },
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
    badge: { en: "Best ROI", hi: "बेस्ट ROI" },
    badgeBg: "#F0FDF4",
    badgeColor: "#16A34A",
    title: { en: "SEO", hi: "SEO" },
    tagline: { en: "Rank higher. Pay nothing for the click.", hi: "ऊपर रैंक करें। क्लिक के लिए कुछ न दें।" },
    features: [
      { en: "Local + national SEO", hi: "लोकल + नेशनल SEO" },
      { en: "Keyword research", hi: "कीवर्ड रिसर्च" },
      { en: "Monthly reports", hi: "मासिक रिपोर्ट" },
      { en: "Competitor analysis", hi: "प्रतिस्पर्धी विश्लेषण" },
    ],
    price: "₹4,999",
    priceNote: { en: "/ month", hi: "/ माह" },
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
    badge: { en: "Free Setup", hi: "मुफ्त सेटअप" },
    badgeBg: "#ECFEFF",
    badgeColor: "#06B6D4",
    title: { en: "Google Business Profile", hi: "Google बिज़नेस प्रोफाइल" },
    tagline: { en: "Win local search. Reach customers nearby.", hi: "लोकल सर्च जीतें। आस-पास के ग्राहकों तक पहुंचें।" },
    features: [
      { en: "Complete GMB setup", hi: "पूरा GMB सेटअप" },
      { en: "Review management", hi: "रिव्यू मैनेजमेंट" },
      { en: "Photo optimisation", hi: "फोटो ऑप्टिमाइज़ेशन" },
      { en: "Local ranking", hi: "लोकल रैंकिंग" },
    ],
    price: "₹2,499",
    priceNote: { en: "/ month", hi: "/ माह" },
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
    badge: { en: "Fastest Results", hi: "सबसे तेज़ नतीजे" },
    badgeBg: "#EEF2FF",
    badgeColor: "#4F46E5",
    title: { en: "Google Ads", hi: "Google विज्ञापन" },
    tagline: { en: "Pay for results, not just impressions.", hi: "सिर्फ इंप्रेशन नहीं, नतीजों के लिए भुगतान करें।" },
    features: [
      { en: "Campaign setup", hi: "कैंपेन सेटअप" },
      { en: "Bid optimisation", hi: "बिड ऑप्टिमाइज़ेशन" },
      { en: "Ad copywriting", hi: "एड कॉपीराइटिंग" },
      { en: "Weekly reports", hi: "साप्ताहिक रिपोर्ट" },
    ],
    price: "₹3,999",
    priceNote: { en: "/ month", hi: "/ माह" },
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
    badge: { en: "Trending", hi: "ट्रेंडिंग" },
    badgeBg: "#FDF2F8",
    badgeColor: "#DB2777",
    title: { en: "Social Media Marketing", hi: "सोशल मीडिया मार्केटिंग" },
    tagline: { en: "Show up where your customers already are.", hi: "वहां मौजूद रहें जहां आपके ग्राहक पहले से हैं।" },
    features: [
      { en: "Content calendar", hi: "कंटेंट कैलेंडर" },
      { en: "Reels & graphics", hi: "रील्स और ग्राफिक्स" },
      { en: "Community management", hi: "कम्युनिटी मैनेजमेंट" },
      { en: "Monthly insights", hi: "मासिक इनसाइट्स" },
    ],
    price: "₹5,999",
    priceNote: { en: "/ month", hi: "/ माह" },
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
    badge: { en: "Build Trust", hi: "भरोसा बनाएं" },
    badgeBg: "#FDF4FF",
    badgeColor: "#9333EA",
    title: { en: "Brand Identity", hi: "ब्रांड आइडेंटिटी" },
    tagline: { en: "A consistent look, everywhere your business appears.", hi: "आपका बिज़नेस जहां भी दिखे, एक जैसा लुक।" },
    features: [
      { en: "Brand colour palette", hi: "ब्रांड कलर पैलेट" },
      { en: "Typography system", hi: "टाइपोग्राफी सिस्टम" },
      { en: "Brand guideline PDF", hi: "ब्रांड गाइडलाइन PDF" },
      { en: "Templates for social & print", hi: "सोशल और प्रिंट टेम्पलेट्स" },
    ],
    price: "₹6,999",
    priceNote: { en: "onwards", hi: "से शुरू" },
    cardBorder: "#E9D5FF",
    checkColor: "#9333EA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 000 20"/><path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    iconBg: "#FFF1F2",
    iconColor: "#E11D48",
    badge: { en: "First Impression", hi: "पहला प्रभाव" },
    badgeBg: "#FFF1F2",
    badgeColor: "#E11D48",
    title: { en: "Logo Design", hi: "लोगो डिज़ाइन" },
    tagline: { en: "An identity that's remembered.", hi: "एक ऐसी पहचान जो याद रह जाए।" },
    features: [
      { en: "3 unique concepts", hi: "3 यूनिक कॉन्सेप्ट" },
      { en: "Unlimited revisions", hi: "असीमित रिवीज़न" },
      { en: "All file formats", hi: "सभी फाइल फॉर्मेट" },
      { en: "Visiting card design", hi: "विज़िटिंग कार्ड डिज़ाइन" },
    ],
    price: "₹3,499",
    priceNote: { en: "onwards", hi: "से शुरू" },
    cardBorder: "#FECDD3",
    checkColor: "#E11D48",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    badge: { en: "Save Time", hi: "समय बचाएं" },
    badgeBg: "#ECFDF5",
    badgeColor: "#059669",
    title: { en: "Business Automation", hi: "बिज़नेस ऑटोमेशन" },
    tagline: { en: "Follow up on every enquiry — without manual work.", hi: "बिना मैनुअल काम के हर पूछताछ पर फॉलो-अप करें।" },
    features: [
      { en: "WhatsApp auto-reply", hi: "व्हाट्सएप ऑटो-रिप्लाई" },
      { en: "Lead capture forms", hi: "लीड कैप्चर फॉर्म" },
      { en: "CRM setup", hi: "CRM सेटअप" },
      { en: "Appointment reminders", hi: "अपॉइंटमेंट रिमाइंडर" },
    ],
    price: "₹6,999",
    priceNote: { en: "onwards", hi: "से शुरू" },
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
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="services" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        {/* Section header */}
        <div style={{ marginBottom: "72px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("Our Services", "हमारी सेवाएं")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("Eight services.", "आठ सेवाएं।")} <span className="accent">{t("One", "एक")}</span> {t("agency.", "एजेंसी।")}
          </h2>
          <p className="t-body">
            {t(
              "Everything your business needs to grow online — under one roof, one team, one point of contact.",
              "आपके बिज़नेस को ऑनलाइन बढ़ाने के लिए जो कुछ भी चाहिए — एक ही छत के नीचे, एक टीम, एक ही संपर्क बिंदु।"
            )}
          </p>
        </div>

        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "20px", alignItems: "stretch" }}>
          {services.map((s, i) => (
            <div key={i} className="card" style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
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
              }}>{lang === "hi" ? s.badge.hi : s.badge.en}</div>

              {/* Icon */}
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: s.iconBg, color: s.iconColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                {s.icon}
              </div>

              <h3 className="t-h3" style={{ marginBottom: "8px" }}>{lang === "hi" ? s.title.hi : s.title.en}</h3>
              <p style={{ fontSize: "14px", color: s.iconColor, fontWeight: 600, marginBottom: "24px", lineHeight: 1.6 }}>{lang === "hi" ? s.tagline.hi : s.tagline.en}</p>

              {/* Features */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
                {s.features.map(f => (
                  <div key={f.en} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "16px", height: "16px", borderRadius: "50%",
                      background: s.iconBg, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={s.checkColor} strokeWidth="3.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>{lang === "hi" ? f.hi : f.en}</span>
                  </div>
                ))}
              </div>

              {/* Footer — pinned to bottom so every card lines up */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: "20px", borderTop: "1px solid #F1F5F9",
                marginTop: "auto",
              }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#6B7280", fontWeight: 600, marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{lang === "hi" ? s.priceNote.hi : s.priceNote.en}</div>
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
                  {t("Get started →", "शुरू करें →")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
