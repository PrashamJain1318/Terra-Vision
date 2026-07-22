'use client';

import React from 'react';
import TripSelector from './TripSelector';
import MemorySearch from './MemorySearch';

export const MemoryFilters = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider">Capsule Filters</h3>
      <MemorySearch />
      <TripSelector />
    </div>
  );
};

export default MemoryFilters;
