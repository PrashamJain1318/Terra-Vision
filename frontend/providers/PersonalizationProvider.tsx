'use client';

import React, { useState } from 'react';
import { PersonalizationContext, TravelDnaScores, PersonalizedRecommendation } from '@/context/PersonalizationContext';

const mockDna: TravelDnaScores = {
  explorer: 89,
  foodie: 92,
  nature: 76,
  luxury: 34,
  adventure: 95,
  history: 81,
};

const mockRecs: PersonalizedRecommendation[] = [
  {
    id: 'rec-1',
    type: 'hidden_gem',
    title: 'Otagi Nenbutsu-ji Temple',
    location: 'Kyoto, Japan',
    confidenceScore: 96,
    explanation: 'Matches your 95% Adventure + 81% History DNA profile. 1,200 unique mossy rakan statues away from tourist crowds.',
  },
  {
    id: 'rec-2',
    type: 'restaurant',
    title: 'Gion Duck Noodles',
    location: 'Kyoto, Japan',
    confidenceScore: 94,
    explanation: 'Matches your 92% Foodie score. Hidden subterranean ramen shop with emoji menu.',
  },
];

export const PersonalizationProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [travelDna, setTravelDna] = useState<TravelDnaScores>(mockDna);
  const [recommendations] = useState<PersonalizedRecommendation[]>(mockRecs);
  const [personalizationEnabled, setPersonalizationEnabled] = useState(true);

  const resetAiProfile = () => {
    setTravelDna({ explorer: 50, foodie: 50, nature: 50, luxury: 50, adventure: 50, history: 50 });
  };

  return (
    <PersonalizationContext.Provider
      value={{
        activeTab,
        setActiveTab,
        travelDna,
        recommendations,
        personalizationEnabled,
        setPersonalizationEnabled,
        resetAiProfile,
      }}
    >
      {children}
    </PersonalizationContext.Provider>
  );
};

export default PersonalizationProvider;
