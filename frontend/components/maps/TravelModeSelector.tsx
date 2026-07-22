'use client';

import React from 'react';
import { routeModesConfig } from '@/config/routeModes';
import { Car, Footprints, Bus, Bike } from 'lucide-react';

interface TravelModeSelectorProps {
  selectedMode: string;
  onSelect: (modeId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="w-4 h-4" />,
  Footprints: <Footprints className="w-4 h-4" />,
  Bus: <Bus className="w-4 h-4" />,
  Bike: <Bike className="w-4 h-4" />,
};

export const TravelModeSelector = ({ selectedMode, onSelect }: TravelModeSelectorProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {routeModesConfig.map((mode) => {
        const isActive = selectedMode === mode.id;
        return (
          <button
            key={mode.id}
            type="button"
            onClick={() => onSelect(mode.id)}
            className={`p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
              isActive
                ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-[1.03]'
                : 'bg-card/45 border-border/30 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
            }`}
          >
            {iconMap[mode.icon] || <Car className="w-4 h-4" />}
            <span className="text-[10px]">{mode.label.split(' ')[0]}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TravelModeSelector;
