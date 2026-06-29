import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajan Kumar",
    business: "Rajan Medical Store, Forbesganj",
    rating: 5,
    text: "JK Digital ने हमारी medical store की website बनाई और Google पर top पर rank कराया। अब रोज 10-15 नए customers आते हैं जो पहले नहीं आते थे। बहुत अच्छा काम।",
    avatar: "R",
    color: "bg-blue-600",
  },
  {
    name: "Sunita Devi",
    business: "Sunita Beauty Parlour, Araria",
    rating: 5,
    text: "पहले मेरे parlour को locally ही कोई जानता था। अब Google Maps पर top पर आती हूं और दूर-दूर से customers call करते हैं। इनका GMB optimization बेहतरीन है।",
    avatar: "S",
    color: "bg-violet-600",
  },
  {
    name: "Mohammad Iqbal",
    business: "Iqbal Hardware, Kishanganj",
    rating: 5,
    text: "Google Ads से पहले महीने में ही 40+ genuine inquiries आईं। Investment तो वापस आ ही गया, साथ में regular customers भी बन गए। बहुत professional team है।",
    avatar: "M",
    color: "bg-emerald-600",
  },
  {
    name: "Priya Sharma",
    business: "Priya Coaching Centre, Forbesganj",
    rating: 5,
    text: "हमारे coaching centre की admissions 3 गुना बढ़ गईं एक साल में। Website बहुत professional बनाई और SEO से parents खुद search करके contact करते हैं।",
    avatar: "P",
    color: "bg-orange-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Reviews</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Clients क्या कहते हैं
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-gray-500 text-sm font-medium">4.9/5 — 120+ reviews</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map(r => (
            <div key={r.name} className="c p-7">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">"{r.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{r.avatar}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
