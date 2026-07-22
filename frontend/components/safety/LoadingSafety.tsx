'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export const LoadingSafety = () => {
  return (
    <div className="min-h-[300px] rounded-3xl bg-muted/20 border border-border/30 flex flex-col items-center justify-center p-8 text-center space-y-3">
      <Shield className="w-8 h-8 text-red-500 animate-spin" />
      <h4 className="text-sm font-extrabold text-foreground">AI Scam Shield Analyzing Destination...</h4>
      <p className="text-xs text-muted-foreground">Evaluating crime feeds, scam taxonomies, and emergency proximity</p>
    </div>
  );
};

export default LoadingSafety;
