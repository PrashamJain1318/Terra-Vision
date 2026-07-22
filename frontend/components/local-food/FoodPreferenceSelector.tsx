'use client';

import React from 'react';
import { useLocalFood } from '@/hooks/useLocalFood';
import CUISINE_TYPES from '@/config/cuisineTypes';

export const FoodPreferenceSelector = () => {
  const { state, togglePreference } = useLocalFood();

  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Food Experience Preferences</label>
      <div className="flex flex-wrap gap-2">
        {CUISINE_TYPES.map((c) => {
          const isSelected = state.foodPreferences.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => togglePreference(c.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border ${
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card/45 text-muted-foreground border-border/40 hover:bg-muted/30'
              }`}
            >
              {c.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FoodPreferenceSelector;
