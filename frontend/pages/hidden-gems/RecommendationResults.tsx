'use client';

import React from 'react';
import HiddenGemsLayout from '@/components/hidden-gems/layout/HiddenGemsLayout';
import RecommendationGrid from '@/components/hidden-gems/RecommendationGrid';

export const RecommendationResults = () => {
  return (
    <HiddenGemsLayout>
      <div className="space-y-6">
        <RecommendationGrid />
      </div>
    </HiddenGemsLayout>
  );
};

export default RecommendationResults;
