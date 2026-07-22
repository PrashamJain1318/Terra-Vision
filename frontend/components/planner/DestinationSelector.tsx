'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { MapPin, Search } from 'lucide-react';

const popularDestinations = [
  'Shimla, Himachal Pradesh',
  'Manali, Himachal Pradesh',
  'Leh Ladakh, Jammu & Kashmir',
  'Goa Beaches',
  'Jaipur, Rajasthan',
  'Kochi, Kerala',
];

export const DestinationSelector = () => {
  const { state, setSelectedDestination } = usePlanner();

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-3.5 text-muted-foreground" />
        <input
          type="text"
          value={state.selectedDestination}
          onChange={(e) => setSelectedDestination(e.target.value)}
          placeholder="Where would you like to travel? (e.g., Shimla, HP)"
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-muted/20 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
          Popular Destinations
        </label>
        <div className="flex flex-wrap gap-2.5">
          {popularDestinations.map((dest) => {
            const isSelected = state.selectedDestination === dest;
            return (
              <button
                key={dest}
                type="button"
                onClick={() => setSelectedDestination(dest)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold border transition-all ${
                  isSelected
                    ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-[1.02]'
                    : 'bg-muted/20 border-border/30 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{dest}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DestinationSelector;
