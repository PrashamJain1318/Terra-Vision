'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Compass, Sparkles, MapPin } from 'lucide-react';
import gsap from 'gsap';

// Dynamically import ThreeScene to avoid SSR issues
const ThreeScene = dynamic(() => import('@/components/three/ThreeScene'), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    // Premium GSAP animation to confirm module works properly
    gsap.fromTo(
      '.hero-fade-in',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power4.out' }
    );
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D background verification */}
      <ThreeScene />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider hero-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          Introducing LocalLens AI Foundation
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight hero-fade-in">
          See Beyond the{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
            Destination.
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed hero-fade-in">
          A premium, enterprise-grade architecture initialized and configured. Setup includes Next.js 15,
          TypeScript, Tailwind CSS, ThreeJS, GSAP, Lenis, and Zustand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-fade-in">
          <div className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 cursor-pointer">
            <Compass className="w-4 h-4" />
            Explore Architecture
          </div>
          <a
            href="https://github.com/PrashamJain1318/TerraVision"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-border/80 hover:bg-muted/40 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <MapPin className="w-4 h-4" />
            Git Repository
          </a>
        </div>

        {/* Feature Grid Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 hero-fade-in">
          <div className="p-6 rounded-2xl glass text-left space-y-3">
            <h3 className="font-semibold text-base">Zustand State</h3>
            <p className="text-xs text-muted-foreground">Stores configured for Theme, User, Planner, and Settings.</p>
          </div>
          <div className="p-6 rounded-2xl glass text-left space-y-3">
            <h3 className="font-semibold text-base">React Query</h3>
            <p className="text-xs text-muted-foreground">Global client provider configured with staleTimes and retry limits.</p>
          </div>
          <div className="p-6 rounded-2xl glass text-left space-y-3">
            <h3 className="font-semibold text-base">Express Backend</h3>
            <p className="text-xs text-muted-foreground">Connected with MongoDB Atlas client setup & standard security middlewares.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
