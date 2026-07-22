'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const MapPreviewCard = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" /> Location Coordinates
        </h3>
        <button className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/30 flex items-center gap-1">
          <Navigation className="w-3 h-3" /> Open in Maps
        </button>
      </div>
      <div className="min-h-[140px] rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-center text-xs font-semibold text-muted-foreground">
        [Interactive GIS Map Preview Canvas]
      </div>
    </div>
  );
};

export default MapPreviewCard;
