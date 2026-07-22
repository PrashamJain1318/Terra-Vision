'use client';

import React from 'react';
import DishCard from './DishCard';
import { useLocalFood } from '@/hooks/useLocalFood';

export const FoodRecommendationGrid = () => {
  const { state } = useLocalFood();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {state.recommendedFoods.map((food) => (
        <DishCard key={food.id} {...food} />
      ))}
    </div>
  );
};

export default FoodRecommendationGrid;
