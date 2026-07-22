'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingMemory = () => {
  return (
    <div className="min-h-[300px] rounded-3xl bg-muted/20 border border-border/30 flex flex-col items-center justify-center p-8 text-center space-y-3">
      <Sparkles className="w-8 h-8 text-pink-400 animate-spin" />
      <h4 className="text-sm font-extrabold text-foreground">AI Travel Memory Engine Processing...</h4>
      <p className="text-xs text-muted-foreground">Normalizing photos, landmark scans, food logs, and GPS checkpoints</p>
    </div>
  );
};

export default LoadingMemory;
