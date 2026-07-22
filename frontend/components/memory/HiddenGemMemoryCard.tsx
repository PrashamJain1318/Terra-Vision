'use client';

import React from 'react';
import { Compass } from 'lucide-react';

export const HiddenGemMemoryCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-emerald-400 flex items-center gap-1">
          <Compass className="w-3 h-3 text-emerald-400" /> Hidden Gem Memory
        </span>
        <h4 className="text-sm font-extrabold text-foreground">Underground Stepwell Baoli</h4>
      </div>
    </div>
  );
};

export default HiddenGemMemoryCard;
