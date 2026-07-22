'use client';

import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

export interface SpotReviewProps {
  targetName: string;
  targetType: string;
  author: string;
  rating: number;
  reviewText: string;
  helpfulCount: number;
}

export const SpotReviewCard = ({
  targetName,
  targetType,
  author,
  rating,
  reviewText,
  helpfulCount,
}: SpotReviewProps) => {
  return (
    <div className="p-6 rounded-3xl atlas-card border-border/40 space-y-3 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-editorial text-lg font-extrabold text-foreground">{targetName}</h3>
          <span className="text-[10px] font-mono text-muted-foreground uppercase">{targetType}</span>
        </div>

        <div className="flex items-center gap-1 text-amber-400 font-bold font-mono">
          <Star className="w-4 h-4 fill-current" />
          <span>{rating}.0</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground font-sans leading-relaxed">"{reviewText}"</p>

      <div className="pt-3 border-t border-border/30 flex items-center justify-between text-xs font-mono">
        <span className="text-foreground font-bold">Reviewed by {author}</span>
        <button className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
          <ThumbsUp className="w-3.5 h-3.5" /> {helpfulCount} Helpful
        </button>
      </div>
    </div>
  );
};

export default SpotReviewCard;
