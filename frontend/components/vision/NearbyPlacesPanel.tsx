'use client';

import React from 'react';
import NearbyPlaceCard from './NearbyPlaceCard';
import { Compass } from 'lucide-react';

interface NearbyPlacesPanelProps {
  places?: Array<{ name: string; distance: string }>;
}

export const NearbyPlacesPanel = ({ places }: NearbyPlacesPanelProps) => {
  const displayPlaces = places || [
    { name: 'Bird Sanctuary Viewpoint', distance: '600 m' },
    { name: 'Summer Hill Railway Station', distance: '1.2 km' },
  ];

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <div className="flex items-center gap-2 text-primary">
        <Compass className="w-5 h-5" />
        <h3 className="text-base font-extrabold text-foreground">Nearby Attractions</h3>
      </div>

      <div className="space-y-2">
        {displayPlaces.map((p, idx) => (
          <NearbyPlaceCard key={idx} {...p} />
        ))}
      </div>
    </div>
  );
};

export default NearbyPlacesPanel;
