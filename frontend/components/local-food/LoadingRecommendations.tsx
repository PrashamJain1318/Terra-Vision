'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingRecommendations = () => {
  return (
    <div className="min-h-[300px] rounded-3xl bg-muted/20 border border-border/30 flex flex-col items-center justify-center p-8 text-center space-y-3">
      <Sparkles className="w-8 h-8 text-orange-400 animate-spin" />
      <h4 className="text-sm font-extrabold text-foreground">AI Culinary Engine Analyzing Local Dishes...</h4>
      <p className="text-xs text-muted-foreground">Searching street food hubs, dietary tags, and 100-year-old heritage dhabas</p>
    </div>
  );
};

export default LoadingRecommendations;
