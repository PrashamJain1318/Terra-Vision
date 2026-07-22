'use client';

import React from 'react';
import { Bookmark, Compass } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const SavedTrips = () => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-2">
        <Bookmark className="w-4 h-4 text-primary" /> Saved Itineraries
      </h3>

      <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 flex items-center justify-between">
        <div className="space-y-0.5">
          <h4 className="font-bold text-xs text-foreground">Himalayan Expedition</h4>
          <p className="text-[11px] text-muted-foreground">3 Days • Shimla, HP • Balanced</p>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase">
          Saved
        </span>
      </div>
    </GlassCard>
  );
};

export default SavedTrips;
