'use client';

import React from 'react';
import { Utensils, Star, Flame } from 'lucide-react';

export const RecommendationStatistics = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 text-center">
        <span className="text-[10px] uppercase font-bold text-muted-foreground">Dishes</span>
        <p className="text-lg font-extrabold text-foreground flex items-center justify-center gap-1"><Utensils className="w-4 h-4 text-orange-400" /> 10</p>
      </div>
      <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 text-center">
        <span className="text-[10px] uppercase font-bold text-muted-foreground">Avg Rating</span>
        <p className="text-lg font-extrabold text-amber-400 flex items-center justify-center gap-1"><Star className="w-4 h-4 fill-amber-400" /> 4.9</p>
      </div>
      <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 text-center">
        <span className="text-[10px] uppercase font-bold text-muted-foreground">Avg Macros</span>
        <p className="text-lg font-extrabold text-emerald-400 flex items-center justify-center gap-1"><Flame className="w-4 h-4" /> 420 kcal</p>
      </div>
    </div>
  );
};

export default RecommendationStatistics;
