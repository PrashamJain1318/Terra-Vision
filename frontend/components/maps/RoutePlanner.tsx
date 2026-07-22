'use client';

import React, { useState } from 'react';
import TravelModeSelector from './TravelModeSelector';
import RouteSummary from './RouteSummary';
import RouteTimeline from './RouteTimeline';
import { MapPin, Navigation } from 'lucide-react';

export const RoutePlanner = () => {
  const [origin, setOrigin] = useState('Shimla Mall Road');
  const [destination, setDestination] = useState('Kufri Viewpoint');
  const [mode, setMode] = useState('driving');
  const [isCalculated, setIsCalculated] = useState(true);

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-6">
      <div className="space-y-1">
        <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
          <Navigation className="w-5 h-5 text-primary" /> Route Planner
        </h3>
        <p className="text-xs text-muted-foreground">Calculate distance, travel mode & polyline directions</p>
      </div>

      <div className="space-y-4">
        {/* Origin & Destination Inputs */}
        <div className="space-y-3">
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Enter origin location..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-muted/20 border border-border/30 text-xs font-semibold focus:outline-none focus:border-primary/60"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination location..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-muted/20 border border-border/30 text-xs font-semibold focus:outline-none focus:border-primary/60"
            />
          </div>
        </div>

        {/* Travel Mode Selector */}
        <TravelModeSelector selectedMode={mode} onSelect={setMode} />

        <button
          onClick={() => setIsCalculated(true)}
          className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-95 transition-opacity"
        >
          Calculate Route
        </button>
      </div>

      {isCalculated && (
        <div className="space-y-4 pt-4 border-t border-border/20">
          <RouteSummary travelMode={mode} />
          <RouteTimeline />
        </div>
      )}
    </div>
  );
};

export default RoutePlanner;
