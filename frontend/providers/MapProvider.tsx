'use client';

import React, { useState } from 'react';
import { MapContext, MapState, LocationPoint } from '@/context/MapContext';
import MAP_CONSTANTS from '@/config/mapConstants';

const initialMapState: MapState = {
  currentLocation: MAP_CONSTANTS.DEFAULT_CENTER,
  selectedDestination: 'Shimla, HP',
  mapCenter: MAP_CONSTANTS.DEFAULT_CENTER,
  zoomLevel: MAP_CONSTANTS.DEFAULT_ZOOM,
  selectedMarker: null,
  savedPlaces: [],
  nearbyPlaces: [],
  currentRoute: null,
  routeHistory: [],
  mapTheme: 'dark',
  provider: 'google',
  isNavigationActive: false,
  offlineMode: false,
};

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<MapState>(initialMapState);

  const setMapCenter = (center: LocationPoint) => {
    setState(prev => ({ ...prev, mapCenter: center }));
  };

  const setZoomLevel = (zoom: number) => {
    setState(prev => ({ ...prev, zoomLevel: zoom }));
  };

  const setSelectedDestination = (destination: string) => {
    setState(prev => ({ ...prev, selectedDestination: destination }));
  };

  const setSelectedMarker = (marker: any | null) => {
    setState(prev => ({ ...prev, selectedMarker: marker }));
  };

  const setProvider = (provider: 'google' | 'mapbox' | 'osm') => {
    setState(prev => ({ ...prev, provider }));
  };

  const toggleNavigation = () => {
    setState(prev => ({ ...prev, isNavigationActive: !prev.isNavigationActive }));
  };

  const toggleOfflineMode = () => {
    setState(prev => ({ ...prev, offlineMode: !prev.offlineMode }));
  };

  const savePlace = (place: any) => {
    setState(prev => ({ ...prev, savedPlaces: [...prev.savedPlaces, place] }));
  };

  return (
    <MapContext.Provider
      value={{
        state,
        setMapCenter,
        setZoomLevel,
        setSelectedDestination,
        setSelectedMarker,
        setProvider,
        toggleNavigation,
        toggleOfflineMode,
        savePlace,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
