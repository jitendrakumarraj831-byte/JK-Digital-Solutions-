import { Target, Lightbulb, BarChart3, ArrowUpRight } from "lucide-react";

const cases = [
  {
    emoji: "🏥",
    client: "City Clinic, Forbesganj",
    industry: "Healthcare",
    timeframe: "4 Months",
    problem: "Clinic को Google पर कोई नहीं ढूंढ पाता था। सारे patients referral से आते थे। New patients बिल्कुल नहीं मिल रहे थे।",
    solution: "Google Business Profile का complete setup किया, Medical-specific keywords पर SEO शुरू की, और doctors के लिए professional website बनाई with appointment form।",
    results: [
      { metric: "Monthly Appointments", value: "+340%", color: "text-blue-600 bg-blue-50" },
      { metric: "Google Ranking", value: "#1 Local", color: "text-emerald-600 bg-emerald-50" },
      { metric: "Monthly Calls", value: "45+ New", color: "text-violet-600 bg-violet-50" },
    ],
  },
  {
    emoji: "🎓",
    client: "Achievers Coaching, Araria",
    industry: "Education",
    timeframe: "3 Months",
    problem: "नया coaching centre था — students नहीं मिल रहे थे। Competition बहुत था। Parents को पता ही नहीं था कि यह centre exist करता है।",
    solution: "Result-focused website बनाई, 'Best coaching Araria' जैसे keywords पर SEO की, और Google Ads से targeted parents को reach किया।",
    results: [
      { metric: "Admissions (3 months)", value: "95+", color: "text-blue-600 bg-blue-50" },
      { metric: "Website Traffic", value: "+500%", color: "text-emerald-600 bg-emerald-50" },
      { metric: "Ad ROI", value: "8x Return", color: "text-violet-600 bg-violet-50" },
    ],
  },
  {
    emoji: "🍽️",
    client: "Annapurna Restaurant",
    industry: "Food & Dining",
    timeframe: "2 Months",
    problem: "Restaurant सिर्फ रात को busy था। Lunch और weekday में बिल्कुल खाली रहता था। Online कोई presence नहीं था।",
    solution: "Google Maps listing optimize की, food photos के साथ GMB posts शुरू किए, और Lunch Special Google Ads campaign run किया।",
    results: [
      { metric: "Daily Footfall", value: "+180%", color: "text-blue-600 bg-blue-50" },
      { metric: "Google Reviews", value: "4.8 ⭐", color: "text-emerald-600 bg-emerald-50" },
      { metric: "Monthly Revenue", value: "+₹1.2L", color: "text-violet-600 bg-violet-50" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Case Studies</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Real Results,{" "}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-slate-500 text-lg">
            हर success story में एक problem थी — और हमने उसे opportunity में बदला।
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((c) => (
            <div key={c.client} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
              <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                {/* Problem */}
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{c.emoji}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{c.client}</p>
                      <p className="text-slate-400 text-xs">{c.industry} • {c.timeframe}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-red-500 text-xs font-bold uppercase tracking-wide">Problem</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.problem}</p>
                </div>

                {/* Solution */}
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-wide">Our Solution</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.solution}</p>
                </div>

                {/* Results */}
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-emerald-600 text-xs font-bold uppercase tracking-wide">Results</span>
                  </div>
                  <div className="space-y-3">
                    {c.results.map((r) => (
                      <div key={r.metric} className={`flex items-center justify-between px-3 py-2.5 rounded-xl ${r.color.split(" ")[1]}`}>
                        <span className="text-slate-600 text-xs font-medium">{r.metric}</span>
                        <span className={`font-bold text-sm ${r.color.split(" ")[0]}`}>{r.value}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
                    Get Similar Results
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
