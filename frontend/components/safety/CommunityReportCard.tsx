'use client';

import React from 'react';
import { Users, ThumbsUp, CheckCircle } from 'lucide-react';

interface CommunityReportProps {
  title?: string;
  author?: string;
  description?: string;
  votes?: number;
  verified?: boolean;
}

export const CommunityReportCard = ({
  title = 'Safe Walking Path near Heritage Corridor',
  author = 'Traveler_Elena',
  description = 'Well-lit street with heavy police patrols active until 11 PM.',
  votes = 42,
  verified = true,
}: CommunityReportProps) => {
  return (
    <div className="p-5 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-2 shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-muted-foreground flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-pink-400" /> By {author}
        </span>
        {verified && (
          <span className="text-[10px] font-extrabold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
            <CheckCircle className="w-3 h-3" /> VERIFIED REPORT
          </span>
        )}
      </div>

      <h4 className="text-sm font-extrabold text-foreground">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>

      <div className="flex items-center gap-2 pt-1 text-xs font-bold text-pink-400">
        <ThumbsUp className="w-3.5 h-3.5" /> {votes} Helpful Votes
      </div>
    </div>
  );
};

export default CommunityReportCard;
