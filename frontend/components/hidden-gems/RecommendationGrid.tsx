'use client';

import React from 'react';
import RecommendationCard from './RecommendationCard';
import { useHiddenGems } from '@/hooks/useHiddenGems';

export const RecommendationGrid = () => {
  const { state } = useHiddenGems();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {state.recommendedPlaces.map((place) => (
        <RecommendationCard key={place.id} {...place} />
      ))}
    </div>
  );
};

export default RecommendationGrid;
