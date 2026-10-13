import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { MainServicesGrid } from "@/components/sections/MainServicesGrid";
import { FeaturedServiceAlternating } from "@/components/sections/FeaturedServiceAlternating";
import { CityCoverageSection } from "@/components/sections/CityCoverageSection";
import { CraftsmanshipBreak } from "@/components/sections/CraftsmanshipBreak";
import { CustomCarpentrySolutions } from "@/components/sections/CustomCarpentrySolutions";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CommonProblemsSection } from "@/components/sections/CommonProblemsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { LargeCtaBanner } from "@/components/sections/LargeCtaBanner";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Genuine Trust Strip */}
      <TrustStrip />

      {/* 3. Main Services Section */}
      <MainServicesGrid />

      {/* 4. Featured Alternating Services (Bedrooms, Wardrobes, Repair) */}
      <FeaturedServiceAlternating />

      {/* 5. City Coverage (Makkah, Jeddah, Taif) */}
      <CityCoverageSection />

      {/* 6. Visual Architectural Craftsmanship Break */}
      <CraftsmanshipBreak />

      {/* 7. Custom Solutions for Modern Saudi Homes */}
      <CustomCarpentrySolutions />

      {/* 8. Step-by-Step Request Process */}
      <ProcessSection />

      {/* 9. Common Carpentry Problems Solved */}
      <CommonProblemsSection />

      {/* 10. Why Choose Professional Carpenter */}
      <WhyChooseSection />

      {/* 11. Gallery Showcase Preview */}
      <GalleryPreview />

      {/* 12. Blog & Guidance Articles Preview */}
      <BlogPreview />

      {/* 13. FAQ with FAQPage Schema */}
      <FaqSection />

      {/* 14. Conversion Banner */}
      <LargeCtaBanner />
    </div>
  );
}
