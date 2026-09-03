"use client";
import { useState } from "react";
import { useLanguage, useT } from "@/lib/i18n";

const plans = [
  {
    name: { en: "Starter", hi: "स्टार्टर" },
    price: "₹4,999",
    period: { en: "per month", hi: "प्रति माह" },
    desc: { en: "Perfect for new businesses establishing their online presence.", hi: "अपनी ऑनलाइन उपस्थिति बनाने वाले नए बिज़नेस के लिए एकदम सही।" },
    features: [
      { en: "Google Business Profile setup", hi: "Google बिज़नेस प्रोफाइल सेटअप" },
      { en: "Basic SEO (5 keywords)", hi: "बेसिक SEO (5 कीवर्ड)" },
      { en: "Monthly performance report", hi: "मासिक प्रदर्शन रिपोर्ट" },
      { en: "WhatsApp support", hi: "व्हाट्सएप सपोर्ट" },
      { en: "1-page website", hi: "1-पेज वेबसाइट" },
    ],
    excluded: [
      { en: "Google Ads management", hi: "Google विज्ञापन प्रबंधन" },
      { en: "Advanced content creation", hi: "एडवांस कंटेंट क्रिएशन" },
    ],
    cta: { en: "Get started", hi: "शुरू करें" },
    popular: false,
    pro: false,
  },
  {
    name: { en: "Business", hi: "बिज़नेस" },
    price: "₹9,999",
    period: { en: "per month", hi: "प्रति माह" },
    desc: { en: "The complete package for businesses ready to scale.", hi: "स्केल करने के लिए तैयार बिज़नेस के लिए संपूर्ण पैकेज।" },
    features: [
      { en: "Everything in Starter", hi: "स्टार्टर की सभी सुविधाएं" },
      { en: "5-page professional website", hi: "5-पेज पेशेवर वेबसाइट" },
      { en: "Advanced SEO (20 keywords)", hi: "एडवांस SEO (20 कीवर्ड)" },
      { en: "Google Ads management", hi: "Google विज्ञापन प्रबंधन" },
      { en: "GMB optimisation", hi: "GMB ऑप्टिमाइज़ेशन" },
      { en: "4 content pieces / month", hi: "4 कंटेंट पीस / माह" },
      { en: "Competitor analysis", hi: "प्रतिस्पर्धी विश्लेषण" },
      { en: "Bi-weekly reports", hi: "पाक्षिक रिपोर्ट" },
    ],
    excluded: [],
    cta: { en: "Start free consultation", hi: "मुफ्त परामर्श शुरू करें" },
    popular: true,
    pro: false,
  },
  {
    name: { en: "Professional", hi: "प्रोफेशनल" },
    price: "₹16,999",
    period: { en: "per month", hi: "प्रति माह" },
    desc: { en: "For market leaders who want total digital dominance.", hi: "पूर्ण डिजिटल दबदबा चाहने वाले मार्केट लीडर्स के लिए।" },
    features: [
      { en: "Everything in Business", hi: "बिज़नेस की सभी सुविधाएं" },
      { en: "10-page custom website", hi: "10-पेज कस्टम वेबसाइट" },
      { en: "Full SEO strategy (50 keywords)", hi: "पूर्ण SEO रणनीति (50 कीवर्ड)" },
      { en: "Advanced Google Ads", hi: "एडवांस Google विज्ञापन" },
      { en: "Social media management", hi: "सोशल मीडिया प्रबंधन" },
      { en: "8 content pieces / month", hi: "8 कंटेंट पीस / माह" },
      { en: "Dedicated account manager", hi: "समर्पित अकाउंट मैनेजर" },
      { en: "Weekly strategy calls", hi: "साप्ताहिक रणनीति कॉल" },
    ],
    excluded: [],
    cta: { en: "Get started", hi: "शुरू करें" },
    popular: false,
    pro: true,
  },
  {
    name: { en: "Enterprise", hi: "एंटरप्राइज़" },
    price: { en: "Custom", hi: "कस्टम" },
    period: { en: "tailored to you", hi: "आपके अनुसार तैयार" },
    desc: { en: "For chains, franchises and large teams with multi-location needs.", hi: "मल्टी-लोकेशन ज़रूरतों वाली चेन, फ्रेंचाइज़ी और बड़ी टीमों के लिए।" },
    features: [
      { en: "Everything in Professional", hi: "प्रोफेशनल की सभी सुविधाएं" },
      { en: "Unlimited website pages", hi: "असीमित वेबसाइट पेज" },
      { en: "Multi-location SEO & GMB", hi: "मल्टी-लोकेशन SEO और GMB" },
      { en: "Business automation & CRM", hi: "बिज़नेस ऑटोमेशन और CRM" },
      { en: "Custom reporting dashboard", hi: "कस्टम रिपोर्टिंग डैशबोर्ड" },
      { en: "Priority 24/7 support", hi: "प्राथमिकता 24/7 सपोर्ट" },
    ],
    excluded: [],
    cta: { en: "Talk to sales", hi: "सेल्स से बात करें" },
    popular: false,
    pro: false,
  },
];

