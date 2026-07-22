'use client';

import React from 'react';
import DestinationSearch from './DestinationSearch';
import CuisineSelector from './CuisineSelector';
import DietSelector from './DietSelector';
import BudgetSelector from './BudgetSelector';
import FoodPreferenceSelector from './FoodPreferenceSelector';

export const RecommendationFilters = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider">Culinary Search & Filters</h3>
      <DestinationSearch />
      <FoodPreferenceSelector />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <CuisineSelector />
        <DietSelector />
        <BudgetSelector />
      </div>
    </div>
  );
};

export default RecommendationFilters;
