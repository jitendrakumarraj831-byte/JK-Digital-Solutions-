"use client";
import { useState } from "react";

const faqs = [
  { q:"Website बनाने में कितना समय लगता है?", a:"एक standard 5-10 page website 15-30 दिनों में deliver होती है। हम हमेशा agreed deadline पर deliver करते हैं।" },
  { q:"Google पर rank होने में कितना समय लगेगा?", a:"Local SEO में 3-6 महीनों में first page results आते हैं। Google Maps में 4-8 हफ्तों में improvement दिखती है। Google Ads से same day results मिलते हैं।" },
  { q:"क्या आप Forbesganj के बाहर भी service देते हैं?", a:"हां, हम पूरे Bihar और India में serve करते हैं। Core expertise है Forbesganj, Araria, Kishanganj, Purnia का local market।" },
  { q:"Google Ads के लिए minimum budget क्या चाहिए?", a:"₹5,000-₹10,000/month से एक अच्छी शुरुआत होती है। हम budget को maximize करके best results लाते हैं।" },
  { q:"Website के बाद support मिलता है क्या?", a:"हां, सभी plans में 1 साल की free maintenance शामिल है। Minor changes और technical support के लिए WhatsApp पर available हैं।" },
  { q:"Payment कैसे होती है?", a:"UPI, Bank Transfer, Cash — सभी accepted हैं। Website के लिए 50% advance + 50% delivery पर। Monthly services के लिए advance monthly payment।" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section id="faq" style={{ background: "#fff", padding: "80px 0" }}>
      <div className="wrap-sm">
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2563eb", marginBottom: "12px" }}>FAQ</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#111827", marginBottom: "12px" }}>Common Questions</h2>
          <p style={{ color: "#6b7280" }}>जो सवाल अक्सर पूछे जाते हैं।</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ border: `1px solid ${open===i ? "#bfdbfe" : "#e5e7eb"}`, borderRadius: "16px", overflow: "hidden", background: open===i ? "#f0f7ff" : "#fff", transition: "all 0.2s" }}>
              <button onClick={() => setOpen(open===i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}>
                <span style={{ fontWeight: 600, fontSize: "14px", color: open===i ? "#1d4ed8" : "#111827", lineHeight: 1.4 }}>{f.q}</span>
                <span style={{ color: open===i ? "#2563eb" : "#9ca3af", fontSize: "18px", flexShrink: 0, lineHeight: 1 }}>{open===i ? "−" : "+"}</span>
              </button>
              <div className={`acc ${open===i ? "open" : ""}`}>
                <p style={{ padding: "0 20px 18px", color: "#6b7280", fontSize: "14px", lineHeight: 1.7 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "12px" }}>और भी सवाल हैं?</p>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "100px", background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            💬 WhatsApp पर पूछें
          </a>
        </div>
      </div>
    </section>
  );
}
