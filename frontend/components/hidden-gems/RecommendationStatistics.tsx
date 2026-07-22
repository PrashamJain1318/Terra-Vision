'use client';

import React from 'react';
import { Compass, Users, Star } from 'lucide-react';

export const RecommendationStatistics = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 text-center">
        <span className="text-[10px] uppercase font-bold text-muted-foreground">Discovered</span>
        <p className="text-lg font-extrabold text-foreground flex items-center justify-center gap-1"><Compass className="w-4 h-4 text-primary" /> 12</p>
      </div>
      <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 text-center">
        <span className="text-[10px] uppercase font-bold text-muted-foreground">Avg Crowd</span>
        <p className="text-lg font-extrabold text-blue-400 flex items-center justify-center gap-1"><Users className="w-4 h-4" /> 18%</p>
      </div>
      <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 text-center">
        <span className="text-[10px] uppercase font-bold text-muted-foreground">Avg Score</span>
        <p className="text-lg font-extrabold text-amber-400 flex items-center justify-center gap-1"><Star className="w-4 h-4 fill-amber-400" /> 9.5</p>
      </div>
    </div>
  );
};

export default RecommendationStatistics;
