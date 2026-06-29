const industries = [
  "🏥 Hospitals & Clinics",
  "🍽️ Restaurants",
  "🎓 Coaching Centres",
  "🏠 Real Estate",
  "💇 Beauty & Salon",
  "🛒 Retail Shops",
  "🏨 Hotels",
  "⚙️ Service Providers",
  "🏗️ Builders",
  "📱 Electronics",
  "🚗 Auto Dealers",
  "📚 Schools",
];

export default function TrustedBy() {
  const doubled = [...industries, ...industries];
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
        इन Businesses को हम Google पर Grow करते हैं
      </p>
      <div className="relative">
        <div className="flex gap-6 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold flex-shrink-0 shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
