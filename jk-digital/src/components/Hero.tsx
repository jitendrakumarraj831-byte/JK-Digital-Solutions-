import { ArrowRight, MessageCircle, Star, CheckCircle } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "120+", label: "Happy Clients" },
  { value: "4.9★", label: "Google Rating" },
  { value: "3+", label: "Years Experience" },
];

const badges = [
  "Free Website Audit",
  "30 Days Delivery",
  "24/7 Support",
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-blue-700 text-xs font-semibold">Forbesganj & Araria का Trusted Agency</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight">
                अपने Business को{" "}
                <span className="gradient-text">Google पर</span>{" "}
                Grow करें
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                हम Professional <strong className="text-slate-800">Website</strong>, <strong className="text-slate-800">Google SEO</strong>, <strong className="text-slate-800">Google Business Profile</strong> और <strong className="text-slate-800">Google Ads</strong> के माध्यम से आपके Business के लिए अधिक Leads, Calls और Customers लाते हैं।
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span key={b} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  {b}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base">
                Get Free Website Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918651070831?text=नमस्ते! मुझे अपने Business के लिए Digital Marketing की जरूरत है।"
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base">
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Small trust note */}
            <p className="text-sm text-slate-400 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              No commitment required • Response within 30 minutes
            </p>
          </div>

          {/* Right — Visual Card */}
          <div className="relative lg:flex justify-center hidden">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white rounded-2xl card-premium p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Monthly Overview</p>
                    <p className="text-2xl font-bold text-slate-900">Business Growth</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <span className="text-white text-lg">📈</span>
                  </div>
                </div>
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Website Visitors", value: "+340%", color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "Google Calls", value: "+180%", color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "New Customers", value: "+95", color: "text-violet-600", bg: "bg-violet-50" },
                    { label: "Google Rating", value: "4.9 ★", color: "text-amber-600", bg: "bg-amber-50" },
                  ].map((m) => (
                    <div key={m.label} className={`${m.bg} rounded-xl p-3`}>
                      <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
                      <p className="text-slate-600 text-xs font-medium mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: "SEO Ranking", pct: 85 },
                    { label: "Lead Generation", pct: 92 },
                    { label: "GMB Visibility", pct: 78 },
                  ].map((p) => (
                    <div key={p.label}>
                      <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                        <span>{p.label}</span>
                        <span>{p.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full gradient-bg rounded-full" style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 text-center">Live dashboard results for a local client</p>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2.5">
                <p className="text-xs font-semibold text-slate-500">Avg. First Call</p>
                <p className="text-lg font-bold text-slate-900">7 Days 🎯</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2.5">
                <p className="text-xs font-semibold text-slate-500">Client Satisfaction</p>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-slate-900">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold gradient-text">{s.value}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
