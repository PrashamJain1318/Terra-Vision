'use client';

import React from 'react';
import { Compass } from 'lucide-react';

interface CoordinatesProps {
  lat?: string;
  lon?: string;
  elevation?: string;
}

export const CoordinatesTag = ({
  lat = '31.6340° N',
  lon = '74.8723° E',
  elevation = '234m',
}: CoordinatesProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
      <Compass className="w-3 h-3 text-primary animate-spin" style={{ animationDuration: '20s' }} />
      <span>{lat}</span>
      <span>•</span>
      <span>{lon}</span>
      <span>•</span>
      <span>ELEV {elevation}</span>
    </div>
  );
};

export default CoordinatesTag;
