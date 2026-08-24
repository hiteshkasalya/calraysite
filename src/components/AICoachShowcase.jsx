import React from "react";
import { Bot, Sparkles, Brain, HeartPulse } from "lucide-react";

export default function AICoachShowcase() {
  return (
    <section id="coach-showcase" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" />
            <span>Natural In-App Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            An AI Coach That Feels Like a <span className="text-emerald-600">Natural Trainer</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            CalRay Coach acts as your 24/7 personal kinesiology assistant inside the app—providing daily smart nudges, post-workout recovery notes, and exercise form pointers.
          </p>
        </div>

        {/* Feature Cards Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Daily Smart Macro Nudges</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Gets real-time insights on your remaining protein, carbohydrate, and energy thresholds so you never overeat or under-fuel before intense training.
            </p>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 italic shadow-xs">
              "Logged 44g protein post-workout! Drink 500ml water to support glycogen replenishment."
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Exercise Science & Form Tips</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Provides step-by-step target muscle breakdowns, warm-up protocols, and common injury prevention tips for compound lifts like squats and bench press.
            </p>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 italic shadow-xs">
              "Retract and depress your scapula before starting bench press sets to protect your rotator cuffs."
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Sleep & Recovery Tracking</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Monitors workout frequency and fatigue signals to suggest progressive overload adjustments or rest day timing when muscles need repair.
            </p>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 italic shadow-xs">
              "Upper body volume reached 16 sets this week. Recommended rest window: 36 hours."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
