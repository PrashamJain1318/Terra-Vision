'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { Building, Hotel, Home } from 'lucide-react';

const options = [
  { id: 'comfort', label: 'Boutique Hotel / Resort', icon: <Hotel className="w-5 h-5 text-emerald-400" /> },
  { id: 'homestay', label: 'Local Homestay / Villa', icon: <Home className="w-5 h-5 text-amber-400" /> },
  { id: 'hostel', label: 'Backpacker Hostel', icon: <Building className="w-5 h-5 text-purple-400" /> },
];

export const HotelPreferenceSelector = () => {
  const { state, setPreferences } = usePlanner();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {options.map((item) => {
        const isSelected = state.hotelPreference === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setPreferences({ hotel: item.id })}
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

export default HotelPreferenceSelector;
