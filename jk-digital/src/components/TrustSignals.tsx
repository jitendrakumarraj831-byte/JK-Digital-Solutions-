"use client";

const signals = [
  {
    title: "No Lock-in Contracts",
    desc: "Work with us month to month. You stay because of results, not because you're stuck in a contract.",
    icon: <><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></>,
  },
  {
    title: "100% Transparent Reporting",
    desc: "Every rupee spent and every result delivered, tracked and shared — in plain language, not agency jargon.",
    icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
  },
  {
    title: "A Dedicated Account Manager",
    desc: "One person who actually knows your business — not a rotating support queue that starts from zero each time.",
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>,
  },
  {
    title: "On-Time Delivery, Guaranteed",
    desc: "We agree on a timeline before a single rupee changes hands — and we hold ourselves to it.",
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  },
  {
    title: "Your Data Stays Private",
    desc: "We never sell, share, or repurpose your business data. What's yours stays yours — always.",
    icon: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
  },
  {
    title: "A Real Team, One Message Away",
    desc: "WhatsApp us any time and get a real person who understands your account — never a chatbot.",
    icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>,
  },
];

export default function TrustSignals() {
  return (
    <section id="trust" style={{ padding: "96px 0", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="t-label" style={{ marginBottom: "14px" }}>Why Businesses Trust Us</p>
          <h2 className="t-h2" style={{ marginBottom: "16px" }}>
            Trust isn&apos;t given. It&apos;s <span className="accent">earned</span>{" "}— here&apos;s how.
          </h2>
          <p className="t-body" style={{ maxWidth: "520px", margin: "0 auto" }}>
            No fine print, no vanishing acts after the invoice clears. Every engagement runs on the same six promises.
          </p>
        </div>

        <div className="auto-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
          {signals.map(s => (
            <div key={s.title} className="card" style={{
              padding: "28px", background: "#fff",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)"; }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: "#EFF6FF", color: "#1D4ED8",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
