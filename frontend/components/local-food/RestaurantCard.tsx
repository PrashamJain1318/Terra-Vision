'use client';

import React from 'react';
import { Star, MapPin, Clock, Utensils } from 'lucide-react';

interface RestaurantCardProps {
  name?: string;
  cuisine?: string;
  location?: string;
  rating?: number;
  openingHours?: string;
}

export const RestaurantCard = ({
  name = 'Kesar Da Dhaba',
  cuisine = 'Authentic Punjabi Heritage',
  location = 'Chowk Passian, Amritsar',
  rating = 4.9,
  openingHours = '8:00 AM - 10:30 PM',
}: RestaurantCardProps) => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 hover:border-orange-500/40 transition-all space-y-3 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400">{cuisine}</span>
          <h3 className="text-lg font-extrabold text-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-primary" /> {location}
          </p>
        </div>
        <span className="text-xs font-extrabold text-amber-400 flex items-center gap-1 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
          <Star className="w-3.5 h-3.5 fill-amber-400" /> {rating}
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground pt-2 border-t border-border/20">
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-400" /> {openingHours}</span>
        <span className="flex items-center gap-1"><Utensils className="w-3.5 h-3.5 text-orange-400" /> Pure Veg</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
