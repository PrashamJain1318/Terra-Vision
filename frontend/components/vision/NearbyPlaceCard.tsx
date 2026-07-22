'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

interface NearbyPlaceCardProps {
  name: string;
  distance: string;
}

export const NearbyPlaceCard = ({ name, distance }: NearbyPlaceCardProps) => {
  return (
    <div className="p-3.5 rounded-2xl bg-card/45 backdrop-blur-md border border-border/30 flex items-center justify-between gap-2">
      <span className="text-xs font-bold text-foreground">{name}</span>
      <span className="text-[11px] text-muted-foreground font-semibold flex items-center gap-1">
        <MapPin className="w-3 h-3 text-primary" /> {distance}
      </span>
    </div>
  );
};

export default NearbyPlaceCard;
