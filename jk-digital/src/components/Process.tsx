"use client";
import { useLanguage, useT } from "@/lib/i18n";

const steps = [
  {
    num: "01",
    title: { en: "Consultation", hi: "परामर्श" },
    desc: { en: "A free 30-minute conversation to understand your business, goals, and current online presence.", hi: "आपके बिज़नेस, लक्ष्य और मौजूदा ऑनलाइन उपस्थिति को समझने के लिए एक मुफ्त 30-मिनट की बातचीत।" },
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    num: "02",
    title: { en: "Research", hi: "रिसर्च" },
    desc: { en: "We study your industry, competitors, and target customers to find where the real opportunity is.", hi: "हम आपके उद्योग, प्रतिस्पर्धियों और लक्षित ग्राहकों का अध्ययन करते हैं ताकि असली अवसर ढूंढ सकें।" },
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    color: "#06B6D4",
    bg: "#ECFEFF",
  },
  {
    num: "03",
    title: { en: "Planning", hi: "योजना" },
    desc: { en: "A clear roadmap with timelines, deliverables, and goals — tailored to your budget and business type.", hi: "टाइमलाइन, डिलीवरेबल्स और लक्ष्यों के साथ एक स्पष्ट रोडमैप — आपके बजट और बिज़नेस के अनुसार तैयार।" },
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    num: "04",
    title: { en: "Design", hi: "डिज़ाइन" },
    desc: { en: "On-brand wireframes and visual design. Development only begins once you've approved the direction.", hi: "ब्रांड के अनुरूप वायरफ्रेम और विज़ुअल डिज़ाइन। आपकी मंज़ूरी के बाद ही डेवलपमेंट शुरू होता है।" },
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    color: "#9333EA",
    bg: "#FDF4FF",
  },
  {
    num: "05",
    title: { en: "Development", hi: "डेवलपमेंट" },
    desc: { en: "Our team builds — website, campaigns, SEO foundations, GMB — all on an agreed, transparent timeline.", hi: "हमारी टीम बनाती है — वेबसाइट, कैंपेन, SEO नींव, GMB — सब तय, पारदर्शी टाइमलाइन पर।" },
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    num: "06",
    title: { en: "Testing", hi: "टेस्टिंग" },
    desc: { en: "Every page, form, and campaign is checked across devices and browsers before it ever reaches you.", hi: "हर पेज, फॉर्म और कैंपेन आप तक पहुंचने से पहले हर डिवाइस और ब्राउज़र पर जांचा जाता है।" },
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    color: "#DB2777",
    bg: "#FDF2F8",
  },
  {
    num: "07",
    title: { en: "Launch", hi: "लॉन्च" },
    desc: { en: "Your website and campaigns go live to the world — with the full team watching and ready to react.", hi: "आपकी वेबसाइट और कैंपेन दुनिया के सामने लाइव होते हैं — पूरी टीम नज़र रखते हुए और तैयार रहती है।" },
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    num: "08",
    title: { en: "Support", hi: "सपोर्ट" },
    desc: { en: "Monthly reports, WhatsApp updates, and ongoing optimisation — so results keep improving, not just launch day.", hi: "मासिक रिपोर्ट, व्हाट्सएप अपडेट और लगातार ऑप्टिमाइज़ेशन — ताकि नतीजे सिर्फ लॉन्च के दिन नहीं, हमेशा बेहतर होते रहें।" },
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
];

export default function Process() {
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="process" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("How We Work", "हम कैसे काम करते हैं")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("From", "से")} <span className="accent">{t("consultation", "परामर्श")}</span> {t("to ongoing support.", "लगातार सपोर्ट तक।")}
          </h2>
          <p className="t-body" style={{ maxWidth: "460px", margin: "0 auto" }}>
            {t(
              "Eight clear steps — so your business grows fast, without any of the confusion.",
              "आठ स्पष्ट चरण — ताकि आपका बिज़नेस बिना किसी भ्रम के तेज़ी से बढ़े।"
            )}
          </p>
        </div>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", position: "relative" }}>
          {steps.map((s, i) => {
            const isRowEnd = (i + 1) % 4 === 0;
            return (
              <div key={i} style={{ position: "relative" }}>
                <div style={{
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "20px",
                  padding: "28px 22px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
                  height: "100%",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)"; }}>
                  {/* Step number */}
                  <div style={{
                    fontSize: "36px", fontWeight: 900, letterSpacing: "-0.06em",
                    color: s.color, opacity: 0.12, lineHeight: 1, marginBottom: "8px",
                  }}>{s.num}</div>
                  {/* Icon */}
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: s.bg, color: s.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "14px",
                  }}>{s.icon}</div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginBottom: "8px", letterSpacing: "-0.02em" }}>{lang === "hi" ? s.title.hi : s.title.en}</h3>
                  <p style={{ fontSize: "13.5px", color: "#4B5563", lineHeight: 1.65 }}>{lang === "hi" ? s.desc.hi : s.desc.en}</p>
                </div>
                {/* Connector arrow */}
                {i < steps.length - 1 && !isRowEnd && (
                  <div className="process-arrow" style={{
                    position: "absolute", top: "50%", right: "-14px",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    width: "26px", height: "26px", borderRadius: "50%",
                    background: "#fff", border: "1px solid #E2E8F0",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            {t("Start Your Free Consultation →", "अपना मुफ्त परामर्श शुरू करें →")}
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) { .process-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .process-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1000px) { .process-arrow { display: none !important; } }
      `}</style>
    </section>
  );
}
