import React, { useState } from "react";
import { Calculator, Sparkles, Clock, DollarSign, TrendingUp, ShieldCheck } from "lucide-react";

export default function ROICalculator({ onOpenDownload }) {
  const [mealsPerWeek, setMealsPerWeek] = useState(21);
  const [trainerBudget, setTrainerBudget] = useState(150); // $ per month

  // Traditional logging takes ~4.5 mins per meal. CalRay takes ~0.1 mins (6 seconds)
  const minsSavedPerMeal = 4.4;
  const hoursSavedPerMonth = Math.round((mealsPerWeek * 4.33 * minsSavedPerMeal) / 60 * 10) / 10;
  const moneySavedPerYear = trainerBudget * 12;

  return (
    <section className="py-24 bg-[#070913] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Much Time & Money Will <span className="gradient-text-emerald">CalRay Save You?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Slide the controls below to calculate your estimated annual time and money saved by switching to CalRay's AI engine.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Area */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Meals per week */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <label className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Meals Logged Per Week:
                </label>
                <span className="text-emerald-400 text-base font-extrabold bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/30">
                  {mealsPerWeek} meals/wk
                </span>
              </div>
              <input
                type="range"
                min={7}
                max={35}
                value={mealsPerWeek}
                onChange={(e) => setMealsPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>7 (1 meal/day)</span>
                <span>21 (3 meals/day)</span>
                <span>35 (5 meals/day)</span>
              </div>
            </div>

            {/* Slider 2: Trainer / Dietitian Budget */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <label className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                  Monthly Personal Trainer / Dietitian Fee:
                </label>
                <span className="text-cyan-400 text-base font-extrabold bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/30">
                  ${trainerBudget}/mo
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={500}
                step={25}
                value={trainerBudget}
                onChange={(e) => setTrainerBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>$0</span>
                <span>$250/mo</span>
                <span>$500/mo</span>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-emerald-500/30 space-y-6 shadow-2xl text-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Estimated Savings With CalRay
              </span>
              <h4 className="text-lg font-bold text-white">Your Personal Value Metric</h4>
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
                <span className="text-xs text-slate-300 block font-medium">Logging Time Saved</span>
                <span className="text-3xl font-extrabold text-emerald-400 block mt-1">
                  {hoursSavedPerMonth} Hours / mo
                </span>
                <span className="text-[11px] text-emerald-300 font-medium mt-1 block">
                  ~{Math.round(hoursSavedPerMonth * 12)} hours per year freed up!
                </span>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-2xl">
                <span className="text-xs text-slate-300 block font-medium">Coaching Budget Saved</span>
                <span className="text-3xl font-extrabold text-cyan-400 block mt-1">
                  ${moneySavedPerYear.toLocaleString()} / year
                </span>
                <span className="text-[11px] text-cyan-300 font-medium mt-1 block">
                  CalRay AI Coach included 100% free!
                </span>
              </div>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.35)]"
            >
              Claim Your Savings Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
