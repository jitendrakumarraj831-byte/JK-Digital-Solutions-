"use client";
import { useLanguage } from "@/lib/i18n";

const stats = [
  { n: "4.9★", l: { en: "Google Rating",   hi: "Google रेटिंग" },    i: <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7-5.4-4.7 7.1-.6L12 2z"/> },
  { n: "200+", l: { en: "Happy Clients",    hi: "खुश ग्राहक" },       i: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></> },
  { n: "5+",   l: { en: "Years Experience", hi: "वर्षों का अनुभव" },  i: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
  { n: "48hr", l: { en: "Ads Go Live",      hi: "विज्ञापन लाइव" },    i: <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/> },
];

export default function HeroStats() {
  const { lang } = useLanguage();
  return (
    <div style={{ background: "#FCFCFD", paddingBottom: "64px" }}>
      <div className="wrap">
        <div className="stats-bar" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderRadius: "16px",
          border: "1px solid #E2E8F0",
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
        }}>
          {stats.map((s, idx) => (
            <div key={idx} style={{
              padding: "24px 16px",
              textAlign: "center",
              borderRight: idx < 3 ? "1px solid #E2E8F0" : "none",
              background: "#fff",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#F8FAFC"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#fff"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 8px" }} aria-hidden="true">{s.i}</svg>
              <div style={{ fontSize: "26px", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "4px", fontWeight: 500 }}>{lang === "hi" ? s.l.hi : s.l.en}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .stats-bar { grid-template-columns: 1fr 1fr !important; }
          .stats-bar > div { border-right: none !important; border-bottom: 1px solid #E2E8F0; }
        }
      `}</style>
    </div>
  );
}
