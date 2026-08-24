import React, { useState } from "react";
import { Camera, Barcode, MessageSquareText, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

const TRACKING_MODES = [
  {
    id: "photo",
    title: "1. Food Photo Recognition",
    icon: Camera,
    badge: "Computer Vision",
    subtitle: "Snap any plate to log calories in 3.2 seconds",
    desc: "Point your camera at real meals. CalRay's computer vision segments ingredients, estimates portions, and logs calories automatically.",
    image: "/images/calray-real-salmon.jpg",
    sampleOutput: {
      name: "Grilled Salmon Bowl with Quinoa",
      portion: "420g serving",
      calories: 610,
      protein: "42g",
      carbs: "48g",
      fats: "26g",
      ingredients: ["Atlantic Salmon (180g)", "Quinoa (150g)", "Avocado (60g)", "Mixed Greens"],
    },
  },
  {
    id: "barcode",
    title: "2. Barcode Label Scanner",
    icon: Barcode,
    badge: "Verified Database",
    subtitle: "Scan packaged products instantly",
    desc: "Point camera at any packaged food or beverage. CalRay parses the UPC code and retrieves verified nutrition facts from over 3.5 Million global food items.",
    image: "/images/calray-real-scan.jpg",
    sampleOutput: {
      name: "Chobani Non-Fat Greek Yogurt",
      portion: "170g container",
      calories: 110,
      protein: "16g",
      carbs: "12g",
      fats: "0g",
      ingredients: ["UPC: 818290012948", "FDA Verified Entry", "Calcium: 18% DV"],
    },
  },
  {
    id: "text",
    title: "3. Natural Text Prompt Logger",
    icon: MessageSquareText,
    badge: "Natural Language",
    subtitle: "Type what you ate in plain English",
    desc: "Type meal descriptions like '3 poached eggs, 2 sourdough slices, 1/2 avocado'. CalRay's NLP engine computes precise grams and macros.",
    image: "/images/calray-real-color-bowl.jpg",
    sampleOutput: {
      name: "Parsed Text Meal Entry",
      portion: "Natural Prompt Input",
      calories: 520,
      protein: "38g",
      carbs: "32g",
      fats: "21g",
      ingredients: ["3 Whole Eggs", "2 Slices Sourdough", "40g Avocado", "1 Scoop Whey"],
    },
  },
];

export default function ProductFeaturesShowcase() {
  const [activeModeId, setActiveModeId] = useState("photo");
  const activeMode = TRACKING_MODES.find((m) => m.id === activeModeId);

  return (
    <section id="calorie-engine" className="py-24 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multimodal Calorie Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Three Frictionless Ways to <span className="text-emerald-600">Track Daily Food</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            No more tedious database searching. CalRay lets you log food via photo, barcode, or text prompt in seconds.
          </p>
        </div>

        {/* Feature Tab Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {TRACKING_MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveModeId(mode.id)}
              className={`p-6 rounded-2xl border text-left transition-all ${
                activeModeId === mode.id
                  ? "bg-slate-50 border-emerald-600 shadow-sm"
                  : "bg-white border-slate-200 hover:bg-slate-50/50 text-slate-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <mode.icon
                  className={`w-6 h-6 ${activeModeId === mode.id ? "text-emerald-600" : "text-slate-500"}`}
                />
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full text-slate-700">
                  {mode.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4">{mode.title}</h3>
              <p className="text-xs text-slate-600 mt-1">{mode.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Product Visual Showcase Box */}
        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          {/* Left Column: Feature Image Showcase */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src={activeMode.image}
              alt={activeMode.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                In-App Preview
              </span>
              <h4 className="text-xl font-bold">{activeMode.title}</h4>
              <p className="text-xs text-slate-300 mt-1">{activeMode.desc}</p>
            </div>
          </div>

          {/* Right Column: Sample Parsed Log Output */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-700 block">
                    Parsed Entry Result
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{activeMode.sampleOutput.name}</h4>
                  <span className="text-xs text-slate-500">{activeMode.sampleOutput.portion}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-emerald-700 block">
                    {activeMode.sampleOutput.calories}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Total Kcal</span>
                </div>
              </div>

              {/* Macro Badges */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[10px] block font-semibold">Protein</span>
                  <span className="font-extrabold text-emerald-700">{activeMode.sampleOutput.protein}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[10px] block font-semibold">Carbs</span>
                  <span className="font-extrabold text-cyan-700">{activeMode.sampleOutput.carbs}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[10px] block font-semibold">Fats</span>
                  <span className="font-extrabold text-amber-700">{activeMode.sampleOutput.fats}</span>
                </div>
              </div>

              {/* Ingredient breakdown */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">
                  Detected Components:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeMode.sampleOutput.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
