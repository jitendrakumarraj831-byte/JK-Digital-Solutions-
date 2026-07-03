"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section style={{ padding: "0 0 112px", background: "#F5F7FA" }}>
      <div className="wrap">
        <div style={{
          borderRadius: "24px", padding: "clamp(32px, 5vw, 56px)",
          background: "#fff", border: "1px solid #E2E8F0",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "28px",
        }}>
          <div style={{ maxWidth: "420px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "44px", height: "44px", borderRadius: "12px",
              background: "#EFF6FF", color: "#1D4ED8", marginBottom: "16px",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h3 className="t-h3" style={{ marginBottom: "8px" }}>Monthly growth tips — straight to your inbox.</h3>
            <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>
              Practical tips on SEO, Google Ads and local marketing. No spam, unsubscribe any time.
            </p>
          </div>

          {subscribed ? (
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "16px 22px", borderRadius: "12px",
              background: "#F0FDF4", border: "1px solid #BBF7D0",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              <span role="status" style={{ fontSize: "14px", fontWeight: 600, color: "#16A34A" }}>Subscribed! Thank you.</span>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap", flex: "0 1 380px" }}>
              <input
                type="email"
                required
                aria-label="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="inp"
                style={{ flex: "1 1 200px" }}
              />
              <button type="submit" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
