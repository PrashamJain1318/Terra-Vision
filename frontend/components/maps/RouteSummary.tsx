'use client';

import React from 'react';
import { Route, Clock, Navigation } from 'lucide-react';

interface RouteSummaryProps {
  distance?: string;
  duration?: string;
  travelMode?: string;
}

export const RouteSummary = ({ distance = '14.2 km', duration = '35 mins', travelMode = 'driving' }: RouteSummaryProps) => {
  return (
    <div className="p-4 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/40 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
          <Route className="w-3.5 h-3.5" /> Optimal Route Generated
        </span>
        <span className="text-xs font-bold capitalize text-foreground">{travelMode}</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-lg font-extrabold text-foreground">{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-primary" />
          <span className="text-lg font-extrabold text-foreground">{distance}</span>
        </div>
      </div>
    </div>
  );
};

export default RouteSummary;
