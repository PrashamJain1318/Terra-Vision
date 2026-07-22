'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface SafeZoneProps {
  name?: string;
}

export const SafeZoneCard = ({ name = 'Heritage Walk Precinct' }: SafeZoneProps) => {
  return (
    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
      <span className="text-xs font-extrabold text-emerald-400 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4" /> {name}
      </span>
      <span className="text-[10px] uppercase font-bold text-emerald-400">Safe Zone</span>
    </div>
  );
};

export default SafeZoneCard;
