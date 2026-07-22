'use client';

import React from 'react';
import { Lightbulb, Check } from 'lucide-react';

interface TravelTipsProps {
  tips?: string[];
}

export const TravelTips = ({ tips }: TravelTipsProps) => {
  const displayTips = tips || [
    'Best time to visit is during morning hours for clear architectural photography.',
    'Guided historical tours are conducted every 30 minutes.',
    'Lush botanical gardens surround the heritage mansion estate.',
  ];

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <div className="flex items-center gap-2 text-amber-400">
        <Lightbulb className="w-5 h-5 fill-amber-400" />
        <h3 className="text-base font-extrabold text-foreground">Travel Insights & Visitor Tips</h3>
      </div>

      <div className="space-y-2.5">
        {displayTips.map((tip, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
            <div className="w-4 h-4 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
              <Check className="w-3 h-3" />
            </div>
            <span>{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTips;
