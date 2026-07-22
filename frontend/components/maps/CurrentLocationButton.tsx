'use client';

import React from 'react';
import { useMap } from '@/hooks/useMap';
import { LocateFixed } from 'lucide-react';
import MAP_CONSTANTS from '@/config/mapConstants';

export const CurrentLocationButton = () => {
  const { setMapCenter } = useMap();

  return (
    <button
      onClick={() => setMapCenter(MAP_CONSTANTS.DEFAULT_CENTER)}
      className="p-2.5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30 text-foreground hover:bg-muted/40 transition-all shadow-md active:scale-95"
      title="Locate Current Position"
    >
      <LocateFixed className="w-4 h-4 text-emerald-400" />
    </button>
  );
};

export default CurrentLocationButton;
