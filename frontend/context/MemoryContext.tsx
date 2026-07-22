import { createContext } from 'react';

export interface MemoryState {
  selectedTrip: string;
  selectedProvider: string;
  timelineEvents: any[];
  savedMemories: any[];
  travelStory: string | null;
  statistics: {
    photosImported: number;
    landmarksScanned: number;
    foodsTried: number;
    hiddenGemsVisited: number;
    distanceTraveledKm: number;
  };
  mapReplayActive: boolean;
  exportingPdf: boolean;
  loading: boolean;
  error: string | null;
}

export interface MemoryContextType {
  state: MemoryState;
  setSelectedTrip: (tripId: string) => void;
  setSelectedProvider: (provider: string) => void;
  importMemories: (sources: string[]) => Promise<void>;
  generateTravelStory: (templateId: string) => Promise<void>;
  toggleMapReplay: () => void;
  exportPdfCapsule: () => Promise<void>;
  resetMemoryState: () => void;
}

export const MemoryContext = createContext<MemoryContextType | undefined>(undefined);

export default MemoryContext;
