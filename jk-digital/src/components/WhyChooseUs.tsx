"use client";
import { useLanguage, useT } from "@/lib/i18n";

const reasons = [
  {
    iconBg: "#EFF6FF", iconColor: "#1D4ED8",
    title: { en: "Fast Delivery", hi: "तेज़ डिलीवरी" },
    desc: {
      en: "Websites launch in as little as 15 days, ad campaigns go live in 48 hours. We work at the pace your business needs.",
      hi: "वेबसाइट सिर्फ 15 दिनों में लॉन्च होती है, विज्ञापन कैंपेन 48 घंटों में लाइव हो जाते हैं। हम आपके बिज़नेस की ज़रूरत की रफ्तार से काम करते हैं।",
    },
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    iconBg: "#F0FDF4", iconColor: "#16A34A",
    title: { en: "Affordable Pricing", hi: "किफायती मूल्य" },
    desc: {
      en: "Premium quality without agency mark-ups. Transparent packages built for growing businesses, not big-brand budgets.",
      hi: "एजेंसी मार्क-अप के बिना प्रीमियम क्वालिटी। बड़े ब्रांड बजट के लिए नहीं, बढ़ते बिज़नेस के लिए पारदर्शी पैकेज।",
    },
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  },
  {
    iconBg: "#ECFEFF", iconColor: "#06B6D4",
    title: { en: "Result Driven", hi: "नतीजों पर केंद्रित" },
    desc: {
      en: "We measure success in leads, calls, and revenue — not vanity metrics. Every decision is tied to a business outcome.",
      hi: "हम सफलता को लीड्स, कॉल्स और रेवेन्यू में मापते हैं — दिखावटी आंकड़ों में नहीं। हर फैसला बिज़नेस के नतीजे से जुड़ा होता है।",
    },
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    iconBg: "#EEF2FF", iconColor: "#4F46E5",
    title: { en: "Mobile First", hi: "मोबाइल-फर्स्ट" },
    desc: {
      en: "Over 70% of your customers browse on a phone. Every site and campaign is designed mobile-first, then scaled up.",
      hi: "आपके 70% से ज़्यादा ग्राहक फोन पर ब्राउज़ करते हैं। हर साइट और कैंपेन पहले मोबाइल के लिए डिज़ाइन होता है, फिर बड़ा किया जाता है।",
    },
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  },
  {
    iconBg: "#FFFBEB", iconColor: "#D97706",
    title: { en: "SEO Friendly", hi: "SEO फ्रेंडली" },
    desc: {
      en: "Every website and page we ship is built on clean, search-optimised foundations — so you rank from day one.",
      hi: "हम जो भी वेबसाइट और पेज बनाते हैं वो साफ़, सर्च-ऑप्टिमाइज़्ड नींव पर बनते हैं — ताकि आप पहले दिन से रैंक करें।",
    },
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    iconBg: "#FDF4FF", iconColor: "#9333EA",
    title: { en: "Dedicated Support", hi: "समर्पित सपोर्ट" },
    desc: {
      en: "A real person on WhatsApp, not a ticketing queue. Questions get answered the same day, every day.",
      hi: "व्हाट्सएप पर एक असली इंसान, कोई टिकटिंग क्यू नहीं। सवालों के जवाब उसी दिन मिलते हैं, हर दिन।",
    },
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    iconBg: "#F0FDF4", iconColor: "#16A34A",
    title: { en: "Experienced Team", hi: "अनुभवी टीम" },
    desc: {
      en: "Designers, developers and marketers who've shipped for clinics, schools, restaurants, hotels and retailers alike.",
      hi: "डिज़ाइनर, डेवलपर और मार्केटर जिन्होंने क्लिनिक, स्कूल, रेस्टोरेंट, होटल और रिटेलर्स के लिए काम किया है।",
    },
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  },
  {
    iconBg: "#EFF6FF", iconColor: "#1D4ED8",
    title: { en: "Latest Technologies", hi: "नवीनतम तकनीक" },
    desc: {
      en: "Modern frameworks, fast hosting, and current best practice — no outdated templates or bloated page builders.",
      hi: "आधुनिक फ्रेमवर्क, तेज़ होस्टिंग और मौजूदा बेस्ट प्रैक्टिस — कोई पुराने टेम्पलेट या भारी पेज बिल्डर नहीं।",
    },
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
];

export default function WhyChooseUs() {
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="why" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ marginBottom: "72px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("Why Choose Us", "हमें क्यों चुनें")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("Built for businesses that want", "उन बिज़नेस के लिए जो चाहते हैं")} <span className="accent">{t("real", "असली")}</span> {t("growth.", "ग्रोथ।")}
          </h2>
          <p className="t-body">
            {t(
              "We combine premium design with measurable marketing — so your investment shows up as customers, not just clicks.",
              "हम प्रीमियम डिज़ाइन को मापने योग्य मार्केटिंग के साथ जोड़ते हैं — ताकि आपका निवेश सिर्फ क्लिक नहीं, ग्राहकों में दिखे।"
            )}
          </p>
        </div>

        {/* Reasons */}
        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "16px" }}>
          {reasons.map(r => (
            <div key={r.title.en} className="card" style={{
              padding: "28px", background: "#fff",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)"; }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: r.iconBg, color: r.iconColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
              }}>{r.icon}</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", marginBottom: "8px" }}>{lang === "hi" ? r.title.hi : r.title.en}</h3>
              <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>{lang === "hi" ? r.desc.hi : r.desc.en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
