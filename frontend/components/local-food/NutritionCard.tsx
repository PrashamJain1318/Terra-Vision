'use client';

import React from 'react';
import { Flame } from 'lucide-react';

interface NutritionProps {
  calories?: string;
  protein?: string;
  carbs?: string;
}

export const NutritionCard = ({ calories = '420 kcal', protein = '14g', carbs = '58g' }: NutritionProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-between">
      <span className="text-xs font-extrabold text-foreground flex items-center gap-1.5">
        <Flame className="w-4 h-4 text-emerald-400" /> Macro Nutrition
      </span>
      <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
        {calories} • {protein} P • {carbs} C
      </span>
    </div>
  );
};

export default NutritionCard;
