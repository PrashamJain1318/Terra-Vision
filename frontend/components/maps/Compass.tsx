'use client';

import React from 'react';
import { Compass as CompassIcon } from 'lucide-react';

export const Compass = () => {
  return (
    <button
      className="p-2.5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30 text-foreground hover:bg-muted/40 transition-all shadow-md group"
      title="Reset Bearing (North Up)"
    >
      <CompassIcon className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform duration-300" />
    </button>
  );
};

export default Compass;
