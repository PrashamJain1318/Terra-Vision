'use client';

import React from 'react';
import { X, Navigation, Bookmark } from 'lucide-react';

interface MarkerPopupProps {
  marker: { title: string; category: string; address?: string };
  onClose: () => void;
}

export const MarkerPopup = ({ marker, onClose }: MarkerPopupProps) => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-72 p-4 rounded-3xl bg-card/90 backdrop-blur-2xl border border-border/50 shadow-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">{marker.category}</span>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-muted/40 text-muted-foreground">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div>
        <h4 className="text-sm font-extrabold text-foreground">{marker.title}</h4>
        {marker.address && <p className="text-xs text-muted-foreground mt-0.5">{marker.address}</p>}
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-border/20">
        <button className="flex-1 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center gap-1.5">
          <Navigation className="w-3.5 h-3.5" /> Navigate
        </button>
        <button className="p-1.5 rounded-xl bg-muted/30 hover:bg-muted/50 text-foreground border border-border/30">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MarkerPopup;
