'use client';

import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';

export const SafetySummaryCard = () => {
  const { state } = useSafety();

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3 shadow-xl">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
        <Shield className="w-4 h-4 text-red-500" /> Travel Safety Assessment Summary
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {state.selectedDestination} exhibits low overall threat levels. High police presence around main heritage monuments.
      </p>
    </div>
  );
};

export default SafetySummaryCard;
