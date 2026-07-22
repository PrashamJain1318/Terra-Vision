'use client';

import React from 'react';
import LocalFoodLayout from '@/components/local-food/layout/LocalFoodLayout';
import RecommendationFilters from '@/components/local-food/RecommendationFilters';

export const DiscoverFood = () => {
  return (
    <LocalFoodLayout>
      <div className="space-y-6">
        <RecommendationFilters />
      </div>
    </LocalFoodLayout>
  );
};

export default DiscoverFood;
