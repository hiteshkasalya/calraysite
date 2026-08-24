import React from "react";
import { Flame, ArrowUp, Download, Sparkles } from "lucide-react";

export default function Footer({ onOpenDownload }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070e] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-0.5 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <Flame className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">CalRay AI</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              The next-generation AI Calorie & Workout Ecosystem. Track food via text prompts, barcodes, or camera photos. Generate hyper-customized workout splits and get guided 24/7 by your AI Fitness Coach.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Valued at 200-Crore Startup Tech Standard</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#calorie-tracker" className="hover:text-emerald-400 transition-colors">
                  Multimodal AI Calorie Tracker
                </a>
              </li>
              <li>
                <a href="#workout-planner" className="hover:text-emerald-400 transition-colors">
                  Personalized AI Workout Builder
                </a>
              </li>
              <li>
                <a href="#ai-coach" className="hover:text-emerald-400 transition-colors">
                  24/7 AI Kinesiology Coach
                </a>
              </li>
              <li>
                <a href="#app-showcase" className="hover:text-emerald-400 transition-colors">
                  Mobile App Interactive Tour
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-emerald-400 transition-colors">
                  Why CalRay Beats Old Apps
                </a>
              </li>
            </ul>
          </div>

          {/* CTA & Download */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Get Started Free</h4>
            <p className="text-slate-400 text-xs">
              Join over 50,000 active users logging food and crushing workout goals today.
            </p>
            <button
              onClick={onOpenDownload}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs py-3 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download CalRay App (iOS & Android)</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CalRay AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all ml-2"
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
