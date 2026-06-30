"use client";
import { useState } from "react";

const types = [
  "Medical / Clinic", "Restaurant / Dhaba", "Coaching / School",
  "Real Estate", "Beauty / Salon", "Hardware / Retail",
  "Hotel", "Service Provider", "E-commerce", "Other",
];

interface F { name: string; phone: string; businessType: string; message: string; }
type S = "idle" | "loading" | "success" | "error";

const contacts = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/>
      </svg>
    ),
    label: "WhatsApp", value: "+91 86510 70831", sub: "Most Responsive",
    href: "https://wa.me/918651070831", color: "#25D366", bg: "rgba(37,211,102,0.12)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: "Call Us", value: "+91 85418 49118", sub: "Mon–Sat, 9AM–8PM",
    href: "tel:+918541849118", color: "#60a5fa", bg: "rgba(59,130,246,0.12)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email", value: "jkdigitalsolutionfbg@gmail.com", sub: "Reply in 2–4 hours",
    href: "mailto:jkdigitalsolutionfbg@gmail.com", color: "#a78bfa", bg: "rgba(139,92,246,0.12)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Location", value: "Forbesganj, Araria, Bihar 854318", sub: "Visit us",
    href: "https://maps.google.com/?q=Forbesganj+Bihar", color: "#fb923c", bg: "rgba(249,115,22,0.12)",
  },
];

const labelSt: React.CSSProperties = {
  display: "block", fontSize: "11px", fontWeight: 700,
  textTransform: "uppercase", letterSpacing: "0.08em",
  color: "rgba(255,255,255,0.35)", marginBottom: "8px",
};

export default function Contact() {
  const [form, setForm] = useState<F>({ name: "", phone: "", businessType: "", message: "" });
  const [status, setStatus] = useState<S>("idle");
  const [msg, setMsg] = useState("");

  const chg = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const sub = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json();
      if (d.success) {
        setStatus("success");
        setMsg(d.message);
        setForm({ name: "", phone: "", businessType: "", message: "" });
      } else {
        setStatus("error");
        setMsg(d.error || "कुछ गड़बड़ी हुई। दोबारा कोशिश करें।");
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" style={{ background: "#080d1f", padding: "112px 0" }}>
      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: "64px", alignItems: "start",
        }}>

          {/* Left panel */}
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Contact</span>
            <h2 className="font-display" style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "18px",
            }}>
              बात करते हैं,<br />
              <span className="grad-text">आज ही।</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "17px", lineHeight: 1.8, marginBottom: "52px", maxWidth: "420px" }}>
              Form fill करें या directly reach करें। हम 30 minutes के अंदर respond करते हैं — guarantee।
            </p>

            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "40px" }}>
              {contacts.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "16px", padding: "18px 22px",
                    borderRadius: "16px", textDecoration: "none",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.24s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                    el.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.transform = "translateX(0)";
                  }}>
                  <div style={{
                    width: "46px", height: "46px", borderRadius: "13px",
                    background: c.bg, color: c.color,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>{c.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "rgba(255,255,255,0.3)", marginBottom: "3px" }}>{c.label}</p>
                    <p style={{ fontWeight: 600, fontSize: "14px", color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</p>
                  </div>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", fontWeight: 500, flexShrink: 0 }}>{c.sub}</span>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div style={{
              padding: "22px 24px", borderRadius: "16px",
              background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)",
            }}>
              <p style={{ fontWeight: 700, color: "#93c5fd", fontSize: "13px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "7px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Business Hours
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>
                Monday – Saturday: 9:00 AM – 8:00 PM<br />
                Sunday: 10:00 AM – 6:00 PM<br />
                WhatsApp: Always Available
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "28px",
            padding: "clamp(28px, 5vw, 48px)",
          }}>
            <div style={{ marginBottom: "28px" }}>
              <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "6px", letterSpacing: "-0.02em" }}>
                Free Audit Request
              </h3>
              <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "14px", lineHeight: 1.6 }}>
                हम personally analyze करके बताएंगे आपके business के लिए best strategy।
              </p>
            </div>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "28px" }} />

            <form onSubmit={sub} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "14px" }}>
                <div>
                  <label style={labelSt}>आपका नाम *</label>
                  <input type="text" name="name" value={form.name} onChange={chg} required
                    placeholder="Full Name" className="inp" />
                </div>
                <div>
                  <label style={labelSt}>WhatsApp Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={chg} required
                    placeholder="10-digit number" maxLength={10} className="inp" />
                </div>
              </div>

              <div>
                <label style={labelSt}>Business Type *</label>
                <select name="businessType" value={form.businessType} onChange={chg} required className="inp">
                  <option value="">Select your business category</option>
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label style={labelSt}>आप क्या चाहते हैं? *</label>
                <textarea name="message" value={form.message} onChange={chg} required rows={4}
                  placeholder="Website, SEO, Google Ads, GMB — बताएं।"
                  className="inp" style={{ resize: "none" }} />
              </div>

              {status === "success" && (
                <div style={{
                  display: "flex", gap: "10px", padding: "14px 18px", borderRadius: "12px",
                  background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "1px" }}><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <p style={{ color: "#34d399", fontSize: "13px", fontWeight: 500 }}>{msg}</p>
                </div>
              )}
              {status === "error" && (
                <div style={{
                  display: "flex", gap: "10px", padding: "14px 18px", borderRadius: "12px",
                  background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "1px" }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <p style={{ color: "#f87171", fontSize: "13px", fontWeight: 500 }}>{msg}</p>
                </div>
              )}

              <button type="submit" disabled={status === "loading"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "9px",
                  padding: "16px", borderRadius: "13px", border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  background: status === "loading"
                    ? "rgba(59,130,246,0.35)"
                    : "linear-gradient(135deg, #3b82f6, #0ea5e9)",
                  color: "#fff", fontWeight: 700, fontSize: "16px",
                  transition: "all 0.25s",
                  boxShadow: status === "loading" ? "none" : "0 4px 24px rgba(59,130,246,0.35)",
                }}
                onMouseEnter={e => { if (status !== "loading") (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                {status === "loading" ? (
                  <>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin-slow 0.8s linear infinite" }}><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0"/></svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Free Audit Request भेजें
                  </>
                )}
              </button>

              <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.22)", fontWeight: 500 }}>
                🔒 आपकी information 100% secure है। कोई spam नहीं।
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
