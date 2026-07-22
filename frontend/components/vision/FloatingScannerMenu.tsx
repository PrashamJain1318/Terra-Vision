'use client';

import React from 'react';
import { Camera, Upload, History } from 'lucide-react';
import { useVision } from '@/hooks/useVision';

export const FloatingScannerMenu = () => {
  const { setCameraMode } = useVision();

  return (
    <div className="flex items-center gap-3 p-2 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30 shadow-lg">
      <button
        onClick={() => setCameraMode(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
      >
        <Camera className="w-3.5 h-3.5" /> Camera Mode
      </button>
      <button className="p-2 hover:bg-muted/40 rounded-xl text-muted-foreground hover:text-foreground transition-all">
        <Upload className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-muted/40 rounded-xl text-muted-foreground hover:text-foreground transition-all">
        <History className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FloatingScannerMenu;
