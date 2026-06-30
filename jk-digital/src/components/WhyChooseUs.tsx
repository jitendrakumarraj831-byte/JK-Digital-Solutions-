"use client";

const reasons = [
  {
    color: "#60a5fa", bg: "rgba(59,130,246,0.1)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: "Local Market Experts",
    desc: "Forbesganj में बैठकर काम करते हैं। Bihar के customers की psychology, भाषा और behavior personally समझते हैं — जो बाहरी agencies नहीं जान सकती।",
  },
  {
    color: "#34d399", bg: "rgba(16,185,129,0.1)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    title: "Results, Not Promises",
    desc: "Vanity metrics नहीं — real phone calls, genuine leads और actual paying customers। हर campaign performance-tracked होती है।",
  },
  {
    color: "#fbbf24", bg: "rgba(245,158,11,0.1)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Zero Hidden Charges",
    desc: "Contract में जो लिखा है, वही होगा। कोई surprise bill नहीं, कोई extra charge नहीं। पूरी transparency हमारी policy है।",
  },
  {
    color: "#a78bfa", bg: "rgba(139,92,246,0.1)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: "Lightning Fast Delivery",
    desc: "Website 30 days, GMB 7 days, Ads same-day launch। हम deadlines seriously लेते हैं — आपका समय और हमारा दोनों valuable है।",
  },
  {
    color: "#06b6d4", bg: "rgba(6,182,212,0.1)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    title: "Always Accessible",
    desc: "WhatsApp पर हमेशा available। किसी भी emergency में 30 minutes के अंदर respond करते हैं — weekends और holidays पर भी।",
  },
  {
    color: "#f472b6", bg: "rgba(244,114,182,0.1)",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: "Data-Driven Strategy",
    desc: "हर decision analytics से backed होती है। A/B testing, competitor research और monthly reports से आपको पूरी clarity रहती है।",
  },
];

const stats = [
  { n: "3+", label: "Years of Experience" },
  { n: "150+", label: "Projects Delivered" },
  { n: "₹5Cr+", label: "Revenue Generated" },
  { n: "98%", label: "Client Retention Rate" },
];

export default function WhyChooseUs() {
  return (
    <section style={{ background: "#05091a", padding: "112px 0", position: "relative", overflow: "hidden" }}>
      {/* BG accents */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse 55% 70% at 100% 40%, rgba(59,130,246,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "45%", height: "60%", background: "radial-gradient(ellipse 55% 70% at 0% 100%, rgba(139,92,246,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "16px" }}>Why Choose Us</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: "18px",
          }}>
            दूसरे Agency से हम{" "}
            <span className="grad-text">क्यों अलग हैं?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "17px", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
            सिर्फ claims नहीं — ये 6 factors हमें Bihar का best digital agency बनाते हैं।
          </p>
        </div>

        {/* Stats strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.07)",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "80px",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              background: "#05091a",
              padding: "32px 20px",
              textAlign: "center",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "40px", height: "2px", background: "linear-gradient(90deg, #3b82f6, #06b6d4)", borderRadius: "0 0 4px 4px" }} />
              <p className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "10px", fontWeight: 500, letterSpacing: "0.03em" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "16px", marginBottom: "64px" }}>
          {reasons.map(r => (
            <div key={r.title}
              style={{
                display: "flex", gap: "18px", padding: "28px",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "18px",
                transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.048)";
                el.style.borderColor = "rgba(255,255,255,0.1)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.025)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.transform = "translateY(0)";
              }}>
              <div style={{
                width: "46px", height: "46px", borderRadius: "13px",
                background: r.bg, color: r.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {r.icon}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "15px", marginBottom: "8px", letterSpacing: "-0.01em" }}>{r.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "13px", lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "16px 36px", borderRadius: "12px",
            background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
            color: "#fff", fontWeight: 700, fontSize: "16px", textDecoration: "none",
            boxShadow: "0 4px 28px rgba(59,130,246,0.38)",
            transition: "all 0.22s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(59,130,246,0.52)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 28px rgba(59,130,246,0.38)"; }}>
            Free Strategy Call लें
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "9px",
            padding: "16px 32px", borderRadius: "12px",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            color: "#fff", fontWeight: 700, fontSize: "16px", textDecoration: "none",
            boxShadow: "0 4px 24px rgba(37,211,102,0.3)",
            transition: "all 0.22s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(37,211,102,0.45)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(37,211,102,0.3)"; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.055 23.454l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.376l-.36-.213-3.716.975.992-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
            WhatsApp पर चैट करें
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
