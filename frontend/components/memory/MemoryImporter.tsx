'use client';

import React, { useState } from 'react';
import { Download, Check, Camera, Utensils, Compass, MapPin } from 'lucide-react';
import { useMemory } from '@/hooks/useMemory';

export const MemoryImporter = () => {
  const { importMemories, state } = useMemory();
  const [selectedSources, setSelectedSources] = useState(['vision', 'food', 'gems']);

  const toggleSource = (src: string) => {
    if (selectedSources.includes(src)) {
      setSelectedSources(selectedSources.filter((s) => s !== src));
    } else {
      setSelectedSources([...selectedSources, src]);
    }
  };

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
        <Download className="w-4 h-4 text-pink-400" /> Import Travel Memories
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { id: 'vision', label: 'AI Vision Scans', icon: Camera },
          { id: 'food', label: 'Local Food Spots', icon: Utensils },
          { id: 'gems', label: 'Hidden Gems', icon: Compass },
          { id: 'maps', label: 'GPS Routes', icon: MapPin },
        ].map((item) => {
          const Icon = item.icon;
          const isSelected = selectedSources.includes(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggleSource(item.id)}
              className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-pink-500/15 border-pink-500 text-pink-400'
                  : 'bg-muted/20 border-border/20 text-muted-foreground hover:bg-muted/30'
              }`}
            >
              <Icon className="w-4 h-4" /> {item.label}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => importMemories(selectedSources)}
        disabled={state.loading}
        className="w-full py-3 rounded-2xl bg-pink-600 text-white font-extrabold text-xs shadow-lg shadow-pink-600/20 hover:bg-pink-500 transition-all"
      >
        {state.loading ? 'Importing Memories...' : 'Auto-Import Selected Sources'}
      </button>
    </div>
  );
};

export default MemoryImporter;
