'use client';

import React from 'react';
import { Compass } from 'lucide-react';

export const EmptyRecommendations = () => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
        <Compass className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-extrabold text-foreground">No Secret Spots Discovered Yet</h4>
      <p className="text-xs text-muted-foreground max-w-sm mx-auto">
        Select a destination and interests above to generate AI-curated uncrowded experiences.
      </p>
    </div>
  );
};

export default EmptyRecommendations;
