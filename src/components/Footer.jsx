import React from "react";
import { Flame, ArrowUp, Download, Sparkles } from "lucide-react";

export default function Footer({ onOpenDownload }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Flame className="w-4 h-4 fill-white/20" />
              </div>
              <span className="font-bold text-lg text-slate-900">CalRay</span>
            </a>
            <p className="text-slate-600 leading-relaxed max-w-sm text-xs">
              The next-generation AI Calorie & Workout Mobile Ecosystem. Track food via photo, barcode, or text prompt. Generate personalized workout splits and get guided by natural in-app coaching.
            </p>
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Showcase Website</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#calorie-engine" className="hover:text-emerald-700 transition-colors">
                  Multimodal Calorie Engine
                </a>
              </li>
              <li>
                <a href="#workout-engine" className="hover:text-emerald-700 transition-colors">
                  Personalized AI Workouts
                </a>
              </li>
              <li>
                <a href="#coach-showcase" className="hover:text-emerald-700 transition-colors">
                  Natural In-App Guidance
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-emerald-700 transition-colors">
                  Why CalRay Beats Old Apps
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-700 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* CTA & Download */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Get Started Free</h4>
            <p className="text-slate-600 text-xs">
              Join over 50,000 active users logging food and crushing workout goals today.
            </p>
            <button
              onClick={onOpenDownload}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download CalRay App (iOS & Android)</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CalRay AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
