'use client';

import React, { useState } from 'react';
import { useMap } from '@/hooks/useMap';
import LocationSearch from './LocationSearch';
import MapControls from './MapControls';
import MapToolbar from './MapToolbar';
import MarkerPopup from './MarkerPopup';
import { MapPin, Navigation } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

const sampleMarkers = [
  { id: '1', title: 'The Ridge Square', category: 'Attraction', address: 'Ridge Road, Shimla', lat: 31.1048, lng: 77.1734 },
  { id: '2', title: 'Cafe Simla Times', category: 'Restaurant', address: 'Mall Road, Shimla', lat: 31.106, lng: 77.175 },
];

export const InteractiveMap = () => {
  const { state } = useMap();
  const [activePopup, setActivePopup] = useState<any | null>(null);

  return (
    <GlassCard hoverEffect={false} className="p-6 space-y-6 relative overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border/10">
        <LocationSearch />

        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted/20 px-3 py-1.5 rounded-full border border-border/30">
          <Navigation className="w-3.5 h-3.5 text-primary" />
          <span>{state.provider.toUpperCase()} ENGINE</span>
        </div>
      </div>

      {/* Map Canvas Workspace */}
      <div className="relative min-h-[460px] rounded-3xl bg-muted/20 border border-border/30 overflow-hidden flex flex-col justify-between p-6">
        {/* Map Center Pins Mock Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex flex-col items-center">
            <div className="p-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 text-primary animate-pulse">
              <MapPin className="w-8 h-8" />
            </div>
            <span className="mt-2 px-3 py-1 rounded-full bg-card/80 backdrop-blur-md text-[11px] font-extrabold border border-border/40 shadow-lg text-foreground">
              {state.selectedDestination}
            </span>
          </div>
        </div>

        {/* Floating Marker Pins */}
        <div className="absolute top-1/4 left-1/3 z-20">
          <button
            onClick={() => setActivePopup(sampleMarkers[0])}
            className="p-2 rounded-2xl bg-card/80 backdrop-blur-md border border-border/40 text-primary hover:scale-110 transition-transform shadow-lg"
          >
            <MapPin className="w-5 h-5" />
          </button>
        </div>

        {activePopup && (
          <MarkerPopup marker={activePopup} onClose={() => setActivePopup(null)} />
        )}

        {/* Map Control Buttons */}
        <MapControls />
        <MapToolbar />
      </div>
    </GlassCard>
  );
};

export default InteractiveMap;
