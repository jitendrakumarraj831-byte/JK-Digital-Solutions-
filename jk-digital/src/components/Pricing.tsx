import { Check, X, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    sub: "छोटे Business के लिए",
    features: ["5-Page Website","Google Business Setup","Basic SEO","WhatsApp Integration","Monthly Report"],
    no: ["Google Ads","Advanced SEO","Priority Support"],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹9,999",
    period: "/month",
    sub: "Growing Business के लिए",
    features: ["10-Page Premium Website","GMB Full Optimization","Advanced SEO — 20 Keywords","Google Ads (₹5K budget included)","Bi-weekly Reports","Review Management","Priority Support"],
    no: [],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹19,999",
    period: "/month",
    sub: "Market Leader बनने के लिए",
    features: ["Unlimited Pages Website","SEO — 50+ Keywords","Google + Meta Ads (₹15K budget)","Landing Pages","Weekly Reports","Content Creation","Dedicated Manager"],
    no: [],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-gray-500 text-lg">कोई hidden charges नहीं। जो दिखे, वही देना है।</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map(p => (
            <div key={p.name}
              className={`bg-white rounded-2xl p-7 ${p.popular ? "plan-pop" : "border border-gray-200"} relative`}>
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  ⭐ Most Popular
                </span>
              )}

              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 mt-1">{p.sub}</p>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{p.name}</h3>

              <div className="flex items-baseline gap-1 mb-7">
                <span className="text-4xl font-black text-gray-900">{p.price}</span>
                <span className="text-gray-400 text-sm">{p.period}</span>
              </div>

              <ul className="space-y-3 mb-7">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
                {p.no.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <X className="w-4 h-4 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={`https://wa.me/918651070831?text=नमस्ते! ${p.name} Plan के बारे में बात करना है।`}
                target="_blank" rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all ${
                  p.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}>
                <MessageCircle className="w-4 h-4" />
                {p.name} Plan लें
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Custom plan चाहिए?{" "}
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700">
            WhatsApp पर बात करें →
          </a>
        </p>
      </div>
    </section>
  );
}
