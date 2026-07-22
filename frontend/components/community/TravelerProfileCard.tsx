'use client';

import React from 'react';
import { UserCheck, MapPin, Award } from 'lucide-react';
import { useCommunity } from '@/hooks/useCommunity';

export interface TravelerProfileProps {
  userId: string;
  name: string;
  handle: string;
  bio: string;
  countriesCount: number;
  citiesCount: number;
  score: number;
  badges: string[];
}

export const TravelerProfileCard = ({
  userId,
  name,
  handle,
  bio,
  countriesCount,
  citiesCount,
  score,
  badges,
}: TravelerProfileProps) => {
  const { followingIds, toggleFollow } = useCommunity();
  const isFollowing = followingIds.includes(userId);

  return (
    <div className="p-6 rounded-3xl atlas-card border-border/40 space-y-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-extrabold text-lg flex items-center justify-center border border-primary/30">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="font-extrabold text-base text-foreground">{name}</h3>
            <span className="text-xs font-mono text-muted-foreground">{handle}</span>
          </div>
        </div>

        <button
          onClick={() => toggleFollow(userId)}
          className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
            isFollowing
              ? 'bg-muted text-foreground border border-border'
              : 'bg-primary text-primary-foreground shadow-md'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>

      <p className="text-xs text-muted-foreground font-sans leading-relaxed">{bio}</p>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/30 text-center font-mono">
        <div className="p-2 rounded-2xl bg-muted/20 border border-border/30">
          <span className="text-sm font-extrabold text-foreground block">{countriesCount}</span>
          <span className="text-[9px] text-muted-foreground uppercase">Countries</span>
        </div>
        <div className="p-2 rounded-2xl bg-muted/20 border border-border/30">
          <span className="text-sm font-extrabold text-foreground block">{citiesCount}</span>
          <span className="text-[9px] text-muted-foreground uppercase">Cities</span>
        </div>
        <div className="p-2 rounded-2xl bg-muted/20 border border-border/30">
          <span className="text-sm font-extrabold text-emerald-400 block">{score}</span>
          <span className="text-[9px] text-muted-foreground uppercase">AI Score</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {badges.map((badge, idx) => (
          <span key={idx} className="passport-stamp text-amber-400 border-amber-400/40">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TravelerProfileCard;
