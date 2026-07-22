'use client';

import React from 'react';
import { History, MapPin } from 'lucide-react';
import { useHiddenGems } from '@/hooks/useHiddenGems';

export const SearchHistoryPanel = () => {
  const { state } = useHiddenGems();

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3">
      <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
        <History className="w-4 h-4 text-primary" /> Discovery Search History
      </h3>
      <div className="space-y-2">
        {state.searchHistory.map((item, idx) => (
          <div key={idx} className="p-3 rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-between text-xs">
            <span className="font-bold text-foreground flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> {item}</span>
            <span className="text-[10px] text-muted-foreground font-semibold">Today</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistoryPanel;
