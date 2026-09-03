"use client";
import { useState } from "react";
import { useLanguage, useT } from "@/lib/i18n";

const faqs = [
  {
    q: { en: "How long does it take to build a website?", hi: "वेबसाइट बनाने में कितना समय लगता है?" },
    a: {
      en: "A standard 5–10 page website takes 15–30 days. Complex builds — e-commerce, custom portals — take 45–60 days. We agree on the timeline before we start. No surprises.",
      hi: "एक सामान्य 5–10 पेज वेबसाइट में 15–30 दिन लगते हैं। जटिल प्रोजेक्ट — ई-कॉमर्स, कस्टम पोर्टल — में 45–60 दिन लगते हैं। शुरू करने से पहले हम टाइमलाइन तय करते हैं। कोई आश्चर्य नहीं।",
    },
  },
  {
    q: { en: "When do SEO results start showing?", hi: "SEO के नतीजे कब दिखना शुरू होते हैं?" },
    a: {
      en: "Local SEO shows visible movement in 60–90 days. Google Ads and GMB optimisation deliver results in 1–2 weeks. SEO is a long game — but one that pays off for years.",
      hi: "लोकल SEO में 60–90 दिनों में स्पष्ट बदलाव दिखता है। Google Ads और GMB ऑप्टिमाइज़ेशन 1–2 हफ्तों में नतीजे देते हैं। SEO एक लंबा खेल है — लेकिन सालों तक फायदा देता है।",
    },
  },
  {
    q: { en: "Do you work with businesses outside our city?", hi: "क्या आप हमारे शहर के बाहर के बिज़नेस के साथ भी काम करते हैं?" },
    a: {
      en: "Yes — we work with businesses across India, in every industry from healthcare to hospitality. Location is not a barrier. Everything is managed remotely, and we communicate over WhatsApp and calls.",
      hi: "हां — हम पूरे भारत में, स्वास्थ्य सेवा से लेकर हॉस्पिटैलिटी तक हर उद्योग के बिज़नेस के साथ काम करते हैं। स्थान कोई बाधा नहीं है। सब कुछ रिमोट से प्रबंधित होता है, और हम व्हाट्सएप और कॉल पर संवाद करते हैं।",
    },
  },
  {
    q: { en: "What's the minimum budget for Google Ads?", hi: "Google Ads के लिए न्यूनतम बजट क्या है?" },
    a: {
      en: "We recommend starting with ₹5,000/month in ad spend. Management fee is separate. We'll tell you exactly what to expect at your budget before you spend a rupee.",
      hi: "हम ₹5,000/माह के विज्ञापन खर्च से शुरू करने की सलाह देते हैं। मैनेजमेंट फीस अलग है। एक रुपया खर्च करने से पहले हम बताएंगे कि आपके बजट में क्या उम्मीद करें।",
    },
  },
  {
    q: { en: "Is there a long-term contract?", hi: "क्या कोई लंबी अवधि का कॉन्ट्रैक्ट है?" },
    a: {
      en: "No lock-in. We work on monthly billing. We recommend a 3-month commitment for meaningful SEO results, but you can stop any time. No exit penalties.",
      hi: "कोई लॉक-इन नहीं। हम मासिक बिलिंग पर काम करते हैं। सार्थक SEO नतीजों के लिए हम 3 महीने की प्रतिबद्धता की सलाह देते हैं, लेकिन आप कभी भी रोक सकते हैं। कोई एग्ज़िट पेनल्टी नहीं।",
    },
  },
  {
    q: { en: "How does reporting work?", hi: "रिपोर्टिंग कैसे काम करती है?" },
    a: {
      en: "Monthly PDF report, weekly WhatsApp updates, and a monthly strategy call. You always know what's working and where your money is going — in plain language.",
      hi: "मासिक PDF रिपोर्ट, साप्ताहिक व्हाट्सएप अपडेट, और मासिक रणनीति कॉल। आपको हमेशा पता रहेगा कि क्या काम कर रहा है और आपका पैसा कहां जा रहा है — सरल भाषा में।",
    },
  },
  {
    q: { en: "Do you work with schools, hospitals, and other non-retail businesses?", hi: "क्या आप स्कूल, अस्पताल और अन्य गैर-रिटेल बिज़नेस के साथ काम करते हैं?" },
    a: {
      en: "Absolutely. We've built websites and campaigns for schools, hospitals, coaching institutes, hotels, restaurants, interior designers and real estate agents — each with a strategy suited to how their customers actually search.",
      hi: "बिल्कुल। हमने स्कूल, अस्पताल, कोचिंग संस्थान, होटल, रेस्टोरेंट, इंटीरियर डिज़ाइनर और रियल एस्टेट एजेंट के लिए वेबसाइट और कैंपेन बनाए हैं — हर एक के लिए उनके ग्राहकों की खोज के अनुसार रणनीति।",
    },
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { lang } = useLanguage();
  const t = useT();

  return (
    <section id="faq" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap-sm">
        <div style={{ marginBottom: "64px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>FAQ</p>
          <h2 className="t-h2" style={{ marginBottom: "12px" }}>
            {t("Frequently asked", "अक्सर पूछे जाने वाले")} <span className="accent">{t("questions", "सवाल")}</span>.
          </h2>
          <p className="t-body">
            {t("Still have questions?", "अभी भी सवाल हैं?")}{" "}
            <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
              style={{ color: "#1D4ED8", fontWeight: 600, textDecoration: "none" }}>
              {t("Ask us on WhatsApp →", "व्हाट्सएप पर पूछें →")}
            </a>
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderRadius: "16px",
                background: isOpen ? "#fff" : "#fff",
                border: isOpen ? "1.5px solid #1D4ED8" : "1px solid #E2E8F0",
                overflow: "hidden",
                boxShadow: isOpen ? "0 4px 20px rgba(29,78,216,0.08)" : "0 1px 4px rgba(0,0,0,0.03)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}>
                <h3 style={{ margin: 0 }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between", gap: "12px",
                      padding: "20px 24px", background: "none", border: "none",
                      cursor: "pointer", textAlign: "left",
                    }}>
                    <span style={{
                      fontSize: "15px", fontWeight: 600, lineHeight: 1.4,
                      color: isOpen ? "#111827" : "#374151",
                      letterSpacing: "-0.01em",
                    }}>{lang === "hi" ? f.q.hi : f.q.en}</span>
                    <div style={{
                      width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
                      background: isOpen ? "#EFF6FF" : "#F1F5F9",
                      border: isOpen ? "1px solid #BFDBFE" : "1px solid #E2E8F0",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform 0.22s, background 0.22s",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#1D4ED8" : "#64748B"} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </div>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.32s cubic-bezier(0.4,0,0.2,1)",
                  }}>
                  <div style={{ overflow: "hidden" }}>
                    <p style={{
                      padding: "0 24px 20px",
                      fontSize: "15px", color: "#4B5563", lineHeight: 1.75, fontWeight: 400,
                    }}>{lang === "hi" ? f.a.hi : f.a.en}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
