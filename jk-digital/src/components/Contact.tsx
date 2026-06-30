"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const types = ["Medical / Clinic","Restaurant / Dhaba","Coaching / School","Real Estate","Beauty / Salon","Hardware / Retail","Hotel","Service Provider","Other"];
interface F { name:string; phone:string; businessType:string; message:string; }
type S = "idle"|"loading"|"success"|"error";

export default function Contact() {
  const [form, setForm] = useState<F>({ name:"", phone:"", businessType:"", message:"" });
  const [status, setStatus] = useState<S>("idle");
  const [msg, setMsg] = useState("");
  const chg = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const sub = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading");
    try {
      const r = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const d = await r.json();
      if (d.success) { setStatus("success"); setMsg(d.message); setForm({ name:"", phone:"", businessType:"", message:"" }); }
      else { setStatus("error"); setMsg(d.error||"Something went wrong."); }
    } catch { setStatus("error"); setMsg("Network error. Please try again."); }
  };

  const labelStyle = { display: "block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.05em", color: "#6b7280", marginBottom: "6px" };

  return (
    <section id="contact" style={{ background: "#fff", padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "56px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2563eb", marginBottom: "12px" }}>Contact</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#111827", marginBottom: "12px" }}>बात करते हैं</h2>
            <p style={{ color: "#6b7280", marginBottom: "40px", lineHeight: 1.6 }}>Form भरें या directly call/WhatsApp करें। हम 30 minutes में respond करते हैं।</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { icon:"💬", label:"WhatsApp (Fastest)", val:"+91 86510 70831", href:"https://wa.me/918651070831" },
                { icon:"📞", label:"Call करें", val:"+91 86510 70831 / +91 85418 49118", href:"tel:+918651070831" },
                { icon:"📧", label:"Email", val:"jkdigitalsolutionfbg@gmail.com", href:"mailto:jkdigitalsolutionfbg@gmail.com" },
                { icon:"📍", label:"Office", val:"Forbesganj, Araria, Bihar — 854318", href:"https://maps.google.com/?q=Forbesganj,Bihar" },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: "12px", textDecoration: "none" }}>
                  <span style={{ fontSize: "20px", width: "28px", flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9ca3af", marginBottom: "2px" }}>{c.label}</p>
                    <p style={{ fontWeight: 600, fontSize: "14px", color: "#111827", wordBreak: "break-all" }}>{c.val}</p>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid #f3f4f6" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9ca3af", marginBottom: "8px" }}>Business Hours</p>
              <p style={{ fontSize: "14px", color: "#374151", marginBottom: "4px" }}>Monday – Saturday: <strong>9AM – 8PM</strong></p>
              <p style={{ fontSize: "14px", color: "#374151" }}>Sunday: <strong>10AM – 6PM</strong></p>
            </div>
          </div>
          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "20px", padding: "clamp(24px, 4vw, 40px)" }}>
            <h3 style={{ fontWeight: 900, color: "#111827", fontSize: "20px", marginBottom: "4px" }}>Free Audit Request</h3>
            <p style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "24px" }}>हम personally analyze करके बताएंगे।</p>
            <form onSubmit={sub} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px" }}>
                <div><label style={labelStyle}>Name *</label><input type="text" name="name" value={form.name} onChange={chg} required placeholder="आपका नाम" className="inp" /></div>
                <div><label style={labelStyle}>WhatsApp *</label><input type="tel" name="phone" value={form.phone} onChange={chg} required placeholder="10-digit" maxLength={10} className="inp" /></div>
              </div>
              <div><label style={labelStyle}>Business Type *</label><select name="businessType" value={form.businessType} onChange={chg} required className="inp"><option value="">Select your business</option>{types.map(t=><option key={t} value={t}>{t}</option>)}</select></div>
              <div><label style={labelStyle}>Message *</label><textarea name="message" value={form.message} onChange={chg} required rows={4} placeholder="आप क्या चाहते हैं?" className="inp" style={{ resize: "none" }} /></div>
              {status==="success" && <div style={{ display:"flex", gap:"8px", padding:"12px 16px", borderRadius:"12px", background:"#ecfdf5", border:"1px solid #a7f3d0" }}><CheckCircle style={{ width:"16px", height:"16px", color:"#10b981", flexShrink:0, marginTop:"1px" }} /><p style={{ color:"#059669", fontSize:"12px", fontWeight:500 }}>{msg}</p></div>}
              {status==="error" && <div style={{ display:"flex", gap:"8px", padding:"12px 16px", borderRadius:"12px", background:"#fef2f2", border:"1px solid #fecaca" }}><AlertCircle style={{ width:"16px", height:"16px", color:"#ef4444", flexShrink:0, marginTop:"1px" }} /><p style={{ color:"#dc2626", fontSize:"12px", fontWeight:500 }}>{msg}</p></div>}
              <button type="submit" disabled={status==="loading"} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"14px", borderRadius:"12px", background: status==="loading" ? "#93c5fd" : "#2563eb", color:"#fff", fontWeight:700, fontSize:"14px", border:"none", cursor: status==="loading" ? "not-allowed" : "pointer" }}>
                {status==="loading" ? <><Loader2 style={{ width:"16px", height:"16px" }} className="animate-spin" /> Sending...</> : <><Send style={{ width:"14px", height:"14px" }} /> Free Audit Request भेजें 🚀</>}
              </button>
              <p style={{ color:"#9ca3af", fontSize:"11px", textAlign:"center" }}>🔒 100% secure. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
