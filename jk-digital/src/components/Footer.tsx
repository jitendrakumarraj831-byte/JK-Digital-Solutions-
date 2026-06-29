import { Globe, TrendingUp, MapPin, Megaphone, Mail, Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const services = [
    { icon: Globe, label: "Website Development", href: "#services" },
    { icon: TrendingUp, label: "Google SEO", href: "#services" },
    { icon: MapPin, label: "Google Business Profile", href: "#services" },
    { icon: Megaphone, label: "Google Ads", href: "#services" },
  ];

  const links = [
    { label: "Why Choose Us", href: "#why" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">JK</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-none">JK Digital Solutions</p>
                <p className="text-blue-400 text-xs tracking-widest uppercase">Digital Marketing Agency</p>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Forbesganj, Araria के local businesses को Google पर grow करने वाली trusted digital marketing agency। Website, SEO, GMB और Google Ads — सब एक जगह।
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold hover:bg-green-500/20 transition-all">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="mailto:jkdigitalsolutionfbg@gmail.com"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold hover:bg-blue-500/20 transition-all">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Services</h4>
            <ul className="space-y-2.5">
              {services.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group">
                    <Icon className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold pt-3">Quick Links</h4>
            <ul className="space-y-2.5">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm font-medium group-hover:text-blue-400 transition-colors">+91 86510 70831</p>
                    <p className="text-slate-300 text-sm font-medium group-hover:text-blue-400 transition-colors">+91 85418 49118</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:jkdigitalsolutionfbg@gmail.com" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm break-all group-hover:text-blue-400 transition-colors">jkdigitalsolutionfbg@gmail.com</p>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Forbesganj,Bihar,India" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm group-hover:text-blue-400 transition-colors">Forbesganj, Araria</p>
                    <p className="text-slate-500 text-xs">Bihar, India — 854318</p>
                  </div>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-2">Business Hours</p>
              <p className="text-slate-400 text-xs">Mon–Sat: 9AM – 8PM</p>
              <p className="text-slate-400 text-xs">Sunday: 10AM – 6PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © 2025 JK Digital Solutions, Forbesganj, Bihar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-xs">Made for Bihar Local Businesses 🇮🇳</span>
            <a href="#home" aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
