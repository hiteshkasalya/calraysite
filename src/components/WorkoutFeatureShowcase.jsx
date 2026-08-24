import React, { useState } from "react";
import { Dumbbell, Home, Building2, Target, CheckCircle2, Sliders } from "lucide-react";

const WORKOUT_SPLITS = [
  {
    id: "chest-triceps",
    title: "Chest & Triceps Focus",
    target: "Pectoralis Major, Upper Pecs, Tricep Heads",
    gymExercises: [
      { name: "Incline Barbell Bench Press", detail: "4 sets x 8-10 reps • 90s rest" },
      { name: "Flat Dumbbell Press", detail: "4 sets x 10-12 reps • 90s rest" },
      { name: "Cable Low-to-High Chest Flyes", detail: "3 sets x 12-15 reps • 60s rest" },
      { name: "Triceps Rope Pushdowns", detail: "4 sets x 10-12 reps • 60s rest" },
    ],
    homeExercises: [
      { name: "Incline Feet-Elevated Push-Ups", detail: "4 sets x 12-15 reps • 60s rest" },
      { name: "Dumbbell Floor Press", detail: "4 sets x 10-12 reps • 90s rest" },
      { name: "Dumbbell Chest Flyes", detail: "3 sets x 12-15 reps • 60s rest" },
      { name: "Overhead Dumbbell Tricep Extension", detail: "3 sets x 12-15 reps • 60s rest" },
    ],
  },
  {
    id: "glutes-legs",
    title: "Glutes & Lower Body Focus",
    target: "Quads, Hamstrings, Gluteus Maximus, Calves",
    gymExercises: [
      { name: "Barbell Back Squats", detail: "4 sets x 6-8 reps • 120s rest" },
      { name: "Leg Press (45 Degree)", detail: "4 sets x 10-12 reps • 90s rest" },
      { name: "Barbell Hip Thrusts", detail: "4 sets x 8-10 reps • 90s rest" },
      { name: "Seated Hamstring Curls", detail: "4 sets x 12-15 reps • 60s rest" },
    ],
    homeExercises: [
      { name: "Dumbbell Goblet Squats", detail: "4 sets x 12-15 reps • 90s rest" },
      { name: "Bulgarian Split Squats", detail: "3 sets x 10 reps/leg • 60s rest" },
      { name: "Dumbbell Romanian Deadlifts", detail: "4 sets x 12 reps • 90s rest" },
      { name: "Single-Leg Glute Bridges", detail: "3 sets x 15 reps • 45s rest" },
    ],
  },
  {
    id: "back-biceps",
    title: "Back & Biceps Focus",
    target: "Lats, Rhomboids, Biceps, Forearms",
    gymExercises: [
      { name: "Wide-Grip Lat Pulldowns", detail: "4 sets x 8-12 reps • 90s rest" },
      { name: "Chest-Supported T-Bar Rows", detail: "4 sets x 8-10 reps • 90s rest" },
      { name: "EZ-Bar Preacher Curls", detail: "4 sets x 10-12 reps • 60s rest" },
      { name: "Face Pulls (Rope Cable)", detail: "4 sets x 15 reps • 45s rest" },
    ],
    homeExercises: [
      { name: "Single-Arm Dumbbell Rows", detail: "4 sets x 10-12 reps • 60s rest" },
      { name: "Bodyweight Inverted Rows", detail: "3 sets x 10 reps • 60s rest" },
      { name: "Dumbbell Standing Bicep Curls", detail: "4 sets x 12 reps • 60s rest" },
      { name: "Dumbbell Hammer Curls", detail: "3 sets x 12 reps • 45s rest" },
    ],
  },
];

export default function WorkoutFeatureShowcase() {
  const [selectedSplitId, setSelectedSplitId] = useState("chest-triceps");
  const [location, setLocation] = useState("gym"); // 'gym' or 'home'
  const activeSplit = WORKOUT_SPLITS.find((s) => s.id === selectedSplitId);
  const currentExercises = location === "gym" ? activeSplit.gymExercises : activeSplit.homeExercises;

  return (
    <section id="workout-engine" className="py-24 bg-[#0b0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Personalized AI Workout Routines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Workouts Tailored to Your <span className="text-emerald-400">Body & Environment</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            CalRay tailors workout splits based on your age, height, weight, preferred location (Gym vs Home), and target body focus.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="mt-12 bg-slate-900 border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Split Buttons */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {WORKOUT_SPLITS.map((split) => (
              <button
                key={split.id}
                onClick={() => setSelectedSplitId(split.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedSplitId === split.id
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {split.title}
              </button>
            ))}
          </div>

          {/* Location Toggle */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setLocation("gym")}
              className={`flex-1 md:flex-none px-4 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                location === "gym" ? "bg-slate-800 text-white border border-white/15" : "text-slate-400"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial Gym</span>
            </button>
            <button
              onClick={() => setLocation("home")}
              className={`flex-1 md:flex-none px-4 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                location === "home" ? "bg-slate-800 text-white border border-white/15" : "text-slate-400"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home / Dumbbell</span>
            </button>
          </div>
        </div>

        {/* Display Routine Card */}
        <div className="mt-6 bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                In-App Generated Routine Split
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">{activeSplit.title}</h3>
              <p className="text-xs text-slate-400">Target Muscle Groups: {activeSplit.target}</p>
            </div>
            <div className="bg-slate-950 border border-white/10 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300">
              Environment: {location === "gym" ? "Commercial Gym" : "Home Dumbbell / Bodyweight"}
            </div>
          </div>

          {/* Exercise sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentExercises.map((ex, idx) => (
              <div
                key={idx}
                className="bg-slate-950 p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{ex.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{ex.detail}</p>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
