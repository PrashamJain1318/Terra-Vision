'use client';

import React from 'react';
import { markerTypesConfig } from '@/config/markerTypes';

export const MapLegend = () => {
  return (
    <div className="p-3 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30 shadow-md flex items-center gap-4 text-xs font-semibold">
      {markerTypesConfig.map((m) => (
        <div key={m.id} className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${m.color.replace('text-', 'bg-')}`} />
          <span className="text-muted-foreground">{m.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MapLegend;
