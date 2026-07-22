'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface MarkerCardProps {
  title: string;
  category: string;
  lat: number;
  lng: number;
}

export const MarkerCard = ({ title, category, lat, lng }: MarkerCardProps) => {
  return (
    <div className="p-4 rounded-3xl bg-card/70 backdrop-blur-xl border border-border/40 shadow-xl flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">{category}</span>
          <h4 className="text-sm font-extrabold text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground">{lat}, {lng}</p>
        </div>
      </div>

      <button className="p-2.5 rounded-2xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
        <Navigation className="w-4 h-4" />
      </button>
    </div>
  );
};

export default MarkerCard;
