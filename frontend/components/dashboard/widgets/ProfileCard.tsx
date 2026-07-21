'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, User } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export interface ProfileCardProps {
  name?: string;
  email?: string;
  travelScore?: number;
  badge?: string;
}

export const ProfileCard = ({
  name = 'Jane Doe',
  email = 'jane.doe@locallens.ai',
  travelScore = 150,
  badge = 'Explorer Level 1',
}: ProfileCardProps) => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-extrabold text-lg shadow-md">
          {name.split(' ').map(n => n[0]).join('')}
        </div>

        <div className="space-y-0.5 min-w-0">
          <h4 className="font-extrabold text-base text-foreground tracking-tight">{name}</h4>
          <p className="text-xs text-muted-foreground truncate">{email}</p>
        </div>
      </div>

      <div className="pt-3 border-t border-border/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-foreground">
          <Award className="w-4 h-4 text-amber-400" />
          <span>{badge}</span>
        </div>

        <div className="flex items-center gap-1 font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{travelScore} pts</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProfileCard;
