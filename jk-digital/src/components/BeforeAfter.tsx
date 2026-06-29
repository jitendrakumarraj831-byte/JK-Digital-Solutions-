import { TrendingDown, TrendingUp, ArrowRight } from "lucide-react";

const comparisons = [
  {
    category: "Google Visibility",
    before: { value: "0", label: "Google पर कहीं नहीं था", icon: "🔍" },
    after: { value: "#1", label: "Google Maps पर Top Listing", icon: "🏆" },
  },
  {
    category: "Monthly Customers",
    before: { value: "15-20", label: "सिर्फ walk-in customers", icon: "👤" },
    after: { value: "80-100", label: "Online + Walk-in दोनों", icon: "👥" },
  },
  {
    category: "Monthly Revenue",
    before: { value: "₹40K", label: "Limited local reach", icon: "📉" },
    after: { value: "₹1.8L", label: "District-wide customers", icon: "📈" },
  },
  {
    category: "Daily Calls",
    before: { value: "2-3", label: "Old customers से ही calls", icon: "📵" },
    after: { value: "15-20", label: "Google से new inquiries", icon: "📞" },
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Business Transformation</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            JK Digital से पहले और बाद में
          </h2>
          <p className="text-slate-500 text-lg">
            एक real local business की transformation — Araria, Bihar
          </p>
        </div>

        {/* Client card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Client header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                R
              </div>
              <div>
                <p className="text-white font-bold">Ramesh Medical Store</p>
                <p className="text-slate-400 text-sm">Forbesganj, Araria — Medical / Pharmacy</p>
              </div>
              <span className="ml-auto text-emerald-400 text-sm font-bold bg-emerald-400/10 px-3 py-1 rounded-full">
                Real Client
              </span>
            </div>

            {/* Comparison grid */}
            <div className="divide-y divide-slate-100">
              {comparisons.map((c) => (
                <div key={c.category} className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-5 gap-4">
                  {/* Before */}
                  <div className="text-center bg-red-50 rounded-xl p-4 border border-red-100">
                    <span className="text-2xl">{c.before.icon}</span>
                    <p className="text-2xl font-bold text-red-500 mt-1">{c.before.value}</p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">{c.before.label}</p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <TrendingDown className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-red-400 text-xs font-bold uppercase">Before</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center gap-1">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-400 text-[10px] font-semibold text-center leading-tight">{c.category}</span>
                  </div>

                  {/* After */}
                  <div className="text-center bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <span className="text-2xl">{c.after.icon}</span>
                    <p className="text-2xl font-bold text-emerald-600 mt-1">{c.after.value}</p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">{c.after.label}</p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 text-xs font-bold uppercase">After</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-t border-blue-100 px-6 py-4 text-center">
              <p className="text-blue-700 font-semibold text-sm">
                🎯 Results achieved in <strong>6 months</strong> of working with JK Digital Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