const comparisonRows = [
  { label: { en: "Website pages", hi: "वेबसाइट पेज" }, values: [{ en: "1 page", hi: "1 पेज" }, { en: "5 pages", hi: "5 पेज" }, { en: "10 pages", hi: "10 पेज" }, { en: "Unlimited", hi: "असीमित" }] },
  { label: { en: "SEO keywords", hi: "SEO कीवर्ड" }, values: ["5", "20", "50", { en: "Custom", hi: "कस्टम" }] },
  { label: { en: "Google Ads management", hi: "Google विज्ञापन प्रबंधन" }, values: [false, true, true, true] },
  { label: { en: "GMB optimisation", hi: "GMB ऑप्टिमाइज़ेशन" }, values: [true, true, true, true] },
  { label: { en: "Content pieces / month", hi: "कंटेंट पीस / माह" }, values: ["—", "4", "8", { en: "Custom", hi: "कस्टम" }] },
  { label: { en: "Social media management", hi: "सोशल मीडिया प्रबंधन" }, values: [false, false, true, true] },
  { label: { en: "Business automation / CRM", hi: "बिज़नेस ऑटोमेशन / CRM" }, values: [false, false, false, true] },
  { label: { en: "Dedicated account manager", hi: "समर्पित अकाउंट मैनेजर" }, values: [false, false, true, true] },
  { label: { en: "Reporting", hi: "रिपोर्टिंग" }, values: [{ en: "Monthly", hi: "मासिक" }, { en: "Bi-weekly", hi: "पाक्षिक" }, { en: "Weekly", hi: "साप्ताहिक" }, { en: "Custom dashboard", hi: "कस्टम डैशबोर्ड" }] },
  { label: { en: "Support", hi: "सपोर्ट" }, values: [{ en: "WhatsApp", hi: "व्हाट्सएप" }, { en: "WhatsApp", hi: "व्हाट्सएप" }, { en: "WhatsApp + calls", hi: "व्हाट्सएप + कॉल" }, { en: "Priority 24/7", hi: "प्राथमिकता 24/7" }]},
];

function val(v: string | boolean | { en: string; hi: string }, lang: "en" | "hi") {
  if (typeof v === "string" || typeof v === "boolean") return v;
  return lang === "hi" ? v.hi : v.en;
}

