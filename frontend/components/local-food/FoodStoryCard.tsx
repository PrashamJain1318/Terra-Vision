'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';

interface FoodStoryProps {
  story?: string;
}

export const FoodStoryCard = ({ story = 'Baked in 100-year-old clay tandoors using traditional brass ghee pour techniques.' }: FoodStoryProps) => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3">
      <div className="flex items-center gap-2 text-orange-400">
        <BookOpen className="w-5 h-5" />
        <h3 className="text-base font-extrabold text-foreground">Culinary Heritage Story</h3>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed italic">{story}</p>
    </div>
  );
};

export default FoodStoryCard;
