'use client';

import React from 'react';
import { Flame } from 'lucide-react';

interface SpiceProps {
  level?: string;
}

export const SpiceLevelIndicator = ({ level = 'Medium Spice' }: SpiceProps) => {
  return (
    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-bold">
      <Flame className="w-3.5 h-3.5 fill-red-400" /> {level}
    </span>
  );
};

export default SpiceLevelIndicator;
