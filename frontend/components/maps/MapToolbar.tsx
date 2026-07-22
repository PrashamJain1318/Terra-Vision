'use client';

import React from 'react';
import FloatingActionMenu from './FloatingActionMenu';
import MapLegend from './MapLegend';

export const MapToolbar = () => {
  return (
    <div className="absolute left-6 bottom-6 z-20 hidden md:flex items-center gap-4">
      <MapLegend />
      <FloatingActionMenu />
    </div>
  );
};

export default MapToolbar;
