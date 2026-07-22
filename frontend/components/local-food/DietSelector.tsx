'use client';

import React from 'react';
import DIET_CATEGORIES from '@/config/dietCategories';

export const DietSelector = () => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Dietary Requirement</label>
      <select className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none">
        {DIET_CATEGORIES.map((d) => (
          <option key={d.id} value={d.id} className="bg-card text-foreground">
            {d.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DietSelector;
