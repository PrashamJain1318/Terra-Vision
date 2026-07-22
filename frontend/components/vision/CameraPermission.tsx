'use client';

import React from 'react';
import { Camera, ShieldAlert } from 'lucide-react';

interface CameraPermissionProps {
  onRequest: () => void;
}

export const CameraPermission = ({ onRequest }: CameraPermissionProps) => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 text-center space-y-4 max-w-md mx-auto">
      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
        <ShieldAlert className="w-7 h-7" />
      </div>
      <div className="space-y-1">
        <h4 className="text-base font-extrabold text-foreground">Camera Access Required</h4>
        <p className="text-xs text-muted-foreground">
          Allow camera access to scan landmarks, monuments, and historical structures in real-time.
        </p>
      </div>
      <button
        onClick={onRequest}
        className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <Camera className="w-4 h-4" /> Grant Camera Permission
      </button>
    </div>
  );
};

export default CameraPermission;
