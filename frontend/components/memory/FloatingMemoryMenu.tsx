'use client';

import React from 'react';
import { Sparkles, Play, Download } from 'lucide-react';
import { useMemory } from '@/hooks/useMemory';

export const FloatingMemoryMenu = () => {
  const { toggleMapReplay, exportPdfCapsule } = useMemory();

  return (
    <div className="flex items-center gap-3 p-2 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30 shadow-lg">
      <button
        onClick={toggleMapReplay}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-600 text-white text-xs font-bold"
      >
        <Play className="w-3.5 h-3.5" /> Replay Route
      </button>
      <button
        onClick={exportPdfCapsule}
        className="p-2 hover:bg-muted/40 rounded-xl text-muted-foreground hover:text-foreground transition-all"
      >
        <Download className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FloatingMemoryMenu;
