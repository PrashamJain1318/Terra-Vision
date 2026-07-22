'use client';

import React from 'react';
import FloatingScannerMenu from './FloatingScannerMenu';

export const VisionToolbar = () => {
  return (
    <div className="flex items-center justify-between p-4 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/30">
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Vision Toolbar</span>
      <FloatingScannerMenu />
    </div>
  );
};

export default VisionToolbar;
