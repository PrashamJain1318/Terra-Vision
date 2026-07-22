'use client';

import React from 'react';
import { Utensils } from 'lucide-react';

export const EmptyRecommendations = () => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center mx-auto">
        <Utensils className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-extrabold text-foreground">No Local Dishes Discovered Yet</h4>
      <p className="text-xs text-muted-foreground max-w-sm mx-auto">
        Select a food destination, dietary preferences, and budget above to generate AI culinary recommendations.
      </p>
    </div>
  );
};

export default EmptyRecommendations;
