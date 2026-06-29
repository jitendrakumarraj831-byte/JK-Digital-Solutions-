import { CheckCircle } from "lucide-react";

const reasons = [
  {
    emoji: "📍",
    title: "Local Experts",
    desc: "हम Forbesganj में ही हैं। आपके market को, आपकी language को, आपके customers को हम personally जानते हैं।",
  },
  {
    emoji: "📊",
    title: "Result-First Approach",
    desc: "हम vanity metrics में नहीं, real results में believe करते हैं — Calls, Leads, और actual Customers।",
  },
  {
    emoji: "🔒",
    title: "Transparent & Honest",
    desc: "हर महीने detailed reports। कोई jargon नहीं, कोई hidden fees नहीं। सब कुछ clear और simple।",
  },
  {
    emoji: "⚡",
    title: "Fast Execution",
    desc: "Website 30 days में। GMB 7 days में। Google Ads same day। बात करने से ज्यादा, काम करने में believe करते हैं।",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Why Us</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              दूसरे agencies से<br />
              हम क्यों{" "}
              <span className="g-text">अलग हैं?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              हर agency यही कहती है कि वो best है। हम आपको results से prove करते हैं।
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all">
                Free Audit लें →
              </a>
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all border border-white/10">
                WhatsApp करें
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4">
            {reasons.map(r => (
              <div key={r.title} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                <span className="text-2xl flex-shrink-0">{r.emoji}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
