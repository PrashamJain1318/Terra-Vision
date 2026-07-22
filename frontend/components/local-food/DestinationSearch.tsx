'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { useLocalFood } from '@/hooks/useLocalFood';

export const DestinationSearch = () => {
  const { state, setDestination } = useLocalFood();

  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        value={state.selectedDestination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter city or food hub (e.g., Amritsar, Punjab)..."
        className="w-full pl-11 pr-4 py-3 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-orange-500/60 shadow-lg"
      />
    </div>
  );
};

export default DestinationSearch;
