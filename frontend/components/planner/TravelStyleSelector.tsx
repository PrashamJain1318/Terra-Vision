'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { travelStylesConfig } from '@/config/travelStyles';
import { Coffee, Compass, Zap, Mountain } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-5 h-5 text-amber-400" />,
  Compass: <Compass className="w-5 h-5 text-primary" />,
  Zap: <Zap className="w-5 h-5 text-purple-400" />,
  Mountain: <Mountain className="w-5 h-5 text-emerald-400" />,
};

export const TravelStyleSelector = () => {
  const { state, setTravelStyle } = usePlanner();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {travelStylesConfig.map((item) => {
        const isSelected = state.travelStyle === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setTravelStyle(item.id)}
            className={`p-6 rounded-3xl text-left border transition-all flex items-start gap-4 ${
              isSelected
                ? 'bg-primary/10 border-primary shadow-lg shadow-primary/15 scale-[1.02]'
                : 'bg-muted/20 border-border/30 hover:bg-muted/40'
            }`}
          >
            <div className="p-3 rounded-2xl bg-background/50 border border-border/20 flex-shrink-0">
              {iconMap[item.icon] || <Compass className="w-5 h-5 text-primary" />}
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-foreground">{item.label}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default TravelStyleSelector;
