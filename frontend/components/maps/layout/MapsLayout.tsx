'use client';

import React from 'react';
import MapProvider from '@/providers/MapProvider';
import MapsHeader from './MapsHeader';
import MapsSidebar from './MapsSidebar';
import MapContainer from './MapContainer';
import MapsWorkspace from './MapsWorkspace';

interface MapsLayoutProps {
  children?: React.ReactNode;
}

export const MapsLayout = ({ children }: MapsLayoutProps) => {
  return (
    <MapProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
        <MapsHeader />

        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
          <MapsSidebar />
          <MapContainer>
            {children || <MapsWorkspace />}
          </MapContainer>
        </div>
      </div>
    </MapProvider>
  );
};

export default MapsLayout;
