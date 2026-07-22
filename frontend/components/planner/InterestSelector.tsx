'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { interestCategoriesConfig } from '@/config/interestCategories';
import { Utensils, Landmark, Trees, Music, ShoppingBag, Camera } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-4 h-4" />,
  Landmark: <Landmark className="w-4 h-4" />,
  Trees: <Trees className="w-4 h-4" />,
  Music: <Music className="w-4 h-4" />,
  ShoppingBag: <ShoppingBag className="w-4 h-4" />,
  Camera: <Camera className="w-4 h-4" />,
};

export const InterestSelector = () => {
  const { state, toggleInterest } = usePlanner();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {interestCategoriesConfig.map((item) => {
        const isSelected = state.interests.includes(item.id);
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => toggleInterest(item.id)}
            className={`p-4 rounded-2xl text-left border transition-all flex items-center gap-3 ${
              isSelected
                ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-[1.02]'
                : 'bg-muted/20 border-border/30 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
            }`}
          >
            <div className={`p-2 rounded-xl ${isSelected ? 'bg-primary-foreground/20 text-white' : 'bg-background/50 text-primary'}`}>
              {iconMap[item.icon] || <Trees className="w-4 h-4" />}
            </div>
            <span className="text-xs font-bold truncate">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default InterestSelector;
