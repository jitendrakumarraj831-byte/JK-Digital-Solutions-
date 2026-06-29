import { Globe, TrendingUp, MapPin, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
    badge: "Most Popular",
    title: "Website Development",
    sub: "आपकी 24/7 Online Shop",
    desc: "Fast, beautiful और mobile-friendly website जो Google पर rank करे और visitors को customers में convert करे।",
    points: ["Mobile-First Design", "SEO-Ready Code", "30 Days Delivery", "1 Year Maintenance"],
    cta: "#contact",
  },
  {
    icon: TrendingUp,
    color: "bg-violet-50 text-violet-600",
    badge: "Best ROI",
    title: "Google SEO",
    sub: "बिना Ads के Free Traffic",
    desc: "Organic search results में top पर आएं। एक बार rank होने के बाद free में customers आते रहते हैं।",
    points: ["Local + National SEO", "Keyword Research", "Monthly Reports", "Competitor Analysis"],
    cta: "#contact",
  },
  {
    icon: MapPin,
    color: "bg-emerald-50 text-emerald-600",
    badge: "Get More Calls",
    title: "Google Business Profile",
    sub: "Google Maps पर Top पर",
    desc: "जब कोई nearby service search करे तो सबसे पहले आपका नाम और number दिखे। More calls, more walk-ins।",
    points: ["Profile Complete Setup", "Photos Optimization", "Review Management", "Weekly Posts"],
    cta: "#contact",
  },
  {
    icon: Megaphone,
    color: "bg-orange-50 text-orange-600",
    badge: "Instant Results",
    title: "Google Ads",
    sub: "आज Ads, आज Customers",
    desc: "Targeted campaigns जो सिर्फ उन्हें दिखते हैं जो पहले से आपकी service ढूंढ रहे हैं। No wasted budget।",
    points: ["Search & Display Ads", "Daily Optimization", "Conversion Tracking", "₹5K Budget से शुरू"],
    cta: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Services</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            हम क्या करते हैं
          </h2>
          <p className="text-gray-500 text-lg">चार services, एक goal — आपके business की growth।</p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="c p-7 group">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${s.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">{s.badge}</span>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-3">{s.sub}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>

                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {s.points.map(p => (
                    <li key={p} className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                <a href={s.cta} className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
