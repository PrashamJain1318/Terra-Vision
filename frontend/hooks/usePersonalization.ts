'use client';

import { useContext } from 'react';
import { PersonalizationContext } from '@/context/PersonalizationContext';

const defaultFallbackPersonalizationState = {
  activeTab: 'overview',
  setActiveTab: () => {},
  travelDna: { explorer: 89, foodie: 92, nature: 76, luxury: 34, adventure: 95, history: 81 },
  recommendations: [],
  personalizationEnabled: true,
  setPersonalizationEnabled: () => {},
  resetAiProfile: () => {},
};

export const usePersonalization = () => {
  const context = useContext(PersonalizationContext);
  return context || defaultFallbackPersonalizationState;
};

export default usePersonalization;
