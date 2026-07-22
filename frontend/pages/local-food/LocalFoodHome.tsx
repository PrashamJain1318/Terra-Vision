'use client';

import React from 'react';
import LocalFoodLayout from '@/components/local-food/layout/LocalFoodLayout';
import RecommendationFilters from '@/components/local-food/RecommendationFilters';
import FoodRecommendationGrid from '@/components/local-food/FoodRecommendationGrid';

export const LocalFoodHome = () => {
  return (
    <LocalFoodLayout>
      <div className="space-y-8">
        <RecommendationFilters />
        <FoodRecommendationGrid />
      </div>
    </LocalFoodLayout>
  );
};

export default LocalFoodHome;
