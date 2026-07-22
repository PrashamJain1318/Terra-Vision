'use client';

import React from 'react';
import { Clock } from 'lucide-react';

interface BestVisitTimeCardProps {
  time?: string;
}

export const BestVisitTimeCard = ({ time = '7:30 AM - 10:00 AM' }: BestVisitTimeCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-between">
      <span className="text-xs font-extrabold text-foreground flex items-center gap-1.5">
        <Clock className="w-4 h-4 text-emerald-400" /> Best Visit Time
      </span>
      <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
        {time}
      </span>
    </div>
  );
};

export default BestVisitTimeCard;
