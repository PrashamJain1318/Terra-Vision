'use client';

import React from 'react';
import { Navigation, Play } from 'lucide-react';

export const JourneyReplayMap = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
          <Navigation className="w-4 h-4 text-pink-400" /> Interactive Route Replay Engine
        </h3>
        <button className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30 text-xs font-bold flex items-center gap-1">
          <Play className="w-3 h-3" /> Replay GPS Animation
        </button>
      </div>
      <div className="min-h-[160px] rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-center text-xs text-muted-foreground font-semibold">
        [3D GIS Topographic Route Replay Map Canvas]
      </div>
    </div>
  );
};

export default JourneyReplayMap;
