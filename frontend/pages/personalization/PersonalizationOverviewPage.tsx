'use client';

import React from 'react';
import TravelDnaCard from '@/components/personalization/TravelDnaCard';
import RecommendationCard from '@/components/personalization/RecommendationCard';
import PrivacyControlCard from '@/components/personalization/PrivacyControlCard';
import { usePersonalization } from '@/hooks/usePersonalization';

export const PersonalizationOverviewPage = () => {
  const { travelDna, recommendations } = usePersonalization();

  return (
    <div className="space-y-6">
      <TravelDnaCard dna={travelDna} />

      <div className="space-y-4">
        <h3 className="font-extrabold text-base text-foreground font-sans">Top Smart AI Recommendations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <RecommendationCard key={rec.id} recommendation={rec} />
          ))}
        </div>
      </div>

      <PrivacyControlCard />
    </div>
  );
};

export default PersonalizationOverviewPage;
