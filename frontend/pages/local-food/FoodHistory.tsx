'use client';

import React from 'react';
import LocalFoodLayout from '@/components/local-food/layout/LocalFoodLayout';
import SearchHistoryPanel from '@/components/local-food/SearchHistoryPanel';

export const FoodHistory = () => {
  return (
    <LocalFoodLayout>
      <div className="space-y-6">
        <SearchHistoryPanel />
      </div>
    </LocalFoodLayout>
  );
};

export default FoodHistory;
