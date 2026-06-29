import { CheckCircle, X, ArrowRight, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    hindi: "छोटे Business के लिए",
    price: "₹4,999",
    period: "/month",
    desc: "नई शुरुआत करने वाले local businesses के लिए perfect plan।",
    color: "border-slate-200",
    btnClass: "btn-secondary",
    popular: false,
    features: [
      { text: "5-Page Professional Website", included: true },
      { text: "Google Business Profile Setup", included: true },
      { text: "Basic On-Page SEO", included: true },
      { text: "WhatsApp Integration", included: true },
      { text: "Monthly Report", included: true },
      { text: "Google Ads Management", included: false },
      { text: "Advanced SEO", included: false },
      { text: "Priority Support", included: false },
    ],
  },
  {
    name: "Professional",
    hindi: "Growing Businesses के लिए",
    price: "₹9,999",
    period: "/month",
    desc: "जो businesses Google पर seriously rank करना और leads पाना चाहते हैं।",
    color: "pricing-popular",
    btnClass: "btn-primary",
    popular: true,
    features: [
      { text: "10-Page Premium Website", included: true },
      { text: "Google Business Profile Full Optimization", included: true },
      { text: "Advanced SEO (20 Keywords)", included: true },
      { text: "Google Ads Management (₹5K budget)", included: true },
      { text: "WhatsApp + Contact Form", included: true },
      { text: "Bi-weekly Reports", included: true },
      { text: "Review Management", included: true },
      { text: "Priority Support (WhatsApp)", included: true },
    ],
  },
  {
    name: "Premium",
    hindi: "Market Leader बनने के लिए",
    price: "₹19,999",
    period: "/month",
    desc: "अपने पूरे district में #1 बनना हो — यह plan आपके लिए है।",
    color: "border-slate-200",
    btnClass: "btn-secondary",
    popular: false,
    features: [
      { text: "Unlimited Pages Website", included: true },
      { text: "GMB + 5 Location Optimization", included: true },
      { text: "SEO (50+ Keywords)", included: true },
      { text: "Google + Meta Ads (₹15K budget)", included: true },
      { text: "Landing Pages Creation", included: true },
      { text: "Weekly Detailed Reports", included: true },
      { text: "Content Creation & Posting", included: true },
      { text: "Dedicated Account Manager", included: true },
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
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-500 text-lg">
            कोई hidden charges नहीं। जो दिखे, वही देना है।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <div key={p.name} className={`relative bg-white rounded-2xl border p-7 ${p.color}`}>
              {p.popular && <span className="badge-popular">⭐ Most Popular</span>}

              <div className="mb-5">
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">{p.hindi}</p>
                <h3 className="text-slate-900 font-bold text-2xl mb-1">{p.name}</h3>
                <p className="text-slate-500 text-sm">{p.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">{p.price}</span>
                <span className="text-slate-400 text-sm font-medium">{p.period}</span>
              </div>

              <ul className="space-y-3 mb-7">
                {p.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2.5 text-sm">
                    {f.included
                      ? <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      : <X className="w-4 h-4 text-slate-300 flex-shrink-0" />}
                    <span className={f.included ? "text-slate-700" : "text-slate-400"}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a href={`https://wa.me/918651070831?text=नमस्ते! मुझे ${p.name} Plan के बारे में जानना है।`}
                target="_blank" rel="noopener noreferrer"
                className={`w-full py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 ${p.btnClass}`}>
                <MessageCircle className="w-4 h-4" />
                Get Started — {p.price}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-2">
            अपने business के लिए custom plan चाहिए?
          </p>
          <a href="#contact" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
            हमसे बात करें — Custom Quote पाएं
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
