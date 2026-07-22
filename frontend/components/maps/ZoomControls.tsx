'use client';

import React from 'react';
import { useMap } from '@/hooks/useMap';
import { Plus, Minus } from 'lucide-react';

export const ZoomControls = () => {
  const { state, setZoomLevel } = useMap();

  return (
    <div className="flex flex-col rounded-2xl bg-card/60 backdrop-blur-md border border-border/30 shadow-md overflow-hidden">
      <button
        onClick={() => setZoomLevel(Math.min(state.zoomLevel + 1, 20))}
        className="p-2.5 text-foreground hover:bg-muted/40 transition-colors border-b border-border/20"
        title="Zoom In"
      >
        <Plus className="w-4 h-4" />
      </button>
      <button
        onClick={() => setZoomLevel(Math.max(state.zoomLevel - 1, 3))}
        className="p-2.5 text-foreground hover:bg-muted/40 transition-colors"
        title="Zoom Out"
      >
        <Minus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ZoomControls;
