import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle at 70% 50%, rgba(37,99,235,0.6) 0%, transparent 60%)" }} />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">अभी शुरू करें</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          आपका Business Google पर<br />
          <span className="g-text">Top पर आने के लिए</span><br />
          तैयार है?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          आज ही Free Consultation लें। हम analyze करेंगे कि आपके business के लिए कौन सी strategy सही है — बिल्कुल free।
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-base hover:bg-gray-100 transition-all">
            Free Audit लें
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://wa.me/918651070831?text=नमस्ते! Free Consultation चाहिए।"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#20c45e] transition-all">
            <MessageCircle className="w-5 h-5" />
            WhatsApp करें
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
          <span>📍 Forbesganj, Bihar</span>
          <span>📞 +91 86510 70831</span>
          <span>⚡ Reply in 30 mins</span>
        </div>
      </div>
    </section>
  );
}
