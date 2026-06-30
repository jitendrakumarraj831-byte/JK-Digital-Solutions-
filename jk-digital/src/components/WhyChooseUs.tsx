import { ArrowRight } from "lucide-react";

const reasons = [
  { emoji: "📍", title: "Local Experts", desc: "हम Forbesganj में ही हैं। आपके market को, language को, customers को personally जानते हैं।" },
  { emoji: "📊", title: "Result-First", desc: "Vanity metrics नहीं, real results — Calls, Leads, actual Customers। हर campaign का measurable goal।" },
  { emoji: "🔒", title: "100% Transparent", desc: "Monthly detailed reports। कोई jargon नहीं, कोई hidden fees नहीं। सब कुछ clear और simple।" },
  { emoji: "⚡", title: "Fast Delivery", desc: "Website 30 days में। GMB 7 days में। Google Ads same day। बात से ज्यादा काम में believe।" },
];

export default function WhyChooseUs() {
  return (
    <section style={{ background: "#111827", padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "56px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#60a5fa", marginBottom: "16px" }}>Why Us</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "16px" }}>
              दूसरे agencies से हम क्यों <span className="g-text">अलग हैं?</span>
            </h2>
            <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: "32px", fontSize: "15px" }}>
              हर agency यही कहती है कि वो best है। हम results से prove करते हैं।
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "100px", background: "#2563eb", color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Free Audit लें <ArrowRight style={{ width: "14px", height: "14px" }} />
              </a>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                WhatsApp करें
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {reasons.map(r => (
              <div key={r.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "20px", borderRadius: "16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: "24px", flexShrink: 0 }}>{r.emoji}</span>
                <div>
                  <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: "4px", fontSize: "15px" }}>{r.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.6 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
