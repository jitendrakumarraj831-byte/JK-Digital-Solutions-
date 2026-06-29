import { Stethoscope, UtensilsCrossed, GraduationCap, Building2, Scissors, ShoppingBag, Hotel, Wrench } from "lucide-react";

const businessTypes = [
  { icon: Stethoscope, label: "Hospitals & Clinics" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: GraduationCap, label: "Coaching Institutes" },
  { icon: Building2, label: "Real Estate" },
  { icon: Scissors, label: "Beauty & Salon" },
  { icon: ShoppingBag, label: "Retail Shops" },
  { icon: Hotel, label: "Hotels" },
  { icon: Wrench, label: "Service Providers" },
];

export default function TrustedBy() {
  return (
    <section className="py-14 border-y border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">
          इन Businesses को हम Google पर Grow करते हैं
        </p>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {businessTypes.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2.5 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all shadow-sm">
                <Icon className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="text-slate-500 text-xs font-medium text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
