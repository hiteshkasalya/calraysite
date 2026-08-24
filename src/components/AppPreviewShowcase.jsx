import React, { useState } from "react";
import {
  Smartphone,
  Sparkles,
  Flame,
  Camera,
  Dumbbell,
  Bot,
  TrendingUp,
  PieChart,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const APP_SCREENS = [
  {
    id: "dashboard",
    title: "Daily Macro & Calorie Hub",
    badge: "Dashboard",
    desc: "Real-time energy tracking, macro breakdown rings, and remaining deficit/surplus calculator.",
    icon: Flame,
    screenImg: "/images/calray-real-color-bowl.jpg",
    stats: [
      { label: "Target Kcal", val: "2,450 kcal" },
      { label: "Logged Today", val: "1,840 kcal" },
      { label: "Protein Hit", val: "142g / 160g" },
    ],
  },
  {
    id: "scanner",
    title: "Computer Vision Food Scanner",
    badge: "Food AI",
    desc: "Point phone camera at real plates. Instant 3.2s food detection, ingredient segmentation, & accuracy score.",
    icon: Camera,
    screenImg: "/images/calray-real-meal-top.jpg",
    stats: [
      { label: "Scan Time", val: "3.2 seconds" },
      { label: "Accuracy", val: "99.4%" },
      { label: "Database", val: "3.5M+ Foods" },
    ],
  },
  {
    id: "workouts",
    title: "Dynamic AI Workout Scheduler",
    badge: "Workouts",
    desc: "Gym or home splits tailored to your age, weight, height, and target muscle focus.",
    icon: Dumbbell,
    screenImg: "/images/calray-real-bowls.jpg",
    stats: [
      { label: "Split Type", val: "Push / Pull / Legs" },
      { label: "Location", val: "Gym & Home" },
      { label: "Progression", val: "Auto Overload" },
    ],
  },
  {
    id: "coach",
    title: "24/7 Kinesiology AI Coach",
    badge: "AI Coach",
    desc: "Human-like gym trainer guiding your form, workout rest intervals, and late night craving recovery.",
    icon: Bot,
    screenImg: "/images/calray-real-salmon.jpg",
    stats: [
      { label: "Knowledge", val: "Exercise Science" },
      { label: "Availability", val: "24/7 Instant" },
      { label: "Personalized", val: "Yes" },
    ],
  },
  {
    id: "analytics",
    title: "Macro & Bio Analytics River",
    badge: "Analytics",
    desc: "Visualize your body fat decline, lean muscle gain trajectory, and weekly energy balance curves.",
    icon: TrendingUp,
    screenImg: "/images/calray-real-laptop.jpg",
    stats: [
      { label: "Muscle Trend", val: "+2.4 kg" },
      { label: "Fat Loss", val: "-4.8 kg" },
      { label: "Consistency", val: "94%" },
    ],
  },
];

export default function AppPreviewShowcase({ onOpenDownload }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen = APP_SCREENS[activeScreenIndex];

  return (
    <section id="app-showcase" className="py-24 bg-[#070913] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Product Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Take a Test Drive of the <span className="gradient-text-emerald">CalRay Mobile App</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Click through the core in-app screens to see how CalRay makes calorie tracking & AI workout scheduling feel fast, calm, and effortless.
          </p>
        </div>

        {/* Screen Switcher Nav Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {APP_SCREENS.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreenIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeScreenIndex === idx
                  ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              <screen.icon className="w-4 h-4" />
              <span>{screen.badge}</span>
            </button>
          ))}
        </div>

        {/* Interactive Phone & Feature Breakdown Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          {/* Left Column: Phone Frame Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              {/* Phone Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-violet-500/20 rounded-[2.8rem] blur-xl pointer-events-none" />

              {/* Phone Device Shell */}
              <div className="relative rounded-[2.5rem] border-[6px] border-slate-800 bg-[#090d16] p-3 shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="flex justify-between items-center px-3 py-1.5 text-[10px] text-slate-400 font-bold border-b border-white/10">
                  <span className="text-emerald-400">CalRay OS</span>
                  <span>09:41</span>
                </div>

                {/* Main Screen Graphic */}
                <div className="relative h-[380px] rounded-2xl overflow-hidden mt-2 border border-white/10">
                  <img
                    src={activeScreen.screenImg}
                    alt={activeScreen.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
                    <span className="bg-emerald-500/30 border border-emerald-400 text-emerald-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full w-max">
                      {activeScreen.badge} Screen
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">{activeScreen.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">{activeScreen.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Feature Explanation & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Feature Screen 0{activeScreenIndex + 1} of 05</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeScreen.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeScreen.desc} Designed with ultra-calm UI aesthetics, zero ad clutter, and fast response times so you never break your daily habit loop.
              </p>
            </div>

            {/* Live Key Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {activeScreen.stats.map((st, i) => (
                <div key={i} className="bg-slate-950 p-3.5 rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                    {st.label}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-400">{st.val}</span>
                </div>
              ))}
            </div>

            {/* Key Benefits List */}
            <div className="space-y-2 pt-2">
              {[
                "1-Tap Save favorite recurring meals & workout routines",
                "Works completely offline with local cache sync",
                "Integrates seamlessly with Apple Health & Google Health Connect",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenDownload}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
              >
                <span>Download CalRay App Free</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
