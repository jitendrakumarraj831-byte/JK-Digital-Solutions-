"use client";
import { useLanguage, useT } from "@/lib/i18n";

const rows = [
  {
    label: { en: "Accountability", hi: "जवाबदेही" },
    agency: { en: "A signed scope, timeline and invoice — every time.", hi: "हर बार साइन किया हुआ स्कोप, टाइमलाइन और इनवॉइस।" },
    freelancer: { en: "Often informal, with little recourse if things go wrong.", hi: "अक्सर अनौपचारिक, गलत होने पर कोई उपाय नहीं।" },
  },
  {
    label: { en: "Availability", hi: "उपलब्धता" },
    agency: { en: "A team covers you through leave, illness or a busy season.", hi: "छुट्टी, बीमारी या व्यस्त समय में भी एक टीम आपके साथ रहती है।" },
    freelancer: { en: "One person. If they're unavailable, your project stalls.", hi: "एक ही व्यक्ति। अगर वो उपलब्ध नहीं तो प्रोजेक्ट रुक जाता है।" },
  },
  {
    label: { en: "Skill coverage", hi: "कौशल कवरेज" },
    agency: { en: "Design, development, SEO and ads handled by specialists.", hi: "डिज़ाइन, डेवलपमेंट, SEO और विज्ञापन विशेषज्ञों द्वारा संभाले जाते हैं।" },
    freelancer: { en: "Usually one skill set stretched across every task.", hi: "आमतौर पर एक ही कौशल हर काम में इस्तेमाल होता है।" },
  },
  {
    label: { en: "Quality control", hi: "गुणवत्ता नियंत्रण" },
    agency: { en: "Work is reviewed before it reaches you — fewer surprises.", hi: "काम आप तक पहुंचने से पहले जांचा जाता है — कम आश्चर्य।" },
    freelancer: { en: "No second pair of eyes; mistakes ship straight to you.", hi: "कोई दूसरी जांच नहीं; गलतियां सीधे आप तक पहुंचती हैं।" },
  },
  {
    label: { en: "Scalability", hi: "स्केलेबिलिटी" },
    agency: { en: "Ready to take on more — new pages, new campaigns, more markets.", hi: "ज़्यादा काम के लिए तैयार — नए पेज, नए कैंपेन, नए बाज़ार।" },
    freelancer: { en: "Growth is capped by one person's available hours.", hi: "ग्रोथ एक व्यक्ति के उपलब्ध घंटों तक सीमित रहती है।" },
  },
  {
    label: { en: "Communication", hi: "संवाद" },
    agency: { en: "A dedicated manager who knows your account, always reachable.", hi: "एक समर्पित मैनेजर जो आपका अकाउंट जानता है, हमेशा उपलब्ध।" },
    freelancer: { en: "Response times vary with their other client workload.", hi: "जवाब देने का समय उनके दूसरे क्लाइंट्स के काम पर निर्भर करता है।" },
  },
];

export default function AgencyVsFreelancer() {
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="agency-vs-freelancer" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("A Fair Comparison", "एक निष्पक्ष तुलना")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("Why a professional agency", "एक पेशेवर एजेंसी क्यों")} <span className="accent">{t("beats", "बेहतर है")}</span> {t("a freelancer.", "फ्रीलांसर से।")}
          </h2>
          <p className="t-body" style={{ maxWidth: "520px", margin: "0 auto" }}>
            {t(
              "Freelancers can be cheaper upfront. But your business depends on this working — reliably, every month.",
              "फ्रीलांसर शुरुआत में सस्ते हो सकते हैं। लेकिन आपका बिज़नेस इस पर निर्भर करता है — भरोसेमंद तरीके से, हर महीने।"
            )}
          </p>
        </div>

        <div style={{
          background: "#fff", border: "1px solid #E2E8F0", borderRadius: "24px",
          overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
        }}>
          {/* Header row */}
          <div className="avf-row" style={{
            display: "grid", gridTemplateColumns: "1fr 1.4fr 1.4fr",
            borderBottom: "1px solid #E2E8F0", background: "#F5F7FA",
          }}>
            <div style={{ padding: "18px 20px" }} />
            <div style={{ padding: "18px 20px", background: "#EFF6FF" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1D4ED8" }}>JK Digital Solutions</span>
              </div>
            </div>
            <div style={{ padding: "18px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0113 0"/></svg>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#4B5563" }}>{t("A Freelancer", "एक फ्रीलांसर")}</span>
              </div>
            </div>
          </div>

          {/* Body rows */}
          {rows.map((r, ri) => (
            <div key={r.label.en} className="avf-row" style={{
              display: "grid", gridTemplateColumns: "1fr 1.4fr 1.4fr",
              background: ri % 2 === 0 ? "#fff" : "#FCFCFD",
              borderBottom: ri < rows.length - 1 ? "1px solid #F1F5F9" : "none",
            }}>
              <div style={{ padding: "18px 20px", display: "flex", alignItems: "center", fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>{lang === "hi" ? r.label.hi : r.label.en}</div>
              <div style={{ padding: "18px 20px", background: "#F5F9FF", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "3px" }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ fontSize: "13.5px", color: "#374151", lineHeight: 1.55 }}>{lang === "hi" ? r.agency.hi : r.agency.en}</span>
              </div>
              <div style={{ padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "3px" }} aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span style={{ fontSize: "13.5px", color: "#6B7280", lineHeight: 1.55 }}>{lang === "hi" ? r.freelancer.hi : r.freelancer.en}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="#contact" className="btn btn-primary btn-lg">
            {t("Work With a Team That Won't Disappear →", "एक ऐसी टीम के साथ काम करें जो गायब नहीं होगी →")}
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .avf-row { grid-template-columns: 1fr !important; }
          .avf-row > div:first-child { border-bottom: 1px solid #F1F5F9; }
        }
      `}</style>
    </section>
  );
}
