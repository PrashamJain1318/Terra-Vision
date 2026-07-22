'use client';

import { createContext } from 'react';

export interface HiddenGemItem {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  experienceScore: number;
  crowdLevel: string;
  bestVisitTime: string;
  aiStory: string;
  saved: boolean;
}

export interface HiddenGemsState {
  selectedDestination: string;
  travelStyle: string;
  budget: string;
  interests: string[];
  crowdPreference: string;
  recommendedPlaces: HiddenGemItem[];
  selectedGem: HiddenGemItem | null;
  experienceScore: number;
  crowdPrediction: string;
  bestVisitTime: string;
  aiStory: string;
  savedGems: HiddenGemItem[];
  searchHistory: string[];
  provider: string;
  loadingState: boolean;
  errorState: string | null;
}

export interface HiddenGemsContextType {
  state: HiddenGemsState;
  setDestination: (dest: string) => void;
  setProvider: (provider: string) => void;
  toggleInterest: (interestId: string) => void;
  startDiscovery: () => void;
  saveGem: (gem: HiddenGemItem) => void;
  resetDiscovery: () => void;
}

export const HiddenGemsContext = createContext<HiddenGemsContextType | undefined>(undefined);

export default HiddenGemsContext;
