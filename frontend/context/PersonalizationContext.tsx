'use client';

import { createContext } from 'react';

export interface TravelDnaScores {
  explorer: number;
  foodie: number;
  nature: number;
  luxury: number;
  adventure: number;
  history: number;
}

export interface PersonalizedRecommendation {
  id: string;
  type: 'destination' | 'restaurant' | 'hidden_gem' | 'itinerary';
  title: string;
  location: string;
  confidenceScore: number;
  explanation: string;
}

export interface PersonalizationState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  travelDna: TravelDnaScores;
  recommendations: PersonalizedRecommendation[];
  personalizationEnabled: boolean;
  setPersonalizationEnabled: (enabled: boolean) => void;
  resetAiProfile: () => void;
}

export const PersonalizationContext = createContext<PersonalizationState | null>(null);

export default PersonalizationContext;
