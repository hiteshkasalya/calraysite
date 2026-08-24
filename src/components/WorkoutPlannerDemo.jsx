import React, { useState } from "react";
import {
  Dumbbell,
  Sparkles,
  Home,
  Building2,
  Target,
  CheckCircle2,
  RefreshCw,
  Flame,
  User,
  Zap,
  Activity,
  Sliders,
  Calendar,
} from "lucide-react";

const BODY_FOCUS_OPTIONS = [
  {
    id: "chest-triceps",
    name: "Chest & Triceps",
    desc: "Upper pecs, lower pecs, tricep heads",
    icon: "💪",
  },
  {
    id: "glutes-legs",
    name: "Glutes & Legs",
    desc: "Quads, hamstrings, glutes, calves",
    icon: "🦵",
  },
  {
    id: "back-biceps",
    name: "Back & Biceps",
    desc: "Lats, rhomboids, rear delts, biceps",
    icon: "🏋️‍♂️",
  },
  {
    id: "core-shred",
    name: "Core & Abs",
    desc: "Rectus abdominis, obliques, lower back",
    icon: "🔥",
  },
  {
    id: "full-body",
    name: "Full Body Power",
    desc: "All major compound muscle groups",
    icon: "⚡",
  },
];

export default function WorkoutPlannerDemo() {
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(70); // kg
  const [height, setHeight] = useState(175); // cm
  const [environment, setEnvironment] = useState("gym"); // 'gym' or 'home'
  const [goal, setGoal] = useState("Muscle Gain");
  const [selectedFocus, setSelectedFocus] = useState("chest-triceps");
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRoutine, setGeneratedRoutine] = useState(null);

  const handleGenerate = () => {
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);

      const focusObj = BODY_FOCUS_OPTIONS.find((f) => f.id === selectedFocus);
      const isHome = environment === "home";

      let exercises = [];
      if (selectedFocus === "chest-triceps") {
        exercises = isHome
          ? [
              { name: "Incline Push-Ups (Feet Elevated)", sets: "4 sets x 12-15 reps", rest: "60s rest", target: "Upper Pecs" },
              { name: "Dumbbell Floor Press", sets: "4 sets x 10-12 reps", rest: "90s rest", target: "Mid Pecs & Triceps" },
              { name: "Dumbbell Chest Flyes", sets: "3 sets x 12-15 reps", rest: "60s rest", target: "Inner Pec Stretch" },
              { name: "Overhead Dumbbell Tricep Extension", sets: "3 sets x 12-15 reps", rest: "60s rest", target: "Long Head Triceps" },
              { name: "Diamond Push-Ups", sets: "3 sets x Failure", rest: "45s rest", target: "Tricep Burnout" },
            ]
          : [
              { name: "Barbell Incline Bench Press", sets: "4 sets x 8-10 reps", rest: "90s rest", target: "Clavicular Head (Upper Chest)" },
              { name: "Flat Dumbbell Press", sets: "4 sets x 8-12 reps", rest: "90s rest", target: "Pectoralis Major" },
              { name: "Cable Low-to-High Chest Flyes", sets: "3 sets x 12-15 reps", rest: "60s rest", target: "Inner Chest Line" },
              { name: "Triceps Rope Pushdowns", sets: "4 sets x 10-12 reps", rest: "60s rest", target: "Lateral Tricep Head" },
              { name: "Weighted Parallel Bar Dips", sets: "3 sets x 8-10 reps", rest: "90s rest", target: "Lower Pecs & Triceps" },
            ];
      } else if (selectedFocus === "glutes-legs") {
        exercises = isHome
          ? [
              { name: "Goblet Squats (Dumbbell/Kettlebell)", sets: "4 sets x 12-15 reps", rest: "90s rest", target: "Quads & Glutes" },
              { name: "Bulgarian Split Squats", sets: "3 sets x 10 reps/side", rest: "60s rest", target: "Gluteus Maximus" },
              { name: "Dumbbell Romanian Deadlifts", sets: "4 sets x 12 reps", rest: "90s rest", target: "Hamstrings" },
              { name: "Single-Leg Glute Bridges", sets: "3 sets x 15 reps", rest: "45s rest", target: "Glute Isolation" },
              { name: "Standing Calf Raises", sets: "4 sets x 20 reps", rest: "45s rest", target: "Gastrocnemius" },
            ]
          : [
              { name: "Barbell Back Squats", sets: "4 sets x 6-8 reps", rest: "120s rest", target: "Overall Quad & Core Power" },
              { name: "Leg Press (45 Degree)", sets: "4 sets x 10-12 reps", rest: "90s rest", target: "Quad Sweep" },
              { name: "Seated Hamstring Curls", sets: "4 sets x 12-15 reps", rest: "60s rest", target: "Hamstring Peak" },
              { name: "Hip Thrusts (Barbell)", sets: "4 sets x 8-10 reps", rest: "90s rest", target: "Glute Hypertrophy" },
              { name: "Standing Machine Calf Raises", sets: "4 sets x 15 reps", rest: "60s rest", target: "Lower Leg Density" },
            ];
      } else {
        exercises = isHome
          ? [
              { name: "Single-Arm Dumbbell Rows", sets: "4 sets x 10-12 reps", rest: "60s rest", target: "Lats & Rhomboids" },
              { name: "Bodyweight Inverted Rows", sets: "3 sets x 10 reps", rest: "60s rest", target: "Mid-Back Thickness" },
              { name: "Dumbbell Bicep Curls", sets: "4 sets x 12 reps", rest: "60s rest", target: "Biceps Short Head" },
              { name: "Hammer Curls", sets: "3 sets x 12 reps", rest: "45s rest", target: "Brachialis & Forearms" },
              { name: "Doorframe Face Pulls / Resistance Band", sets: "3 sets x 15 reps", rest: "45s rest", target: "Rear Delts" },
            ]
          : [
              { name: "Lat Pulldowns (Wide Grip)", sets: "4 sets x 8-12 reps", rest: "90s rest", target: "Latissimus Dorsi (V-Taper)" },
              { name: "Chest-Supported T-Bar Rows", sets: "4 sets x 8-10 reps", rest: "90s rest", target: "Mid Back & Traps" },
              { name: "Seated Cable Rows (Close Grip)", sets: "3 sets x 12 reps", rest: "60s rest", target: "Rhomboids" },
              { name: "EZ-Bar Preacher Curls", sets: "4 sets x 10-12 reps", rest: "60s rest", target: "Bicep Peak Isolation" },
              { name: "Face Pulls (Rope Cable)", sets: "4 sets x 15 reps", rest: "45s rest", target: "Rear Delts & Rotator Cuff" },
            ];
      }

      setGeneratedRoutine({
        title: `Custom ${environment.toUpperCase()} AI Routine`,
        focusName: focusObj.name,
        targetDetail: `${age} yrs • ${weight}kg • ${height}cm • ${daysPerWeek} Days/Wk`,
        goal: goal,
        environment: isHome ? "Home (Dumbbell/Bodyweight)" : "Gym (Commercial Equipment)",
        exercises: exercises,
        warmup: "5 mins dynamic shoulder mobility, band pull-aparts, light warm-up sets.",
        aiCoachingNote: `CalRay AI customized this split for a ${age}-yr old at ${weight}kg aiming for ${goal}. Progressive overload applied.`,
      });
    }, 700);
  };

  return (
    <section id="workout-planner" className="py-24 bg-[#070913] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>AI Hyper-Personalized Routine Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Workouts Engineered for Your <span className="gradient-text-emerald">Body, Goal & Location</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Whether you train at the gym or home, CalRay's AI builds exact exercise splits tailored to your age, height, weight, preferred body focus areas, and equipment access.
          </p>
        </div>

        {/* Interactive Workout Builder Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls Panel */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-white/10 p-6 rounded-3xl backdrop-blur-2xl space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                Input Your Parameters
              </h3>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                Live AI Builder
              </span>
            </div>

            {/* 1. Age, Weight, Height Sliders / Inputs */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-950 p-3 rounded-2xl border border-white/10">
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-transparent font-extrabold text-base text-emerald-400 focus:outline-none"
                  min={14}
                  max={80}
                />
                <span className="text-[10px] text-slate-500">years</span>
              </div>

              <div className="bg-slate-950 p-3 rounded-2xl border border-white/10">
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Weight</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full bg-transparent font-extrabold text-base text-cyan-400 focus:outline-none"
                  min={35}
                  max={200}
                />
                <span className="text-[10px] text-slate-500">kg</span>
              </div>

              <div className="bg-slate-950 p-3 rounded-2xl border border-white/10">
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Height</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full bg-transparent font-extrabold text-base text-amber-400 focus:outline-none"
                  min={120}
                  max={220}
                />
                <span className="text-[10px] text-slate-500">cm</span>
              </div>
            </div>

            {/* 2. Workout Location Toggle (Gym vs Home) */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Workout Location:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setEnvironment("gym")}
                  className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                    environment === "gym"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Commercial Gym</span>
                </button>
                <button
                  onClick={() => setEnvironment("home")}
                  className={`p-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                    environment === "home"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Home / Dumbbell</span>
                </button>
              </div>
            </div>

            {/* 3. Goal Selector */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Primary Goal:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Muscle Gain", "Fat Loss & Shred", "Recomposition", "Athletic Power"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      goal === g
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                        : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Target Body Focus Selection */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Select Body Focus Area:
              </label>
              <div className="space-y-2">
                {BODY_FOCUS_OPTIONS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFocus(f.id)}
                    className={`w-full p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                      selectedFocus === f.id
                        ? "bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-xl">{f.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white">{f.name}</p>
                      <p className="text-[10px] text-slate-400 truncate">{f.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Computing AI Biomechanic Split...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate AI Workout Routine</span>
                </>
              )}
            </button>
          </div>

          {/* Right AI Generated Output Routine Display */}
          <div className="lg:col-span-7">
            {generatedRoutine ? (
              <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-emerald-500/30 space-y-6 shadow-2xl animate-in fade-in duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-5 gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                        AI Verified Routine
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{generatedRoutine.targetDetail}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {generatedRoutine.focusName} Split ({generatedRoutine.goal})
                    </h3>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-cyan-400 font-semibold shrink-0">
                    📍 {generatedRoutine.environment}
                  </div>
                </div>

                {/* Exercises List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Recommended Exercise Sequence:
                  </span>
                  {generatedRoutine.exercises.map((ex, i) => (
                    <div
                      key={i}
                      className="bg-slate-900/90 border border-white/10 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-emerald-500/40 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{ex.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">Target: {ex.target}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:text-right shrink-0">
                        <span className="bg-emerald-500/10 text-emerald-300 text-xs font-bold px-3 py-1 rounded-lg border border-emerald-500/20">
                          {ex.sets}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg">
                          ⏱ {ex.rest}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Warmup & AI Note */}
                <div className="pt-3 border-t border-white/10 space-y-3">
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-xs text-slate-300 flex items-start gap-2">
                    <Activity className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Warm-Up Routine:</strong> {generatedRoutine.warmup}
                    </span>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl text-xs text-emerald-300 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-400 block font-bold mb-0.5">CalRay AI Biomechanics Note:</strong>
                      {generatedRoutine.aiCoachingNote}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-950 p-12 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[460px] space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Dumbbell className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Ready to Build Your AI Routine?</h3>
                <p className="text-sm text-slate-400 max-w-sm">
                  Adjust your age, weight, workout location, and body focus on the left panel, then click <strong className="text-white">"Generate AI Workout Routine"</strong>.
                </p>
                <button
                  onClick={handleGenerate}
                  className="mt-2 px-6 py-2.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs rounded-full hover:bg-emerald-500/30 transition-all"
                >
                  Click Here To Try Live Demo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
