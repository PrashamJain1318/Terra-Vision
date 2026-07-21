'use client';

import React from 'react';
import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';
import HeroBackground from './HeroBackground';
import HeroGlobe from './HeroGlobe';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blurs */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center md:text-left">
          <HeroContent />
          <HeroButtons />
        </div>
        
        <div className="flex justify-center items-center">
          <HeroGlobe />
        </div>
      </div>
    </section>
  );
};

export default Hero;
