import { MessageCircle, ArrowDown, TrendingUp, Globe, Users } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: TrendingUp, value: "3X", label: "ज्यादा ग्राहक" },
    { icon: Globe, value: "24/7", label: "ऑनलाइन मौजूदगी" },
    { icon: Users, value: "100+", label: "खुश ग्राहक" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg" />
      <div className="hero-glow absolute inset-0" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Forbesganj, Araria, Bihar की #1 Digital Agency
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                अपने लोकल{" "}
                <span className="gradient-text">बिजनेस</span>{" "}
                को बनाएं
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="glow-text text-cyan-400">ऑनलाइन ब्रांड!</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              हम आपकी{" "}
              <span className="text-cyan-300 font-semibold">वेबसाइट बनाएंगे</span>, उसे{" "}
              <span className="text-emerald-400 font-semibold">Google पर रैंक</span> करवाएंगे
              और <span className="text-cyan-300 font-semibold">विज्ञापनों (Ads)</span> के
              जरिए रोज़ नए ग्राहक लाकर देंगे।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/918651070831?text=नमस्ते! मुझे फ्री कंसल्टेशन चाहिए।"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-base border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                फ्री कंसल्टेशन (WhatsApp)
              </a>
              <a
                href="#services"
                className="btn-glow-emerald inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-emerald-400/30 text-emerald-400 font-bold text-base hover:bg-emerald-400/5 transition-all"
              >
                हमारी सर्विसेज देखें
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative float-animation">
              {/* Central Card */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 backdrop-blur-sm"
                  style={{ boxShadow: "0 0 60px rgba(6,182,212,0.15), inset 0 0 60px rgba(6,182,212,0.05)" }}>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-400 flex items-center justify-center shadow-xl shadow-cyan-500/30">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">आपका बिजनेस</p>
                    <p className="text-cyan-400 font-semibold text-lg">ऑनलाइन = 24/7 Active</p>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {["SEO", "Google Ads", "GMB", "Website"].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -left-4 px-4 py-2 rounded-full bg-slate-900 border border-emerald-400/30 shadow-lg text-sm font-semibold text-emerald-400">
                📈 +300% Reach
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-slate-900 border border-cyan-400/30 shadow-lg text-sm font-semibold text-cyan-400">
                🎯 Real Leads Daily
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-slate-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
