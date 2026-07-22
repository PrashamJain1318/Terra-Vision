'use client';

import React from 'react';
import LocalFoodLayout from '@/components/local-food/layout/LocalFoodLayout';
import RestaurantCard from '@/components/local-food/RestaurantCard';
import RestaurantGallery from '@/components/local-food/RestaurantGallery';
import RestaurantMapPreview from '@/components/local-food/RestaurantMapPreview';

export const RestaurantDetails = () => {
  return (
    <LocalFoodLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Restaurant Profile</h2>
        <RestaurantCard />
        <RestaurantGallery />
        <RestaurantMapPreview />
      </div>
    </LocalFoodLayout>
  );
};

export default RestaurantDetails;
