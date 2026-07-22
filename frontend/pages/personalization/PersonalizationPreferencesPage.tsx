'use client';

import React from 'react';
import { Sliders } from 'lucide-react';

export const PersonalizationPreferencesPage = () => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Sliders className="w-5 h-5 text-indigo-400" />
        <h3 className="font-extrabold text-base text-foreground font-sans">Explicit Preference Tuning</h3>
      </div>

      <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 text-xs font-mono text-muted-foreground">
        Travel Style: Adventure & Foodie • Preferred Transit: High-Speed Train & Walking • Accommodation: Boutique Hotels & Ryokans.
      </div>
    </div>
  );
};

export default PersonalizationPreferencesPage;
