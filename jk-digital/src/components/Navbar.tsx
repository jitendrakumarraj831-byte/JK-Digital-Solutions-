"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-s" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs tracking-tight">JK</span>
            </div>
            <span className="font-bold text-gray-900 text-[15px]">JK Digital</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+918651070831" className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">
              +91 86510 70831
            </a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-all">
              Free Audit →
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-5 shadow-lg">
          <nav className="flex flex-col gap-1 mb-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="px-3 py-3 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
            <a href="tel:+918651070831"
              className="flex items-center justify-center py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold">
              📞 +91 86510 70831
            </a>
            <a href="#contact" onClick={() => setOpen(false)}
              className="flex items-center justify-center py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold">
              Get Free Audit →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
