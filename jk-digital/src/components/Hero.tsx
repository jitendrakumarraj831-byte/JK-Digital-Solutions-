import { ArrowRight, MessageCircle, Star, CheckCircle, TrendingUp } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "120+", label: "Happy Clients" },
  { value: "4.9★", label: "Google Rating" },
  { value: "3+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 bg-white overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(37,99,235,0.06) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, rgba(79,70,229,0.04) 0%, transparent 65%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="space-y-7">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-blue-700 text-xs font-semibold">Forbesganj & Araria का Trusted Agency</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] tracking-tight">
                अपने Business को{" "}
                <span className="gradient-text">Google पर</span>{" "}
                Grow करें
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                हम Professional <strong className="text-slate-800">Website</strong>,{" "}
                <strong className="text-slate-800">Google SEO</strong>,{" "}
                <strong className="text-slate-800">GMB</strong> और{" "}
                <strong className="text-slate-800">Google Ads</strong> के माध्यम से
                आपके Business के लिए अधिक Leads, Calls और Customers लाते हैं।
              </p>
            </div>

            {/* Mini badges */}
            <div className="flex flex-wrap gap-2">
              {["Free Website Audit", "30 Days Delivery", "24/7 Support"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />{b}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
                Get Free Website Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918651070831?text=नमस्ते! मुझे अपने Business के लिए Digital Marketing की जरूरत है।"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] text-white font-bold text-base shadow-lg shadow-green-500/25 hover:shadow-xl hover:bg-[#1fbd5c] hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-sm text-slate-400 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              No commitment required • Response within 30 minutes
            </p>
          </div>

          {/* ── RIGHT — Dashboard Card (hidden on small mobile, shown md+) ── */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white rounded-2xl card-premium p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Monthly Overview</p>
                    <p className="text-xl font-bold text-slate-900">Business Growth Dashboard</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Website Visitors", value: "+340%", bg: "bg-blue-50", text: "text-blue-600" },
                    { label: "Google Calls", value: "+180%", bg: "bg-emerald-50", text: "text-emerald-600" },
                    { label: "New Customers", value: "+95", bg: "bg-violet-50", text: "text-violet-600" },
                    { label: "Google Rating", value: "4.9 ★", bg: "bg-amber-50", text: "text-amber-600" },
                  ].map((m) => (
                    <div key={m.label} className={`${m.bg} rounded-xl p-3`}>
                      <p className={`text-xl font-bold ${m.text}`}>{m.value}</p>
                      <p className="text-slate-600 text-xs font-medium mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[{ label: "SEO Ranking", pct: 85 }, { label: "Lead Generation", pct: 92 }, { label: "GMB Visibility", pct: 78 }].map((p) => (
                    <div key={p.label}>
                      <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                        <span>{p.label}</span><span>{p.pct}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 text-center">Live results for a local Forbesganj client</p>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2.5">
                <p className="text-xs font-semibold text-slate-500">Avg. First Call</p>
                <p className="text-lg font-bold text-slate-900">7 Days 🎯</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2.5">
                <p className="text-xs font-semibold text-slate-500">Client Satisfaction</p>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-slate-900">4.9</span>
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 pt-10 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
