'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';

export const SafetyScoreCard = () => {
  const { state } = useSafety();

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-red-500/20 space-y-2 shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Overall Safety Score</span>
        <ShieldCheck className="w-5 h-5 text-emerald-400" />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-extrabold text-emerald-400">{state.safetyScore}</span>
        <span className="text-xs text-muted-foreground font-semibold">/ 100 Index</span>
      </div>
      <p className="text-[11px] text-muted-foreground pt-1">
        Normalized from real-time crime feeds, emergency proximity, and scam frequency.
      </p>
    </div>
  );
};

export default SafetyScoreCard;
