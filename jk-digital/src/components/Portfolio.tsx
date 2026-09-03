"use client";
import { useLanguage, useT } from "@/lib/i18n";

const projects = [
  {
    name: "Dr. Sharma Dental Clinic",
    url: "drsharmadental.in",
    location: { en: "Araria, Bihar", hi: "अररिया, बिहार" },
    tag: { en: "Healthcare", hi: "स्वास्थ्य सेवा" },
    service: { en: "SEO + GMB", hi: "SEO + GMB" },
    r1: { n: "#1", l: { en: "Google rank", hi: "Google रैंक" } },
    r2: { n: "+180%", l: { en: "New patients", hi: "नए मरीज़" } },
    accentColor: "#06B6D4",
    accentBg: "#ECFEFF",
    tagBg: "#ECFEFF",
    tagColor: "#06B6D4",
  },
  {
    name: "Rajdhani Restaurant",
    url: "rajdhanieats.in",
    location: { en: "Forbesganj, Bihar", hi: "फारबिसगंज, बिहार" },
    tag: { en: "Restaurant", hi: "रेस्टोरेंट" },
    service: { en: "GMB + Website", hi: "GMB + वेबसाइट" },
    r1: { n: "4.8★", l: { en: "Rating", hi: "रेटिंग" } },
    r2: { n: "3×",   l: { en: "Online orders", hi: "ऑनलाइन ऑर्डर" } },
    accentColor: "#D97706",
    accentBg: "#FFFBEB",
    tagBg: "#FFFBEB",
    tagColor: "#D97706",
  },
  {
    name: "Bright Future Academy",
    url: "brightfutureacademy.in",
    location: { en: "Forbesganj, Bihar", hi: "फारबिसगंज, बिहार" },
    tag: { en: "Education", hi: "शिक्षा" },
    service: { en: "Ads + Website", hi: "विज्ञापन + वेबसाइट" },
    r1: { n: "120+", l: { en: "New admissions", hi: "नए एडमिशन" } },
    r2: { n: "+250%", l: { en: "Lead growth", hi: "लीड ग्रोथ" } },
    accentColor: "#4F46E5",
    accentBg: "#EEF2FF",
    tagBg: "#EEF2FF",
    tagColor: "#4F46E5",
  },
  {
    name: "Agarwal Properties",
    url: "agarwalproperties.in",
    location: { en: "Araria, Bihar", hi: "अररिया, बिहार" },
    tag: { en: "Real Estate", hi: "रियल एस्टेट" },
    service: { en: "Ads + SEO", hi: "विज्ञापन + SEO" },
    r1: { n: "40+",  l: { en: "Leads / month", hi: "लीड्स / माह" } },
    r2: { n: "5×",   l: { en: "ROI on ads", hi: "विज्ञापन पर ROI" } },
    accentColor: "#16A34A",
    accentBg: "#F0FDF4",
    tagBg: "#F0FDF4",
    tagColor: "#16A34A",
  },
  {
    name: "Glamour Beauty Studio",
    url: "glamourbeauty.in",
    location: { en: "Forbesganj, Bihar", hi: "फारबिसगंज, बिहार" },
    tag: { en: "Beauty & Salon", hi: "ब्यूटी और सैलून" },
    service: { en: "GMB + Content", hi: "GMB + कंटेंट" },
    r1: { n: "200+", l: { en: "Monthly bookings", hi: "मासिक बुकिंग" } },
    r2: { n: "4.9★", l: { en: "Rating", hi: "रेटिंग" } },
    accentColor: "#DB2777",
    accentBg: "#FDF2F8",
    tagBg: "#FDF2F8",
    tagColor: "#DB2777",
  },
  {
    name: "Hotel Sunrise Palace",
    url: "hotelsunrisepalace.in",
    location: { en: "Araria, Bihar", hi: "अररिया, बिहार" },
    tag: { en: "Hospitality", hi: "हॉस्पिटैलिटी" },
    service: { en: "Website + SEO", hi: "वेबसाइट + SEO" },
    r1: { n: "85%",  l: { en: "Occupancy rate", hi: "ऑक्युपेंसी दर" } },
    r2: { n: "+140%", l: { en: "Direct bookings", hi: "डायरेक्ट बुकिंग" } },
    accentColor: "#1D4ED8",
    accentBg: "#EFF6FF",
    tagBg: "#EFF6FF",
    tagColor: "#1D4ED8",
  },
];

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="portfolio" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ marginBottom: "48px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("Our Work", "हमारा काम")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("Real businesses. Real", "असली बिज़नेस। असली")} <span className="accent-cyan">{t("results", "नतीजे")}</span>.
          </h2>
          <p className="t-body">
            {t("From clinics to coaching centres — measured growth, not just promises.", "क्लिनिक से लेकर कोचिंग सेंटर तक — मापी गई ग्रोथ, सिर्फ वादे नहीं।")}
          </p>
        </div>
        <p style={{ fontSize: "12.5px", color: "#6B7280", fontStyle: "italic", marginBottom: "24px" }}>
          {t(
            "Project names and figures below are illustrative examples representing the type of results we deliver.",
            "नीचे दिए गए प्रोजेक्ट नाम और आंकड़े उदाहरण मात्र हैं जो हमारे नतीजों के प्रकार को दर्शाते हैं।"
          )}
        </p>

        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "20px" }}>
          {projects.map((p, i) => (
            <div key={i} className="card" style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-5px)"; el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)"; const zoom = el.querySelector<HTMLElement>(".portfolio-zoom"); if (zoom) zoom.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)"; const zoom = el.querySelector<HTMLElement>(".portfolio-zoom"); if (zoom) zoom.style.transform = "scale(1)"; }}>

              {/* Website preview mockup */}
              <div style={{ overflow: "hidden" }}>
                {/* Browser chrome */}
                <div style={{
                  background: "#F1F5F9", padding: "9px 12px",
                  borderBottom: "1px solid #E2E8F0",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <div style={{ display: "flex", gap: "5px" }} aria-hidden="true">
                    {["#F87171", "#FCD34D", "#4ADE80"].map(c => <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />)}
                  </div>
                  <div style={{
                    flex: 1, background: "#fff", borderRadius: "6px",
                    padding: "4px 10px", border: "1px solid #E2E8F0",
                    fontSize: "11px", color: "#94A3B8",
                    display: "flex", alignItems: "center", gap: "5px",
                  }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    {p.url}
                  </div>
                </div>
                {/* Mock page content — zooms slightly on card hover */}
                <div className="portfolio-zoom" style={{ transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
                  <div style={{ background: `linear-gradient(135deg, ${p.accentColor}E6, ${p.accentColor})`, padding: "18px 16px 14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: "rgba(255,255,255,0.35)" }} />
                        <div style={{ width: "42px", height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.7)" }} />
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {[30, 24, 24].map((w, wi) => <div key={wi} style={{ width: `${w}px`, height: "4px", borderRadius: "3px", background: "rgba(255,255,255,0.35)" }} />)}
                      </div>
                    </div>
                    <div style={{ width: "58%", height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.95)", marginBottom: "6px" }} />
                    <div style={{ width: "40%", height: "6px", borderRadius: "4px", background: "rgba(255,255,255,0.6)", marginBottom: "12px" }} />
                    <div style={{ width: "52px", height: "16px", borderRadius: "5px", background: "#fff" }} />
                  </div>
                  <div style={{ padding: "10px 12px", display: "flex", gap: "6px", background: "#fff" }}>
                    {[1, 2, 3].map(n => (
                      <div key={n} style={{ flex: 1, background: p.accentBg, borderRadius: "7px", padding: "8px 6px" }}>
                        <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: p.accentColor, opacity: 0.25, marginBottom: "5px" }} />
                        <div style={{ width: "100%", height: "3px", borderRadius: "2px", background: p.accentColor, opacity: 0.3 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Header */}
              <div style={{
                background: p.accentBg,
                borderBottom: `1px solid ${p.accentColor}18`,
                padding: "16px 20px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", marginBottom: "3px" }}>{p.name}</div>
                  <p style={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>{lang === "hi" ? p.location.hi : p.location.en}</p>
                </div>
                <span style={{
                  fontSize: "11px", fontWeight: 700, color: p.tagColor,
                  padding: "4px 10px", borderRadius: "100px",
                  background: "#fff", border: `1px solid ${p.accentColor}25`,
                  whiteSpace: "nowrap",
                }}>{lang === "hi" ? p.tag.hi : p.tag.en}</span>
              </div>

              {/* Results */}
              <div style={{ padding: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  {[p.r1, p.r2].map(r => (
                    <div key={r.l.en} style={{
                      padding: "16px 14px", borderRadius: "12px", textAlign: "center",
                      background: p.accentBg,
                      border: `1px solid ${p.accentColor}18`,
                    }}>
                      <div style={{ fontSize: "22px", fontWeight: 700, color: p.accentColor, letterSpacing: "-0.02em" }}>{r.n}</div>
                      <div style={{ fontSize: "11px", color: "#6B7280", marginTop: "3px", fontWeight: 500 }}>{lang === "hi" ? r.l.hi : r.l.en}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>
                    {t("Service:", "सेवा:")} <span style={{ color: p.accentColor, fontWeight: 600 }}>{lang === "hi" ? p.service.hi : p.service.en}</span>
                  </p>
                  <a href="#contact" style={{
                    fontSize: "12px", fontWeight: 600, color: p.accentColor,
                    textDecoration: "none", transition: "opacity 0.15s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                    {t("Similar results →", "ऐसे ही नतीजे →")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "56px", textAlign: "center" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            {t("Start Your Success Story →", "अपनी सफलता की कहानी शुरू करें →")}
          </a>
        </div>
      </div>
    </section>
  );
}
