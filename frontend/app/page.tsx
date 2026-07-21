'use client';

import React from 'react';
import Hero from '@/components/landing/Hero';
import FeaturesSection from '@/components/landing/FeaturesSection';
import TimelineSection from '@/components/landing/TimelineSection';
import StatsSection from '@/components/landing/StatsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Cinematic Hero Area */}
      <Hero />

      {/* 2. Features Grid */}
      <FeaturesSection />

      {/* 3. How It Works Timeline */}
      <TimelineSection />

      {/* 4. Stats Counter Cards */}
      <StatsSection />

      {/* 5. Testimonials Review Slider */}
      <TestimonialsSection />

      {/* 6. Glow Call-To-Action Banner */}
      <CTASection />
    </div>
  );
}
