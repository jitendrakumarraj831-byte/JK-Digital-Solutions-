import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#030712", color: "#fff" }}>
      <div className="wrap" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "40px", marginBottom: "40px" }}>
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #2563eb, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: "11px" }}>JK</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: "15px" }}>JK Digital Solutions</span>
            </div>
            <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.7, maxWidth: "280px", marginBottom: "20px" }}>
              Forbesganj, Bihar के local businesses को Google पर grow करने वाली trusted digital marketing agency।
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
                style={{ padding: "8px 16px", borderRadius: "100px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", color: "#4ade80", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                💬 WhatsApp
              </a>
              <a href="mailto:jkdigitalsolutionfbg@gmail.com"
                style={{ padding: "8px 16px", borderRadius: "100px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                ✉️ Email
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "13px", marginBottom: "16px" }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Website Development","Google SEO","Google Business Profile","Google Ads"].map(s => (
                <a key={s} href="#services" style={{ color: "#6b7280", fontSize: "13px", textDecoration: "none" }}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "13px", marginBottom: "16px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { href: "tel:+918651070831", t: "📞 +91 86510 70831" },
                { href: "tel:+918541849118", t: "📞 +91 85418 49118" },
                { href: "mailto:jkdigitalsolutionfbg@gmail.com", t: "✉️ jkdigitalsolutionfbg@gmail.com" },
              ].map(c => <a key={c.t} href={c.href} style={{ color: "#6b7280", fontSize: "13px", textDecoration: "none", wordBreak: "break-all" }}>{c.t}</a>)}
              <span style={{ color: "#6b7280", fontSize: "13px" }}>📍 Forbesganj, Araria, Bihar</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ color: "#4b5563", fontSize: "12px" }}>© 2025 JK Digital Solutions · Made for Bihar 🇮🇳</p>
          <a href="#home" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            <ArrowUp style={{ width: "14px", height: "14px", color: "#6b7280" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
