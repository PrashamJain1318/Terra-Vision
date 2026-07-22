'use client';

import React from 'react';
import { Users, UserPlus } from 'lucide-react';

export interface TravelGroupProps {
  name: string;
  category: string;
  membersCount: number;
  description: string;
}

export const TravelGroupCard = ({
  name,
  category,
  membersCount,
  description,
}: TravelGroupProps) => {
  return (
    <div className="p-6 rounded-3xl atlas-card border-border/40 space-y-4 shadow-lg hover:border-primary/40 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-foreground">{name}</h3>
            <span className="text-xs font-mono text-muted-foreground">{category}</span>
          </div>
        </div>

        <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider shadow-md hover:opacity-90 transition-all flex items-center gap-1.5">
          <UserPlus className="w-3.5 h-3.5" /> Join Group
        </button>
      </div>

      <p className="text-xs text-muted-foreground font-sans leading-relaxed">{description}</p>

      <div className="pt-3 border-t border-border/30 text-xs font-mono text-muted-foreground flex items-center justify-between">
        <span>{membersCount} Active Members</span>
        <span className="text-emerald-400 font-bold">Collaborative Sync Active</span>
      </div>
    </div>
  );
};

export default TravelGroupCard;
