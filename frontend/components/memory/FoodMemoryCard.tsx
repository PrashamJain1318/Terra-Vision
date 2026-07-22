'use client';

import React from 'react';
import { Utensils } from 'lucide-react';

export const FoodMemoryCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-amber-500/30 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-amber-400 flex items-center gap-1">
          <Utensils className="w-3 h-3 text-amber-400" /> Culinary Memory
        </span>
        <h4 className="text-sm font-extrabold text-foreground">Kesar Da Dhaba Paratha</h4>
      </div>
    </div>
  );
};

export default FoodMemoryCard;
