"use client";
import { useState } from "react";

const checks = [
  "Website speed & mobile experience",
  "Google ranking for your key search terms",
  "Google Business Profile completeness",
  "3 quick wins you can act on this week",
];

type Status = "idle" | "loading" | "success" | "error";

export default function FreeAudit() {
  const [form, setForm] = useState({ name: "", phone: "", website: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          businessType: "Free Website Audit",
          message: `Free audit request. Website: ${form.website.trim() || "Doesn't have one yet"}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success"); setMsg(data.message);
        setForm({ name: "", phone: "", website: "" });
      } else {
        setStatus("error"); setMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch { setStatus("error"); setMsg("Network error. Please try again."); }
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "12px", fontWeight: 600,
    textTransform: "uppercase", letterSpacing: "0.08em",
    color: "#4B5563", marginBottom: "7px",
  };

  return (
    <section id="free-audit" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center",
        }} className="audit-grid">
          {/* Left — pitch */}
          <div>
            <p className="t-label" style={{ marginBottom: "14px" }}>Free Website Audit</p>
            <h2 className="t-h2" style={{ marginBottom: "16px" }}>
              Find out what&apos;s costing you <span className="accent">customers</span>.
            </h2>
            <p className="t-body" style={{ marginBottom: "32px", maxWidth: "420px" }}>
              In 24 hours, we&apos;ll send a short, honest review of your website and Google presence — no obligation, no sales pressure.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {checks.map(c => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                    background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="3.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: "14.5px", color: "#374151", fontWeight: 500 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: "#fff", border: "1px solid #E2E8F0", borderRadius: "24px",
            padding: "clamp(28px, 5vw, 40px)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          }}>
            <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label htmlFor="fa-name" style={labelStyle}>Your name *</label>
                <input id="fa-name" type="text" name="name" value={form.name} onChange={onChange} required placeholder="Full name" className="inp" />
              </div>
              <div>
                <label htmlFor="fa-phone" style={labelStyle}>WhatsApp number *</label>
                <input id="fa-phone" type="tel" name="phone" value={form.phone} onChange={onChange} required placeholder="10 digits" maxLength={10} className="inp" />
              </div>
              <div>
                <label htmlFor="fa-website" style={labelStyle}>Website URL (if you have one)</label>
                <input id="fa-website" type="text" name="website" value={form.website} onChange={onChange} placeholder="yourbusiness.in" className="inp" />
              </div>

              {status === "success" && (
                <div role="status" style={{ padding: "14px 16px", borderRadius: "12px", background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
                  <p style={{ fontSize: "14px", color: "#16A34A", fontWeight: 600 }}>✓ {msg}</p>
                </div>
              )}
              {status === "error" && (
                <div role="alert" style={{ padding: "14px 16px", borderRadius: "12px", background: "#FEF2F2", border: "1px solid #FECACA" }}>
                  <p style={{ fontSize: "14px", color: "#DC2626", fontWeight: 600 }}>✕ {msg}</p>
                </div>
              )}

              <button type="submit" disabled={status === "loading"} className="btn btn-primary btn-lg" style={{
                width: "100%", cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.6 : 1,
              }}>
                {status === "loading" ? "Sending..." : "Get My Free Audit →"}
              </button>

              <p style={{ textAlign: "center", fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>
                100% free. No credit card. Takes about 2 minutes.
              </p>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .audit-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
