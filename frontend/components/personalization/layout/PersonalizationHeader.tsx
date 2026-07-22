'use client';

import React from 'react';
import { Sparkles, Brain, Compass } from 'lucide-react';
import { usePersonalization } from '@/hooks/usePersonalization';

export const PersonalizationHeader = () => {
  const { travelDna, personalizationEnabled } = usePersonalization();

  return (
    <header className="p-6 rounded-3xl bg-card border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-indigo-400" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase">
            AI PERSONALIZATION ENGINE
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Your Autonomous Travel DNA
        </h1>
        <p className="text-xs text-muted-foreground font-sans">
          Proactively learns your travel habits from trips, food reviews, vision scans, and voice interactions.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Top Style: Adventure ({travelDna.adventure}%)</span>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase">
          AI Status: {personalizationEnabled ? 'ACTIVE' : 'PAUSED'}
        </div>
      </div>
    </header>
  );
};

export default PersonalizationHeader;
