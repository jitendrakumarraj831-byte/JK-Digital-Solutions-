"use client";
import { useLanguage, useT } from "@/lib/i18n";

const months = [
  { n: 1, value: 22 },
  { n: 2, value: 34 },
  { n: 3, value: 48 },
  { n: 4, value: 63 },
  { n: 5, value: 81 },
  { n: 6, value: 100 },
];
const ramp = ["#B7D3F6", "#86B6F6", "#649BF1", "#4880EC", "#2E67E0", "#1D4ED8"];

const stats = [
  { v: "+180%", l: { en: "Average traffic growth", hi: "औसत ट्रैफिक वृद्धि" }, sub: { en: "within 6 months of launch", hi: "लॉन्च के 6 महीने के भीतर" } },
  { v: "3×", l: { en: "Average lead growth", hi: "औसत लीड वृद्धि" }, sub: { en: "for local service businesses", hi: "लोकल सर्विस बिज़नेस के लिए" } },
  { v: "60–90", l: { en: "Days to first ranking gains", hi: "पहली रैंकिंग बढ़त तक के दिन" }, sub: { en: "for targeted local keywords", hi: "टारगेट किए गए लोकल कीवर्ड के लिए" } },
  { v: "48hr", l: { en: "Time for ads to go live", hi: "विज्ञापन लाइव होने का समय" }, sub: { en: "once a campaign is approved", hi: "कैंपेन मंज़ूर होने के बाद" } },
];

export default function Results() {
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="results" style={{ padding: "112px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ marginBottom: "16px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("Results", "नतीजे")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("The growth pattern we aim for,", "जिस ग्रोथ पैटर्न का हम लक्ष्य रखते हैं,")} <span className="accent">{t("every time", "हर बार")}</span>.
          </h2>
          <p className="t-body">
            {t(
              "SEO and ads compound — slow in month one, unmistakable by month six. Here's the typical trajectory once a strategy is live.",
              "SEO और विज्ञापन जमा होते जाते हैं — पहले महीने धीमे, छठे महीने तक साफ़ दिखने वाले। रणनीति लागू होने के बाद यह सामान्य ट्रैजेक्टरी होती है।"
            )}
          </p>
        </div>
        <p style={{ fontSize: "12.5px", color: "#6B7280", fontStyle: "italic", marginBottom: "48px" }}>
          {t(
            "Illustrative example based on typical outcomes across client engagements — not a guarantee of specific results.",
            "यह क्लाइंट के सामान्य नतीजों पर आधारित एक उदाहरण है — विशेष नतीजों की गारंटी नहीं है।"
          )}
        </p>

        <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "24px", alignItems: "stretch" }}>
          {/* Chart card */}
          <div style={{
            background: "#fff", border: "1px solid #E2E8F0", borderRadius: "24px",
            padding: "clamp(24px, 4vw, 36px)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827" }}>{t("Website leads", "वेबसाइट लीड्स")}</h3>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#16A34A", whiteSpace: "nowrap" }}>↑ {t("4.5× in 6 months", "6 महीनों में 4.5×")}</span>
            </div>
            <p style={{ fontSize: "12.5px", color: "#6B7280", marginBottom: "28px" }}>{t("Indexed to Month 1 = 22 leads", "महीना 1 = 22 लीड्स के आधार पर")}</p>

            <div
              role="img"
              aria-label={t(
                "Bar chart showing monthly website leads climbing steadily from 22 in month one to 100 in month six, an illustrative example of typical growth.",
                "बार चार्ट जो दिखाता है कि मासिक वेबसाइट लीड्स महीना एक में 22 से महीना छह में 100 तक लगातार बढ़ती हैं, सामान्य ग्रोथ का एक उदाहरण।"
              )}
              style={{ display: "flex", alignItems: "flex-end", gap: "14px", height: "180px", borderBottom: "1px solid #F1F5F9", paddingBottom: "2px" }}
            >
              {months.map((m, i) => (
                <div key={m.n} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }}>
                  {i === months.length - 1 && (
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#111827", marginBottom: "6px" }}>{m.value}</span>
                  )}
                  <div style={{
                    width: "100%", maxWidth: "34px",
                    height: `${m.value}%`,
                    background: ramp[i],
                    borderRadius: "4px 4px 0 0",
                  }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
              {months.map(m => (
                <div key={m.n} style={{ flex: 1, textAlign: "center", fontSize: "11px", color: "#6B7280", fontWeight: 500 }}>
                  {t(`M${m.n}`, `म${m.n}`)}
                </div>
              ))}
            </div>
          </div>

          {/* Stat callouts */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {stats.map(s => (
              <div key={s.l.en} style={{
                background: "#fff", border: "1px solid #E2E8F0", borderRadius: "18px",
                padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "center",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div style={{ fontSize: "clamp(24px,2.8vw,30px)", fontWeight: 700, color: "#1D4ED8", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#111827", marginTop: "8px" }}>{lang === "hi" ? s.l.hi : s.l.en}</div>
                <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "3px" }}>{lang === "hi" ? s.sub.hi : s.sub.en}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="#free-audit" className="btn btn-primary btn-lg">
            {t("See What This Could Look Like For You →", "देखें आपके लिए यह कैसा दिख सकता है →")}
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .results-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
