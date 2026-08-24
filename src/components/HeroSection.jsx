import React, { useState } from "react";
import {
  Camera,
  Barcode,
  MessageSquareText,
  Dumbbell,
  Bot,
  ArrowRight,
  Download,
  CheckCircle2,
  Sparkles,
  Flame,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection({ onOpenDownload }) {
  const [activeTab, setActiveTab] = useState("camera");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0b0e14]">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Product Tag */}
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Next-Gen Mobile App Showcase</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Calorie tracking at the speed of thought.{" "}
              <span className="text-emerald-400 block mt-1">
                Workouts engineered for your body.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              CalRay consolidates <strong className="text-white">food photo scanning</strong>, <strong className="text-white">barcode reading</strong>, <strong className="text-white">text prompt logging</strong>, and <strong className="text-white">personalized gym & home workout splits</strong> into one calm, beautifully crafted mobile app.
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {[
                { icon: Camera, label: "Photo & Barcode Scan" },
                { icon: MessageSquareText, label: "Text Calorie Logger" },
                { icon: Dumbbell, label: "Personalized Workouts" },
                { icon: Bot, label: "Natural AI Coach Notes" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-900/90 border border-white/10 px-3.5 py-2 rounded-full text-xs font-medium text-slate-300"
                >
                  <item.icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Get CalRay Free</span>
              </button>

              <a
                href="#calorie-engine"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-white/15 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-full transition-all"
              >
                <span>Explore App Features</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>99.4% Macro Accuracy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>

          {/* Right Product Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              {/* Product Frame */}
              <div className="rounded-[2.5rem] border-[6px] border-slate-800 bg-[#0f131c] p-4 shadow-2xl relative overflow-hidden">
                {/* Header Notch */}
                <div className="flex justify-between items-center px-3 pb-3 text-[10px] font-bold text-slate-400 border-b border-white/10">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-emerald-400" />
                    CalRay App
                  </span>
                  <span>09:41 AM</span>
                </div>

                {/* Mockup Tab Selector */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-900 rounded-xl border border-white/10 mt-3 text-[10px] font-bold">
                  {[
                    { id: "camera", label: "Scan" },
                    { id: "workout", label: "Workout" },
                    { id: "coach", label: "Coach" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id)}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeTab === t.id
                          ? "bg-emerald-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Screen View */}
                <div className="mt-3 min-h-[350px] bg-slate-950 rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
                  {activeTab === "camera" && (
                    <div className="space-y-3">
                      <div className="relative rounded-xl overflow-hidden border border-emerald-500/40">
                        <img
                          src="/images/calray-real-salmon.jpg"
                          alt="CalRay Food Scan"
                          className="w-full h-36 object-cover"
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 p-2 rounded-lg border border-white/10 text-[10px]">
                          <span className="text-emerald-400 font-bold block">Scanned: Salmon & Quinoa</span>
                          <span className="text-slate-300">620 kcal • 44g Protein</span>
                        </div>
                      </div>

                      <div className="bg-slate-900 p-3 rounded-xl border border-white/10 space-y-1.5 text-xs">
                        <div className="flex justify-between font-bold">
                          <span className="text-slate-300">Logged Meal</span>
                          <span className="text-emerald-400">620 kcal</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[10px] text-center pt-1">
                          <div className="bg-white/5 p-1 rounded-lg">
                            <span className="text-slate-400 block">Prot</span>
                            <span className="font-bold text-emerald-400">44g</span>
                          </div>
                          <div className="bg-white/5 p-1 rounded-lg">
                            <span className="text-slate-400 block">Carb</span>
                            <span className="font-bold text-cyan-400">52g</span>
                          </div>
                          <div className="bg-white/5 p-1 rounded-lg">
                            <span className="text-slate-400 block">Fat</span>
                            <span className="font-bold text-amber-400">22g</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "workout" && (
                    <div className="space-y-2.5 text-xs">
                      <div className="bg-slate-900 p-3 rounded-xl border border-white/10">
                        <span className="text-[10px] font-bold text-emerald-400 block uppercase">
                          Today's Routine Split
                        </span>
                        <p className="font-bold text-white">Chest & Triceps (Gym)</p>
                        <p className="text-[10px] text-slate-400">Targeted for Age 25 • 70kg</p>
                      </div>

                      <div className="space-y-1.5">
                        <div className="bg-white/5 p-2 rounded-lg flex justify-between text-[11px]">
                          <span className="text-slate-200 font-semibold">Incline DB Press</span>
                          <span className="text-emerald-400">4 x 10 reps</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded-lg flex justify-between text-[11px]">
                          <span className="text-slate-200 font-semibold">Cable Chest Flyes</span>
                          <span className="text-emerald-400">3 x 12 reps</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded-lg flex justify-between text-[11px]">
                          <span className="text-slate-200 font-semibold">Tricep Pushdowns</span>
                          <span className="text-emerald-400">4 x 12 reps</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "coach" && (
                    <div className="space-y-3 text-xs">
                      <div className="bg-slate-900 p-3 rounded-xl border border-white/10 space-y-1">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase block">
                          CalRay Coach Nudge
                        </span>
                        <p className="text-slate-200 text-[11px] leading-relaxed">
                          "Great job hitting 44g protein post-workout! Drink 500ml water now for optimal muscle glycogen recovery."
                        </p>
                      </div>

                      <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 text-[10px] text-emerald-300">
                        ✓ Daily Macro Goal Progress: 82% Completed
                      </div>
                    </div>
                  )}

                  <button
                    onClick={onOpenDownload}
                    className="w-full py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl mt-2"
                  >
                    Download Mobile App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
