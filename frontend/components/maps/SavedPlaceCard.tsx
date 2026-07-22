'use client';

import React from 'react';
import { Bookmark, MapPin, Trash2 } from 'lucide-react';

interface SavedPlaceCardProps {
  name: string;
  category: string;
  address: string;
}

export const SavedPlaceCard = ({ name, category, address }: SavedPlaceCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 hover:border-primary/40 transition-all flex items-center justify-between gap-3 group">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
          <Bookmark className="w-4 h-4 fill-amber-400" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{category}</span>
          <h4 className="text-xs font-bold text-foreground">{name}</h4>
          <p className="text-[11px] text-muted-foreground">{address}</p>
        </div>
      </div>

      <button className="p-2 rounded-xl text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-colors">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SavedPlaceCard;
