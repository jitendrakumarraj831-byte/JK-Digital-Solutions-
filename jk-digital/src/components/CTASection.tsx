import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section style={{ background: "#f9fafb", padding: "64px 0" }}>
      <div className="wrap">
        <div style={{ background: "#111827", borderRadius: "24px", padding: "clamp(40px, 6vw, 80px) clamp(24px, 6vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 50%, rgba(37,99,235,0.35) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#60a5fa", marginBottom: "20px" }}>अभी शुरू करें</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "16px" }}>
              आपका Business Google पर<br />
              <span className="g-text">Top पर आने के लिए तैयार है?</span>
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "16px", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.65 }}>
              Free Consultation लें। हम analyze करेंगे कि आपके business के लिए कौन सी strategy सही है।
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "100px", background: "#fff", color: "#111827", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                Free Audit लें <ArrowRight style={{ width: "14px", height: "14px" }} />
              </a>
              <a href="https://wa.me/918651070831?text=नमस्ते! Free Consultation चाहिए।"
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "100px", background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                <MessageCircle style={{ width: "16px", height: "16px" }} /> WhatsApp करें
              </a>
            </div>
            <p style={{ color: "#4b5563", fontSize: "12px", marginTop: "24px" }}>📍 Forbesganj · 📞 +91 86510 70831 · ⚡ Reply in 30 mins</p>
          </div>
        </div>
      </div>
    </section>
  );
}
