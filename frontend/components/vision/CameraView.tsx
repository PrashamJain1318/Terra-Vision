'use client';

import React, { useState } from 'react';
import CameraOverlay from './CameraOverlay';
import CameraControls from './CameraControls';
import CameraPermission from './CameraPermission';
import { useVision } from '@/hooks/useVision';

export const CameraView = () => {
  const { setCameraMode, startAnalysis } = useVision();
  const [hasPermission, setHasPermission] = useState(true);

  if (!hasPermission) {
    return <CameraPermission onRequest={() => setHasPermission(true)} />;
  }

  return (
    <div className="relative min-h-[460px] rounded-3xl bg-black border border-border/40 overflow-hidden flex flex-col justify-between p-6">
      {/* Simulation Camera Live Video Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900 to-black opacity-90 flex items-center justify-center">
        <span className="text-xs font-semibold text-muted-foreground animate-pulse">
          [Live Camera WebRTC Video Feed Active]
        </span>
      </div>

      <CameraOverlay />
      <CameraControls
        onCapture={() => startAnalysis()}
        onClose={() => setCameraMode(false)}
      />
    </div>
  );
};

export default CameraView;
