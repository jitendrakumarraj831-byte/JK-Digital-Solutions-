"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const types = ["Medical / Clinic", "Restaurant / Dhaba", "Coaching / School", "Real Estate", "Beauty / Salon", "Hardware / Retail", "Hotel", "Service Provider", "E-commerce", "Other"];

interface F { name: string; phone: string; businessType: string; message: string; }
type S = "idle" | "loading" | "success" | "error";

const contacts = [
  { icon: "💬", label: "WhatsApp", value: "+91 86510 70831", sub: "Most Responsive", href: "https://wa.me/918651070831", accent: "#25D366" },
  { icon: "📞", label: "Call Us", value: "+91 85418 49118", sub: "Mon-Sat 9AM-8PM", href: "tel:+918541849118", accent: "#3b82f6" },
  { icon: "✉️", label: "Email", value: "jkdigitalsolutionfbg@gmail.com", sub: "Reply in 2-4 hours", href: "mailto:jkdigitalsolutionfbg@gmail.com", accent: "#8b5cf6" },
  { icon: "📍", label: "Location", value: "Forbesganj, Araria, Bihar", sub: "854318", href: "https://maps.google.com/?q=Forbesganj+Bihar", accent: "#f97316" },
];

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "11px", fontWeight: 700,
  textTransform: "uppercase", letterSpacing: "0.06em",
  color: "#64748b", marginBottom: "7px"
};

export default function Contact() {
  const [form, setForm] = useState<F>({ name: "", phone: "", businessType: "", message: "" });
  const [status, setStatus] = useState<S>("idle");
  const [msg, setMsg] = useState("");

  const chg = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const sub = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json();
      if (d.success) { setStatus("success"); setMsg(d.message); setForm({ name: "", phone: "", businessType: "", message: "" }); }
      else { setStatus("error"); setMsg(d.error || "Something went wrong."); }
    } catch { setStatus("error"); setMsg("Network error. Please try again."); }
  };

  return (
    <section id="contact" style={{ background: "#030712", padding: "100px 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "60px", alignItems: "start" }}>

          {/* Left: Info */}
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Contact</span>
            <h2 className="font-display" style={{
              fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, color: "#fff",
              letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px"
            }}>
              बात करते हैं,<br />
              <span className="grad-text">आज ही।</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", lineHeight: 1.7, marginBottom: "48px" }}>
              Form fill करें या directly reach करें। हम 30 minutes में respond करते हैं।
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "48px" }}>
              {contacts.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px",
                    borderRadius: "16px", textDecoration: "none",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.25s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${c.accent}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "20px" }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: "2px" }}>{c.label}</p>
                    <p style={{ fontWeight: 600, fontSize: "14px", color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</p>
                  </div>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", fontWeight: 500, flexShrink: 0 }}>{c.sub}</span>
                </a>
              ))}
            </div>

            <div style={{ padding: "20px 24px", borderRadius: "16px", background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
              <p style={{ fontWeight: 700, color: "#93c5fd", fontSize: "13px", marginBottom: "6px" }}>🕐 Business Hours</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                Monday – Saturday: 9:00 AM – 8:00 PM<br />
                Sunday: 10:00 AM – 6:00 PM<br />
                WhatsApp: Always Available
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: "#0b1120", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "28px", padding: "clamp(24px, 5vw, 44px)" }}>
            <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>
              Free Audit Request
            </h3>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", marginBottom: "28px" }}>
              हम personally analyze करके बताएंगे कि आपके business के लिए क्या best है।
            </p>

            <form onSubmit={sub} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input type="text" name="name" value={form.name} onChange={chg} required placeholder="आपका नाम" className="inp" />
                </div>
                <div>
                  <label style={labelStyle}>WhatsApp No. *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={chg} required placeholder="10-digit number" maxLength={10} className="inp" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Business Type *</label>
                <select name="businessType" value={form.businessType} onChange={chg} required className="inp">
                  <option value="">Select your business category</option>
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label style={labelStyle}>How Can We Help? *</label>
                <textarea name="message" value={form.message} onChange={chg} required rows={4}
                  placeholder="Website, SEO, Google Ads, GMB — क्या चाहिए?"
                  className="inp" style={{ resize: "none" }} />
              </div>

              {status === "success" && (
                <div style={{ display: "flex", gap: "10px", padding: "14px 16px", borderRadius: "12px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
                  <CheckCircle style={{ width: "18px", height: "18px", color: "#10b981", flexShrink: 0, marginTop: "1px" }} />
                  <p style={{ color: "#34d399", fontSize: "13px", fontWeight: 500 }}>{msg}</p>
                </div>
              )}
              {status === "error" && (
                <div style={{ display: "flex", gap: "10px", padding: "14px 16px", borderRadius: "12px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                  <AlertCircle style={{ width: "18px", height: "18px", color: "#f87171", flexShrink: 0, marginTop: "1px" }} />
                  <p style={{ color: "#f87171", fontSize: "13px", fontWeight: 500 }}>{msg}</p>
                </div>
              )}

              <button type="submit" disabled={status === "loading"} style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "16px", borderRadius: "14px", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
                background: status === "loading" ? "rgba(59,130,246,0.4)" : "linear-gradient(135deg, #2563eb, #1d4ed8)",
                color: "#fff", fontWeight: 700, fontSize: "15px",
                transition: "all 0.25s", boxShadow: status === "loading" ? "none" : "0 4px 20px rgba(37,99,235,0.35)"
              }}
                onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                {status === "loading"
                  ? <><Loader2 style={{ width: "17px", height: "17px" }} className="animate-spin" /> Sending...</>
                  : <><Send style={{ width: "16px", height: "16px" }} /> Free Audit Request भेजें 🚀</>}
              </button>

              <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.2)", fontWeight: 500 }}>
                🔒 आपकी information 100% secure है। कोई spam नहीं।
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
