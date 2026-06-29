import { Shield, TrendingUp, Clock, HeadphonesIcon, Target, Award } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Result-Oriented Approach",
    desc: "हम सिर्फ काम नहीं करते — Results deliver करते हैं। हर campaign का goal होता है: More Calls, More Leads, More Sales।",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "150+ local businesses को हमने successfully grow किया है। Restaurants, Hospitals, Coaching Centres — सभी को Google पर top ranking मिली।",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Website 30 दिनों में। GMB optimization 7 दिनों में। हम deadlines का सम्मान करते हैं और समय पर deliver करते हैं।",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "आपका काम होने के बाद भी हम available हैं। WhatsApp, Call, Email — जब चाहें हमसे बात करें।",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    desc: "Monthly detailed reports जिसमें होता है: Visitors, Rankings, Calls, Leads — सब कुछ clearly explain किया जाता है।",
  },
  {
    icon: Award,
    title: "Local Market Expertise",
    desc: "Forbesganj, Araria और Bihar के local market को हम deeply समझते हैं। आपके competitors से एक कदम आगे रहें।",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            दूसरे Agencies से हम{" "}
            <span className="gradient-text">क्यों अलग हैं?</span>
          </h2>
          <p className="text-slate-500 text-lg">
            हर agency यही कहती है कि वो बेस्ट है। हम इसे Prove करते हैं।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-premium bg-white rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl gradient-bg-subtle border border-blue-100 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2.5">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
