'use client';

import React from 'react';
import { Camera, RefreshCw, X } from 'lucide-react';

interface CameraControlsProps {
  onCapture: () => void;
  onClose: () => void;
}

export const CameraControls = ({ onCapture, onClose }: CameraControlsProps) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
      <button
        onClick={onClose}
        className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/30 text-foreground hover:bg-muted/40 transition-all shadow-md"
        title="Close Camera"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        onClick={onCapture}
        className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/30 active:scale-95 transition-transform"
        title="Capture Frame"
      >
        <Camera className="w-7 h-7" />
      </button>

      <button
        className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/30 text-foreground hover:bg-muted/40 transition-all shadow-md"
        title="Switch Camera"
      >
        <RefreshCw className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CameraControls;
