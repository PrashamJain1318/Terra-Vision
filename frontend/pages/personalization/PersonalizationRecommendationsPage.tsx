'use client';

import React from 'react';
import RecommendationCard from '@/components/personalization/RecommendationCard';
import { usePersonalization } from '@/hooks/usePersonalization';

export const PersonalizationRecommendationsPage = () => {
  const { recommendations } = usePersonalization();

  return (
    <div className="space-y-4">
      {recommendations.map((rec) => (
        <RecommendationCard key={rec.id} recommendation={rec} />
      ))}
    </div>
  );
};

export default PersonalizationRecommendationsPage;
