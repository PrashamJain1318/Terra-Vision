'use client';

import React from 'react';
import LocalFoodLayout from '@/components/local-food/layout/LocalFoodLayout';
import FoodRecommendationGrid from '@/components/local-food/FoodRecommendationGrid';

export const FoodResults = () => {
  return (
    <LocalFoodLayout>
      <div className="space-y-6">
        <FoodRecommendationGrid />
      </div>
    </LocalFoodLayout>
  );
};

export default FoodResults;
