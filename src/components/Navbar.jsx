import React, { useState, useEffect } from "react";
import { Download, Menu, X, Flame } from "lucide-react";

export default function Navbar({ onOpenDownload }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Calorie Engine", href: "#calorie-engine" },
    { name: "Personalized Workouts", href: "#workout-engine" },
    { name: "In-App Coach", href: "#coach-showcase" },
    { name: "Comparison", href: "#comparison" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <Flame className="w-5 h-5 fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 flex items-center gap-2">
              CalRay
              <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-mono font-medium">
                App Showcase
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white border border-slate-200 shadow-sm rounded-full px-4 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Download CalRay</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-slate-900 p-2 rounded-xl bg-white border border-slate-200 shadow-sm"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-sm py-3 rounded-xl shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download CalRay App</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
