'use client';

import React from 'react';
import { Navigation } from 'lucide-react';

interface RouteStepProps {
  stepNumber: number;
  instruction: string;
  distance: string;
  duration: string;
}

export const RouteStep = ({ stepNumber, instruction, distance, duration }: RouteStepProps) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-2xl bg-card/30 border border-border/20">
      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
        {stepNumber}
      </div>

      <div className="flex-1 space-y-0.5">
        <p className="text-xs font-semibold text-foreground">{instruction}</p>
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <span>{distance}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default RouteStep;
