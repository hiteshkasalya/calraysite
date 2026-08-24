import React, { useState } from "react";
import SeoHead from "./components/SeoHead";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductFeaturesShowcase from "./components/ProductFeaturesShowcase";
import WorkoutFeatureShowcase from "./components/WorkoutFeatureShowcase";
import AICoachShowcase from "./components/AICoachShowcase";
import ComparisonSection from "./components/ComparisonSection";
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

  return (
    <>
      <SeoHead />
      <div className="min-h-screen bg-[#0b0e14] text-slate-100 font-sans antialiased">
        {/* Navigation Header */}
        <Navbar onOpenDownload={handleOpenDownload} />

        <main>
          {/* 1. Product Hero */}
          <HeroSection onOpenDownload={handleOpenDownload} />

          {/* 2. Multimodal Calorie Engine Feature Showcase (Photo, Barcode, Text) */}
          <ProductFeaturesShowcase />

          {/* 3. Personalized Workout Generator Feature Showcase */}
          <WorkoutFeatureShowcase />

          {/* 4. Natural AI Coach Guidance Feature Showcase */}
          <AICoachShowcase />

          {/* 5. Feature Comparison Table */}
          <ComparisonSection onOpenDownload={handleOpenDownload} />

          {/* 6. User Reviews */}
          <TestimonialsSection />

          {/* 7. FAQ Accordion */}
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer onOpenDownload={handleOpenDownload} />

        {/* Download Modal Popup */}
        <DownloadModal isOpen={isDownloadOpen} onClose={handleCloseDownload} />
      </div>
    </>
  );
}

export default App;
