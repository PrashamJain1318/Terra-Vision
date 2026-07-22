'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface ExperienceScoreCardProps {
  score?: number;
}

export const ExperienceScoreCard = ({ score = 9.6 }: ExperienceScoreCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-amber-400/30 flex items-center justify-between">
      <span className="text-xs font-extrabold text-foreground">AI Experience Score</span>
      <span className="text-xs font-extrabold text-amber-400 flex items-center gap-1 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
        <Star className="w-3.5 h-3.5 fill-amber-400" /> {score} / 10
      </span>
    </div>
  );
};

export default ExperienceScoreCard;
