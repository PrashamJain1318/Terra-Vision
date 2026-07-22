'use client';

import { createContext } from 'react';

export interface LocationPoint {
  lat: number;
  lng: number;
  name?: string;
}

export interface MapState {
  currentLocation: LocationPoint | null;
  selectedDestination: string;
  mapCenter: LocationPoint;
  zoomLevel: number;
  selectedMarker: any | null;
  savedPlaces: any[];
  nearbyPlaces: any[];
  currentRoute: any | null;
  routeHistory: any[];
  mapTheme: string;
  provider: 'google' | 'mapbox' | 'osm';
  isNavigationActive: boolean;
  offlineMode: boolean;
}

export interface MapContextType {
  state: MapState;
  setMapCenter: (center: LocationPoint) => void;
  setZoomLevel: (zoom: number) => void;
  setSelectedDestination: (destination: string) => void;
  setSelectedMarker: (marker: any | null) => void;
  setProvider: (provider: 'google' | 'mapbox' | 'osm') => void;
  toggleNavigation: () => void;
  toggleOfflineMode: () => void;
  savePlace: (place: any) => void;
}

export const MapContext = createContext<MapContextType | undefined>(undefined);

export default MapContext;
