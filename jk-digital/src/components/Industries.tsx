"use client";
import { useLanguage, useT } from "@/lib/i18n";

const industries = [
  {
    name: { en: "Schools", hi: "स्कूल" },
    problem: { en: "Fill admission seats before the season closes.", hi: "सीज़न खत्म होने से पहले एडमिशन सीटें भरें।" },
    color: "#1D4ED8", bg: "#EFF6FF",
    icon: <><path d="M22 10L12 4 2 10l10 6 10-6z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></>,
  },
  {
    name: { en: "Hospitals & Clinics", hi: "अस्पताल और क्लिनिक" },
    problem: { en: "Be the first result when patients search nearby.", hi: "जब मरीज़ पास में खोजें तो पहला परिणाम बनें।" },
    color: "#06B6D4", bg: "#ECFEFF",
    icon: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/>,
  },
  {
    name: { en: "Restaurants", hi: "रेस्टोरेंट" },
    problem: { en: "Turn Google searches into table bookings and orders.", hi: "Google सर्च को टेबल बुकिंग और ऑर्डर में बदलें।" },
    color: "#D97706", bg: "#FFFBEB",
    icon: <><path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></>,
  },
  {
    name: { en: "Real Estate", hi: "रियल एस्टेट" },
    problem: { en: "Turn property listings into qualified buyer enquiries.", hi: "प्रॉपर्टी लिस्टिंग को क्वालिफाइड खरीदार पूछताछ में बदलें।" },
    color: "#16A34A", bg: "#F0FDF4",
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  },
  {
    name: { en: "Interior Designers", hi: "इंटीरियर डिज़ाइनर" },
    problem: { en: "Showcase a portfolio that converts browsers into clients.", hi: "एक ऐसा पोर्टफोलियो दिखाएं जो देखने वालों को क्लाइंट में बदल दे।" },
    color: "#9333EA", bg: "#FDF4FF",
    icon: <><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></>,
  },
  {
    name: { en: "Coaching Institutes", hi: "कोचिंग संस्थान" },
    problem: { en: "Replace referral-only admissions with a steady enquiry pipeline.", hi: "सिर्फ रेफरल पर निर्भर एडमिशन को एक स्थिर पूछताछ पाइपलाइन में बदलें।" },
    color: "#4F46E5", bg: "#EEF2FF",
    icon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></>,
  },
  {
    name: { en: "Hotels", hi: "होटल" },
    problem: { en: "Win direct bookings instead of paying OTA commissions.", hi: "OTA कमीशन देने के बजाय डायरेक्ट बुकिंग पाएं।" },
    color: "#DB2777", bg: "#FDF2F8",
    icon: <><path d="M2 4v16"/><path d="M2 8h18a2 2 0 012 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></>,
  },
  {
    name: { en: "Retail Shops", hi: "रिटेल शॉप" },
    problem: { en: "Get found by local customers searching Google Maps.", hi: "Google Maps पर खोजने वाले लोकल ग्राहकों तक पहुंचें।" },
    color: "#EA580C", bg: "#FFF7ED",
    icon: <><path d="M6 2l1.5 5h9L18 2"/><path d="M3 7h18l-1.5 13a2 2 0 01-2 1.8H6.5a2 2 0 01-2-1.8L3 7z"/><path d="M9 11v3"/><path d="M15 11v3"/></>,
  },
  {
    name: { en: "Startups", hi: "स्टार्टअप" },
    problem: { en: "Launch a credible online presence before your first pitch.", hi: "अपनी पहली पिच से पहले एक भरोसेमंद ऑनलाइन उपस्थिति बनाएं।" },
    color: "#059669", bg: "#ECFDF5",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  },
];

export default function Industries() {
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="industries" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("Industries We Serve", "हम जिन क्षेत्रों की सेवा करते हैं")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("Built for how", "इस तरह बनाया गया कि")} <span className="accent">{t("your", "आपके")}</span> {t("customers actually search.", "ग्राहक असल में कैसे खोजते हैं।")}
          </h2>
          <p className="t-body" style={{ maxWidth: "500px", margin: "0 auto" }}>
            {t(
              "Every industry searches, books, and buys differently. Our strategy is built around yours — not a generic template.",
              "हर उद्योग अलग तरीके से खोजता, बुक करता और खरीदता है। हमारी रणनीति आपके अनुसार बनाई जाती है — किसी सामान्य टेम्पलेट पर नहीं।"
            )}
          </p>
        </div>

        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
          {industries.map(ind => (
            <div key={ind.name.en} className="card" style={{
              display: "flex", alignItems: "flex-start", gap: "14px",
              padding: "22px", background: "#fff",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)"; }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "12px", flexShrink: 0,
                background: ind.bg, color: ind.color,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ind.icon}</svg>
              </div>
              <div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", marginBottom: "4px", letterSpacing: "-0.01em" }}>{lang === "hi" ? ind.name.hi : ind.name.en}</h3>
                <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.55 }}>{lang === "hi" ? ind.problem.hi : ind.problem.en}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#4B5563" }}>
            {t("Don't see your industry?", "आपका क्षेत्र नहीं दिख रहा?")} {" "}
            <a href="#contact" style={{ color: "#1D4ED8", fontWeight: 600, textDecoration: "none" }}>{t("We've probably still got you covered — let's talk →", "फिर भी हम शायद आपकी मदद कर सकते हैं — बात करते हैं →")}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
