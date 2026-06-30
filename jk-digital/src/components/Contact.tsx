"use client";
import { useState } from "react";

const businessTypes = [
  "Medical / Clinic", "Restaurant / Dhaba", "Coaching / School",
  "Real Estate", "Beauty / Salon", "Hardware / Retail",
  "Hotel", "Service Provider", "E-commerce", "Other",
];

const contactCards = [
  {
    label: "WhatsApp",
    value: "+91 86510 70831",
    note: "Most responsive",
    href: "https://wa.me/918651070831",
    g: "linear-gradient(135deg,rgba(22,163,74,0.18),rgba(16,185,129,0.1))",
    border: "rgba(52,211,153,0.25)",
    iconColor: "#4ade80",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>,
  },
  {
    label: "Phone",
    value: "+91 85418 49118",
    note: "Mon–Sat, 9am–8pm",
    href: "tel:+918541849118",
    g: "linear-gradient(135deg,rgba(37,99,235,0.18),rgba(99,102,241,0.1))",
    border: "rgba(96,165,250,0.25)",
    iconColor: "#93c5fd",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  },
  {
    label: "Email",
    value: "jkdigitalsolutionfbg@gmail.com",
    note: "Reply within 4 hours",
    href: "mailto:jkdigitalsolutionfbg@gmail.com",
    g: "linear-gradient(135deg,rgba(124,58,237,0.18),rgba(168,85,247,0.1))",
    border: "rgba(167,139,250,0.25)",
    iconColor: "#c4b5fd",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: "Location",
    value: "Forbesganj, Araria, Bihar 854318",
    note: "Visit us",
    href: "https://maps.google.com/?q=Forbesganj+Bihar",
    g: "linear-gradient(135deg,rgba(180,83,9,0.18),rgba(245,158,11,0.1))",
    border: "rgba(251,191,36,0.22)",
    iconColor: "#fde68a",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", businessType: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) {
        setStatus("success"); setMsg(data.message);
        setForm({ name: "", phone: "", businessType: "", message: "" });
      } else {
        setStatus("error"); setMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch { setStatus("error"); setMsg("Network error. Please try again."); }
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "11px", fontWeight: 600,
    textTransform: "uppercase", letterSpacing: "0.09em",
    color: "rgba(230,220,255,0.35)", marginBottom: "7px",
  };

  return (
    <section id="contact" style={{
      padding: "128px 0",
      background: "linear-gradient(180deg, #060011 0%, #08001e 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", top: "15%", right: "-18%",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "64px", alignItems: "start",
        }}>

          {/* Left — info */}
          <div>
            <p className="t-label" style={{ marginBottom: "16px" }}>Contact</p>
            <h2 className="t-h2" style={{ marginBottom: "16px" }}>
              Let's <span className="accent">talk</span>.
            </h2>
            <p className="t-body" style={{ marginBottom: "48px", maxWidth: "380px" }}>
              Get a free audit in 30 minutes. We'll analyse your business and show you exactly what's missing.
            </p>

            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
              {contactCards.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  padding: "14px 18px", borderRadius: "12px",
                  background: c.g, border: `1px solid ${c.border}`,
                  textDecoration: "none", transition: "transform 0.18s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateX(5px)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateX(0)"}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
                    background: "rgba(255,255,255,0.07)", border: `1px solid ${c.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center", color: c.iconColor,
                  }}>{c.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(230,220,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>{c.label}</div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</div>
                  </div>
                  <div style={{ fontSize: "12px", color: c.iconColor, fontWeight: 500, opacity: 0.7, flexShrink: 0 }}>{c.note}</div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div style={{
              padding: "18px 20px", borderRadius: "12px",
              background: "rgba(124,58,237,0.07)", border: "1px solid rgba(167,139,250,0.14)",
            }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#c4b5fd", marginBottom: "8px" }}>Business hours</p>
              <p className="t-small" style={{ lineHeight: 1.8 }}>
                Mon – Sat: 9:00 AM – 8:00 PM<br />
                Sunday: 10:00 AM – 6:00 PM<br />
                WhatsApp: Always available
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: "linear-gradient(145deg,rgba(124,58,237,0.09),rgba(99,102,241,0.05))",
            border: "1px solid rgba(167,139,250,0.18)",
            borderRadius: "20px", padding: "clamp(28px,5vw,44px)",
          }}>
            <h3 className="t-h3" style={{ marginBottom: "6px" }}>Free Audit Request</h3>
            <p className="t-small" style={{ marginBottom: "28px" }}>
              We'll personally review your business and share what to fix.
            </p>

            <div style={{ height: "1px", background: "rgba(167,139,250,0.1)", marginBottom: "24px" }} />

            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "12px" }}>
                <div>
                  <label style={labelStyle}>Your name *</label>
                  <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="Full name" className="inp" />
                </div>
                <div>
                  <label style={labelStyle}>WhatsApp number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} required placeholder="10 digits" maxLength={10} className="inp" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Business type *</label>
                <select name="businessType" value={form.businessType} onChange={onChange} required className="inp">
                  <option value="">Select category</option>
                  {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label style={labelStyle}>What do you need? *</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={4}
                  placeholder="Website, SEO, Google Ads, GMB — tell us your goal."
                  className="inp" style={{ resize: "none" }} />
              </div>

              {status === "success" && (
                <div style={{ padding: "13px 16px", borderRadius: "10px", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(52,211,153,0.22)" }}>
                  <p style={{ fontSize: "14px", color: "#4ade80", fontWeight: 500 }}>✓ {msg}</p>
                </div>
              )}
              {status === "error" && (
                <div style={{ padding: "13px 16px", borderRadius: "10px", background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.18)" }}>
                  <p style={{ fontSize: "14px", color: "#f87171", fontWeight: 500 }}>✕ {msg}</p>
                </div>
              )}

              <button type="submit" disabled={status === "loading"} className="btn btn-primary btn-lg" style={{
                width: "100%", cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.6 : 1,
              }}>
                {status === "loading" ? "Sending..." : "Send free audit request →"}
              </button>

              <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(230,220,255,0.25)", fontWeight: 500 }}>
                Your information is 100% private. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
