'use client';

import React from 'react';
import { BookOpen, MapPin, Eye } from 'lucide-react';

export interface TravelJournalProps {
  title: string;
  author: string;
  destination: string;
  summary: string;
  views: number;
}

export const TravelJournalCard = ({
  title,
  author,
  destination,
  summary,
  views,
}: TravelJournalProps) => {
  return (
    <div className="p-6 rounded-3xl atlas-card border-border/40 space-y-3 shadow-lg hover:border-primary/40 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-primary flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> {destination}
        </span>
        <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
          <Eye className="w-3 h-3" /> {views} views
        </span>
      </div>

      <h3 className="font-editorial text-xl font-extrabold text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground font-sans leading-relaxed">{summary}</p>

      <div className="pt-3 border-t border-border/30 flex items-center justify-between text-xs font-mono">
        <span className="font-bold text-foreground">By {author}</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" /> Read Journal
        </span>
      </div>
    </div>
  );
};

export default TravelJournalCard;