export default function Pricing() {
  const [mobilePlan, setMobilePlan] = useState(1);
  const { lang } = useLanguage();
  const t = useT();
  const planNames = plans.map(p => (lang === "hi" ? p.name.hi : p.name.en));

  return (
    <section id="pricing" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("Pricing", "मूल्य")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("Simple, honest", "सरल, ईमानदार")} <span className="accent">{t("pricing", "मूल्य निर्धारण")}</span>.
          </h2>
          <p className="t-body" style={{ maxWidth: "380px", margin: "0 auto" }}>
            {t("No lock-in contracts. No hidden fees. Cancel any time.", "कोई लॉक-इन कॉन्ट्रैक्ट नहीं। कोई छिपी हुई फीस नहीं। कभी भी रद्द करें।")}
          </p>
        </div>

        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px", alignItems: "start" }}>
          {plans.map((plan) => (
            <div key={plan.name.en} style={{
              borderRadius: "22px", overflow: "hidden",
              border: plan.popular ? "2px solid #1D4ED8" : "1px solid #E2E8F0",
              background: plan.popular ? "#1E3A8A" : "#fff",
              boxShadow: plan.popular ? "0 20px 60px rgba(29,78,216,0.25)" : "0 2px 12px rgba(0,0,0,0.04)",
              transition: "transform 0.25s, box-shadow 0.25s",
              position: "relative",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}>

              {plan.popular && (
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  padding: "10px 0",
                  background: "#1D4ED8",
                  fontSize: "11px", fontWeight: 700, color: "#fff",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7-5.4-4.7 7.1-.6L12 2z"/></svg>
                  {t("Most Popular", "सबसे लोकप्रिय")}
                </div>
              )}

              {plan.pro && (
                <div style={{
                  position: "absolute", top: "20px", right: "20px",
                  display: "flex", alignItems: "center", gap: "5px",
                  padding: "5px 12px", borderRadius: "100px",
                  background: "linear-gradient(135deg, #FCD34D, #F59E0B)",
                  boxShadow: "0 4px 12px rgba(245,158,11,0.35)",
                  fontSize: "11px", fontWeight: 800, color: "#78350F",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 20h20l-2-9-5 4-3-8-3 8-5-4z"/></svg>
                  Pro
                </div>
              )}

              <div style={{ padding: "32px 24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: plan.popular ? "#fff" : "#111827", marginBottom: "8px" }}>{lang === "hi" ? plan.name.hi : plan.name.en}</h3>
                <p style={{ fontSize: "13px", color: plan.popular ? "rgba(255,255,255,0.65)" : "#4B5563", marginBottom: "24px", lineHeight: 1.6, minHeight: "40px" }}>{lang === "hi" ? plan.desc.hi : plan.desc.en}</p>

                <div style={{ paddingBottom: "24px", borderBottom: `1px solid ${plan.popular ? "rgba(255,255,255,0.12)" : "#F1F5F9"}`, marginBottom: "24px" }}>
                  <div style={{ fontSize: "40px", fontWeight: 700, color: plan.popular ? "#fff" : "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>{typeof plan.price === "string" ? plan.price : (lang === "hi" ? plan.price.hi : plan.price.en)}</div>
                  <div style={{ fontSize: "13px", color: plan.popular ? "rgba(255,255,255,0.5)" : "#4B5563", marginTop: "6px" }}>{lang === "hi" ? plan.period.hi : plan.period.en}{typeof plan.price === "string" ? t(" · GST extra", " · GST अतिरिक्त") : ""}</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {plan.features.map(f => (
                    <div key={f.en} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        background: plan.popular ? "rgba(255,255,255,0.15)" : "#EFF6FF",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? "#fff" : "#1D4ED8"} strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span style={{ fontSize: "13.5px", color: plan.popular ? "rgba(255,255,255,0.85)" : "#374151", lineHeight: 1.5 }}>{lang === "hi" ? f.hi : f.en}</span>
                    </div>
                  ))}
                  {plan.excluded.map(f => (
                    <div key={f.en} style={{ display: "flex", alignItems: "flex-start", gap: "10px", opacity: 0.4 }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%", flexShrink: 0, marginTop: "1px",
                        background: "#F1F5F9",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                      <span style={{ fontSize: "13.5px", color: "#4B5563", lineHeight: 1.5 }}>{lang === "hi" ? f.hi : f.en}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: "block", textAlign: "center",
                  padding: "14px", borderRadius: "12px",
                  fontWeight: 700, fontSize: "15px", textDecoration: "none",
                  background: plan.popular ? "#fff" : "#1D4ED8",
                  color: plan.popular ? "#1E3A8A" : "#fff",
                  boxShadow: plan.popular ? "0 4px 16px rgba(255,255,255,0.2)" : "0 2px 10px rgba(29,78,216,0.3)",
                  transition: "opacity 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                  {lang === "hi" ? plan.cta.hi : plan.cta.en} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature comparison — desktop table */}
        <div className="pricing-table-desktop" style={{ marginTop: "72px" }}>
          <h3 className="t-h3" style={{ textAlign: "center", marginBottom: "32px" }}>{t("Feature Comparison", "फीचर तुलना")}</h3>
          <div style={{
            overflowX: "auto", border: "1px solid #E2E8F0", borderRadius: "18px",
            background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "620px" }}>
              <thead>
                <tr style={{ background: "#F5F7FA" }}>
                  <th style={{ textAlign: "left", padding: "16px 20px", fontSize: "12px", fontWeight: 700, color: "#4B5563", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #E2E8F0" }}>{t("Feature", "फीचर")}</th>
                  {planNames.map((n, ni) => (
                    <th key={n} style={{
                      textAlign: "center", padding: "16px 16px", fontSize: "13px", fontWeight: 700,
                      color: plans[ni].popular ? "#1D4ED8" : "#111827",
                      background: plans[ni].popular ? "#EFF6FF" : "transparent",
                      borderBottom: plans[ni].popular ? "2px solid #1D4ED8" : "1px solid #E2E8F0",
                    }}>{n}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, ri) => (
                  <tr key={row.label.en} style={{ background: ri % 2 === 0 ? "#fff" : "#FCFCFD" }}>
                    <td style={{ padding: "14px 20px", fontSize: "13.5px", color: "#374151", fontWeight: 500, borderBottom: "1px solid #F1F5F9" }}>{lang === "hi" ? row.label.hi : row.label.en}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} style={{
                        textAlign: "center", padding: "14px 16px", borderBottom: "1px solid #F1F5F9",
                        background: plans[vi].popular ? "#F5F9FF" : "transparent",
                      }}>
                        {typeof v === "boolean" ? (
                          v ? (
                            <>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" style={{ display: "inline-block" }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                              <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>{t("Included", "शामिल")}</span>
                            </>
                          ) : (
                            <span style={{ color: "#94A3B8", fontSize: "14px" }} aria-label={t("Not included", "शामिल नहीं")}>—</span>
                          )
                        ) : (
                          <span style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500 }}>{val(v, lang)}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature comparison — mobile: tap a plan, no horizontal scroll */}
        <div className="pricing-table-mobile" style={{ marginTop: "72px" }}>
          <h3 className="t-h3" style={{ textAlign: "center", marginBottom: "20px" }}>{t("Feature Comparison", "फीचर तुलना")}</h3>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "20px" }}>
            {planNames.map((n, ni) => (
              <button key={n} onClick={() => setMobilePlan(ni)} aria-pressed={mobilePlan === ni} style={{
                padding: "8px 16px", borderRadius: "100px", cursor: "pointer",
                border: mobilePlan === ni ? "1.5px solid #1D4ED8" : "1px solid #E2E8F0",
                background: mobilePlan === ni ? "#EFF6FF" : "#fff",
                color: mobilePlan === ni ? "#1D4ED8" : "#4B5563",
                fontSize: "13px", fontWeight: 600,
              }}>
                {n}
              </button>
            ))}
          </div>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", overflow: "hidden" }}>
            {comparisonRows.map((row, ri) => {
              const v = row.values[mobilePlan];
              return (
                <div key={row.label.en} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                  padding: "14px 18px",
                  borderBottom: ri < comparisonRows.length - 1 ? "1px solid #F1F5F9" : "none",
                  background: ri % 2 === 0 ? "#fff" : "#FCFCFD",
                }}>
                  <span style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500 }}>{lang === "hi" ? row.label.hi : row.label.en}</span>
                  {typeof v === "boolean" ? (
                    v ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                        <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>{t("Included", "शामिल")}</span>
                      </>
                    ) : (
                      <span style={{ color: "#94A3B8", fontSize: "14px" }} aria-label={t("Not included", "शामिल नहीं")}>—</span>
                    )
                  ) : (
                    <span style={{ fontSize: "13.5px", color: "#111827", fontWeight: 600 }}>{val(v, lang)}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom plan note */}
        <div style={{
          marginTop: "32px", padding: "28px 32px", borderRadius: "16px",
          background: "#F5F7FA", border: "1px solid #E2E8F0",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px",
        }}>
          <div>
            <div style={{ fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "4px" }}>{t("Need a custom plan?", "कस्टम प्लान चाहिए?")}</div>
            <p style={{ fontSize: "14px", color: "#4B5563" }}>{t("Tell us your budget and goals — we'll put together something that fits.", "अपना बजट और लक्ष्य बताएं — हम आपके अनुसार कुछ तैयार करेंगे।")}</p>
          </div>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            {t("Message us on WhatsApp →", "व्हाट्सएप पर मैसेज करें →")}
          </a>
        </div>
      </div>
    </section>
  );
}
