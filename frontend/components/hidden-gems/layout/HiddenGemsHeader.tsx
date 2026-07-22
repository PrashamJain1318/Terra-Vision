'use client';

import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { useHiddenGems } from '@/hooks/useHiddenGems';
import HIDDEN_GEM_PROVIDERS from '@/config/hiddenGemProviders';

export const HiddenGemsHeader = () => {
  const { state, setProvider, startDiscovery } = useHiddenGems();

  return (
    <header className="h-16 px-6 bg-card/45 backdrop-blur-xl border-b border-border/40 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-2xl bg-amber-400/10 text-amber-400">
          <Compass className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-sm font-extrabold text-foreground tracking-tight">Hidden Gems AI</h1>
          <p className="text-[11px] text-muted-foreground">Uncrowded & Authentic Experience Discovery</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={state.provider}
          onChange={(e) => setProvider(e.target.value)}
          className="px-3 py-1.5 rounded-full bg-muted/30 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
        >
          {Object.values(HIDDEN_GEM_PROVIDERS).map((p) => (
            <option key={p.id} value={p.id} className="bg-card text-foreground">
              {p.name}
            </option>
          ))}
        </select>

        <button
          onClick={startDiscovery}
          className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" /> AI Discover
        </button>
      </div>
    </header>
  );
};

export default HiddenGemsHeader;
