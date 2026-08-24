import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Camera,
  Barcode,
  MessageSquareText,
  Dumbbell,
  Bot,
  Zap,
  CheckCircle2,
  Play,
  Flame,
  UserCheck,
} from "lucide-react";

export default function HeroSection({ onOpenDownload, onNavigateSection }) {
  const [activeHeroTab, setActiveHeroTab] = useState("photo");

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#070913]">
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-emerald-500/15 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-radial from-violet-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-radial from-teal-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/30 px-4 py-2 rounded-full text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Next-Gen AI Fitness & Nutrition Ecosystem</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="hidden sm:inline-block text-slate-300 font-normal">v2.4 Powered by GPT-5.4</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Snap, Chat, & Crush Goals with{" "}
              <span className="gradient-text-emerald block mt-1">
                Your Personal AI Fitness Engine
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              The all-in-one AI platform that tracks calories from <span className="text-emerald-400 font-semibold">text prompts, barcodes, or food photos</span>, generates <span className="text-cyan-400 font-semibold">hyper-customized gym & home workouts</span> by age & body focus, and guides you 24/7 with a human-like <span className="text-violet-400 font-semibold">AI Fitness Coach</span>.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {[
                { icon: Camera, label: "Photo & Barcode Scan" },
                { icon: MessageSquareText, label: "Text Calorie Logger" },
                { icon: Dumbbell, label: "Personalized AI Workouts" },
                { icon: Bot, label: "24/7 Human-like AI Coach" },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 backdrop-blur-md"
                >
                  <pill.icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-slate-950 font-bold text-base px-8 py-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_45px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Get CalRay Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#calorie-tracker"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection("calorie-tracker");
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-base px-7 py-4 rounded-full backdrop-blur-md transition-all duration-300"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />
                <span>Try Live AI Simulator</span>
              </a>
            </div>

            {/* Trust Metrics & Social Proof */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>99.4% Macro Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Instant 3.2s AI Scan</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-violet-400" />
                <span>No Credit Card Needed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Phone Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px]">
              {/* Glowing Phone Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-violet-500/20 rounded-[3rem] blur-2xl transform scale-105 pointer-events-none" />

              {/* Phone Shell Device */}
              <div className="relative rounded-[2.8rem] border-[6px] border-slate-800 bg-[#090d16] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
                {/* Dynamic Screen Header / Notch */}
                <div className="flex items-center justify-between px-3 pt-1 pb-3 text-[11px] font-bold tracking-widest text-slate-400 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Flame className="w-3.5 h-3.5 fill-emerald-400" />
                    CALRAY MOBILE
                  </span>
                  <div className="w-16 h-3 bg-slate-900 rounded-full mx-auto border border-white/10" />
                  <span>09:41 AM</span>
                </div>

                {/* Hero Interactive Screen Selector Tabs */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-white/5 rounded-2xl border border-white/10 mt-3">
                  {[
                    { id: "photo", label: "Scan", icon: Camera },
                    { id: "text", label: "Text", icon: MessageSquareText },
                    { id: "workout", label: "Workout", icon: Dumbbell },
                    { id: "coach", label: "Coach", icon: Bot },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveHeroTab(tab.id)}
                      className={`flex flex-col items-center py-2 px-1 rounded-xl text-[10px] font-semibold transition-all ${
                        activeHeroTab === tab.id
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <tab.icon className="w-3.5 h-3.5 mb-0.5" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Screen Content Preview */}
                <div className="mt-3 min-h-[380px] bg-slate-900/90 rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
                  {activeHeroTab === "photo" && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="relative rounded-xl overflow-hidden border border-emerald-500/40 group">
                        <img
                          src="/images/calray-real-salmon.jpg"
                          alt="AI Food Recognition"
                          className="w-full h-36 object-cover"
                        />
                        <div className="absolute inset-0 bg-emerald-500/10 border-2 border-dashed border-emerald-400 rounded-xl flex items-center justify-center">
                          <span className="bg-slate-950/80 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-400/40 backdrop-blur-md flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-emerald-400" />
                            AI Scanned • Salmon & Quinoa
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-950 p-3 rounded-xl border border-white/10 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-300 font-bold">Total Energy</span>
                          <span className="text-emerald-400 font-extrabold text-sm">620 Kcal</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-center pt-1">
                          <div className="bg-white/5 p-1.5 rounded-lg">
                            <span className="text-[10px] text-slate-400 block">Protein</span>
                            <span className="text-xs font-bold text-emerald-400">44g</span>
                          </div>
                          <div className="bg-white/5 p-1.5 rounded-lg">
                            <span className="text-[10px] text-slate-400 block">Carbs</span>
                            <span className="text-xs font-bold text-cyan-400">52g</span>
                          </div>
                          <div className="bg-white/5 p-1.5 rounded-lg">
                            <span className="text-[10px] text-slate-400 block">Fats</span>
                            <span className="text-xs font-bold text-amber-400">22g</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-300 bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>AI Note: Excellent muscle recovery meal with 44g high-biological-value protein.</span>
                      </div>
                    </div>
                  )}

                  {activeHeroTab === "text" && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="bg-slate-950 p-3 rounded-xl border border-emerald-500/30">
                        <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                          User Prompt Input
                        </span>
                        <p className="text-xs text-slate-200 font-mono italic">
                          "2 poached eggs, 1 slice sourdough with 40g avocado & 1 scoop whey shake"
                        </p>
                      </div>

                      <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-white">Parsed Macros</span>
                          <span className="text-xs font-extrabold text-emerald-400">510 kcal</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                          <div className="h-full bg-emerald-400 w-[45%]" />
                          <div className="h-full bg-cyan-400 w-[30%]" />
                          <div className="h-full bg-amber-400 w-[25%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-300 font-medium">
                          <span>Prot: 38g (45%)</span>
                          <span>Carb: 32g (30%)</span>
                          <span>Fat: 21g (25%)</span>
                        </div>
                      </div>

                      <div className="bg-slate-950 p-2.5 rounded-xl border border-white/10 text-[10px] text-slate-300">
                        <span className="text-cyan-400 font-semibold block mb-0.5">Glycemic Load: Low (9)</span>
                        Perfect breakfast balance for steady workout energy.
                      </div>
                    </div>
                  )}

                  {activeHeroTab === "workout" && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/30 flex justify-between items-center">
                        <div>
                          <span className="text-xs font-bold text-white block">Today's AI Split</span>
                          <span className="text-[10px] text-cyan-400">Chest & Triceps Hypertrophy</span>
                        </div>
                        <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-cyan-400/30">
                          Gym • Day 1
                        </span>
                      </div>

                      <div className="space-y-2">
                        {[
                          { name: "Incline Dumbbell Press", detail: "4 sets x 8-10 reps • 90s rest" },
                          { name: "Cable Chest Flyes", detail: "3 sets x 12-15 reps • 60s rest" },
                          { name: "Triceps Rope Pushdowns", detail: "4 sets x 10-12 reps • 60s rest" },
                        ].map((ex, i) => (
                          <div
                            key={i}
                            className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs"
                          >
                            <div>
                              <p className="font-semibold text-slate-200">{ex.name}</p>
                              <p className="text-[10px] text-slate-400">{ex.detail}</p>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeHeroTab === "coach" && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="bg-violet-500/10 border border-violet-500/30 p-3 rounded-xl flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-violet-500 flex items-center justify-center shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-violet-300 block">CalRay AI Coach</span>
                          <p className="text-[11px] text-slate-200 leading-snug mt-1">
                            "You logged 44g protein post-workout! Drink 500ml water now to optimize glycogen synthesis & lower muscle soreness."
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-950 p-2.5 rounded-xl border border-white/10 text-[10px] space-y-1">
                        <span className="text-slate-400 block font-semibold">Suggested Coach Action:</span>
                        <div className="flex gap-2 pt-1">
                          <span className="bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10 px-2 py-1 rounded-md cursor-pointer">
                            + Log Water Intake
                          </span>
                          <span className="bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10 px-2 py-1 rounded-md cursor-pointer">
                            Ask Recovery Tip
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Interactive Screen Button */}
                  <button
                    onClick={onOpenDownload}
                    className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] mt-2"
                  >
                    <span>Launch Full Mobile App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
