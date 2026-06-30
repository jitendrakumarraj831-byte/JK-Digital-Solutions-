"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Website बनाने में कितना time लगता है?",
    a: "Standard 5-10 page website 15-30 दिनों में deliver होती है। Complex e-commerce या custom portals 45-60 दिन लेते हैं। हम हर project की timeline पहले ही clearly define करते हैं — कोई surprise नहीं।",
  },
  {
    q: "Google SEO results कब दिखना शुरू होते हैं?",
    a: "Local SEO में 3-6 महीनों में consistent first-page results आते हैं। Google Maps पर 4-8 हफ्तों में improvement दिखती है। Google Ads से तो पहले दिन ही targeted traffic और calls शुरू हो जाते हैं।",
  },
  {
    q: "क्या आप Forbesganj के बाहर भी काम करते हैं?",
    a: "हां, हम digitally पूरे India में serve करते हैं। Video calls, WhatsApp और email से seamlessly काम करते हैं। Core expertise Bihar में है — Forbesganj, Araria, Kishanganj, Purnia और Katihar।",
  },
  {
    q: "Google Ads के लिए minimum budget क्या होना चाहिए?",
    a: "₹5,000/month के ad budget से meaningful results मिलते हैं। Management fee इसके ऊपर है। ₹10,000-20,000/month के budget पर ROI सबसे अच्छा होता है। हम आपके business के लिए सही budget personally recommend करेंगे।",
  },
  {
    q: "Website delivery के बाद क्या support मिलेगा?",
    a: "सभी plans में minimum 6-12 months की free maintenance शामिल है। Content updates, security patches और performance optimization — सब cover। Major changes या new features के लिए competitive rates।",
  },
  {
    q: "Payment कैसे होती है? क्या EMI possible है?",
    a: "UPI, Bank Transfer और Cash — सभी methods accepted। Website projects पर 50% advance + 50% delivery पर। Monthly services पर advance monthly payment। Larger projects पर milestone-based payment arrange होती है।",
  },
  {
    q: "क्या आप existing website पर भी काम करते हैं?",
    a: "बिल्कुल! Existing website redesign, speed optimization, SEO improvement और bug fixing — सब करते हैं। पहले free audit करते हैं, फिर roadmap decide होता है।",
  },
  {
    q: "Contract period क्या होगा?",
    a: "Monthly services पर minimum 3-month commitment — strategy को proper time मिलता है। 3 months बाद monthly renewal। Website project one-time है, कोई lock-in नहीं। हम पूरी तरह transparent और flexible हैं।",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "#05091a", padding: "112px 0" }}>
      <div className="wrap-sm">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>FAQ</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: "18px",
          }}>
            सवाल जो{" "}
            <span className="grad-text">अक्सर पूछे जाते हैं</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "15px" }}>
            और भी सवाल है?{" "}
            <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
              style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>
              WhatsApp पर पूछें →
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((f, i) => (
            <div key={i}
              style={{
                borderRadius: "16px", overflow: "hidden",
                border: `1.5px solid ${open === i ? "rgba(96,165,250,0.3)" : "rgba(255,255,255,0.08)"}`,
                background: open === i ? "rgba(59,130,246,0.06)" : "rgba(255,255,255,0.03)",
                boxShadow: open === i ? "0 4px 28px rgba(59,130,246,0.08)" : "none",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between", padding: "22px 24px",
                  background: "none", border: "none", cursor: "pointer",
                  textAlign: "left", gap: "16px",
                }}>
                <span style={{
                  fontWeight: 600, fontSize: "15px", lineHeight: 1.45,
                  color: open === i ? "#93c5fd" : "#e2e8f0",
                }}>{f.q}</span>
                <span style={{
                  width: "28px", height: "28px", borderRadius: "8px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: open === i ? "rgba(96,165,250,0.15)" : "rgba(255,255,255,0.06)",
                  color: open === i ? "#60a5fa" : "rgba(255,255,255,0.4)",
                  transition: "all 0.25s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </span>
              </button>

              <div className={`acc ${open === i ? "open" : ""}`}>
                <p style={{ padding: "0 24px 24px", color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.85 }}>
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
