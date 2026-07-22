'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingRecommendations = () => {
  return (
    <div className="min-h-[300px] rounded-3xl bg-muted/20 border border-border/30 flex flex-col items-center justify-center p-8 text-center space-y-3">
      <Sparkles className="w-8 h-8 text-primary animate-spin" />
      <h4 className="text-sm font-extrabold text-foreground">AI Recommendation Engine Running...</h4>
      <p className="text-xs text-muted-foreground">Analyzing crowd predictions, experience scores, and heritage trails</p>
    </div>
  );
};

export default LoadingRecommendations;
