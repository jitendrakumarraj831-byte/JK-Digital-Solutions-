"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Case Studies", href: "#case-studies" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">JK</span>
            </div>
            <div className="leading-tight">
              <p className="font-bold text-slate-900 text-base leading-none">JK Digital</p>
              <p className="text-blue-600 text-xs font-medium tracking-wide">Solutions</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+918651070831"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              +91 86510 70831
            </a>
            <a href="https://wa.me/918651070831?text=नमस्ते! मुझे Free Website Audit चाहिए।"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold">
              Free Audit
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-all">
              {l.label}
            </a>
          ))}
          <div className="pt-3 pb-1 flex flex-col gap-2">
            <a href="tel:+918651070831"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold btn-secondary">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="https://wa.me/918651070831?text=नमस्ते! मुझे Free Website Audit चाहिए।"
              target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              className="btn-primary text-center px-4 py-2.5 rounded-full text-sm font-semibold">
              Get Free Audit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
