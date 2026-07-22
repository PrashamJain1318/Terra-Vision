'use client';

import React from 'react';
import { BookOpen, Sparkles, MapPin } from 'lucide-react';
import { useMemory } from '@/hooks/useMemory';

export const MemoryBook = () => {
  const { state } = useMemory();

  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-950/40 via-slate-900/80 to-purple-950/40 border border-pink-500/30 space-y-6 shadow-2xl">
      <div className="text-center space-y-2 border-b border-pink-500/20 pb-6">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-400">Digital Travel Scrapbook</span>
        <h2 className="text-3xl font-extrabold text-foreground">{state.selectedTrip}</h2>
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-pink-400" /> Amritsar, Punjab • 3 Days Expedition
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider">Scrapbook Highlights</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-card/45 border border-border/30">
            <span className="text-pink-400 font-extrabold block">Landmark Scan</span>
            <p className="text-muted-foreground mt-1">Golden Temple Precinct • 16th Century Marble</p>
          </div>
          <div className="p-4 rounded-2xl bg-card/45 border border-border/30">
            <span className="text-amber-400 font-extrabold block">Culinary Specialty</span>
            <p className="text-muted-foreground mt-1">Kesar Da Dhaba • Amritsari Kulcha & Chole</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryBook;
