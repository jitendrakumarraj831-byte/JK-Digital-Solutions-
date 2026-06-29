import { Zap, Mail, MessageCircle, MapPin, Phone, Globe, TrendingUp, Search, Megaphone, ArrowUp } from "lucide-react";

export default function Footer() {
  const services = [
    { icon: Globe, label: "Website Development" },
    { icon: MapPin, label: "Google My Business" },
    { icon: Search, label: "SEO Optimization" },
    { icon: TrendingUp, label: "Google Ads" },
    { icon: Megaphone, label: "Meta Ads (Facebook/Instagram)" },
  ];

  return (
    <footer className="relative border-t border-cyan-500/10 bg-slate-950/80">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-tight">JK Digital Solutions</p>
                <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase">Digital Marketing Agency</p>
              </div>
            </a>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              Forbesganj, Araria के local businesses को online brand बनाने वाली trusted digital marketing agency। हम आपके बिजनेस को Google पर top पर लाते हैं।
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/918651070831"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp करें
              </a>
              <a
                href="mailto:jkdigitalsolutionfbg@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                Email करें
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">हमारी सर्विसेज</h4>
            <ul className="space-y-3">
              {services.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-400 transition-colors group text-sm"
                  >
                    <Icon className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">संपर्क जानकारी</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/918651070831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 hover:text-cyan-300 transition-colors text-sm">
                    +91 8651070831
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918541849118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 hover:text-cyan-300 transition-colors text-sm">
                    +91 8541849118
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jkdigitalsolutionfbg@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 hover:text-emerald-300 transition-colors text-sm break-all">
                    jkdigitalsolutionfbg@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Forbesganj,Bihar,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 hover:text-emerald-300 transition-colors text-sm">
                    Forbesganj, Araria,<br />Bihar, India
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2025 JK Digital Solutions. All rights reserved. | Forbesganj, Bihar
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-xs">Made with ❤️ for Bihar businesses</span>
            <a
              href="#home"
              className="w-9 h-9 rounded-full border border-cyan-500/25 bg-cyan-500/5 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/15 transition-all hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
