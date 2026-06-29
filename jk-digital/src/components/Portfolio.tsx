const projects = [
  { emoji: "🦷", title: "Araria Dental Care", type: "Clinic", result: "+220%", metric: "Appointments", tags: ["Website","GMB","SEO"], bg: "bg-blue-600" },
  { emoji: "🍰", title: "Forbesganj Sweet House", type: "Restaurant", result: "+180%", metric: "Orders", tags: ["Website","Ads"], bg: "bg-orange-500" },
  { emoji: "🎓", title: "Success Coaching Centre", type: "Education", result: "+95", metric: "Admissions", tags: ["Website","SEO","GMB"], bg: "bg-violet-600" },
  { emoji: "🏠", title: "Araria Real Estate", type: "Property", result: "+300%", metric: "Inquiries", tags: ["Website","Ads","SEO"], bg: "bg-emerald-600" },
  { emoji: "🏨", title: "Bihar Hotel & Resort", type: "Hospitality", result: "+150%", metric: "Bookings", tags: ["Website","GMB","SEO"], bg: "bg-cyan-600" },
  { emoji: "🛋️", title: "Modern Interior Studio", type: "Design", result: "+85", metric: "New Clients", tags: ["Website","Ads"], bg: "bg-rose-600" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Our Work</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Real Results,<br />Real Businesses
          </h2>
          <p className="text-gray-500 text-lg">इन businesses को हमने grow किया। आपका business next हो सकता है।</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(p => (
            <div key={p.title} className="c group overflow-hidden">
              <div className={`${p.bg} h-40 flex flex-col items-center justify-center gap-3 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30"
                  style={{ background: "radial-gradient(circle at 30% 30%, white 0%, transparent 60%)" }} />
                <span className="text-5xl relative z-10">{p.emoji}</span>
                <div className="flex gap-2 relative z-10">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-5 flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">{p.title}</h3>
                  <p className="text-gray-400 text-xs">{p.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-600 font-black text-lg leading-none">{p.result}</p>
                  <p className="text-gray-400 text-xs">{p.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-700 transition-all">
            अपना Project Start करें →
          </a>
        </div>
      </div>
    </section>
  );
}
