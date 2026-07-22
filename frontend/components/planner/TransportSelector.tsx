'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { Bus, Car, Train } from 'lucide-react';

const options = [
  { id: 'mixed', label: 'Mixed / Public & Cab', icon: <Bus className="w-5 h-5 text-primary" /> },
  { id: 'rental', label: 'Private Car / Scooter', icon: <Car className="w-5 h-5 text-indigo-400" /> },
  { id: 'train', label: 'Scenic Rail & Walking', icon: <Train className="w-5 h-5 text-purple-400" /> },
];

export const TransportSelector = () => {
  const { state, setPreferences } = usePlanner();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {options.map((item) => {
        const isSelected = state.transportPreference === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setPreferences({ transport: item.id })}
            className={`p-6 rounded-3xl text-left border transition-all space-y-3 ${
              isSelected
                ? 'bg-primary/10 border-primary shadow-md shadow-primary/15 scale-[1.02]'
                : 'bg-muted/20 border-border/30 hover:bg-muted/40'
            }`}
          >
            <div className="p-3 rounded-2xl bg-background/50 w-fit border border-border/20">
              {item.icon}
            </div>
            <h4 className="font-bold text-sm text-foreground">{item.label}</h4>
          </button>
        );
      })}
    </div>
  );
};

export default TransportSelector;
