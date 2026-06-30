"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Website बनाने में कितना time लगता है?", a: "Standard 5-10 page website 15-30 दिनों में deliver होती है। Complex e-commerce या custom portals में 45-60 दिन। हम हर project की timeline पहले ही clearly define करते हैं।" },
  { q: "Google SEO results कब दिखना शुरू होते हैं?", a: "Local SEO में 3-6 महीनों में consistent first-page results दिखते हैं। Google Maps पर 4-8 हफ्तों में improvement आती है। Google Ads से तो पहले दिन ही traffic और calls शुरू हो जाते हैं।" },
  { q: "क्या आप Forbesganj के बाहर भी काम करते हैं?", a: "हां, हम digitally पूरे India में serve करते हैं। Video calls, WhatsApp और email से seamlessly काम करते हैं। लेकिन हमारी core expertise है Bihar — Forbesganj, Araria, Kishanganj, Purnia और Katihar का local market।" },
  { q: "Google Ads के लिए minimum budget क्या होना चाहिए?", a: "₹5,000/month के ad budget से meaningful results मिलते हैं। हमारी management fee इसके ऊपर है। ₹10,000-₹20,000/month के budget पर ROI सबसे अच्छा होता है। हम आपके business के लिए सही budget recommend करेंगे।" },
  { q: "Website delivery के बाद क्या support मिलेगा?", a: "सभी plans में minimum 6-12 months की free maintenance शामिल है। Minor content updates, plugin updates, security patches — सब cover है। बड़े changes या new features के लिए reasonable rates पर काम करते हैं।" },
  { q: "क्या आपके पास previous work का portfolio देख सकते हैं?", a: "बिल्कुल! हमारे website पर case studies हैं। Detailed portfolio देखना हो, actual websites visit करनी हों, या किसी existing client से बात करनी हो — WhatsApp पर message करें, arrange करते हैं।" },
  { q: "Payment कैसे होती है? क्या EMI possible है?", a: "UPI, Bank Transfer, Cash — सभी methods accepted हैं। Website projects पर 50% advance + 50% delivery पर। Monthly retainer services पर advance monthly payment। Larger projects पर milestone-based payment भी arrange होती है।" },
  { q: "Contract period क्या होगा? बीच में छोड़ सकते हैं क्या?", a: "Monthly services पर minimum 3-month commitment। इससे strategy को proper time मिलता है। 3 months बाद monthly renewal होती है। Website project one-time है, कोई lock-in नहीं। हम transparent और flexible हैं।" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "#f8fafc", padding: "100px 0" }}>
      <div className="wrap-sm">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>FAQ</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, color: "#0f172a",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px"
          }}>
            सवाल जो <span style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>अक्सर पूछे जाते हैं</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "16px" }}>
            और भी सवाल है? <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", fontWeight: 600, textDecoration: "none" }}>WhatsApp पर पूछें →</a>
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              borderRadius: "16px", overflow: "hidden",
              border: `1.5px solid ${open === i ? "#bfdbfe" : "#e2e8f0"}`,
              background: open === i ? "#fff" : "#fff",
              boxShadow: open === i ? "0 4px 24px rgba(59,130,246,0.08)" : "none",
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)"
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between", padding: "20px 24px",
                  background: "none", border: "none", cursor: "pointer",
                  textAlign: "left", gap: "16px"
                }}>
                <span style={{
                  fontWeight: 600, fontSize: "15px", lineHeight: 1.45,
                  color: open === i ? "#1d4ed8" : "#0f172a"
                }}>{f.q}</span>
                <span style={{
                  width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: open === i ? "#eff6ff" : "#f1f5f9",
                  color: open === i ? "#2563eb" : "#94a3b8",
                  transition: "all 0.2s"
                }}>
                  {open === i
                    ? <Minus style={{ width: "14px", height: "14px" }} />
                    : <Plus style={{ width: "14px", height: "14px" }} />}
                </span>
              </button>
              <div className={`acc ${open === i ? "open" : ""}`}>
                <p style={{ padding: "0 24px 20px", color: "#64748b", fontSize: "14px", lineHeight: 1.8 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
