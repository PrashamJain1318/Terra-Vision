'use client';

import React from 'react';
import Compass from './Compass';
import ZoomControls from './ZoomControls';
import CurrentLocationButton from './CurrentLocationButton';

export const MapControls = () => {
  return (
    <div className="absolute right-6 bottom-6 z-20 flex flex-col items-center gap-3">
      <Compass />
      <CurrentLocationButton />
      <ZoomControls />
    </div>
  );
};

export default MapControls;
