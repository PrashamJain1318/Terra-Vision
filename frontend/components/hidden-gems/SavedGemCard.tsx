'use client';

import React from 'react';
import { Bookmark, MapPin } from 'lucide-react';

interface SavedGemCardProps {
  name: string;
  category?: string;
  location?: string;
}

export const SavedGemCard = ({ name, category = 'Nature', location = 'Shimla, HP' }: SavedGemCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 flex items-center justify-between gap-3">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-primary flex items-center gap-1">
          <Bookmark className="w-3 h-3 fill-primary" /> {category}
        </span>
        <h4 className="text-sm font-extrabold text-foreground">{name}</h4>
        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {location}
        </p>
      </div>
    </div>
  );
};

export default SavedGemCard;
