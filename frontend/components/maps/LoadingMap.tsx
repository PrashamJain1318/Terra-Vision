'use client';

import React from 'react';
import { Map } from 'lucide-react';

export const LoadingMap = () => {
  return (
    <div className="min-h-[420px] rounded-3xl bg-muted/20 border border-border/30 flex flex-col items-center justify-center text-center p-8 space-y-4">
      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center animate-pulse">
        <Map className="w-7 h-7" />
      </div>
      <p className="text-xs font-bold text-muted-foreground">Initializing GIS Engine & Tiles...</p>
    </div>
  );
};

export default LoadingMap;
