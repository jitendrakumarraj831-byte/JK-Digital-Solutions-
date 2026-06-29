import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gradient-bg rounded-3xl px-8 py-16 lg:py-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5" style={{ transform: "translate(-30%, -30%)" }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5" style={{ transform: "translate(30%, 30%)" }} />
          </div>

          <div className="relative">
            <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-4">
              अभी शुरू करें
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-5">
              आपका Business Google पर{" "}
              <br className="hidden lg:block" />
              <span className="text-blue-200">Grow करने के लिए तैयार है?</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              आज ही Free Consultation लें। हम analyze करेंगे कि आपके business के लिए कौन सी strategy सबसे बेहतर होगी — बिल्कुल free में।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-base hover:bg-blue-50 transition-all hover:shadow-xl">
                Get Free Website Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918651070831?text=नमस्ते! मुझे Free Consultation चाहिए। मेरा business grow करना है।"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-white font-bold text-base hover:bg-green-400 transition-all hover:shadow-xl">
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                +91 86510 70831
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                +91 85418 49118
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
