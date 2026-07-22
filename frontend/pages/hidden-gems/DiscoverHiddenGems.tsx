'use client';

import React from 'react';
import HiddenGemsLayout from '@/components/hidden-gems/layout/HiddenGemsLayout';
import RecommendationFilters from '@/components/hidden-gems/RecommendationFilters';

export const DiscoverHiddenGems = () => {
  return (
    <HiddenGemsLayout>
      <div className="space-y-6">
        <RecommendationFilters />
      </div>
    </HiddenGemsLayout>
  );
};

export default DiscoverHiddenGems;
