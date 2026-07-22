'use client';

import React, { useState } from 'react';
import { PlannerContext, PlannerState } from '@/context/PlannerContext';
import PLANNER_CONSTANTS from '@/config/plannerConstants';

const initialPlannerState: PlannerState = {
  currentStep: 1,
  selectedDestination: '',
  travelDates: { start: '', end: '' },
  numberOfTravelers: 1,
  travelStyle: 'balanced',
  budget: 'balanced',
  interests: [],
  transportPreference: 'mixed',
  hotelPreference: 'comfort',
  languagePreference: 'english',
  generatedPlan: null,
  isGenerating: false,
  generationProgress: 0,
  plannerHistory: [],
  savedTrips: [],
};

export const PlannerProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<PlannerState>(initialPlannerState);

  const setCurrentStep = (step: number) => {
    if (step >= 1 && step <= PLANNER_CONSTANTS.TOTAL_STEPS) {
      setState(prev => ({ ...prev, currentStep: step }));
    }
  };

  const nextStep = () => {
    setState(prev => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, PLANNER_CONSTANTS.TOTAL_STEPS),
    }));
  };

  const prevStep = () => {
    setState(prev => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 1),
    }));
  };

  const setSelectedDestination = (destination: string) => {
    setState(prev => ({ ...prev, selectedDestination: destination }));
  };

  const setTravelDates = (dates: { start: string; end: string }) => {
    setState(prev => ({ ...prev, travelDates: dates }));
  };

  const setNumberOfTravelers = (count: number) => {
    setState(prev => ({ ...prev, numberOfTravelers: count }));
  };

  const setTravelStyle = (style: string) => {
    setState(prev => ({ ...prev, travelStyle: style }));
  };

  const setBudget = (budget: string) => {
    setState(prev => ({ ...prev, budget }));
  };

  const toggleInterest = (interestId: string) => {
    setState(prev => {
      const exists = prev.interests.includes(interestId);
      const newInterests = exists
        ? prev.interests.filter(i => i !== interestId)
        : [...prev.interests, interestId];
      return { ...prev, interests: newInterests };
    });
  };

  const setPreferences = (prefs: { transport?: string; hotel?: string; language?: string }) => {
    setState(prev => ({
      ...prev,
      transportPreference: prefs.transport || prev.transportPreference,
      hotelPreference: prefs.hotel || prev.hotelPreference,
      languagePreference: prefs.language || prev.languagePreference,
    }));
  };

  const generatePlan = async () => {
    setState(prev => ({ ...prev, isGenerating: true, generationProgress: 10 }));
    // Architecture workflow progress simulator
    for (let progress = 20; progress <= 100; progress += 20) {
      await new Promise(r => setTimeout(r, 200));
      setState(prev => ({ ...prev, generationProgress: progress }));
    }
    setState(prev => ({
      ...prev,
      isGenerating: false,
      generatedPlan: {
        title: `AI Trip to ${prev.selectedDestination || 'Himachal Pradesh'}`,
        days: 3,
        status: 'generated',
      },
      currentStep: 9,
    }));
  };

  const resetPlanner = () => {
    setState(initialPlannerState);
  };

  const saveTrip = () => {
    if (state.generatedPlan) {
      setState(prev => ({
        ...prev,
        savedTrips: [...prev.savedTrips, prev.generatedPlan],
      }));
    }
  };

  return (
    <PlannerContext.Provider
      value={{
        state,
        setCurrentStep,
        nextStep,
        prevStep,
        setSelectedDestination,
        setTravelDates,
        setNumberOfTravelers,
        setTravelStyle,
        setBudget,
        toggleInterest,
        setPreferences,
        generatePlan,
        resetPlanner,
        saveTrip,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};

export default PlannerProvider;
