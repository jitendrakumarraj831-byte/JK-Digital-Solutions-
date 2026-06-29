import { CheckCircle, X, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Starter", hindi: "छोटे Business के लिए",
    price: "₹4,999", period: "/month",
    desc: "नई शुरुआत करने वाले local businesses के लिए perfect plan।",
    popular: false,
    features: [
      { text: "5-Page Professional Website", ok: true },
      { text: "Google Business Profile Setup", ok: true },
      { text: "Basic On-Page SEO", ok: true },
      { text: "WhatsApp Integration", ok: true },
      { text: "Monthly Report", ok: true },
      { text: "Google Ads Management", ok: false },
      { text: "Advanced SEO", ok: false },
      { text: "Priority Support", ok: false },
    ],
  },
  {
    name: "Professional", hindi: "Growing Businesses के लिए",
    price: "₹9,999", period: "/month",
    desc: "Google पर seriously rank करना और leads पाना चाहते हैं।",
    popular: true,
    features: [
      { text: "10-Page Premium Website", ok: true },
      { text: "GMB Full Optimization", ok: true },
      { text: "Advanced SEO (20 Keywords)", ok: true },
      { text: "Google Ads (₹5K budget incl.)", ok: true },
      { text: "WhatsApp + Contact Form", ok: true },
      { text: "Bi-weekly Reports", ok: true },
      { text: "Review Management", ok: true },
      { text: "Priority WhatsApp Support", ok: true },
    ],
  },
  {
    name: "Premium", hindi: "Market Leader बनने के लिए",
    price: "₹19,999", period: "/month",
    desc: "पूरे district में #1 बनना हो — यह plan आपके लिए है।",
    popular: false,
    features: [
      { text: "Unlimited Pages Website", ok: true },
      { text: "GMB + 5 Location Optimization", ok: true },
      { text: "SEO (50+ Keywords)", ok: true },
      { text: "Google + Meta Ads (₹15K budget)", ok: true },
      { text: "Landing Pages Creation", ok: true },
      { text: "Weekly Detailed Reports", ok: true },
      { text: "Content Creation & Posting", ok: true },
      { text: "Dedicated Account Manager", ok: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Pricing Plans</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-500 text-lg">कोई hidden charges नहीं। जो दिखे, वही देना है।</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <div key={p.name}
              className={`relative bg-white rounded-2xl p-7 ${p.popular ? "pricing-popular shadow-xl shadow-blue-500/10" : "border border-slate-200 shadow-sm"}`}>
              {p.popular && <span className="badge-popular">⭐ Most Popular</span>}

              <div className="mb-5 pt-2">
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">{p.hindi}</p>
                <h3 className="text-slate-900 font-bold text-2xl mb-2">{p.name}</h3>
                <p className="text-slate-500 text-sm">{p.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">{p.price}</span>
                <span className="text-slate-400 text-sm font-medium">{p.period}</span>
              </div>

              <ul className="space-y-3 mb-7">
                {p.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2.5 text-sm">
                    {f.ok
                      ? <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      : <X className="w-4 h-4 text-slate-300 flex-shrink-0" />}
                    <span className={f.ok ? "text-slate-700" : "text-slate-400"}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a href={`https://wa.me/918651070831?text=नमस्ते! मुझे ${p.name} Plan के बारे में जानना है।`}
                target="_blank" rel="noopener noreferrer"
                className={`w-full py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  p.popular
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35"
                    : "bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600"
                }`}>
                <MessageCircle className="w-4 h-4" />
                Get Started — {p.price}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-2">Custom plan चाहिए?</p>
          <a href="https://wa.me/918651070831?text=नमस्ते! मुझे Custom Plan चाहिए।" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700">
            WhatsApp पर बात करें →
          </a>
        </div>
      </div>
    </section>
  );
}
