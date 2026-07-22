'use client';

import React, { useState, ReactNode } from 'react';
import HiddenGemsContext, { HiddenGemsState, HiddenGemItem } from '@/context/HiddenGemsContext';

const defaultState: HiddenGemsState = {
  selectedDestination: 'Shimla, Himachal Pradesh',
  travelStyle: 'Authentic & Uncrowded',
  budget: 'Moderate',
  interests: ['heritage', 'nature'],
  crowdPreference: 'very_low',
  recommendedPlaces: [
    {
      id: 'gem-1',
      name: 'Potters Hill Pine Sanctuary',
      category: 'Nature & Pine Trails',
      location: 'Near Summer Hill, Shimla',
      description: 'Dense Himalayan pine forest trail far from tourist crowds.',
      experienceScore: 9.6,
      crowdLevel: 'very_low',
      bestVisitTime: '7:30 AM - 10:00 AM',
      aiStory: 'Carved through British-era forestry paths, Potters Hill remains untouched.',
      saved: false,
    },
  ],
  selectedGem: null,
  experienceScore: 9.6,
  crowdPrediction: 'very_low',
  bestVisitTime: '7:30 AM - 10:00 AM',
  aiStory: 'Potters Hill offers serene tranquility and pristine Himalayan pine fragrance.',
  savedGems: [],
  searchHistory: ['Shimla', 'Manali'],
  provider: 'gemini',
  loadingState: false,
  errorState: null,
};

export const HiddenGemsProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<HiddenGemsState>(defaultState);

  const setDestination = (dest: string) => {
    setState((prev) => ({ ...prev, selectedDestination: dest }));
  };

  const setProvider = (provider: string) => {
    setState((prev) => ({ ...prev, provider }));
  };

  const toggleInterest = (interestId: string) => {
    setState((prev) => {
      const interests = prev.interests.includes(interestId)
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId];
      return { ...prev, interests };
    });
  };

  const startDiscovery = () => {
    setState((prev) => ({ ...prev, loadingState: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, loadingState: false }));
    }, 800);
  };

  const saveGem = (gem: HiddenGemItem) => {
    setState((prev) => {
      const exists = prev.savedGems.some((g) => g.id === gem.id);
      const savedGems = exists ? prev.savedGems.filter((g) => g.id !== gem.id) : [...prev.savedGems, gem];
      return { ...prev, savedGems };
    });
  };

  const resetDiscovery = () => {
    setState(defaultState);
  };

  return (
    <HiddenGemsContext.Provider
      value={{
        state,
        setDestination,
        setProvider,
        toggleInterest,
        startDiscovery,
        saveGem,
        resetDiscovery,
      }}
    >
      {children}
    </HiddenGemsContext.Provider>
  );
};

export default HiddenGemsProvider;
