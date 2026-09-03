"use client";
import { useLanguage, useT } from "@/lib/i18n";

const posts = [
  {
    category: { en: "SEO", hi: "SEO" },
    color: "#1D4ED8",
    bg: "#EFF6FF",
    title: { en: "Local SEO in 2026 — the complete guide for small businesses", hi: "2026 में लोकल SEO — छोटे बिज़नेस के लिए पूरी गाइड" },
    excerpt: { en: "7 practical steps to rank on Google Maps that any local business can start using today.", hi: "Google Maps पर रैंक करने के 7 व्यावहारिक तरीके, जिन्हें कोई भी लोकल बिज़नेस आज से शुरू कर सकता है।" },
    readTime: { en: "6 min read", hi: "6 मिनट का पठन" },
    date: { en: "12 Jun 2026", hi: "12 जून 2026" },
  },
  {
    category: { en: "Google Business Profile", hi: "Google बिज़नेस प्रोफाइल" },
    color: "#06B6D4",
    bg: "#ECFEFF",
    title: { en: "How to get more 5-star reviews on your GMB profile — the honest way", hi: "अपनी GMB प्रोफाइल पर ज़्यादा 5-स्टार रिव्यू कैसे पाएं — ईमानदार तरीका" },
    excerpt: { en: "The simple WhatsApp-based process our clients use to collect genuine customer reviews.", hi: "हमारे क्लाइंट्स असली ग्राहक रिव्यू इकट्ठा करने के लिए जिस सरल व्हाट्सएप प्रक्रिया का इस्तेमाल करते हैं।" },
    readTime: { en: "4 min read", hi: "4 मिनट का पठन" },
    date: { en: "28 May 2026", hi: "28 मई 2026" },
  },
  {
    category: { en: "Google Ads", hi: "Google विज्ञापन" },
    color: "#4F46E5",
    bg: "#EEF2FF",
    title: { en: "Is your Google Ads budget going to waste? Check these 6 mistakes", hi: "क्या आपका Google Ads बजट बर्बाद हो रहा है? ये 6 गलतियां जांचें" },
    excerpt: { en: "The most common campaign mistakes that inflate cost-per-lead — and how to fix them.", hi: "सबसे आम कैंपेन गलतियां जो प्रति-लीड लागत बढ़ाती हैं — और उन्हें कैसे ठीक करें।" },
    readTime: { en: "7 min read", hi: "7 मिनट का पठन" },
    date: { en: "15 May 2026", hi: "15 मई 2026" },
  },
];

export default function Blog() {
  const { lang } = useLanguage();
  const t = useT();
  return (
    <section id="blog" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ marginBottom: "56px", maxWidth: "520px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>{t("Our Blog", "हमारा ब्लॉग")}</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            {t("Insights that actually", "ऐसी जानकारी जो वाकई")} <span className="accent">{t("help", "मदद करती है")}</span>.
          </h2>
          <p className="t-body">
            {t("Practical guides on digital marketing — no jargon, just what actually works.", "डिजिटल मार्केटिंग पर व्यावहारिक गाइड — कोई जटिल भाषा नहीं, बस जो असल में काम करता है।")}
          </p>
        </div>

        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "20px" }}>
          {posts.map((p, i) => (
            <a key={i} href="#contact" className="card" style={{
              display: "block", textDecoration: "none",
              background: "#fff", border: "1px solid #E2E8F0", borderRadius: "20px",
              overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)"; }}>
              <div style={{ padding: "24px 24px 0" }}>
                <span style={{
                  display: "inline-block", padding: "4px 12px", borderRadius: "100px",
                  background: p.bg, color: p.color, fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em",
                }}>{lang === "hi" ? p.category.hi : p.category.en}</span>
              </div>
              <div style={{ padding: "16px 24px 24px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111827", lineHeight: 1.4, marginBottom: "10px", letterSpacing: "-0.01em" }}>{lang === "hi" ? p.title.hi : p.title.en}</h3>
                <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.65, marginBottom: "18px" }}>{lang === "hi" ? p.excerpt.hi : p.excerpt.en}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", color: "#6B7280", fontWeight: 500, marginBottom: "14px" }}>
                  <span>{lang === "hi" ? p.date.hi : p.date.en}</span>
                  <span>{lang === "hi" ? p.readTime.hi : p.readTime.en}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: p.color, paddingTop: "14px", borderTop: "1px solid #F1F5F9" }}>
                  {t("Read article", "लेख पढ़ें")}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
