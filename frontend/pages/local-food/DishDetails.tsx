'use client';

import React from 'react';
import LocalFoodLayout from '@/components/local-food/layout/LocalFoodLayout';
import NutritionCard from '@/components/local-food/NutritionCard';
import FoodStoryCard from '@/components/local-food/FoodStoryCard';
import FoodGallery from '@/components/local-food/FoodGallery';
import NearbyRestaurants from '@/components/local-food/NearbyRestaurants';

export const DishDetails = () => {
  return (
    <LocalFoodLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Amritsari Kulcha & Chole</h2>
        <NutritionCard />
        <FoodStoryCard />
        <FoodGallery />
        <NearbyRestaurants />
      </div>
    </LocalFoodLayout>
  );
};

export default DishDetails;
