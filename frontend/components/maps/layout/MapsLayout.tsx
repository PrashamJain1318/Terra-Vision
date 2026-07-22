'use client';

import React from 'react';
import MapProvider from '@/providers/MapProvider';
import MapsWorkspace from './MapsWorkspace';

interface MapsLayoutProps {
  children?: React.ReactNode;
}

export const MapsLayout = ({ children }: MapsLayoutProps) => {
  return (
    <MapProvider>
      <div className="space-y-6">
        {children || <MapsWorkspace />}
      </div>
    </MapProvider>
  );
};

export default MapsLayout;
