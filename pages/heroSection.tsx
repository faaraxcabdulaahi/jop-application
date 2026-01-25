import Features from "@/components/web/home/features";
import HeroSection from "@/components/web/home/heroSection";
import ImageTabs from "@/components/web/home/imageTabs";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        {/* Hero images section with tabs */}
        <ImageTabs />
        {/* Features Section */}
        <Features />
      </main>
    </div>
  );
};

export default HomePage;
