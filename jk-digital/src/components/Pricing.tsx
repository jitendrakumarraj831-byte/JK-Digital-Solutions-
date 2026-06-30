import { MessageCircle } from "lucide-react";

const plans = [
  { name:"Starter", price:"₹4,999", period:"/month", sub:"छोटे Business के लिए", popular:false,
    yes:["5-Page Website","Google Business Setup","Basic SEO","WhatsApp Integration","Monthly Report"],
    no:["Google Ads","Advanced SEO","Priority Support"] },
  { name:"Professional", price:"₹9,999", period:"/month", sub:"Growing Business के लिए", popular:true,
    yes:["10-Page Premium Website","GMB Full Optimization","Advanced SEO — 20 Keywords","Google Ads (₹5K budget incl.)","Bi-weekly Reports","Review Management","Priority Support"],
    no:[] },
  { name:"Premium", price:"₹19,999", period:"/month", sub:"Market Leader के लिए", popular:false,
    yes:["Unlimited Pages Website","SEO — 50+ Keywords","Google + Meta Ads (₹15K budget)","Landing Pages","Weekly Reports","Content Creation","Dedicated Manager"],
    no:[] },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "#f9fafb", padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#2563eb", marginBottom: "12px" }}>Pricing</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#111827", marginBottom: "12px" }}>Simple, Honest Pricing</h2>
          <p style={{ color: "#6b7280" }}>कोई hidden charges नहीं। जो दिखे, वही देना है।</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "20px", alignItems: "start" }}>
          {plans.map(p => (
            <div key={p.name} style={{ background: "#fff", borderRadius: "20px", padding: "28px", position: "relative", border: p.popular ? "2px solid #2563eb" : "1px solid #e5e7eb", boxShadow: p.popular ? "0 0 0 4px rgba(37,99,235,0.08)" : "none" }}>
              {p.popular && (
                <span style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "#2563eb", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "5px 16px", borderRadius: "100px", whiteSpace: "nowrap" }}>
                  ⭐ Most Popular
                </span>
              )}
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9ca3af", marginBottom: "8px", marginTop: p.popular ? "6px" : "0" }}>{p.sub}</p>
              <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#111827", marginBottom: "16px" }}>{p.name}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "24px" }}>
                <span style={{ fontSize: "32px", fontWeight: 900, color: "#111827" }}>{p.price}</span>
                <span style={{ color: "#9ca3af", fontSize: "13px" }}>{p.period}</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                {p.yes.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#374151" }}>
                    <span style={{ color: "#10b981", flexShrink: 0, marginTop: "1px" }}>✓</span>{f}
                  </li>
                ))}
                {p.no.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#d1d5db" }}>
                    <span style={{ flexShrink: 0, marginTop: "1px" }}>✗</span>{f}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/918651070831?text=नमस्ते! ${p.name} Plan चाहिए।`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", padding: "12px", borderRadius: "12px", background: p.popular ? "#2563eb" : "#f3f4f6", color: p.popular ? "#fff" : "#374151", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>
                <MessageCircle style={{ width: "14px", height: "14px" }} /> {p.name} Plan लें
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "#9ca3af", fontSize: "14px", marginTop: "32px" }}>
          Custom plan चाहिए?{" "}
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>WhatsApp पर बात करें →</a>
        </p>
      </div>
    </section>
  );
}
