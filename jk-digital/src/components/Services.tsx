import { Globe, MapPin, TrendingUp, Megaphone, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    tagline: "आपकी ऑनलाइन दुकान — 24/7 खुली!",
    description: "Fast, beautiful, responsive, और secure full-stack web applications जो आपके बिजनेस को professional look देती हैं और ग्राहकों का भरोसा जीतती हैं।",
    features: ["Mobile Responsive Design", "Fast Loading Speed", "SEO-Friendly Structure", "Contact Form & Leads"],
    color: "cyan",
    badge: "Most Popular",
  },
  {
    icon: MapPin,
    title: "Google My Business (GMB)",
    tagline: "गूगल मैप्स पर चमकेगा आपका बिजनेस!",
    description: "Local shops को Google Maps पर top पर rank करवाकर direct customer calls दिलाएंगे। जब भी कोई आपके area में search करे — आपका नाम पहले आए।",
    features: ["Google Maps Ranking", "Profile Optimization", "Reviews Management", "Direct Customer Calls"],
    color: "emerald",
    badge: "High ROI",
  },
  {
    icon: TrendingUp,
    title: "SEO (Search Engine Optimization)",
    tagline: "बिना विज्ञापन दिए गूगल के पहले पेज पर आएं!",
    description: "Long-term organic traffic के लिए permanent Google ranking। एक बार rank होने के बाद बिना extra पैसे लगाए लगातार ग्राहक मिलते रहते हैं।",
    features: ["Keyword Research", "On-Page SEO", "Local SEO", "Monthly Ranking Reports"],
    color: "cyan",
    badge: "Long-term Growth",
  },
  {
    icon: Megaphone,
    title: "Paid Ads (Google & Meta)",
    tagline: "आज ही विज्ञापन चलाएं, आज से ही ग्राहक पाएं!",
    description: "Facebook, Instagram, और Google पर laser-targeted campaigns। सिर्फ उन लोगों को दिखाएं जो genuinely आपकी service लेना चाहते हैं।",
    features: ["Facebook & Instagram Ads", "Google Search Ads", "Budget Optimization", "ROI Tracking"],
    color: "emerald",
    badge: "Instant Results",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm font-semibold tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            हमारी <span className="glow-text text-cyan-400">सर्विसेज</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            आपके बिजनेस की हर डिजिटल ज़रूरत — एक ही जगह।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isCyan = service.color === "cyan";
            return (
              <div key={service.title} className="service-card rounded-2xl p-8 relative overflow-hidden group">
                {/* Corner Glow */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isCyan ? "bg-cyan-500/15" : "bg-emerald-500/15"
                  }`}
                />

                {/* Badge */}
                <span
                  className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${
                    isCyan
                      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                  }`}
                >
                  {service.badge}
                </span>

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center border flex-shrink-0 group-hover:scale-110 transition-transform ${
                      isCyan
                        ? "bg-cyan-500/10 border-cyan-500/25 text-cyan-400"
                        : "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">{service.title}</h3>
                    <p className={`text-sm font-semibold mt-0.5 ${isCyan ? "text-cyan-400" : "text-emerald-400"}`}>
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-base leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${isCyan ? "text-cyan-400" : "text-emerald-400"}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${
                      isCyan ? "text-cyan-400 hover:text-cyan-300" : "text-emerald-400 hover:text-emerald-300"
                    }`}
                  >
                    अभी शुरू करें →
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
