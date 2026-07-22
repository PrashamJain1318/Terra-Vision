'use client';

import React from 'react';
import { Compass } from 'lucide-react';
import CoordinatesTag from '@/components/common/CoordinatesTag';
import TopographicBackdrop from '@/components/common/TopographicBackdrop';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden bg-background text-foreground">
      <TopographicBackdrop />

      {/* Left Editorial Terrain Panel (Visible on Desktop) */}
      <div className="hidden lg:flex lg:col-span-5 bg-card/60 border-r border-border/40 p-12 flex-col justify-between relative">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <span className="font-editorial text-2xl font-extrabold tracking-tight text-foreground">
              TERRA VISION
            </span>
          </div>
          <CoordinatesTag lat="31.6340° N" lon="74.8723° E" />
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-4xl font-extrabold leading-tight text-foreground">
            See beyond the <span className="text-primary italic">destination.</span>
          </h2>
          <p className="text-xs text-muted-foreground font-sans leading-relaxed max-w-sm">
            Sign in to access your intelligent field workspace, saved itineraries, 3D cartographic routes, and living travel memory capsules.
          </p>
        </div>

        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          Terra Atlas System • Secure Authentication
        </div>
      </div>

      {/* Right Form Container */}
      <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 relative z-10">
        <div className="max-w-md w-full atlas-card p-8 sm:p-10 space-y-6 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
