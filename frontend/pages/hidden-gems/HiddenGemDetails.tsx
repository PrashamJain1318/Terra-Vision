'use client';

import React from 'react';
import HiddenGemsLayout from '@/components/hidden-gems/layout/HiddenGemsLayout';
import ExperienceScoreCard from '@/components/hidden-gems/ExperienceScoreCard';
import CrowdPredictionCard from '@/components/hidden-gems/CrowdPredictionCard';
import BestVisitTimeCard from '@/components/hidden-gems/BestVisitTimeCard';
import AIStoryCard from '@/components/hidden-gems/AIStoryCard';
import MapPreviewCard from '@/components/hidden-gems/MapPreviewCard';
import NearbyPlacesCard from '@/components/hidden-gems/NearbyPlacesCard';

export const HiddenGemDetails = () => {
  return (
    <HiddenGemsLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Potters Hill Pine Sanctuary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ExperienceScoreCard />
          <CrowdPredictionCard />
          <BestVisitTimeCard />
        </div>
        <AIStoryCard />
        <MapPreviewCard />
        <NearbyPlacesCard />
      </div>
    </HiddenGemsLayout>
  );
};

export default HiddenGemDetails;
