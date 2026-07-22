'use client';

import React from 'react';
import LocalFoodLayout from '@/components/local-food/layout/LocalFoodLayout';
import SavedFoodCard from '@/components/local-food/SavedFoodCard';

export const SavedFoods = () => {
  return (
    <LocalFoodLayout>
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider">Saved Culinary Favorites</h3>
        <SavedFoodCard name="Amritsari Kulcha & Chole" cuisine="Punjabi Heritage Food" location="Amritsar, Punjab" />
      </div>
    </LocalFoodLayout>
  );
};

export default SavedFoods;
