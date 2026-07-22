'use client';

import React from 'react';
import FloatingRecommendationMenu from './FloatingRecommendationMenu';

export const RecommendationToolbar = () => {
  return (
    <div className="flex items-center justify-between p-4 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/30">
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Hidden Gems Toolbar</span>
      <FloatingRecommendationMenu />
    </div>
  );
};

export default RecommendationToolbar;
