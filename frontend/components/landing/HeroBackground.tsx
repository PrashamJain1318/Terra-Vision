'use client';

import React from 'react';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Aurora Blurs */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse duration-[8000ms]" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[150px] animate-pulse duration-[12000ms]" />
      
      {/* Radial overlay to dim background details */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/40 to-background" />
    </div>
  );
};

export default HeroBackground;
