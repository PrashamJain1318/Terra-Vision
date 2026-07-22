'use client';

import React from 'react';

interface MapContainerProps {
  children: React.ReactNode;
}

export const MapContainer = ({ children }: MapContainerProps) => {
  return (
    <main className="flex-1 overflow-y-auto p-6 lg:p-10 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {children}
      </div>
    </main>
  );
};

export default MapContainer;
