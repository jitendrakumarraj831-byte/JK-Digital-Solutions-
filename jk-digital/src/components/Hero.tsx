import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" style={{ background: "#fff", paddingTop: "64px" }}>
      <div className="wrap" style={{ paddingTop: "56px", paddingBottom: "64px" }}>

        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-blue-700 text-xs font-bold">Forbesganj, Bihar का #1 Digital Agency</span>
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, color: "#111827", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
          अपना Business<br />
          Google पर <span className="g-text">Top</span> पर लाएं।
        </h1>

        <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.7, maxWidth: "540px", marginBottom: "32px" }}>
          Website बनाना, Google SEO, GMB Optimization, Google Ads —
          सब कुछ एक जगह। बिना confusion, बिना hidden charges।
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "100px", background: "#2563eb", color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none", boxShadow: "0 4px 20px rgba(37,99,235,0.25)" }}>
            Free Website Audit लें <ArrowRight style={{ width: "16px", height: "16px" }} />
          </a>
          <a href="https://wa.me/918651070831?text=नमस्ते! मुझे Digital Marketing help चाहिए।"
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "100px", background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none", boxShadow: "0 4px 20px rgba(37,211,102,0.2)" }}>
            <MessageCircle style={{ width: "16px", height: "16px" }} /> WhatsApp पर बात करें
          </a>
        </div>

        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "56px" }}>✅ Free consultation · No commitment · Reply in 30 mins</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", borderTop: "1px solid #f3f4f6", paddingTop: "40px" }}
          className="sm:grid-cols-4">
          {[
            { n: "150+", l: "Projects Completed" },
            { n: "120+", l: "Happy Clients" },
            { n: "4.9★", l: "Google Rating" },
            { n: "3+ Yrs", l: "Experience" },
          ].map(s => (
            <div key={s.l}>
              <p style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 900, color: "#111827" }}>{s.n}</p>
              <p style={{ fontSize: "13px", color: "#9ca3af", marginTop: "4px" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
