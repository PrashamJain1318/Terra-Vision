'use client';

import React from 'react';
import BadgePill from '@/components/community/BadgePill';
import COMMUNITY_BADGES from '@/config/communityBadges';

export const CommunityGamificationPage = () => {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-3xl bg-card border border-primary/30 space-y-2">
        <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
          EXPLORER GAMIFICATION & ACHIEVEMENTS
        </span>
        <h2 className="text-2xl font-extrabold text-foreground">
          Community Badges & AI Travel Rank
        </h2>
        <p className="text-xs text-muted-foreground font-sans">
          Earn verified explorer badges by publishing dispatches, reviewing hidden spots, reporting scam alerts, and founding travel groups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COMMUNITY_BADGES.map((b) => (
          <BadgePill key={b.id} badge={b} />
        ))}
      </div>
    </div>
  );
};

export default CommunityGamificationPage;
