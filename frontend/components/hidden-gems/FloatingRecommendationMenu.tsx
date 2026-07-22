'use client';

import React from 'react';
import { Sparkles, SlidersHorizontal, Bookmark } from 'lucide-react';
import { useHiddenGems } from '@/hooks/useHiddenGems';

export const FloatingRecommendationMenu = () => {
  const { startDiscovery } = useHiddenGems();

  return (
    <div className="flex items-center gap-3 p-2 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30 shadow-lg">
      <button
        onClick={startDiscovery}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
      >
        <Sparkles className="w-3.5 h-3.5" /> Re-Analyze
      </button>
      <button className="p-2 hover:bg-muted/40 rounded-xl text-muted-foreground hover:text-foreground transition-all">
        <SlidersHorizontal className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-muted/40 rounded-xl text-muted-foreground hover:text-foreground transition-all">
        <Bookmark className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FloatingRecommendationMenu;
