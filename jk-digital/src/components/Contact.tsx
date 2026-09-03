"use client";
import { useState } from "react";
import { useLanguage, useT } from "@/lib/i18n";

const businessTypes = [
  { en: "Small Business", hi: "छोटा बिज़नेस" },
  { en: "School / Coaching Institute", hi: "स्कूल / कोचिंग संस्थान" },
  { en: "Hospital / Clinic", hi: "अस्पताल / क्लिनिक" },
  { en: "Hotel / Restaurant", hi: "होटल / रेस्टोरेंट" },
  { en: "Interior Designer", hi: "इंटीरियर डिज़ाइनर" },
  { en: "Real Estate", hi: "रियल एस्टेट" },
  { en: "Startup", hi: "स्टार्टअप" },
  { en: "Retail / E-commerce", hi: "रिटेल / ई-कॉमर्स" },
  { en: "Other", hi: "अन्य" },
];

const contactCards = [
  {
    label: { en: "WhatsApp", hi: "व्हाट्सएप" },
    value: "+91 86510 70831",
    note: { en: "Most responsive", hi: "सबसे तेज़ जवाब" },
    href: "https://wa.me/918651070831",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    iconBg: "#DCFCE7",
    iconColor: "#16A34A",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>,
  },
  {
    label: { en: "Phone", hi: "फोन" },
    value: "+91 85418 49118",
    note: { en: "Mon–Sat, 9am–8pm", hi: "सोम–शनि, सुबह 9 – रात 8 बजे" },
    href: "tel:+918541849118",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    iconBg: "#DBEAFE",
    iconColor: "#1D4ED8",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  },
  {
    label: { en: "Email", hi: "ईमेल" },
    value: "jkdigitalsolutionfbg@gmail.com",
    note: { en: "Reply within 4 hours", hi: "4 घंटों में जवाब" },
    href: "mailto:jkdigitalsolutionfbg@gmail.com",
    bg: "#EEF2FF",
    border: "#C7D2FE",
    iconBg: "#E0E7FF",
    iconColor: "#4F46E5",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: { en: "Location", hi: "स्थान" },
    value: "Forbesganj, Araria, Bihar 854318",
    note: { en: "Visit us", hi: "हमसे मिलें" },
    href: "https://maps.google.com/?q=Forbesganj+Bihar",
    bg: "#FFFBEB",
    border: "#FDE68A",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", businessType: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");
  const { lang } = useLanguage();
  const t = useT();

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
    <section id="contact" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div className="auto-grid-mobile" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "64px", alignItems: "start",
        }}>

          {/* Left — info */}
          <div style={{ minWidth: 0 }}>
            <p className="t-label" style={{ marginBottom: "14px" }}>{t("Contact Us", "संपर्क करें")}</p>
            <h2 className="t-h2" style={{ marginBottom: "16px" }}>
              {t("Ready to start?", "शुरू करने के लिए तैयार?")} <span className="accent">{t("Reach us directly.", "सीधे हमसे संपर्क करें।")}</span>
            </h2>
            <p className="t-body" style={{ marginBottom: "48px", maxWidth: "380px" }}>
              {t(
                "Already know what you need? Skip the queue — message us on WhatsApp, call, or send the details below and a real person will respond the same day.",
                "पहले से जानते हैं आपको क्या चाहिए? इंतज़ार छोड़ें — व्हाट्सएप पर मैसेज करें, कॉल करें, या नीचे विवरण भेजें और उसी दिन एक असली इंसान जवाब देगा।"
              )}
            </p>

            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
              {contactCards.map(c => (
                <a key={c.label.en} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  padding: "14px 18px", borderRadius: "14px",
                  background: c.bg, border: `1px solid ${c.border}`,
                  textDecoration: "none", transition: "transform 0.18s, box-shadow 0.18s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateX(5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "11px", flexShrink: 0,
                    background: c.iconBg,
                    display: "flex", alignItems: "center", justifyContent: "center", color: c.iconColor,
                  }}>{c.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>{lang === "hi" ? c.label.hi : c.label.en}</div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</div>
                  </div>
                  <div style={{ fontSize: "12px", color: c.iconColor, fontWeight: 600, flexShrink: 0, opacity: 0.8 }}>{lang === "hi" ? c.note.hi : c.note.en}</div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div style={{
              padding: "18px 20px", borderRadius: "14px",
              background: "#fff", border: "1px solid #E2E8F0",
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              marginBottom: "16px",
            }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#111827", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t("Business hours", "कार्य समय")}</p>
              <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.8 }}>
                {t("Mon – Sat: 9:00 AM – 8:00 PM", "सोम – शनि: सुबह 9:00 – रात 8:00")}<br />
                {t("Sunday: 10:00 AM – 6:00 PM", "रविवार: सुबह 10:00 – शाम 6:00")}<br />
                {t("WhatsApp: Always available", "व्हाट्सएप: हमेशा उपलब्ध")}
              </p>
            </div>

            {/* Map */}
            <div style={{
              position: "relative",
              borderRadius: "14px", overflow: "hidden",
              border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              height: "220px",
              background: "linear-gradient(135deg, #EFF6FF, #F5F7FA)",
            }}>
              <iframe
                title="Map showing JK Digital Solutions' office in Forbesganj, Bihar"
                src="https://www.google.com/maps?q=Forbesganj,Araria,Bihar,India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", position: "relative", zIndex: 1 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Forbesganj+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute", bottom: "10px", right: "10px", zIndex: 2,
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "#fff", padding: "8px 14px", borderRadius: "9px",
                  fontSize: "12.5px", fontWeight: 600, color: "#111827",
                  textDecoration: "none", border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                {t("Open in Google Maps", "Google Maps में खोलें")}
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            minWidth: 0,
            background: "#fff",
            border: "1px solid #E2E8F0",
            borderRadius: "24px", padding: "clamp(28px, 5vw, 44px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          }}>
            <h3 className="t-h3" style={{ marginBottom: "6px" }}>{t("Tell Us About Your Project", "अपने प्रोजेक्ट के बारे में बताएं")}</h3>
            <p style={{ fontSize: "14px", color: "#4B5563", marginBottom: "28px" }}>
              {t(
                "Share a few details and we'll come back with a plan, a timeline, and a clear price — no guesswork.",
                "कुछ जानकारी साझा करें और हम एक योजना, टाइमलाइन और स्पष्ट कीमत के साथ जवाब देंगे — कोई अंदाज़ा नहीं।"
              )}
            </p>

            <div style={{ height: "1px", background: "#F1F5F9", marginBottom: "24px" }} />

            <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))", gap: "12px" }}>
                <div>
                  <label htmlFor="cf-name" style={labelStyle}>{t("Your name *", "आपका नाम *")}</label>
                  <input id="cf-name" type="text" name="name" value={form.name} onChange={onChange} required placeholder={t("Full name", "पूरा नाम")} className="inp" />
                </div>
                <div>
                  <label htmlFor="cf-phone" style={labelStyle}>{t("WhatsApp number *", "व्हाट्सएप नंबर *")}</label>
                  <input id="cf-phone" type="tel" name="phone" value={form.phone} onChange={onChange} required placeholder={t("10 digits", "10 अंक")} maxLength={10} className="inp" />
                </div>
              </div>

              <div>
                <label htmlFor="cf-business" style={labelStyle}>{t("Business type *", "बिज़नेस प्रकार *")}</label>
                <select id="cf-business" name="businessType" value={form.businessType} onChange={onChange} required className="inp">
                  <option value="">{t("Select category", "श्रेणी चुनें")}</option>
                  {businessTypes.map(bt => <option key={bt.en} value={bt.en}>{lang === "hi" ? bt.hi : bt.en}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="cf-message" style={labelStyle}>{t("What do you need? *", "आपको क्या चाहिए? *")}</label>
                <textarea id="cf-message" name="message" value={form.message} onChange={onChange} required rows={4}
                  placeholder={t("Website, SEO, Google Ads, GMB — tell us your goal.", "वेबसाइट, SEO, Google Ads, GMB — अपना लक्ष्य बताएं।")}
                  className="inp" style={{ resize: "none" }} />
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
                {status === "loading" ? t("Sending...", "भेजा जा रहा है...") : t("Send My Project Details →", "मेरे प्रोजेक्ट का विवरण भेजें →")}
              </button>

              <p style={{ textAlign: "center", fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>
                {t("Your information is 100% private. No spam, ever.", "आपकी जानकारी 100% निजी है। कभी स्पैम नहीं।")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
