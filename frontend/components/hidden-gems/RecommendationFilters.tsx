'use client';

import React from 'react';
import DestinationSearch from './DestinationSearch';
import InterestSelector from './InterestSelector';
import BudgetSelector from './BudgetSelector';
import TravelStyleSelector from './TravelStyleSelector';

export const RecommendationFilters = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider">Discovery Filters</h3>
      <DestinationSearch />
      <InterestSelector />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BudgetSelector />
        <TravelStyleSelector />
      </div>
    </div>
  );
};

export default RecommendationFilters;
