import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How does CalRay track calories from food photos, barcodes, or text prompts?",
    answer:
      "CalRay combines state-of-the-art Computer Vision neural networks with a verified database of 3.5 Million+ food products. When you take a photo or enter a text prompt like '2 eggs and avocado toast', our engine segments ingredients, estimates 3D volume, and calculates accurate calories, protein, carbs, and fats in under 3.2 seconds.",
  },
  {
    question: "How does the app generate personalized workout routines?",
    answer:
      "CalRay asks for your age, weight, height, primary goal (fat loss, muscle gain, recomp), equipment access (home dumbbells vs commercial gym), and target body focus areas (e.g. Chest & Triceps, Glutes & Legs, Back & Biceps). The app then computes optimal weekly splits, set/rep protocols, and rest times using evidence-based exercise science.",
  },
  {
    question: "How does the natural in-app AI coach guidance work?",
    answer:
      "CalRay Coach provides daily smart nudges, post-workout recovery alerts, and exercise form guidance inside the app interface based on your daily logged metrics and workout frequency.",
  },
  {
    question: "Can I log workouts and food when I'm offline without internet?",
    answer:
      "Absolutely. CalRay caches your recent meal templates and favorite exercise splits locally on your device. Any offline logs automatically sync with cloud servers as soon as connection restores.",
  },
  {
    question: "Is CalRay free to download on iOS and Android?",
    answer:
      "Yes! The basic version of CalRay is free for all users. We also offer VIP access with zero ads and unlimited food scans.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-xs px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? <span className="text-emerald-600">We Have Answers</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to know about CalRay calorie tracking, workout scheduling, and mobile access.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-base sm:text-lg">{item.question}</span>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 bg-emerald-50 text-emerald-700 border-emerald-200" : "text-slate-500"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
