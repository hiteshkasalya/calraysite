import React, { useState } from "react";
import {
  Camera,
  Barcode,
  MessageSquareText,
  Sparkles,
  Zap,
  CheckCircle2,
  PieChart,
  Flame,
  Search,
  Scan,
  RefreshCw,
  Sliders,
  ChevronRight,
  Info,
} from "lucide-react";

const PRESET_TEXT_MEALS = [
  {
    title: "High-Protein Breakfast",
    text: "3 whole eggs, 2 slices sourdough toast, 1/2 avocado, and 1 scoop whey protein in 250ml almond milk",
    result: {
      name: "Power Protein Breakfast",
      calories: 640,
      protein: 48,
      carbs: 45,
      fats: 28,
      fiber: 9,
      micros: "Vitamin D, B12, Potassium, Healthy Omega-3",
      aiNote: "Excellent 48g protein hit for muscle protein synthesis & satiety.",
    },
  },
  {
    title: "Clean Post-Workout Lunch",
    text: "200g grilled chicken breast, 1.5 cups jasmine rice, 100g steamed broccoli with 1 tbsp olive oil",
    result: {
      name: "Lean Chicken & Rice Bowl",
      calories: 590,
      protein: 52,
      carbs: 65,
      fats: 14,
      fiber: 6,
      micros: "Vitamin C, Iron, Niacin, Phosphorus",
      aiNote: "Perfect 1.2:1 carb-to-protein ratio for rapid post-workout glycogen replenishment.",
    },
  },
  {
    title: "Quick Coffee & Snack",
    text: "1 oat milk iced latte, 30g raw almonds, and 1 green apple",
    result: {
      name: "Mid-Day Fuel & Coffee",
      calories: 340,
      protein: 9,
      carbs: 38,
      fats: 18,
      fiber: 8,
      micros: "Magnesium, Vitamin E, Antioxidants",
      aiNote: "Low glycemic snack sustaining mental focus without blood sugar spikes.",
    },
  },
];

const BARCODE_ITEMS = [
  {
    id: "b1",
    name: "Chobani Non-Fat Greek Yogurt (Vanilla)",
    code: "818290012948",
    serving: "170g container",
    calories: 110,
    protein: 16,
    carbs: 12,
    fats: 0,
    calcium: "18% DV",
    status: "Verified FDA Database Match",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "b2",
    name: "Quest Nutrition Chocolate Chip Protein Bar",
    code: "888849000182",
    serving: "1 bar (60g)",
    calories: 200,
    protein: 21,
    carbs: 22,
    fats: 7,
    fiber: "12g Fiber",
    status: "Verified Manufacturer Database",
    image: "https://images.unsplash.com/photo-1622484210800-885107928926?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "b3",
    name: "Fairlife Ultra-Filtered Whole Milk",
    code: "894700001029",
    serving: "240ml (1 cup)",
    calories: 150,
    protein: 13,
    carbs: 6,
    fats: 8,
    calcium: "40% DV",
    status: "Verified USDA Database",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80",
  },
];

const PHOTO_MEALS = [
  {
    id: "p1",
    name: "Grilled Salmon Bowl with Avocado & Quinoa",
    img: "/images/calray-real-salmon.jpg",
    portion: "1 Medium Bowl (420g)",
    calories: 610,
    protein: 42,
    carbs: 48,
    fats: 26,
    accuracy: "99.2%",
    detected: ["Atlantic Salmon Fillet (180g)", "Quinoa (150g)", "Sliced Avocado (60g)", "Edamame & Greens"],
  },
  {
    id: "p2",
    name: "Colorful Mediterranean Salad & Grilled Chicken",
    img: "/images/calray-real-color-bowl.jpg",
    portion: "1 Large Salad Bowl (380g)",
    calories: 480,
    protein: 38,
    carbs: 28,
    fats: 22,
    accuracy: "98.9%",
    detected: ["Chicken Breast (150g)", "Feta Cheese (30g)", "Cherry Tomatoes", "Extra Virgin Olive Oil"],
  },
  {
    id: "p3",
    name: "Artisanal Pepperoni & Mozzarella Pizza",
    img: "/images/calray-real-scan.jpg",
    portion: "2 Large Slices (240g)",
    calories: 680,
    protein: 26,
    carbs: 72,
    fats: 32,
    accuracy: "97.8%",
    detected: ["Sourdough Crust", "Mozzarella Cheese (90g)", "Pepperoni (40g)", "San Marzano Tomato Sauce"],
  },
];

