'use client';

import React from 'react';
import NearbyPlaceCard from './NearbyPlaceCard';
import { Compass } from 'lucide-react';

const mockNearby = [
  { id: '1', name: 'The Ridge Mall Road View', category: 'Attraction', rating: 4.8, distance: '400 m' },
  { id: '2', name: 'Cafe Simla Times', category: 'Restaurant', rating: 4.6, distance: '750 m' },
  { id: '3', name: 'Cecil Heritage Resort', category: 'Hotel', rating: 4.9, distance: '1.2 km' },
];

export const NearbyPlacesPanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
          <Compass className="w-4 h-4 text-primary" /> Nearby Discovery
        </h3>
        <span className="text-xs text-muted-foreground font-semibold">3 Spots</span>
      </div>

      <div className="space-y-3">
        {mockNearby.map((place) => (
          <NearbyPlaceCard key={place.id} {...place} />
        ))}
      </div>
    </div>
  );
};

export default NearbyPlacesPanel;
