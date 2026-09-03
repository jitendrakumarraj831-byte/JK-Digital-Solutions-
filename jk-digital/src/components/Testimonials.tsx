"use client";
import { useLanguage, useT } from "@/lib/i18n";

const reviews = [
  {
    name: "Rajan Kumar",
    role: { en: "Medical Store, Araria", hi: "मेडिकल स्टोर, अररिया" },
    initials: "RK",
    avatarBg: "#EFF6FF",
    avatarColor: "#1D4ED8",
    text: { en: "Once our Google Business Profile was optimised, our monthly footfall doubled. We saw clear results within 3 months.", hi: "जैसे ही हमारी Google बिज़नेस प्रोफाइल ऑप्टिमाइज़ हुई, हमारा मासिक फुटफॉल दोगुना हो गया। 3 महीनों में साफ़ नतीजे दिखे।" },
    service: { en: "GMB Optimization", hi: "GMB ऑप्टिमाइज़ेशन" },
  },
  {
    name: "Sunita Devi",
    role: { en: "Restaurant Owner, Forbesganj", hi: "रेस्टोरेंट मालिक, फारबिसगंज" },
    initials: "SD",
    avatarBg: "#FFFBEB",
    avatarColor: "#D97706",
    text: { en: "The moment our website launched, online orders started coming in. We now get 50+ orders every weekend — all online.", hi: "वेबसाइट लॉन्च होते ही ऑनलाइन ऑर्डर आने लगे। अब हमें हर वीकेंड 50+ ऑर्डर मिलते हैं — सब ऑनलाइन।" },
    service: { en: "Website + GMB", hi: "वेबसाइट + GMB" },
  },
  {
    name: "Amit Agarwal",
    role: { en: "Property Dealer, Araria", hi: "प्रॉपर्टी डीलर, अररिया" },
    initials: "AA",
    avatarBg: "#F0FDF4",
    avatarColor: "#16A34A",
    text: { en: "Google Ads brings in 40+ qualified enquiries every month now. Our ROI is 5x — it doesn't get much better than that.", hi: "Google Ads से अब हर महीने 40+ क्वालिफाइड पूछताछ आती हैं। हमारा ROI 5x है — इससे बेहतर क्या हो सकता है।" },
    service: { en: "Google Ads", hi: "Google विज्ञापन" },
  },
  {
    name: "Priya Sharma",
    role: { en: "Beauty Salon, Forbesganj", hi: "ब्यूटी सैलून, फारबिसगंज" },
    initials: "PS",
    avatarBg: "#FDF2F8",
    avatarColor: "#DB2777",
    text: { en: "We built a real presence on Instagram and Google. New clients tell us every week that they found us online.", hi: "हमने Instagram और Google पर एक असली उपस्थिति बनाई। नए ग्राहक हर हफ्ते बताते हैं कि उन्होंने हमें ऑनलाइन पाया।" },
    service: { en: "Social + SEO", hi: "सोशल + SEO" },
  },
  {
    name: "Rakesh Yadav",
    role: { en: "Coaching Centre, Araria", hi: "कोचिंग सेंटर, अररिया" },
    initials: "RY",
    avatarBg: "#ECFEFF",
    avatarColor: "#06B6D4",
    text: { en: "We had 120 new admissions this session — all from online enquiries. The website and SEO worked together perfectly.", hi: "इस सेशन में हमें 120 नए एडमिशन मिले — सब ऑनलाइन पूछताछ से। वेबसाइट और SEO ने साथ मिलकर बेहतरीन काम किया।" },
    service: { en: "Website + SEO", hi: "वेबसाइट + SEO" },
  },
  {
    name: "Mohan Lal",
    role: { en: "Hardware Store, Forbesganj", hi: "हार्डवेयर स्टोर, फारबिसगंज" },
    initials: "ML",
    avatarBg: "#EEF2FF",
    avatarColor: "#4F46E5",
    text: { en: "They brought our shop online — WhatsApp enquiries started coming in, and local customers now find us through Google Maps.", hi: "उन्होंने हमारी दुकान को ऑनलाइन लाया — व्हाट्सएप पूछताछ आने लगीं, और लोकल ग्राहक अब Google Maps से हमें ढूंढते हैं।" },
    service: { en: "GMB + Website", hi: "GMB + वेबसाइट" },
  },
];

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="testimonials" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("Testimonials", "प्रशंसापत्र")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("Growth stories from our", "हमारे")} <span className="accent">{t("clients", "ग्राहकों")}</span>{t(".", " की ग्रोथ कहानियां।")}
          </h2>
          <a href="https://g.page/jkdigital" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "14px", fontWeight: 600, color: "#4B5563",
            textDecoration: "none", transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#111827"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4B5563"}>
            <span style={{ color: "#F59E0B" }}>★★★★★</span>
            {t("4.9 on Google Reviews →", "Google रिव्यू पर 4.9 →")}
          </a>
        </div>

        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "16px" }}>
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

              {/* Stars + source */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <div style={{ fontSize: "14px", color: "#F59E0B", letterSpacing: "2px" }} aria-label="5 out of 5 stars">★★★★★</div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 01-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A12 12 0 0012 24z"/>
                    <path fill="#FBBC05" d="M5.27 14.28a7.2 7.2 0 010-4.56V6.61H1.26a12 12 0 000 10.78l4.01-3.11z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 001.26 6.61l4.01 3.11C6.22 6.86 8.87 4.75 12 4.75z"/>
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#6B7280" }}>{t("Google review", "Google रिव्यू")}</span>
                </div>
              </div>

              {/* Quote */}
              <p style={{ fontSize: "15px", lineHeight: 1.72, color: "#374151", marginBottom: "24px", fontWeight: 400 }}>
                &ldquo;{lang === "hi" ? r.text.hi : r.text.en}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", paddingTop: "20px", borderTop: "1px solid #F1F5F9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: r.avatarBg, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: 700, color: r.avatarColor,
                    border: `1px solid ${r.avatarColor}20`,
                  }} aria-hidden="true">{r.initials}</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>{r.name}</div>
                    <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "1px" }}>{lang === "hi" ? r.role.hi : r.role.en}</div>
                  </div>
                </div>
                <span style={{
                  fontSize: "11px", fontWeight: 600, color: r.avatarColor,
                  background: r.avatarBg, padding: "4px 10px", borderRadius: "100px",
                  whiteSpace: "nowrap",
                }}>{lang === "hi" ? r.service.hi : r.service.en}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
