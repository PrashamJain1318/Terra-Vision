'use client';

import React from 'react';
import { useMemory } from '@/hooks/useMemory';

export const TripSelector = () => {
  const { state, setSelectedTrip } = useMemory();

  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Select Travel Capsule</label>
      <select
        value={state.selectedTrip}
        onChange={(e) => setSelectedTrip(e.target.value)}
        className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
      >
        <option value="Amritsar Heritage & Food Escape">Amritsar Heritage & Food Escape</option>
        <option value="Jaipur Royal Forts Expedition">Jaipur Royal Forts Expedition</option>
        <option value="Manali Alpine Trail">Manali Alpine Trail</option>
      </select>
    </div>
  );
};

export default TripSelector;
