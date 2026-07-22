'use client';

import React from 'react';
import MapsLayout from '@/components/maps/layout/MapsLayout';
import InteractiveMap from '@/components/maps/InteractiveMap';
import NearbyPlacesPanel from '@/components/maps/NearbyPlacesPanel';

export const MapsHome = () => {
  return (
    <MapsLayout>
      <div className="space-y-8">
        <InteractiveMap />
        <NearbyPlacesPanel />
      </div>
    </MapsLayout>
  );
};

export default MapsHome;
