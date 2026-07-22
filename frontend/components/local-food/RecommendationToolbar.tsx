'use client';

import React from 'react';
import FloatingFoodMenu from './FloatingFoodMenu';

export const RecommendationToolbar = () => {
  return (
    <div className="flex items-center justify-between p-4 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/30">
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Local Food Toolbar</span>
      <FloatingFoodMenu />
    </div>
  );
};

export default RecommendationToolbar;
