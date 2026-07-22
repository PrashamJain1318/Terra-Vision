'use client';

import React from 'react';
import CUISINE_TYPES from '@/config/cuisineTypes';

export const CuisineSelector = () => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Cuisine Type</label>
      <select className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none">
        {CUISINE_TYPES.map((c) => (
          <option key={c.id} value={c.id} className="bg-card text-foreground">
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CuisineSelector;
