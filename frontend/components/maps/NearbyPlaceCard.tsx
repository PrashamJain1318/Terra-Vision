'use client';

import React from 'react';
import { Star, MapPin, Navigation } from 'lucide-react';

interface NearbyPlaceCardProps {
  name: string;
  category: string;
  rating: number;
  distance: string;
}

export const NearbyPlaceCard = ({ name, category, rating, distance }: NearbyPlaceCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 hover:border-primary/50 transition-all space-y-2 group">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{category}</span>
          <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{name}</h4>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
          <Star className="w-3 h-3 fill-amber-400" />
          <span>{rating}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/10">
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-primary" /> {distance} away
        </span>
        <button className="text-primary font-bold hover:underline flex items-center gap-1">
          <Navigation className="w-3 h-3" /> Route
        </button>
      </div>
    </div>
  );
};

export default NearbyPlaceCard;
