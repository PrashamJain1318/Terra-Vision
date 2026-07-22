'use client';

import React from 'react';
import { Lightbulb } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';

export const SafetyTipsCard = () => {
  const { state } = useSafety();

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3 shadow-xl">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-amber-400" /> AI Safety Recommendations
      </h3>
      <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-5">
        {state.travelAdvisories.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyTipsCard;
