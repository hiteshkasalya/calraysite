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
  Flame,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection({ onOpenDownload }) {
  const [activeTab, setActiveTab] = useState("camera");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Product Tag */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Next-Gen Mobile App Showcase</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Calorie tracking at the speed of thought.{" "}
              <span className="text-emerald-600 block mt-1">
                Workouts built for your body.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              CalRay consolidates <strong className="text-slate-900 font-semibold">food photo scanning</strong>, <strong className="text-slate-900 font-semibold">barcode reading</strong>, <strong className="text-slate-900 font-semibold">text prompt logging</strong>, and <strong className="text-slate-900 font-semibold">personalized gym & home workout splits</strong> into one calm, beautifully designed mobile app.
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
                  className="flex items-center gap-2 bg-white border border-slate-200 shadow-xs px-3.5 py-2 rounded-full text-xs font-medium text-slate-700"
                >
                  <item.icon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Get CalRay Free</span>
              </button>

              <a
                href="#calorie-engine"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-sm px-6 py-3.5 rounded-full transition-all shadow-xs"
              >
                <span>Explore App Features</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-500 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>99.4% Macro Precision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>

          {/* Right Mobile Mockup Frame (Light Theme Device) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              {/* Product Frame */}
              <div className="rounded-[2.5rem] border-[6px] border-slate-300 bg-white p-4 shadow-xl relative overflow-hidden">
                {/* Header Bar */}
                <div className="flex justify-between items-center px-3 pb-3 text-[10px] font-bold text-slate-500 border-b border-slate-100">
                  <span className="text-emerald-700 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-emerald-600" />
                    CalRay App
                  </span>
                  <span>09:41 AM</span>
                </div>

                {/* Mockup Tab Selector */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 mt-3 text-[10px] font-bold">
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
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Screen View */}
                <div className="mt-3 min-h-[350px] bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between">
                  {activeTab === "camera" && (
                    <div className="space-y-3">
                      <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                        <img
                          src="/images/calray-real-salmon.jpg"
                          alt="CalRay Food Scan"
                          className="w-full h-36 object-cover"
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-white/95 p-2 rounded-lg border border-slate-200 text-[10px] shadow-xs">
                          <span className="text-emerald-800 font-bold block">Scanned: Salmon & Quinoa</span>
                          <span className="text-slate-600">620 kcal • 44g Protein</span>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1.5 text-xs shadow-xs">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>Logged Meal</span>
                          <span className="text-emerald-700">620 kcal</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[10px] text-center pt-1">
                          <div className="bg-slate-50 p-1 rounded-lg border border-slate-100">
                            <span className="text-slate-500 block">Prot</span>
                            <span className="font-bold text-emerald-700">44g</span>
                          </div>
                          <div className="bg-slate-50 p-1 rounded-lg border border-slate-100">
                            <span className="text-slate-500 block">Carb</span>
                            <span className="font-bold text-cyan-700">52g</span>
                          </div>
                          <div className="bg-slate-50 p-1 rounded-lg border border-slate-100">
                            <span className="text-slate-500 block">Fat</span>
                            <span className="font-bold text-amber-700">22g</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "workout" && (
                    <div className="space-y-2.5 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                        <span className="text-[10px] font-bold text-emerald-700 block uppercase">
                          Today's Routine Split
                        </span>
                        <p className="font-bold text-slate-900">Chest & Triceps (Gym)</p>
                        <p className="text-[10px] text-slate-500">Targeted for Age 25 • 70kg</p>
                      </div>

                      <div className="space-y-1.5">
                        <div className="bg-white p-2 rounded-lg border border-slate-200 flex justify-between text-[11px]">
                          <span className="text-slate-800 font-semibold">Incline DB Press</span>
                          <span className="text-emerald-700 font-bold">4 x 10 reps</span>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-slate-200 flex justify-between text-[11px]">
                          <span className="text-slate-800 font-semibold">Cable Chest Flyes</span>
                          <span className="text-emerald-700 font-bold">3 x 12 reps</span>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-slate-200 flex justify-between text-[11px]">
                          <span className="text-slate-800 font-semibold">Tricep Pushdowns</span>
                          <span className="text-emerald-700 font-bold">4 x 12 reps</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "coach" && (
                    <div className="space-y-3 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1 shadow-xs">
                        <span className="text-[10px] font-bold text-emerald-700 uppercase block">
                          CalRay Coach Nudge
                        </span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          "Great job hitting 44g protein post-workout! Drink 500ml water now for optimal muscle glycogen recovery."
                        </p>
                      </div>

                      <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-[10px] text-emerald-800 font-semibold">
                        ✓ Daily Macro Goal Progress: 82% Completed
                      </div>
                    </div>
                  )}

                  <button
                    onClick={onOpenDownload}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl mt-2 shadow-xs transition-colors"
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
