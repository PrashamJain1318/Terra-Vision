'use client';

import React from 'react';
import { Bookmark, MapPin, Utensils } from 'lucide-react';

interface SavedFoodCardProps {
  name: string;
  cuisine?: string;
  location?: string;
}

export const SavedFoodCard = ({ name, cuisine = 'Punjabi Heritage Food', location = 'Amritsar, Punjab' }: SavedFoodCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 flex items-center justify-between gap-3">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-orange-400 flex items-center gap-1">
          <Bookmark className="w-3 h-3 fill-orange-400" /> {cuisine}
        </span>
        <h4 className="text-sm font-extrabold text-foreground">{name}</h4>
        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {location}
        </p>
      </div>
    </div>
  );
};

export default SavedFoodCard;
