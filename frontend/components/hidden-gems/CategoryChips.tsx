'use client';

import React from 'react';
import TRAVEL_CATEGORIES from '@/config/travelCategories';

export const CategoryChips = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {TRAVEL_CATEGORIES.map((c) => (
        <span key={c.id} className="px-3 py-1 rounded-full bg-muted/30 border border-border/30 text-xs font-bold text-muted-foreground">
          {c.name}
        </span>
      ))}
    </div>
  );
};

export default CategoryChips;
