import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Kumar Gupta",
    business: "Gupta Medical Store, Forbesganj",
    avatar: "R",
    color: "bg-blue-500",
    rating: 5,
    date: "2 months ago",
    text: "JK Digital Solutions ने हमारी medical store को Google Maps पर top पर rank करवाया। पहले 2-3 calls आते थे, अब रोज़ 15-20 नए customers call करते हैं। बहुत बढ़िया team है! Highly recommended।",
    service: "GMB + SEO",
  },
  {
    name: "Sunita Devi",
    business: "Sunita Beauty Parlour, Araria",
    avatar: "S",
    color: "bg-rose-500",
    rating: 5,
    date: "3 months ago",
    text: "Website बनवाने के बाद से बहुत change आया। Online appointments आने लगे हैं। JK Digital की team बहुत professional है और हर बात clearly समझाती है। पैसे की value मिली।",
    service: "Website + GMB",
  },
  {
    name: "Mohan Lal Sharma",
    business: "Sharma Coaching Centre, Forbesganj",
    avatar: "M",
    color: "bg-violet-500",
    rating: 5,
    date: "1 month ago",
    text: "Google Ads से पहले batch में सिर्फ 20 students थे। JK Digital के Google Ads campaign के बाद 95+ admissions हुए! ROI बहुत अच्छा रहा। Next session का campaign भी इनसे ही करवाएंगे।",
    service: "Google Ads",
  },
  {
    name: "Anjali Singh",
    business: "Annapurna Restaurant, Araria",
    avatar: "A",
    color: "bg-orange-500",
    rating: 5,
    date: "5 months ago",
    text: "Restaurant में दोपहर को कोई नहीं आता था। JK Digital ने GMB optimize की और Google पर photos डाले। अब lunch time भी full हो जाता है। Monthly revenue double हो गई। बहुत खुश हूं।",
    service: "GMB + Website",
  },
  {
    name: "Dr. Vivek Jha",
    business: "Jha Dental Clinic, Forbesganj",
    avatar: "V",
    color: "bg-emerald-500",
    rating: 5,
    date: "4 months ago",
    text: "Clinic की website और Google SEO ने सब बदल दिया। Patients अब 'dentist near me' search करके आते हैं। Professional team, timely delivery, और excellent results। Thank you JK Digital!",
    service: "Website + SEO",
  },
  {
    name: "Ravi Prakash",
    business: "Prakash Hardware, Araria",
    avatar: "P",
    color: "bg-slate-600",
    rating: 5,
    date: "6 months ago",
    text: "पहले सिर्फ local customers आते थे। SEO और GMB के बाद district के दूसरे areas से भी order आने लगे। 6 महीने में business almost double हो गया। बहुत अच्छा काम करते हैं।",
    service: "SEO + GMB",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Google Reviews</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            हमारे Clients क्या कहते हैं?
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            </div>
            <span className="text-slate-900 font-bold text-xl">4.9/5</span>
            <span className="text-slate-500 text-sm">120+ Google Reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="card-premium bg-white rounded-2xl p-6 flex flex-col">
              {/* Google Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                    <p className="text-slate-400 text-xs">{r.date}</p>
                  </div>
                </div>
                {/* Google Logo */}
                <div className="flex-shrink-0 text-slate-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                <Quote className="w-4 h-4 text-slate-200 inline mr-1 -mt-1" />
                {r.text}
              </p>

              {/* Service badge */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {r.service}
                </span>
                <p className="text-slate-400 text-xs mt-1">{r.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
