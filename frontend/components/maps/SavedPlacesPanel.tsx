'use client';

import React from 'react';
import SavedPlaceCard from './SavedPlaceCard';
import { Bookmark } from 'lucide-react';

const mockSaved = [
  { id: '1', name: 'Jakhu Temple Viewpoint', category: 'Attraction', address: 'Jakhu Hill, Shimla' },
  { id: '2', name: 'Indian Institute of Advanced Study', category: 'Heritage Site', address: 'Observatory Hill, Shimla' },
];

export const SavedPlacesPanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-amber-400 fill-amber-400" /> Saved Places
        </h3>
        <span className="text-xs text-muted-foreground font-semibold">2 Places</span>
      </div>

      <div className="space-y-3">
        {mockSaved.map((place) => (
          <SavedPlaceCard key={place.id} {...place} />
        ))}
      </div>
    </div>
  );
};

export default SavedPlacesPanel;
