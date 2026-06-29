import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Araria Dental Care",
    type: "Hospital / Clinic",
    tags: ["Website", "GMB", "SEO"],
    description: "Complete digital presence for a dental clinic — website + Google Maps top ranking",
    metric: "+220% Appointments",
    color: "from-blue-500 to-blue-600",
    emoji: "🦷",
  },
  {
    title: "Forbesganj Sweet House",
    type: "Restaurant / Food",
    tags: ["Website", "Google Ads"],
    description: "Restaurant website with online ordering + Google Ads for festive campaigns",
    metric: "+180% Orders",
    color: "from-orange-400 to-orange-500",
    emoji: "🍰",
  },
  {
    title: "Success Coaching Centre",
    type: "Education / Coaching",
    tags: ["Website", "SEO", "GMB"],
    description: "Admission-focused website with SEO — rank for all competitive exam queries",
    metric: "+95 Admissions",
    color: "from-violet-500 to-violet-600",
    emoji: "🎓",
  },
  {
    title: "Araria Real Estate",
    type: "Real Estate",
    tags: ["Website", "Google Ads", "SEO"],
    description: "Property listings website with lead capture forms and paid campaigns",
    metric: "+300% Inquiries",
    color: "from-emerald-500 to-emerald-600",
    emoji: "🏠",
  },
  {
    title: "Bihar Hotel & Resort",
    type: "Hotel / Hospitality",
    tags: ["Website", "GMB", "SEO"],
    description: "Hotel website with booking system and Google Maps optimization",
    metric: "+150% Bookings",
    color: "from-cyan-500 to-cyan-600",
    emoji: "🏨",
  },
  {
    title: "Modern Interior Studio",
    type: "Interior Design",
    tags: ["Website", "Google Ads"],
    description: "Portfolio website with before-after gallery and targeted Google Ads",
    metric: "+85 Clients",
    color: "from-rose-500 to-rose-600",
    emoji: "🛋️",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            हमारे <span className="gradient-text">Successful Projects</span>
          </h2>
          <p className="text-slate-500 text-lg">
            इन businesses को हमने Google पर grow किया है। आपका business next हो सकता है।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="card-premium bg-white rounded-2xl overflow-hidden group">
              {/* Project Visual */}
              <div className={`bg-gradient-to-br ${p.color} h-44 flex flex-col items-center justify-center gap-3 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
                <span className="text-5xl">{p.emoji}</span>
                <div className="flex gap-2 flex-wrap justify-center px-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
                {/* Add screenshot placeholder */}
                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{p.title}</h3>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">{p.type}</p>
                  </div>
                  <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {p.metric}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm mb-4">क्या आपका business भी इस list में होना चाहिए?</p>
          <a href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base">
            Start Your Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
