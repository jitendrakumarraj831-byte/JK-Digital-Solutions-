"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Website बनाने में कितना time लगता है?",
    a: "Standard 5-10 page website 15-30 दिनों में deliver होती है। Complex e-commerce या custom portals 45-60 दिन लेते हैं। हम हर project की timeline पहले ही clearly define करते हैं — कोई surprise नहीं।",
  },
  {
    q: "Google SEO results कब दिखना शुरू होते हैं?",
    a: "Local SEO में 60-90 दिनों में visible results आते हैं। National SEO 3-6 months लेता है। Google Ads और GMB Optimization में results 1-2 weeks में ही शुरू होते हैं।",
  },
  {
    q: "क्या आप Forbesganj के बाहर भी काम करते हैं?",
    a: "हाँ! हम पूरे Bihar — Araria, Purnia, Kishanganj, Sitamarhi — और across India में clients serve करते हैं। Location कोई barrier नहीं है। सब कुछ remotely manage होता है।",
  },
  {
    q: "Google Ads के लिए minimum budget क्या होना चाहिए?",
    a: "हम ₹5,000/month ad spend से शुरू करते हैं। Management fee अलग होती है। हम आपके business और goals के हिसाब से optimal budget recommend करते हैं।",
  },
  {
    q: "क्या कोई long-term contract है?",
    a: "नहीं! हम monthly flexible contracts में काम करते हैं। मिनिमम 3 months recommended है results के लिए, लेकिन आप कभी भी exit कर सकते हैं। कोई lock-in नहीं।",
  },
  {
    q: "Reports और updates कैसे मिलते हैं?",
    a: "हर महीने detailed PDF report, weekly WhatsApp updates, और monthly strategy call। आप हमेशा जानेंगे आपका पैसा कहाँ जा रहा है और क्या results आ रहे हैं।",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{
      padding: "112px 0",
      background: "linear-gradient(180deg, #08001f 0%, #0a0420 50%, #060018 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: "-10%", right: "-10%",
        width: "450px", height: "450px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap-sm" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "14px" }}>FAQ</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "16px",
          }}>
            सवाल जो अक्सर <span className="grad-text-warm">पूछे जाते हैं</span>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(196,181,253,0.5)", lineHeight: 1.7 }}>
            और भी सवाल है?{" "}
            <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
              style={{ color: "#a78bfa", fontWeight: 700, textDecoration: "none" }}>
              WhatsApp पर पूछें →
            </a>
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderRadius: "18px",
                background: isOpen
                  ? "linear-gradient(145deg, rgba(124,58,237,0.22), rgba(99,102,241,0.14))"
                  : "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                border: isOpen ? "1px solid rgba(167,139,250,0.38)" : "1px solid rgba(255,255,255,0.07)",
                overflow: "hidden",
                transition: "all 0.28s",
              }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: "12px",
                    padding: "22px 24px", background: "none", border: "none",
                    cursor: "pointer", textAlign: "left",
                  }}>
                  <span className="font-display" style={{
                    fontSize: "15px", fontWeight: 700, lineHeight: 1.4,
                    color: isOpen ? "#c4b5fd" : "rgba(228,220,255,0.85)",
                  }}>{f.q}</span>
                  <div style={{
                    width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
                    background: isOpen
                      ? "linear-gradient(135deg,#7c3aed,#6366f1)"
                      : "rgba(255,255,255,0.06)",
                    border: isOpen ? "none" : "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.25s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#fff" : "rgba(228,220,255,0.5)"} strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </button>
                <div className={`acc${isOpen ? " open" : ""}`}>
                  <p style={{
                    padding: "0 24px 22px",
                    color: "rgba(228,220,255,0.62)", fontSize: "14px", lineHeight: 1.8,
                  }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
