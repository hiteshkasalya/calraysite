import React from "react";
import { Check, X, Flame } from "lucide-react";

const COMPARISON_ROWS = [
  {
    feature: "Calorie Logging Method",
    calray: "Multimodal AI (Text, Barcode, & Photo)",
    traditional: "Manual database search in 10M+ unverified entries",
  },
  {
    feature: "Logging Speed Per Meal",
    calray: "3.2 Seconds (Instant Scan)",
    traditional: "3 to 5 Minutes of manual typing",
  },
  {
    feature: "Personalized Workout Generator",
    calray: "AI splits tailored by Age, Weight, Height, Gym/Home & Focus",
    traditional: "Generic static PDF templates or none",
  },
  {
    feature: "In-App AI Fitness Guidance",
    calray: "Natural kinesiology nudges & recovery notes included",
    traditional: "Requires paying $100-$200/hr personal trainer",
  },
  {
    feature: "Computer Vision Accuracy",
    calray: "99.4% Portion & Ingredient Recognition",
    traditional: "Not supported or manual guesses",
  },
  {
    feature: "App User Experience",
    calray: "Calm Editorial Aesthetics • Zero Intrusive Ads",
    traditional: "Cluttered popups & intrusive banner ads",
  },
];

export default function ComparisonSection({ onOpenDownload }) {
  return (
    <section id="comparison" className="py-24 bg-[#0b0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <span>Feature Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Users Are Switching to <span className="text-emerald-400">CalRay</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Compare CalRay's modern multimodal mobile workflow against traditional calorie and fitness apps.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[640px] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-950 p-6 border-b border-white/10 text-xs font-extrabold tracking-wider uppercase">
              <div className="col-span-4 text-slate-400">Capabilities</div>
              <div className="col-span-4 text-emerald-400 flex items-center gap-2 text-sm font-extrabold">
                <Flame className="w-4 h-4 fill-emerald-400" />
                CalRay App
              </div>
              <div className="col-span-4 text-slate-400 text-sm font-bold">
                Legacy Fitness Apps
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {COMPARISON_ROWS.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-6 items-center hover:bg-white/[0.02] transition-colors">
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

        <div className="mt-10 text-center">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all"
          >
            <span>Download CalRay App Free</span>
          </button>
        </div>
      </div>
    </section>
  );
}
