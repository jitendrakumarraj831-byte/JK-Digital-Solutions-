import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-500 tracking-wide">Forbesganj, Bihar का #1 Digital Agency</span>
          </div>

          {/* Big headline */}
          <h1 className="text-[2.6rem] sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.08] tracking-tight mb-5">
            अपना Business<br />
            Google पर{" "}
            <span className="g-text">Top</span><br />
            पर लाएं।
          </h1>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mb-8">
            हम Website बनाते हैं, Google पर Rank कराते हैं, और Google Ads से नए Customers दिलाते हैं।
            बिना confusion, बिना hidden charges।
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25">
              Free Website Audit लें
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://wa.me/918651070831?text=नमस्ते! मुझे Digital Marketing में help चाहिए।"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#20c45e] transition-all shadow-lg shadow-green-500/20">
              <MessageCircle className="w-5 h-5" />
              WhatsApp पर बात करें
            </a>
          </div>

          {/* Social proof numbers */}
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {[
              { n: "150+", l: "Projects Done" },
              { n: "4.9 ★", l: "Google Rating" },
              { n: "3+ Years", l: "Experience" },
              { n: "₹0", l: "Consultation Fee" },
            ].map(s => (
              <div key={s.l}>
                <p className="text-2xl font-black text-gray-900">{s.n}</p>
                <p className="text-sm text-gray-400 font-medium">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-gray-200 to-transparent" />
      </div>
    </section>
  );
}
