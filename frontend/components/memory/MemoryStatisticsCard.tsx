'use client';

import React from 'react';
import { Camera, Utensils, Compass, MapPin } from 'lucide-react';
import { useMemory } from '@/hooks/useMemory';

export const MemoryStatisticsCard = () => {
  const { state } = useMemory();

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4 shadow-xl">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider">Capsule Analytics</h3>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="p-3 rounded-2xl bg-muted/20 border border-border/20">
          <span className="text-[10px] text-muted-foreground uppercase font-bold block">Photos</span>
          <span className="text-base font-extrabold text-foreground">{state.statistics.photosImported}</span>
        </div>
        <div className="p-3 rounded-2xl bg-muted/20 border border-border/20">
          <span className="text-[10px] text-muted-foreground uppercase font-bold block">Vision Scans</span>
          <span className="text-base font-extrabold text-pink-400">{state.statistics.landmarksScanned}</span>
        </div>
        <div className="p-3 rounded-2xl bg-muted/20 border border-border/20">
          <span className="text-[10px] text-muted-foreground uppercase font-bold block">Foods Tried</span>
          <span className="text-base font-extrabold text-amber-400">{state.statistics.foodsTried}</span>
        </div>
        <div className="p-3 rounded-2xl bg-muted/20 border border-border/20">
          <span className="text-[10px] text-muted-foreground uppercase font-bold block">Distance</span>
          <span className="text-base font-extrabold text-indigo-400">{state.statistics.distanceTraveledKm} km</span>
        </div>
      </div>
    </div>
  );
};

export default MemoryStatisticsCard;
