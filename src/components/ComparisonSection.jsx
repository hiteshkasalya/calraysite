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
    feature: "Computer Vision Precision",
    calray: "99.4% Portion & Ingredient Recognition",
    traditional: "Not supported or manual guesses",
  },
  {
    feature: "App User Experience",
    calray: "Calm Light Aesthetics • Zero Intrusive Ads",
    traditional: "Cluttered popups & intrusive banner ads",
  },
];

export default function ComparisonSection({ onOpenDownload }) {
  return (
    <section id="comparison" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-xs px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            <span>Feature Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Users Are Switching to <span className="text-emerald-600">CalRay</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Compare CalRay's modern multimodal mobile workflow against traditional calorie and fitness apps.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[640px] bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-12 bg-slate-100 p-6 border-b border-slate-200 text-xs font-extrabold tracking-wider uppercase">
              <div className="col-span-4 text-slate-500">Capabilities</div>
              <div className="col-span-4 text-emerald-700 flex items-center gap-2 text-sm font-extrabold">
                <Flame className="w-4 h-4 fill-emerald-600" />
                CalRay App
              </div>
              <div className="col-span-4 text-slate-500 text-sm font-bold">
                Legacy Fitness Apps
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {COMPARISON_ROWS.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-6 items-center hover:bg-slate-50/50 transition-colors">
                  <div className="col-span-4 font-bold text-slate-900 text-xs sm:text-sm">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-emerald-800 font-semibold text-xs sm:text-sm flex items-start gap-2 bg-emerald-50 p-3 rounded-2xl border border-emerald-200 mr-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.calray}</span>
                  </div>
                  <div className="col-span-4 text-slate-500 text-xs sm:text-sm flex items-start gap-2 p-3">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
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
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all"
          >
            <span>Download CalRay App Free</span>
          </button>
        </div>
      </div>
    </section>
  );
}
