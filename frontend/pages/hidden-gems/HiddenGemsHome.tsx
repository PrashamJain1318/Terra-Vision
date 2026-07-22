'use client';

import React from 'react';
import HiddenGemsLayout from '@/components/hidden-gems/layout/HiddenGemsLayout';
import RecommendationFilters from '@/components/hidden-gems/RecommendationFilters';
import RecommendationGrid from '@/components/hidden-gems/RecommendationGrid';

export const HiddenGemsHome = () => {
  return (
    <HiddenGemsLayout>
      <div className="space-y-8">
        <RecommendationFilters />
        <RecommendationGrid />
      </div>
    </HiddenGemsLayout>
  );
};

export default HiddenGemsHome;
