"use client";
import { useState } from "react";

const cases = [
  {
    name: "Bright Future Academy",
    tag: "Education · Coaching Institute",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    problem: "Admissions had plateaued — the institute relied entirely on walk-ins, had no online presence, and prospective students couldn't find them on Google.",
    solution: "A 5-page website, local SEO, and a targeted Google Ads campaign — launched 6 weeks before admission season, with a WhatsApp enquiry button on every landing page.",
    metrics: [
      { l: "Website Traffic", v: "+340%", icon: "📈" },
      { l: "New Leads / month", v: "120+", icon: "🎯" },
      { l: "Google Ranking", v: "#1–3", icon: "🔍" },
      { l: "Ad Spend ROI", v: "6.2×", icon: "💰" },
    ],
  },
  {
    name: "Dr. Sharma Dental Clinic",
    tag: "Healthcare · Clinic",
    color: "#06B6D4",
    bg: "#ECFEFF",
    problem: "The clinic wasn't ranking on Google Maps — competing clinics appeared first, and the profile had only 12 reviews.",
    solution: "A complete Google Business Profile rebuild, a WhatsApp-based review collection process, and 8 weeks of local SEO targeting the right keywords.",
    metrics: [
      { l: "Local Search Rank", v: "#1", icon: "📍" },
      { l: "New Patients", v: "+180%", icon: "🦷" },
      { l: "Google Reviews", v: "12 → 140", icon: "⭐" },
      { l: "Call Enquiries", v: "3×", icon: "📞" },
    ],
  },
  {
    name: "Agarwal Properties",
    tag: "Real Estate · Property Dealer",
    color: "#16A34A",
    bg: "#F0FDF4",
    problem: "Enquiries came from referrals alone — no digital funnel, and even strong listings were selling slowly.",
    solution: "Google Ads with landing pages for each property type, plus retargeting — every enquiry routed straight to WhatsApp with a 5-minute response time.",
    metrics: [
      { l: "Qualified Leads", v: "40+/mo", icon: "🏠" },
      { l: "Cost per Lead", v: "-58%", icon: "📉" },
      { l: "Ranking Keywords", v: "24", icon: "🔍" },
      { l: "Ad Spend ROI", v: "5×", icon: "💰" },
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
        <p style={{ fontSize: "12.5px", color: "#94A3B8", fontStyle: "italic", marginBottom: "32px" }}>
          Sample case studies illustrating the type of engagement and results we deliver for clients.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
          {cases.map((item, i) => (
            <button key={item.name} onClick={() => setActive(i)} style={{
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
                  <div style={{ fontSize: "18px", marginBottom: "6px" }}>{m.icon}</div>
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
