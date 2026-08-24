import React, { useState } from "react";
import SeoHead from "./components/SeoHead";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CalorieTrackerDemo from "./components/CalorieTrackerDemo";
import WorkoutPlannerDemo from "./components/WorkoutPlannerDemo";
import AICoachDemo from "./components/AICoachDemo";
import AppPreviewShowcase from "./components/AppPreviewShowcase";
import ComparisonSection from "./components/ComparisonSection";
import ROICalculator from "./components/ROICalculator";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import DownloadModal from "./components/DownloadModal";
import Footer from "./components/Footer";

function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleOpenDownload = () => {
    setIsDownloadOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadOpen(false);
  };

  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SeoHead />
      <div className="min-h-screen bg-[#070913] text-slate-100 selection:bg-emerald-500/40 selection:text-white font-sans antialiased">
        {/* Sticky Header Navbar */}
        <Navbar onOpenDownload={handleOpenDownload} />

        <main>
          {/* 1. Hero Section */}
          <HeroSection
            onOpenDownload={handleOpenDownload}
            onNavigateSection={handleNavigateSection}
          />

          {/* 2. Interactive Multimodal AI Calorie Tracker (Text, Barcode, Photo) */}
          <CalorieTrackerDemo />

          {/* 3. Interactive AI Workout & Routine Planner (Age, Weight, Height, Gym vs Home, Body Focus) */}
          <WorkoutPlannerDemo />

          {/* 4. Live 24/7 AI Fitness Coach Chat Playground */}
          <AICoachDemo />

          {/* 5. Interactive Mobile App Tour & Screen Switcher */}
          <AppPreviewShowcase onOpenDownload={handleOpenDownload} />

          {/* 6. Comparison Table (CalRay AI vs Old Apps) */}
          <ComparisonSection onOpenDownload={handleOpenDownload} />

          {/* 7. Time & Money Savings ROI Calculator */}
          <ROICalculator onOpenDownload={handleOpenDownload} />

          {/* 8. Verified User Transformations & Testimonials */}
          <TestimonialsSection />

          {/* 9. FAQ Accordion */}
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer onOpenDownload={handleOpenDownload} />

        {/* Global Download Modal Popup */}
        <DownloadModal isOpen={isDownloadOpen} onClose={handleCloseDownload} />
      </div>
    </>
  );
}

export default App;
