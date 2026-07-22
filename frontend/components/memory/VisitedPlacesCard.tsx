'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export const VisitedPlacesCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-pink-400">Visited Landmark</span>
        <h4 className="text-sm font-extrabold text-foreground">Golden Temple Complex</h4>
        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3 text-pink-400" /> Amritsar, Punjab
        </p>
      </div>
    </div>
  );
};

export default VisitedPlacesCard;
