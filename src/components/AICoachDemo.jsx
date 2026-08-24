import React, { useState } from "react";
import {
  Bot,
  Sparkles,
  Send,
  User,
  CheckCircle2,
  Brain,
  MessageSquare,
  Zap,
  Flame,
  Award,
  RefreshCw,
} from "lucide-react";

const PRESET_COACH_QUESTIONS = [
  {
    label: "Plateau Fix",
    question: "I am stuck at an 80kg bench press for 3 weeks. How do I break this plateau?",
    response: `## Target Muscle Groups
Primary: Pectoralis Major, Anterior Deltoids
Secondary: Triceps Brachii (Long & Lateral heads), Serratus Anterior

## Science & Diagnosis
Bench press plateaus usually happen due to either:
1. Triceps weakness at lockout
2. Sub-optimal leg drive & arch stability
3. CNS fatigue from lack of deload

## 4-Step Action Plan to Break Plateau
1. **Incorporate Micro-Loading**: Add 1.25kg plates instead of 2.5kg jumps.
2. **Add Close-Grip Bench Press**: Perform 3 sets of 6-8 reps post main bench to overload triceps lockout strength.
3. **Use 3-Second Pause Reps**: Lower the bar, pause 3s on chest, then explode up.
4. **Deload Week**: Reduce current working volume by 40% for 5 days.

## Pro Tip
Keep your scapula retracted and depressed throughout the entire set. Imagine bending the bar outward with your hands!`,
  },
  {
    label: "Late-Night Meal",
    question: "What is the best late-night snack if I finish my workout at 10 PM?",
    response: `## Direct Recommendation
Slow-digesting **Micellar Casein Protein + Healthy Fats**.

## Why It Matters
While sleeping, your body enters a 7-8 hour fasting window. Casein forms a slow gel in your stomach, releasing amino acids slowly for up to 7 hours to prevent muscle breakdown.

## Top 3 Meal Options
1. **Greek Yogurt Bowl**: 200g 0% Greek Yogurt + 15g Almonds + 1/2 Scoop Whey (32g Protein, 220 Kcal)
2. **Cottage Cheese & Berries**: 150g Low-fat Cottage Cheese + Blueberries (24g Protein, 170 Kcal)
3. **Casein Shake**: 1 Scoop Casein Protein with 250ml Unsweetened Almond Milk (26g Protein, 130 Kcal)

## Common Mistake
Avoid high-carbohydrate or heavy fatty meals right before bed as they disrupt deep sleep architecture and GH release.`,
  },
  {
    label: "Squat Back Safety",
    question: "How do I prevent lower back strain when doing heavy squats?",
    response: `## Target Muscles for Lumbar Protection
Primary: Erector Spinae, Transverse Abdominis (Core)
Secondary: Gluteus Maximus, Quadriceps

## 3 Pillars of Lumbar Safety
1. **Master the Valsalva Maneuver**: Inhale deeply into your belly (360-degree expansion), brace hard as if getting punched, and hold through the sticking point.
2. **Fix Butt Wink**: Ensure your hip flexors and ankles have adequate mobility so your pelvis doesn't tuck under at the bottom.
3. **Drive Hips Under Bar**: Push the floor away through your mid-foot, keeping chest upright.

## Warm-Up Mobility Drill
Do 2 sets of 10 Cat-Cow stretches + 2 sets of 15-second Plank braces before approaching the barbell.`,
  },
];

export default function AICoachDemo() {
  const [messages, setMessages] = useState([
    {
      sender: "coach",
      text: "Hello! I'm CalRay AI, your 24/7 personal fitness scientist and coach. Ask me anything about workouts, diet, form checks, or muscle recovery!",
      time: "Just now",
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add user message
    const userMsg = { sender: "user", text: query, time: "Just now" };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const presetMatch = PRESET_COACH_QUESTIONS.find((p) => p.question.toLowerCase() === query.toLowerCase());

      const responseText = presetMatch
        ? presetMatch.response
        : `## Target Muscles & Analysis
Primary: Targeted Muscle System
Secondary: Stabilizer Network

## CalRay AI Recommendation for: "${query}"
1. **Structured Form**: Focus on controlled eccentric motion (2-3 seconds down).
2. **Nutrition Alignment**: Maintain a 1.6g-2.2g per kg protein intake threshold.
3. **Recovery Focus**: Prioritize 7-8 hours of continuous sleep to optimize growth hormone release.

*CalRay Coach Tip:* Keep reps smooth and track your progressive overload weekly!`;

      setMessages((prev) => [
        ...prev,
        { sender: "coach", text: responseText, time: "Just now" },
      ]);
    }, 900);
  };

  return (
    <section id="ai-coach" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Radial lighting background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 px-3.5 py-1.5 rounded-full text-violet-400 text-xs font-semibold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" />
            <span>24/7 Human-like AI Fitness Coach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your Personal Trainer & Nutritionist <span className="gradient-text-violet">In Your Pocket</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Never guess what to do next. CalRay Coach provides structured, empathetic, exercise-science backed advice tailored to your exact goal, weight, and fitness level.
          </p>
        </div>

        {/* Live Chat Interface Container */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-900/90 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] flex flex-col h-[620px]">
          {/* Top Chat Header */}
          <div className="bg-slate-950 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-indigo-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full" />
              </div>
              <div>
                <span className="font-bold text-white text-base block flex items-center gap-1.5">
                  CalRay AI Coach <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Brain className="w-3 h-3 text-violet-400" /> GPT-5.4 Kinesiology Engine • Online 24/7
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full">
                Active Session
              </span>
            </div>
          </div>

          {/* Quick Preset Prompts Bar */}
          <div className="bg-slate-950/60 px-6 py-3 border-b border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
              Ask Preset:
            </span>
            {PRESET_COACH_QUESTIONS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(item.question)}
                className="shrink-0 text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5"
              >
                <Zap className="w-3 h-3 text-violet-400" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-slate-900/50 to-slate-950/80">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "coach" && (
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/40 text-violet-300 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-semibold rounded-tr-none shadow-lg"
                      : "bg-slate-950 border border-white/10 text-slate-200 rounded-tl-none whitespace-pre-line shadow-xl"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start items-center text-xs text-slate-400 animate-pulse">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/40 text-violet-300 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="bg-slate-950 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-violet-400" />
                  CalRay AI Coach is analyzing kinesiology data...
                </span>
              </div>
            )}
          </div>

          {/* Bottom Chat Input Bar */}
          <div className="p-4 bg-slate-950 border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask CalRay Coach about workouts, diet, form, or muscle groups..."
                className="flex-1 bg-slate-900 border border-white/15 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all font-medium"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-400 hover:to-indigo-400 text-white font-bold px-5 py-3 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.4)] disabled:opacity-50 transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
