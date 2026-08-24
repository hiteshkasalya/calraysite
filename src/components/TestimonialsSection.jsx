import React from "react";
import { Star, Quote, CheckCircle2, Flame, Award, Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Software Engineer",
    badge: "-9.2 kg Fat Loss",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    quote:
      "I used to spend 15 minutes typing every ingredient into old calorie apps. With CalRay, I just take a photo of my meal or type '2 eggs & toast'. It accurately logs macros in 3 seconds. Game changer!",
    rating: 5,
    tag: "Photo AI Tracking",
  },
  {
    name: "Marcus Vance",
    role: "CrossFit Athlete & Lifter",
    badge: "+4.5 kg Lean Muscle",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    quote:
      "The AI Workout routine generator created an incredible Chest & Triceps split tailored to my equipment. And CalRay Coach gives instant, scientifically precise advice whenever I hit a bench plateau.",
    rating: 5,
    tag: "AI Workout Generator",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    badge: "Recomposed Body Fat",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    quote:
      "Having an AI Fitness Coach available 24/7 is like having a $200/hr personal trainer in my pocket. It breaks down exercise target muscles and gives exact warm-up protocols before squats.",
    rating: 5,
    tag: "24/7 AI Coach",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified User Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved by <span className="gradient-text-emerald">50,000+ Fitness Enthusiasts</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Read real stories from real users who transformed their body composition and daily routines using CalRay AI.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-2xl space-y-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                {/* Rating Stars & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-emerald-400"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                      {t.name} <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                    </h4>
                    <span className="text-[11px] text-slate-400 block">{t.role}</span>
                  </div>
                </div>

                <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-extrabold px-2.5 py-1 rounded-lg shrink-0">
                  {t.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
