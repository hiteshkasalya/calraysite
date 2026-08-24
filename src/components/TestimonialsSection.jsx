import React from "react";
import { Star, CheckCircle2, Award } from "lucide-react";

const REVIEWS = [
  {
    name: "Alex Rivera",
    role: "Software Engineer",
    metric: "-9.2 kg Fat Loss",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    quote:
      "I used to spend 15 minutes typing every ingredient into old calorie apps. With CalRay, I just snap a photo of my meal or type '2 eggs and sourdough'. It logs macros in 3 seconds.",
  },
  {
    name: "Marcus Vance",
    role: "Athlete & Lifter",
    metric: "+4.5 kg Lean Muscle",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    quote:
      "The AI Workout split created an incredible Chest & Triceps routine for my commercial gym setup. It automatically adjusts volume as I progress.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    metric: "Body Recomp",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    quote:
      "Having natural in-app coaching nudges keeps me consistent. The app gives exact warm-up protocols before squats and alerts me when protein is low.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0e121a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>User Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved by <span className="text-emerald-400">50,000+ Active Users</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            See how CalRay simplifies daily nutrition tracking and workout routines.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border border-emerald-400" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                      {r.name} <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <span className="text-[11px] text-slate-400">{r.role}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                  {r.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
