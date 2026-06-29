import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl px-6 sm:px-12 py-14 lg:py-20 relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute inset-0 pointer-events-none opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)" }} />
          <div className="relative">
            <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-4">अभी शुरू करें</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              आपका Business Google पर<br className="hidden sm:block" />
              <span className="text-blue-200"> Grow करने के लिए तैयार है?</span>
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              आज ही Free Consultation लें। हम analyze करेंगे कि आपके business के लिए कौन सी strategy सबसे बेहतर होगी — बिल्कुल free में।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-base hover:bg-blue-50 hover:shadow-lg transition-all">
                Get Free Website Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918651070831?text=नमस्ते! मुझे Free Consultation चाहिए।"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#1fbd5c] hover:shadow-lg transition-all">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" />+91 86510 70831</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" />+91 85418 49118</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
