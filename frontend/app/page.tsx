'use client';

import React from 'react';
import Hero from '@/components/landing/Hero';
import FeaturesSection from '@/components/landing/FeaturesSection';
import DestinationAtlas from '@/components/landing/DestinationAtlas';
import VisionShowcase from '@/components/landing/VisionShowcase';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import TopographicBackdrop from '@/components/common/TopographicBackdrop';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <TopographicBackdrop />

      {/* 1. Cinematic Hero Area */}
      <Hero />

      {/* 2. Scroll Story Connected Journey */}
      <FeaturesSection />

      {/* 3. Interactive Destination Atlas Spread */}
      <DestinationAtlas />

      {/* 4. Optical Vision Landmark Showcase */}
      <VisionShowcase />

      {/* 5. Field Notes & Postcards Testimonials */}
      <TestimonialsSection />

      {/* 6. Dark Alpine Forest Closing CTA */}
      <CTASection />
    </div>
  );
}
