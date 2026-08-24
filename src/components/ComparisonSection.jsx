import React from "react";
import { Check, X, Sparkles, Flame, ShieldAlert } from "lucide-react";

const COMPARISON_ROWS = [
  {
    feature: "Calorie Logging Method",
    calray: "Multimodal AI (Text, Barcode, & Photo)",
    traditional: "Manual search in unverified 10M+ database",
    calrayWin: true,
  },
  {
    feature: "Logging Time Per Meal",
    calray: "3.2 Seconds (Instant Scan)",
    traditional: "3 to 5 Minutes of tedious manual entry",
    calrayWin: true,
  },
  {
    feature: "Personalized Workout Generator",
    calray: "AI splits by Age, Weight, Height, Gym/Home & Body Focus",
    traditional: "Generic static PDF templates or none",
    calrayWin: true,
  },
  {
    feature: "24/7 AI Fitness & Diet Coach",
    calray: "Human-like Kinesiology Coach included",
    traditional: "Requires paying $100-$200/hr personal trainer",
    calrayWin: true,
  },
  {
    feature: "Computer Vision Photo Accuracy",
    calray: "99.4% Precision Portion & Ingredient Detection",
    traditional: "Not supported or inaccurate manual estimates",
    calrayWin: true,
  },
  {
    feature: "App User Experience",
    calray: "Luxury Dark Glassmorphism • Zero Ads",
    traditional: "Cluttered popups & intrusive banner ads",
    calrayWin: true,
  },
];

export default function ComparisonSection({ onOpenDownload }) {
  return (
    <section id="comparison" className="py-24 bg-[#090d16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why CalRay Is Unmatched</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CalRay AI vs <span className="text-slate-400 font-normal italic">Yesterday's Fitness Apps</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            See how CalRay's next-gen AI technology eliminates friction, saves hours of logging time, and replaces expensive human trainers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[640px] bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-slate-950 p-6 border-b border-white/10 text-xs font-extrabold tracking-wider uppercase">
              <div className="col-span-4 text-slate-400">Capabilities</div>
              <div className="col-span-4 text-emerald-400 flex items-center gap-2 text-sm font-extrabold">
                <Flame className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                CalRay AI Engine
              </div>
              <div className="col-span-4 text-slate-400 text-sm font-bold">
                Old-School Apps (MyFitnessPal, etc.)
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/5">
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 p-6 items-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-4 font-bold text-slate-200 text-xs sm:text-sm">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-emerald-300 font-semibold text-xs sm:text-sm flex items-start gap-2 bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20 mr-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.calray}</span>
                  </div>
                  <div className="col-span-4 text-slate-400 text-xs sm:text-sm flex items-start gap-2 p-3">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-all"
          >
            <span>Upgrade To CalRay AI Free</span>
          </button>
        </div>
      </div>
    </section>
  );
}
