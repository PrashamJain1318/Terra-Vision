'use client';

import React from 'react';
import { useMap } from '@/hooks/useMap';
import { mapProvidersConfig } from '@/config/mapProviders';
import { Map, Layers, Navigation, WifiOff } from 'lucide-react';

export const MapsHeader = () => {
  const { state, setProvider, toggleNavigation, toggleOfflineMode } = useMap();

  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border-b border-border/20 bg-background/40 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
          <Map className="w-6 h-6 animate-pulse" />
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <span>Location Intelligence</span>
            <span>•</span>
            <span className="text-primary font-bold">{state.selectedDestination}</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
            Interactive Maps Engine
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        {/* Provider Switcher */}
        <select
          value={state.provider}
          onChange={(e) => setProvider(e.target.value as any)}
          className="px-3 py-1.5 rounded-2xl text-xs font-bold bg-muted/30 border border-border/40 text-foreground focus:outline-none"
        >
          {mapProvidersConfig.map((p) => (
            <option key={p.id} value={p.type}>
              {p.name}
            </option>
          ))}
        </select>

        <button
          onClick={toggleOfflineMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-semibold border transition-all ${
            state.offlineMode ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' : 'bg-muted/20 border-border/30 text-muted-foreground'
          }`}
        >
          <WifiOff className="w-3.5 h-3.5" />
          <span>{state.offlineMode ? 'Offline Cache' : 'Online'}</span>
        </button>

        <button
          onClick={toggleNavigation}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold transition-all ${
            state.isNavigationActive
              ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
              : 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
          }`}
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>{state.isNavigationActive ? 'Navigating' : 'Start Nav'}</span>
        </button>
      </div>
    </header>
  );
};

export default MapsHeader;
