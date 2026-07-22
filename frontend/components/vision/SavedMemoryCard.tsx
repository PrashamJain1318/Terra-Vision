'use client';

import React from 'react';
import { Bookmark, Calendar } from 'lucide-react';

interface SavedMemoryCardProps {
  title: string;
  notes?: string;
  date: string;
}

export const SavedMemoryCard = ({ title, notes, date }: SavedMemoryCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 hover:border-primary/40 transition-all space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary flex items-center gap-1">
          <Bookmark className="w-3.5 h-3.5 fill-primary" /> Memory Record
        </span>
        <span className="text-[10px] text-muted-foreground flex items-center gap-1">
          <Calendar className="w-3 h-3" /> {new Date(date).toLocaleDateString('en-US')}
        </span>
      </div>

      <h4 className="text-sm font-extrabold text-foreground">{title}</h4>
      {notes && <p className="text-xs text-muted-foreground">{notes}</p>}
    </div>
  );
};

export default SavedMemoryCard;
