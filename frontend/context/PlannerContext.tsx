'use client';

import { createContext } from 'react';

export interface PlannerState {
  currentStep: number;
  selectedDestination: string;
  travelDates: { start: string; end: string };
  numberOfTravelers: number;
  travelStyle: string;
  budget: string;
  interests: string[];
  transportPreference: string;
  hotelPreference: string;
  languagePreference: string;
  generatedPlan: any | null;
  isGenerating: boolean;
  generationProgress: number;
  plannerHistory: any[];
  savedTrips: any[];
}

export interface PlannerContextType {
  state: PlannerState;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setSelectedDestination: (destination: string) => void;
  setTravelDates: (dates: { start: string; end: string }) => void;
  setNumberOfTravelers: (count: number) => void;
  setTravelStyle: (style: string) => void;
  setBudget: (budget: string) => void;
  toggleInterest: (interestId: string) => void;
  setPreferences: (prefs: { transport?: string; hotel?: string; language?: string }) => void;
  generatePlan: () => Promise<void>;
  resetPlanner: () => void;
  saveTrip: () => void;
}

export const PlannerContext = createContext<PlannerContextType | undefined>(undefined);

export default PlannerContext;
