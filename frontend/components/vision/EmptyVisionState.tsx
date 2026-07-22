'use client';

import React from 'react';
import { Eye } from 'lucide-react';

export const EmptyVisionState = () => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
        <Eye className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-extrabold text-foreground">No Landmark Scanned Yet</h4>
      <p className="text-xs text-muted-foreground max-w-sm mx-auto">
        Upload a landmark photo or open live camera to identify historical heritage monuments around you.
      </p>
    </div>
  );
};

export default EmptyVisionState;
