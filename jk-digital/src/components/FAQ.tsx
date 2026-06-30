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
    <section id="faq" style={{ padding: "112px 0", background: "#F8FAFC" }}>
      <div className="wrap-sm">
        <div style={{ marginBottom: "64px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>अक्सर पूछे सवाल</p>
          <h2 className="t-h2" style={{ marginBottom: "12px" }}>
            आम <span className="accent">सवाल</span>।
          </h2>
          <p className="t-body">
            और सवाल हैं?{" "}
            <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
              style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>
              WhatsApp पर पूछें →
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
                border: isOpen ? "1.5px solid #2563EB" : "1px solid #E2E8F0",
                overflow: "hidden",
                boxShadow: isOpen ? "0 4px 20px rgba(37,99,235,0.08)" : "0 1px 4px rgba(0,0,0,0.03)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}>
                <button onClick={() => setOpen(isOpen ? null : i)} style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between", gap: "12px",
                  padding: "20px 24px", background: "none", border: "none",
                  cursor: "pointer", textAlign: "left",
                }}>
                  <span style={{
                    fontSize: "15px", fontWeight: 600, lineHeight: 1.4,
                    color: isOpen ? "#111827" : "#374151",
                    letterSpacing: "-0.01em",
                  }}>{f.q}</span>
                  <div style={{
                    width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
                    background: isOpen ? "#EFF6FF" : "#F1F5F9",
                    border: isOpen ? "1px solid #BFDBFE" : "1px solid #E2E8F0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform 0.22s, background 0.22s",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#2563EB" : "#94A3B8"} strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </button>
                <div className={`acc${isOpen ? " open" : ""}`}>
                  <p style={{
                    padding: "0 24px 20px",
                    fontSize: "15px", color: "#64748B", lineHeight: 1.75, fontWeight: 400,
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
