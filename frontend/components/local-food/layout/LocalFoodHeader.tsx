'use client';

import React from 'react';
import { UtensilsCrossed, Sparkles } from 'lucide-react';
import { useLocalFood } from '@/hooks/useLocalFood';
import FOOD_PROVIDERS from '@/config/foodProviders';

export const LocalFoodHeader = () => {
  const { state, setProvider, startDiscovery } = useLocalFood();

  return (
    <header className="h-16 px-6 bg-card/45 backdrop-blur-xl border-b border-border/40 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-2xl bg-orange-500/10 text-orange-400">
          <UtensilsCrossed className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-sm font-extrabold text-foreground tracking-tight">Local Food AI</h1>
          <p className="text-[11px] text-muted-foreground">Authentic Culinary Experiences & Local Delicacies</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={state.provider}
          onChange={(e) => setProvider(e.target.value)}
          className="px-3 py-1.5 rounded-full bg-muted/30 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
        >
          {Object.values(FOOD_PROVIDERS).map((p) => (
            <option key={p.id} value={p.id} className="bg-card text-foreground">
              {p.name}
            </option>
          ))}
        </select>

        <button
          onClick={startDiscovery}
          className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" /> AI Food Search
        </button>
      </div>
    </header>
  );
};

export default LocalFoodHeader;