export default function CalorieTrackerDemo() {
  const [activeMode, setActiveMode] = useState("text"); // 'text', 'barcode', 'photo'

  // Text Mode State
  const [customPrompt, setCustomPrompt] = useState(PRESET_TEXT_MEALS[0].text);
  const [selectedPresetText, setSelectedPresetText] = useState(0);
  const [isAnalyzingText, setIsAnalyzingText] = useState(false);
  const [activeTextResult, setActiveTextResult] = useState(PRESET_TEXT_MEALS[0].result);

  // Barcode Mode State
  const [activeBarcode, setActiveBarcode] = useState(BARCODE_ITEMS[0]);
  const [isScanningBarcode, setIsScanningBarcode] = useState(false);

  // Photo Mode State
  const [activePhoto, setActivePhoto] = useState(PHOTO_MEALS[0]);
  const [isScanningPhoto, setIsScanningPhoto] = useState(false);

  const handleAnalyzeText = () => {
    setIsAnalyzingText(true);
    setTimeout(() => {
      setIsAnalyzingText(false);
      // match or compute dynamically
      setActiveTextResult({
        name: "Custom CalRay AI Parsed Meal",
        calories: 520,
        protein: 41,
        carbs: 48,
        fats: 18,
        fiber: 7,
        micros: "Complete Amino Spectrum, Iron, Zinc",
        aiNote: "Analyzed in 1.4 seconds with 99.1% Confidence Score.",
      });
    }, 800);
  };

  const handleSelectBarcode = (item) => {
    setIsScanningBarcode(true);
    setActiveBarcode(item);
    setTimeout(() => {
      setIsScanningBarcode(false);
    }, 600);
  };

  const handleSelectPhoto = (meal) => {
    setIsScanningPhoto(true);
    setActivePhoto(meal);
    setTimeout(() => {
      setIsScanningPhoto(false);
    }, 700);
  };

  return (
    <section id="calorie-tracker" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multimodal Calorie Tracking Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Track Food Any Way You Want:{" "}
            <span className="gradient-text-emerald">Text, Barcode, or Photo</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            No more tedious manual ingredient searches. Experience true multimodal AI that understands plain English, instant barcodes, and food photos in milliseconds.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex p-1.5 bg-slate-900/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl">
            {[
              { id: "text", label: "AI Text Prompt", icon: MessageSquareText, badge: "Popular" },
              { id: "photo", label: "Camera Photo Scan", icon: Camera, badge: "Instant" },
              { id: "barcode", label: "Barcode Reader", icon: Barcode, badge: "Verified" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMode(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeMode === tab.id
                    ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    activeMode === tab.id
                      ? "bg-slate-950/20 text-slate-950 font-extrabold"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Demo Showcase Area */}
        <div className="mt-12 bg-slate-900/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* MODE 1: TEXT PROMPT CALORIE SCANNER */}
          {activeMode === "text" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              {/* Left Input & Presets */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MessageSquareText className="w-5 h-5 text-emerald-400" />
                    Natural Text Prompt Calorie Parser
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Describe what you ate in natural language. CalRay breaks down precise grams, calories, and macros automatically.
                  </p>
                </div>

                {/* Preset Meal Buttons */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Try Preset Meals:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PRESET_TEXT_MEALS.map((preset, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedPresetText(idx);
                          setCustomPrompt(preset.text);
                          setActiveTextResult(preset.result);
                        }}
                        className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all ${
                          selectedPresetText === idx
                            ? "bg-emerald-500/20 border border-emerald-500 text-emerald-300"
                            : "bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300"
                        }`}
                      >
                        {preset.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Input Box */}
                <div className="relative">
                  <textarea
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    rows={4}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-2xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
                    placeholder="Type anything e.g. 2 fried eggs, 1 slice toast with butter, 1 glass orange juice..."
                  />
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <button
                      onClick={handleAnalyzeText}
                      disabled={isAnalyzingText}
                      className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all"
                    >
                      {isAnalyzingText ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>AI Parsing...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Analyze with AI</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Output Macro Breakdown Card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-950 p-6 rounded-2xl border border-emerald-500/30 space-y-6 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                        Parsed AI Nutrition Result
                      </span>
                      <h4 className="text-lg font-bold text-white">{activeTextResult.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-emerald-400 block">
                        {activeTextResult.calories}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Total Kcal</span>
                    </div>
                  </div>

                  {/* Macro Progress Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-300">Protein</span>
                        <span className="text-emerald-400">{activeTextResult.protein}g</span>
                      </div>
                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 transition-all duration-500"
                          style={{ width: `${Math.min(100, (activeTextResult.protein / 60) * 100)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-300">Carbohydrates</span>
                        <span className="text-cyan-400">{activeTextResult.carbs}g</span>
                      </div>
                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-400 transition-all duration-500"
                          style={{ width: `${Math.min(100, (activeTextResult.carbs / 80) * 100)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-300">Fats</span>
                        <span className="text-amber-400">{activeTextResult.fats}g</span>
                      </div>
                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 transition-all duration-500"
                          style={{ width: `${Math.min(100, (activeTextResult.fats / 40) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Micronutrients & AI Insight */}
                  <div className="pt-2 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>
                        <strong className="text-white">Micros:</strong> {activeTextResult.micros}
                      </span>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-xs text-emerald-300">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 inline mr-1.5" />
                      {activeTextResult.aiNote}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODE 2: PHOTO / CAMERA AI SCANNER */}
          {activeMode === "photo" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              {/* Left Selector */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Camera className="w-5 h-5 text-emerald-400" />
                    Computer Vision Food Recognition
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Point your phone camera at any plate. CalRay automatically segments portions, identifies ingredients, and computes calories in under 3.2s.
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Select Demo Food Plate:
                  </span>
                  {PHOTO_MEALS.map((meal) => (
                    <button
                      key={meal.id}
                      onClick={() => handleSelectPhoto(meal)}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        activePhoto.id === meal.id
                          ? "bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <img
                        src={meal.img}
                        alt={meal.name}
                        className="w-14 h-14 rounded-xl object-cover border border-white/10 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-white truncate">{meal.name}</p>
                        <p className="text-[11px] text-slate-400">{meal.portion}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-extrabold text-emerald-400">{meal.calories} kcal</span>
                          <span className="text-[10px] text-slate-500">|</span>
                          <span className="text-[10px] text-cyan-400 font-semibold">{meal.protein}g protein</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Live Camera Scanner Simulation View */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-slate-950">
                  {/* Photo Display */}
                  <div className="relative h-[360px] sm:h-[400px] w-full">
                    <img
                      src={activePhoto.img}
                      alt={activePhoto.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Animated Radar Scanning Line Overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] animate-radar-sweep" />
                    </div>

                    {/* Computer Vision Bounding Box Overlay Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-slate-950/80 border border-white/10 p-3 rounded-2xl backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <Scan className="w-4 h-4 text-emerald-400 animate-pulse" />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-emerald-400 block">
                            AI Computer Vision Scanner
                          </span>
                          <span className="text-xs font-bold text-white">{activePhoto.name}</span>
                        </div>
                      </div>
                      <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold px-3 py-1 rounded-full">
                        {activePhoto.accuracy} Accuracy
                      </div>
                    </div>

                    {/* Detected Items Floating Pills */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-white/15 p-4 rounded-2xl backdrop-blur-xl space-y-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Detected Ingredient Segments:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activePhoto.detected.map((item, i) => (
                          <span
                            key={i}
                            className="bg-white/10 border border-white/15 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-300">Portion Estimate: {activePhoto.portion}</span>
                        <span className="text-emerald-400 text-sm">{activePhoto.calories} kcal logged</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODE 3: BARCODE READER */}
          {activeMode === "barcode" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              {/* Left Product List */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Barcode className="w-5 h-5 text-emerald-400" />
                    Ultra-Fast Barcode Scanner
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Scan any packaged grocery product or snack label. Instantly maps to 3.5 Million+ verified food products worldwide.
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Click Product to Scan:
                  </span>
                  {BARCODE_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectBarcode(item)}
                      className={`w-full p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        activeBarcode.id === item.id
                          ? "bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-white truncate">{item.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono">UPC: {item.code}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-extrabold text-emerald-400">{item.calories} kcal</span>
                          <span className="text-[10px] text-cyan-400">{item.protein}g protein</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Barcode Reader Result View */}
              <div className="lg:col-span-7">
                <div className="bg-slate-950 p-6 rounded-3xl border border-emerald-500/30 space-y-6 shadow-2xl">
                  {/* Scanner Header */}
                  <div className="flex items-center justify-between bg-slate-900 p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <Barcode className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-emerald-400 block">
                          {activeBarcode.status}
                        </span>
                        <span className="text-xs font-mono text-slate-300">UPC: {activeBarcode.code}</span>
                      </div>
                    </div>
                    <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
                      Match 100%
                    </span>
                  </div>

                  {/* Scanned Item Nutrition Label Extraction */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Product Name</span>
                      <p className="text-sm font-bold text-white">{activeBarcode.name}</p>
                      <p className="text-xs text-slate-400 mt-1">Serving Size: {activeBarcode.serving}</p>
                    </div>

                    <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/30 space-y-1">
                      <span className="text-[10px] text-emerald-400 uppercase font-bold block">Calculated Energy</span>
                      <p className="text-2xl font-extrabold text-emerald-400">{activeBarcode.calories} Kcal</p>
                      <p className="text-xs text-emerald-300">Per Serving</p>
                    </div>
                  </div>

                  {/* Macro Badges Grid */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Protein</span>
                      <span className="text-sm font-extrabold text-emerald-400">{activeBarcode.protein}g</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Carbs</span>
                      <span className="text-sm font-extrabold text-cyan-400">{activeBarcode.carbs}g</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Fats</span>
                      <span className="text-sm font-extrabold text-amber-400">{activeBarcode.fats}g</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Key Micro</span>
                      <span className="text-xs font-extrabold text-violet-400">
                        {activeBarcode.calcium || activeBarcode.fiber}
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    ✓ Log Barcode Item To Today's Diary
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
