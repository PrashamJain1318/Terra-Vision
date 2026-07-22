'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export const EmptySafety = () => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto">
        <Shield className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-extrabold text-foreground">No Threat Warnings Detected</h4>
      <p className="text-xs text-muted-foreground max-w-sm mx-auto">
        Destination currently has a high safety score. Select another target to analyze.
      </p>
    </div>
  );
};

export default EmptySafety;
