'use client';

import React from 'react';
import { Eye, Sparkles } from 'lucide-react';

export const VisionLoading = () => {
  return (
    <div className="min-h-[360px] rounded-3xl bg-muted/20 border border-border/30 flex flex-col items-center justify-center text-center p-8 space-y-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center animate-spin">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-extrabold text-foreground">Analyzing Image with AI Vision...</h4>
        <p className="text-xs text-muted-foreground">Extracting architectural style, historical context, and nearby spots</p>
      </div>
    </div>
  );
};

export default VisionLoading;
