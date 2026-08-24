import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How does CalRay AI track calories from food photos, barcodes, or text?",
    answer:
      "CalRay combines state-of-the-art Computer Vision neural networks with a verified database of 3.5 Million+ food products. When you take a photo or enter a text prompt like '2 eggs and avocado toast', our engine segments ingredients, estimates 3D volume, and calculates accurate calories, protein, carbs, and fats in under 3.2 seconds.",
  },
  {
    question: "How does the AI generate personalized workout routines?",
    answer:
      "CalRay asks for your age, weight, height, primary goal (fat loss, muscle gain, recomp), equipment access (home dumbbells vs commercial gym), and target body focus areas (e.g. Chest & Triceps, Glutes & Legs, Back & Biceps). The AI then computes optimal weekly splits, set/rep protocols, and rest times using evidence-based exercise science.",
  },
  {
    question: "Is the AI Fitness Coach really available 24/7?",
    answer:
      "Yes! CalRay Coach is an interactive AI trained on thousands of kinesiology, biomechanics, and clinical nutrition papers. You can ask form check advice, injury recovery tips, late night food alternatives, or plateau breaking tactics anytime.",
  },
  {
    question: "Can I log workouts and food when I'm offline without internet?",
    answer:
      "Absolutely. CalRay caches your recent meal templates and favorite exercise splits locally on your device. Any offline logs automatically sync with cloud AI servers as soon as connection restores.",
  },
  {
    question: "Is CalRay free to download on iOS and Android?",
    answer:
      "Yes! The basic version of CalRay is free for all users. We also offer VIP Early Tester access with zero ads and unlimited computer-vision food scans.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#070913] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="gradient-text-emerald">We Have Answers</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Everything you need to know about CalRay AI calorie tracking, workout scheduling, and mobile access.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-white text-base sm:text-lg">{item.question}</span>
                <div
                  className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 bg-emerald-500/20 text-emerald-400 border-emerald-500/40" : "text-slate-400"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
