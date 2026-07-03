"use client";
import { useState } from "react";

const icon = {
  trendUp: <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>,
  target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
  search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
  coin: <><circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 3.5M12 16.5h.01"/></>,
  pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/>,
  star: <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7-5.4-4.7 7.1-.6L12 2z"/>,
  phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>,
  home: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  trendDown: <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>,
};

const cases = [
  {
    name: "Bright Future Academy",
    tag: "Education · Coaching Institute",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    outcome: "120+ new admissions in a single season — up from near-zero online enquiries.",
    problem: "Admissions had plateaued — the institute relied entirely on walk-ins, had no online presence, and prospective students couldn't find them on Google.",
    solution: "A 5-page website, local SEO, and a targeted Google Ads campaign — launched 6 weeks before admission season, with a WhatsApp enquiry button on every landing page.",
    metrics: [
      { l: "Website Traffic", v: "+340%", icon: icon.trendUp },
      { l: "New Leads / month", v: "120+", icon: icon.target },
      { l: "Google Ranking", v: "#1–3", icon: icon.search },
      { l: "Ad Spend ROI", v: "6.2×", icon: icon.coin },
    ],
  },
  {
    name: "Dr. Sharma Dental Clinic",
    tag: "Healthcare · Clinic",
    color: "#06B6D4",
    bg: "#ECFEFF",
    outcome: "From page 3 of Google Maps to the #1 local result in 8 weeks.",
    problem: "The clinic wasn't ranking on Google Maps — competing clinics appeared first, and the profile had only 12 reviews.",
    solution: "A complete Google Business Profile rebuild, a WhatsApp-based review collection process, and 8 weeks of local SEO targeting the right keywords.",
    metrics: [
      { l: "Local Search Rank", v: "#1", icon: icon.pin },
      { l: "New Patients", v: "+180%", icon: icon.heart },
      { l: "Google Reviews", v: "12 → 140", icon: icon.star },
      { l: "Call Enquiries", v: "3×", icon: icon.phone },
    ],
  },
  {
    name: "Agarwal Properties",
    tag: "Real Estate · Property Dealer",
    color: "#16A34A",
    bg: "#F0FDF4",
    outcome: "A referral-only business turned into a predictable pipeline of 40+ leads a month.",
    problem: "Enquiries came from referrals alone — no digital funnel, and even strong listings were selling slowly.",
    solution: "Google Ads with landing pages for each property type, plus retargeting — every enquiry routed straight to WhatsApp with a 5-minute response time.",
    metrics: [
      { l: "Qualified Leads", v: "40+/mo", icon: icon.home },
      { l: "Cost per Lead", v: "-58%", icon: icon.trendDown },
      { l: "Ranking Keywords", v: "24", icon: icon.search },
      { l: "Ad Spend ROI", v: "5×", icon: icon.coin },
    ],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="case-studies" style={{ padding: "112px 0", background: "#FCFCFD" }}>
      <div className="wrap">
        <div style={{ marginBottom: "24px", maxWidth: "560px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Case Studies</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            From <span className="accent">problem</span> to result — the full story.
          </h2>
          <p className="t-body">
            Every business is different. Here&apos;s how we turn real challenges into measurable growth.
          </p>
        </div>
        <p style={{ fontSize: "12.5px", color: "#6B7280", fontStyle: "italic", marginBottom: "32px" }}>
          Sample case studies illustrating the type of engagement and results we deliver for clients.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
          {cases.map((item, i) => (
            <button key={item.name} onClick={() => setActive(i)} aria-pressed={active === i} style={{
              padding: "10px 20px", borderRadius: "100px", cursor: "pointer",
              border: active === i ? `1.5px solid ${item.color}` : "1px solid #E2E8F0",
              background: active === i ? item.bg : "#fff",
              color: active === i ? item.color : "#4B5563",
              fontSize: "14px", fontWeight: 600,
              transition: "all 0.18s",
            }}>
              {item.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          background: "#fff", border: "1px solid #E2E8F0", borderRadius: "24px",
          overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
        }}>
          <div style={{
            padding: "24px 32px", background: c.bg,
            borderBottom: `1px solid ${c.color}22`,
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
          }}>
            <div>
              <div style={{ fontSize: "19px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em" }}>{c.name}</div>
              <p style={{ fontSize: "13px", color: c.color, fontWeight: 600, marginTop: "3px" }}>{c.tag}</p>
            </div>
          </div>

          <div style={{ padding: "clamp(24px, 4vw, 40px)" }}>
            {/* Outcome pull-quote */}
            <p style={{
              fontSize: "clamp(19px, 2.4vw, 24px)", fontWeight: 700, color: "#111827",
              letterSpacing: "-0.015em", lineHeight: 1.35, marginBottom: "32px",
              borderLeft: `3px solid ${c.color}`, paddingLeft: "18px",
            }}>
              {c.outcome}
            </p>

            <div className="case-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginBottom: "32px" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>Business Problem</p>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.75 }}>{c.problem}</p>
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: c.color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>Our Solution</p>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.75 }}>{c.solution}</p>
              </div>
            </div>

            <div style={{ height: "1px", background: "#F1F5F9", marginBottom: "28px" }} />

            <p style={{ fontSize: "11px", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Results</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))", gap: "12px" }}>
              {c.metrics.map(m => (
                <div key={m.l} style={{
                  padding: "18px 16px", borderRadius: "14px", textAlign: "center",
                  background: c.bg, border: `1px solid ${c.color}18`,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", margin: "0 auto 8px" }} aria-hidden="true">{m.icon}</svg>
                  <div style={{ fontSize: "22px", fontWeight: 700, color: c.color, letterSpacing: "-0.02em" }}>{m.v}</div>
                  <div style={{ fontSize: "11px", color: "#4B5563", marginTop: "3px", fontWeight: 500 }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) { .case-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
