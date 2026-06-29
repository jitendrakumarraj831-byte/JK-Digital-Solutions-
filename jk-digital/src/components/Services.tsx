import { Globe, TrendingUp, MapPin, Megaphone, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe, badge: "Most Popular", badgeColor: "bg-blue-100 text-blue-700",
    title: "Website Development", tagline: "आपकी Professional Online Identity",
    desc: "एक Fast, Beautiful और SEO-Friendly Website जो आपके Business को 24/7 नए customers दिलाती है।",
    benefits: ["Mobile-First Responsive Design", "Google Page Speed Optimized", "Contact Form & WhatsApp Integration", "SEO-Ready Structure", "1 Year Free Maintenance"],
    result: "Website launch के 30 दिनों में Google पर appear होना शुरू",
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp, badge: "Best ROI", badgeColor: "bg-indigo-100 text-indigo-700",
    title: "Google SEO", tagline: "बिना Ads के Google पर #1",
    desc: "Organic Search से permanent traffic। एक बार rank होने के बाद free में नए customers आते रहते हैं।",
    benefits: ["Local & National SEO", "Keyword Research & Strategy", "On-Page + Off-Page Optimization", "Monthly Ranking Reports", "Competitor Analysis"],
    result: "3-6 महीनों में Google के पहले page पर आएं",
    iconBg: "bg-indigo-50 border-indigo-100 text-indigo-600",
  },
  {
    icon: MapPin, badge: "Get More Calls", badgeColor: "bg-emerald-100 text-emerald-700",
    title: "Google Business Profile", tagline: "Google Maps पर Top पर आएं",
    desc: "जब कोई nearby आपकी service search करे, तो सबसे पहले आपका नाम और number दिखे।",
    benefits: ["GMB Profile Complete Setup", "Photo & Video Optimization", "Review Management Strategy", "Local Citations Building", "Weekly Posts & Updates"],
    result: "7 दिनों में Google Maps पर visible होना शुरू",
    iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
  },
  {
    icon: Megaphone, badge: "Instant Results", badgeColor: "bg-violet-100 text-violet-700",
    title: "Google Ads", tagline: "आज Ads चलाएं, आज Customers पाएं",
    desc: "Targeted Google Campaigns जो सिर्फ उन्हें दिखते हैं जो पहले से आपकी service ढूंढ रहे हैं।",
    benefits: ["Search & Display Campaigns", "Keyword Bidding Strategy", "Ad Copywriting in Hindi/English", "Daily Budget Management", "Conversion Tracking"],
    result: "Ads activate होने के 24 घंटे में calls आने शुरू",
    iconBg: "bg-violet-50 border-violet-100 text-violet-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">हम क्या करते हैं?</h2>
          <p className="text-slate-500 text-lg">चार powerful services — एक goal: आपके Business की Growth।</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-premium bg-white rounded-2xl overflow-hidden">
                <div className="p-7 pb-5">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${s.badgeColor}`}>{s.badge}</span>
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl mb-1">{s.title}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{s.tagline}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-slate-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-slate-100 bg-slate-50 px-7 py-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Expected Result</p>
                  <p className="text-slate-700 text-sm font-medium">✅ {s.result}</p>
                </div>
                <div className="px-7 pb-6 pt-4">
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
