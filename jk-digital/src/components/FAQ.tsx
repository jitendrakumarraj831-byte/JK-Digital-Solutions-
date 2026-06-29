"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Website बनाने में कितना समय लगता है?", a: "एक standard 5-10 page website 15-30 दिनों में deliver होती है। हम हमेशा agreed deadline पर काम complete करते हैं।" },
  { q: "Google पर rank होने में कितना समय लगेगा?", a: "Local SEO में 3-6 महीनों में first page results आते हैं। Google Maps (GMB) में 4-8 हफ्तों में improvement दिखती है। Google Ads से same day results मिलते हैं।" },
  { q: "क्या आप Forbesganj के बाहर भी service देते हैं?", a: "हां, हम पूरे Bihar और India में digitally serve करते हैं। हमारी core expertise है Forbesganj, Araria, Kishanganj, Purnia का local market।" },
  { q: "Google Ads के लिए minimum budget क्या चाहिए?", a: "₹5,000-₹10,000/month से एक अच्छी शुरुआत होती है। हम budget को maximize करके best possible results लाते हैं।" },
  { q: "क्या website बनने के बाद support मिलता है?", a: "हां, सभी plans में minimum 1 साल की free maintenance शामिल है। Minor changes और technical support के लिए WhatsApp पर available हैं।" },
  { q: "Payment कैसे होती है?", a: "UPI, Bank Transfer, Cash — सभी accepted हैं। Website के लिए 50% advance + 50% on delivery। Monthly services के लिए advance monthly payment।" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Common Questions
          </h2>
          <p className="text-gray-500 text-lg">जो सवाल अक्सर पूछे जाते हैं।</p>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-blue-200 transition-colors">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left">
                <span className={`font-semibold text-sm leading-snug pr-4 ${open === i ? "text-blue-600" : "text-gray-800"}`}>
                  {f.q}
                </span>
                {open === i
                  ? <Minus className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  : <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                }
              </button>
              <div className={`acc ${open === i ? "open" : ""}`}>
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">और भी सवाल हैं?</p>
          <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold hover:bg-[#20c45e] transition-all">
            💬 WhatsApp पर पूछें
          </a>
        </div>
      </div>
    </section>
  );
}
