"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : "bg-white/95 backdrop-blur-md border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">JK</span>
            </div>
            <div className="leading-tight">
              <p className="font-bold text-slate-900 text-base leading-none">JK Digital</p>
              <p className="text-blue-600 text-xs font-medium">Solutions</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+918651070831" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" /> +91 86510 70831
            </a>
            <a href="#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all">
              Free Audit
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-slate-600">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all">
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a href="tel:+918651070831"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-slate-200 text-slate-700 text-sm font-semibold bg-white">
              <Phone className="w-4 h-4" /> Call: +91 86510 70831
            </a>
            <a href="#contact" onClick={() => setOpen(false)}
              className="flex items-center justify-center px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md">
              Get Free Audit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
