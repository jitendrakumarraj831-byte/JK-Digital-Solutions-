import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <span className="text-white font-black text-xs">JK</span>
              </div>
              <span className="font-bold text-white">JK Digital Solutions</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Forbesganj, Bihar के local businesses को Google पर grow करने वाली trusted digital marketing agency।
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/918651070831" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#4ade80] text-sm font-semibold hover:bg-[#25D366]/20 transition-all">
                💬 WhatsApp
              </a>
              <a href="mailto:jkdigitalsolutionfbg@gmail.com"
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-semibold hover:bg-white/10 transition-all">
                ✉️ Email
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Website Development","Google SEO","Google Business Profile","Google Ads"].map(s => (
                <li key={s}>
                  <a href="#services" className="text-gray-500 text-sm hover:text-blue-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+918651070831" className="text-gray-500 text-sm hover:text-white transition-colors">
                  📞 +91 86510 70831
                </a>
              </li>
              <li>
                <a href="tel:+918541849118" className="text-gray-500 text-sm hover:text-white transition-colors">
                  📞 +91 85418 49118
                </a>
              </li>
              <li>
                <a href="mailto:jkdigitalsolutionfbg@gmail.com" className="text-gray-500 text-sm hover:text-white transition-colors break-all">
                  ✉️ jkdigitalsolutionfbg<br />@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-sm">📍 Forbesganj, Araria, Bihar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© 2025 JK Digital Solutions. Made for Bihar 🇮🇳</p>
          <a href="#" aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
