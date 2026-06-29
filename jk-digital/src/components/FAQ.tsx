"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  { q: "Website बनवाने में कितना समय लगेगा?", a: "एक standard 5-10 page website 15-30 दिनों में ready हो जाती है। Complex websites में थोड़ा ज्यादा time लग सकता है। हम हमेशा agreed deadline पर deliver करते हैं।" },
  { q: "Google पर rank होने में कितना समय लगता है?", a: "Local SEO में 3-6 महीने में आप first page पर आ सकते हैं। GMB (Google Maps) में results 4-8 हफ्तों में दिखने लगते हैं। Google Ads से तो same day results मिलते हैं।" },
  { q: "क्या आप Forbesganj के बाहर भी काम करते हैं?", a: "हां, हम पूरे Bihar और India में digital marketing services provide करते हैं। हमारी core expertise Forbesganj, Araria, Kishanganj, Purnia जैसे local markets में है।" },
  { q: "क्या Website बनने के बाद support मिलता है?", a: "बिल्कुल। सभी plans में minimum 1 साल की free maintenance और support शामिल है। Technical issues और minor changes के लिए आप हमें WhatsApp कर सकते हैं।" },
  { q: "Google Ads के लिए minimum budget क्या होना चाहिए?", a: "Local businesses के लिए ₹5,000-₹10,000/month का budget एक अच्छी शुरुआत है। हम आपके budget को efficiently manage करते हैं ताकि maximum ROI मिले।" },
  { q: "क्या मुझे कोई technical knowledge होनी चाहिए?", a: "बिल्कुल नहीं। आपको सिर्फ अपने business के बारे में बताना है — बाकी सब हम handle करते हैं। हम आपको simple language में सब समझाते हैं।" },
  { q: "Payment कैसे होती है?", a: "Payment monthly basis पर होती है। UPI, Bank Transfer, Cash — सभी accepted हैं। Website development के लिए 50% advance और 50% delivery पर। कोई hidden charges नहीं।" },
  { q: "Result guarantee है क्या?", a: "हम specific rankings की guarantee नहीं दे सकते (Google का algorithm हमारे control में नहीं है) — लेकिन हम guarantee करते हैं: Best practices follow होंगी, Regular transparent reporting होगी, और हम तब तक काम करेंगे जब तक आपको results नहीं मिलते।" },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 lg:py-28 section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">आपके मन में जो सवाल हैं</h2>
          <p className="text-slate-500 text-lg">Common questions जो हमारे clients अक्सर पूछते हैं।</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${open === i ? "border-blue-200 shadow-sm" : "border-slate-200"}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
                <span className={`font-semibold text-sm leading-snug ${open === i ? "text-blue-700" : "text-slate-800"}`}>{f.q}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>
              <div className={`accordion-content ${open === i ? "open" : ""}`}>
                <div className="px-5 pb-5">
                  <div className="h-px bg-slate-100 mb-4" />
                  <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <p className="text-slate-700 font-semibold mb-2">और कोई सवाल है?</p>
          <p className="text-slate-500 text-sm mb-4">हम 30 minutes में reply करते हैं।</p>
          <a href="https://wa.me/918651070831?text=नमस्ते! मेरे कुछ सवाल हैं।" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-md shadow-green-500/20 hover:bg-[#1fbd5c] transition-all">
            <MessageCircle className="w-4 h-4" /> WhatsApp पर पूछें
          </a>
        </div>
      </div>
    </section>
  );
}
