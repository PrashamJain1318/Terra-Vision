'use client';

import React from 'react';
import { useSafety } from '@/hooks/useSafety';

export const DestinationSelector = () => {
  const { state, setSelectedDestination, analyzeSafety } = useSafety();

  const handleSelect = (dest: string) => {
    setSelectedDestination(dest);
    analyzeSafety(dest);
  };

  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Select Safety Target</label>
      <select
        value={state.selectedDestination}
        onChange={(e) => handleSelect(e.target.value)}
        className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
      >
        <option value="Amritsar, Punjab">Amritsar, Punjab</option>
        <option value="Jaipur, Rajasthan">Jaipur, Rajasthan</option>
        <option value="Manali, Himachal Pradesh">Manali, Himachal Pradesh</option>
      </select>
    </div>
  );
};

export default DestinationSelector;
