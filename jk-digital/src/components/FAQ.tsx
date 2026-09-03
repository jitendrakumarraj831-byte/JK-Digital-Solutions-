"use client";
import { useState } from "react";
import { useLanguage, useT } from "@/lib/i18n";

// Kept in sync with the FAQPage JSON-LD in src/app/layout.tsx — the English
// text here must match what's in that schema, since Google requires
// structured data to reflect visible on-page content.
const faqs = [
  {
    q: {
      en: "Do you provide digital marketing services across Bihar?",
      hi: "क्या आप पूरे बिहार में डिजिटल मार्केटिंग सेवाएं देते हैं?",
    },
    a: {
      en: "Yes. We work with businesses throughout Bihar — including Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Purnia, Katihar, Begusarai, Araria and Forbesganj. Everything is managed remotely over WhatsApp and calls, so location is never a barrier.",
      hi: "हां। हम पूरे बिहार में — पटना, गया, मुजफ्फरपुर, भागलपुर, दरभंगा, पूर्णिया, कटिहार, बेगूसराय, अररिया और फारबिसगंज सहित — बिज़नेस के साथ काम करते हैं। सब कुछ व्हाट्सएप और कॉल पर रिमोट से मैनेज होता है, तो स्थान कभी बाधा नहीं है।",
    },
  },
  {
    q: {
      en: "How much does a website cost in Bihar?",
      hi: "बिहार में वेबसाइट बनाने की कीमत क्या है?",
    },
    a: {
      en: "Website packages start at ₹8,999. The exact price depends on the number of pages and features you need — message us on WhatsApp for a free, no-obligation quote.",
      hi: "वेबसाइट पैकेज ₹8,999 से शुरू होते हैं। सटीक कीमत पेजों की संख्या और ज़रूरी फीचर्स पर निर्भर करती है — मुफ्त कोटेशन के लिए व्हाट्सएप पर मैसेज करें।",
    },
  },
  {
    q: {
      en: "Do you set up Google Business Profile (Google My Business)?",
      hi: "क्या आप Google बिज़नेस प्रोफाइल (Google My Business) सेटअप करते हैं?",
    },
    a: {
      en: "Yes — Google Business Profile setup and optimisation is one of our most popular services, helping local businesses across Bihar show up in Google Maps and local search results.",
      hi: "हां — Google बिज़नेस प्रोफाइल सेटअप और ऑप्टिमाइज़ेशन हमारी सबसे लोकप्रिय सेवाओं में से एक है, जो बिहार भर के लोकल बिज़नेस को Google Maps और लोकल सर्च में दिखने में मदद करती है।",
    },
  },
  {
    q: {
      en: "How soon do SEO and Google Ads results show?",
      hi: "SEO और Google Ads के नतीजे कितनी जल्दी दिखते हैं?",
    },
    a: {
      en: "Local SEO typically shows visible ranking movement in 60–90 days. Google Ads and Google Business Profile optimisation deliver results much faster, usually within 1–2 weeks of launch.",
      hi: "लोकल SEO में आमतौर पर 60–90 दिनों में रैंकिंग में स्पष्ट बदलाव दिखता है। Google Ads और Google बिज़नेस प्रोफाइल ऑप्टिमाइज़ेशन के नतीजे कहीं तेज़ आते हैं, आमतौर पर लॉन्च के 1–2 हफ्तों में।",
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
        <div style={{ marginBottom: "48px" }}>
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
                background: "#fff",
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
