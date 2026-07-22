'use client';

import React from 'react';
import { Award } from 'lucide-react';
import { CommunityBadge } from '@/config/communityBadges';

export const BadgePill = ({ badge }: { badge: CommunityBadge }) => {
  return (
    <div className="p-4 rounded-2xl atlas-card border-border/40 space-y-2 flex items-start gap-3">
      <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
        <Award className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-extrabold text-foreground">{badge.name}</h4>
        <p className="text-xs text-muted-foreground font-sans">{badge.description}</p>
      </div>
    </div>
  );
};

export default BadgePill;
