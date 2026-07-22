'use client';

import React from 'react';
import { AlertOctagon } from 'lucide-react';

interface UnsafeZoneProps {
  name?: string;
}

export const UnsafeZoneCard = ({ name = 'Unlit alleys near South Gate after midnight' }: UnsafeZoneProps) => {
  return (
    <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-between">
      <span className="text-xs font-extrabold text-red-400 flex items-center gap-2">
        <AlertOctagon className="w-4 h-4" /> {name}
      </span>
      <span className="text-[10px] uppercase font-bold text-red-400">Exercise Caution</span>
    </div>
  );
};

export default UnsafeZoneCard;
