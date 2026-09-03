"use client";
import { useState } from "react";
import { useLanguage, useT } from "@/lib/i18n";

const checks = [
  { en: "Website speed & mobile experience", hi: "वेबसाइट स्पीड और मोबाइल अनुभव" },
  { en: "Google ranking for your key search terms", hi: "आपके मुख्य सर्च टर्म के लिए Google रैंकिंग" },
  { en: "Google Business Profile completeness", hi: "Google बिज़नेस प्रोफाइल की पूर्णता" },
  { en: "3 quick wins you can act on this week", hi: "3 त्वरित सुधार जिन पर आप इसी हफ्ते काम कर सकते हैं" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function FreeAudit() {
  const [form, setForm] = useState({ name: "", phone: "", website: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");
  const { lang } = useLanguage();
  const t = useT();

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
        setStatus("error"); setMsg(data.error || t("Something went wrong. Please try again.", "कुछ गलत हो गया। कृपया फिर से कोशिश करें।"));
      }
    } catch { setStatus("error"); setMsg(t("Network error. Please try again.", "नेटवर्क में समस्या। कृपया फिर से कोशिश करें।")); }
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
            <p className="t-label" style={{ marginBottom: "14px" }}>{t("Free Website Audit", "मुफ्त वेबसाइट ऑडिट")}</p>
            <h2 className="t-h2" style={{ marginBottom: "16px" }}>
              {t("Find out what's costing you", "जानें आपको क्या")} <span className="accent">{t("customers", "ग्राहक गंवा रहा है")}</span>.
            </h2>
            <p className="t-body" style={{ marginBottom: "32px", maxWidth: "420px" }}>
              {t(
                "In 24 hours, we'll send a short, honest review of your website and Google presence — no obligation, no sales pressure.",
                "24 घंटों में, हम आपकी वेबसाइट और Google उपस्थिति की एक संक्षिप्त, ईमानदार समीक्षा भेजेंगे — कोई बाध्यता नहीं, कोई बिक्री दबाव नहीं।"
              )}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {checks.map(c => (
                <div key={c.en} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                    background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="3.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: "14.5px", color: "#374151", fontWeight: 500 }}>{lang === "hi" ? c.hi : c.en}</span>
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
                <label htmlFor="fa-name" style={labelStyle}>{t("Your name *", "आपका नाम *")}</label>
                <input id="fa-name" type="text" name="name" value={form.name} onChange={onChange} required placeholder={t("Full name", "पूरा नाम")} className="inp" />
              </div>
              <div>
                <label htmlFor="fa-phone" style={labelStyle}>{t("WhatsApp number *", "व्हाट्सएप नंबर *")}</label>
                <input id="fa-phone" type="tel" name="phone" value={form.phone} onChange={onChange} required placeholder={t("10 digits", "10 अंक")} maxLength={10} className="inp" />
              </div>
              <div>
                <label htmlFor="fa-website" style={labelStyle}>{t("Website URL (if you have one)", "वेबसाइट URL (अगर है तो)")}</label>
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
                {status === "loading" ? t("Sending...", "भेजा जा रहा है...") : t("Get My Free Audit →", "मेरा मुफ्त ऑडिट पाएं →")}
              </button>

              <p style={{ textAlign: "center", fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>
                {t("100% free. No credit card. Takes about 2 minutes.", "100% मुफ्त। कोई क्रेडिट कार्ड नहीं। लगभग 2 मिनट लगेंगे।")}
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
