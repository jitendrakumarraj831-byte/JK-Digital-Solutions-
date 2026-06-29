"use client";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "होम", href: "#home" },
    { label: "डिजिटल क्यों?", href: "#why-digital" },
    { label: "सर्विसेज", href: "#services" },
    { label: "संपर्क करें", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism shadow-lg shadow-cyan-500/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight">JK Digital</span>
              <span className="block text-cyan-400 text-xs font-medium tracking-widest uppercase leading-tight">Solutions</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-glow px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-semibold border border-cyan-400/30"
            >
              फ्री ऑडिट 🎯
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glassmorphism border-t border-cyan-500/10 px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-2 px-3 rounded-lg hover:bg-cyan-500/5 transition-all text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-semibold"
          >
            फ्री ऑडिट 🎯
          </a>
        </div>
      </div>
    </nav>
  );
}
