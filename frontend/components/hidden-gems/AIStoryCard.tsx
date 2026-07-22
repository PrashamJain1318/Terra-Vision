'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';

interface AIStoryCardProps {
  story?: string;
}

export const AIStoryCard = ({ story = 'Carved through British-era forestry paths, Potters Hill remains untouched.' }: AIStoryCardProps) => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3">
      <div className="flex items-center gap-2 text-primary">
        <BookOpen className="w-5 h-5" />
        <h3 className="text-base font-extrabold text-foreground">AI Cultural Story</h3>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed italic">{story}</p>
    </div>
  );
};

export default AIStoryCard;
