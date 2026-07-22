'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

export const PlannerMemoryCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-indigo-500/30 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-indigo-400 flex items-center gap-1">
          <Calendar className="w-3 h-3 text-indigo-400" /> AI Itinerary Event
        </span>
        <h4 className="text-sm font-extrabold text-foreground">Heritage Walk & Spice Market</h4>
      </div>
    </div>
  );
};

export default PlannerMemoryCard;
