'use client';

import React from 'react';
import { useHiddenGems } from '@/hooks/useHiddenGems';
import TRAVEL_CATEGORIES from '@/config/travelCategories';

export const InterestSelector = () => {
  const { state, toggleInterest } = useHiddenGems();

  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Select Interests</label>
      <div className="flex flex-wrap gap-2">
        {TRAVEL_CATEGORIES.map((cat) => {
          const isSelected = state.interests.includes(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => toggleInterest(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border ${
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card/45 text-muted-foreground border-border/40 hover:bg-muted/30'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InterestSelector;
