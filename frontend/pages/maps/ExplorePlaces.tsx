'use client';

import React from 'react';
import MapsLayout from '@/components/maps/layout/MapsLayout';
import NearbyPlacesPanel from '@/components/maps/NearbyPlacesPanel';

export const ExplorePlaces = () => {
  return (
    <MapsLayout>
      <div className="space-y-6">
        <NearbyPlacesPanel />
      </div>
    </MapsLayout>
  );
};

export default ExplorePlaces;
