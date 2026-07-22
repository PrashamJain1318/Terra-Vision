'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const AlertBanner = () => {
  return (
    <div className="w-full p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-amber-400 text-xs font-bold">
      <span className="flex items-center gap-2">
        <AlertTriangle className="w-4 h-4" /> Exercise vigilance in crowded heritage market zones after dark.
      </span>
    </div>
  );
};

export default AlertBanner;
