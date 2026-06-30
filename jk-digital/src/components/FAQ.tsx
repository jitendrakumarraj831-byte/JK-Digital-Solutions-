"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Website deliver होने में कितना time लगता है?",
    a: "A standard 5–10 page website takes 15–30 days. Complex builds — e-commerce, custom portals — take 45–60 days. We agree on the timeline before we start. No surprises.",
  },
  {
    q: "Google SEO results कब दिखना शुरू होते हैं?",
    a: "Local SEO shows visible movement in 60–90 days. Google Ads and GMB optimisation deliver results in 1–2 weeks. SEO is a long game — but one that pays off for years.",
  },
  {
    q: "क्या आप Forbesganj के बाहर भी serve करते हैं?",
    a: "Yes — we work with businesses across Bihar and all of India. Location is not a barrier. Everything is managed remotely, and we communicate over WhatsApp and calls.",
  },
  {
    q: "Google Ads के लिए minimum budget कितना होना चाहिए?",
    a: "We recommend starting with ₹5,000/month in ad spend. Management fee is separate. We'll tell you exactly what to expect at your budget before you spend a rupee.",
  },
  {
    q: "क्या कोई long-term contract है?",
    a: "No lock-in. We work on monthly billing. We recommend a 3-month commitment for meaningful SEO results, but you can stop any time. No exit penalties.",
  },
  {
    q: "Reporting कैसे होती है?",
    a: "Monthly PDF report, weekly WhatsApp updates, and a monthly strategy call. You always know what's working and where your money is going — in plain language.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{
      padding: "128px 0",
      background: "linear-gradient(180deg, #080020 0%, #060011 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div className="wrap-sm">
        <div style={{ marginBottom: "64px" }}>
          <p className="t-label" style={{ marginBottom: "16px" }}>FAQ</p>
          <h2 className="t-h2" style={{ marginBottom: "12px" }}>
            Common <span className="accent-warm">questions</span>.
          </h2>
          <p className="t-body">
            Still have questions?{" "}
            <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
              style={{ color: "#a78bfa", fontWeight: 600, textDecoration: "none" }}>
              Ask on WhatsApp →
            </a>
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderRadius: "14px",
                background: isOpen
                  ? "linear-gradient(145deg,rgba(124,58,237,0.14),rgba(99,102,241,0.08))"
                  : "rgba(255,255,255,0.03)",
                border: isOpen
                  ? "1px solid rgba(167,139,250,0.3)"
                  : "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                transition: "border-color 0.2s, background 0.2s",
              }}>
                <button onClick={() => setOpen(isOpen ? null : i)} style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between", gap: "12px",
                  padding: "20px 22px", background: "none", border: "none",
                  cursor: "pointer", textAlign: "left",
                }}>
                  <span style={{
                    fontSize: "15px", fontWeight: 600, lineHeight: 1.4,
                    color: isOpen ? "#fff" : "rgba(230,220,255,0.78)",
                    letterSpacing: "-0.01em",
                  }}>{f.q}</span>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                    background: isOpen ? "linear-gradient(135deg,#7c3aed,#6366f1)" : "rgba(255,255,255,0.05)",
                    border: isOpen ? "none" : "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform 0.22s, background 0.22s",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#fff" : "rgba(230,220,255,0.45)"} strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </button>
                <div className={`acc${isOpen ? " open" : ""}`}>
                  <p style={{
                    padding: "0 22px 20px",
                    fontSize: "15px", color: "rgba(230,220,255,0.55)", lineHeight: 1.75, fontWeight: 400,
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
