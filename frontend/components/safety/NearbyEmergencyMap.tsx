'use client';

import React from 'react';
import { HeartPulse } from 'lucide-react';

export const NearbyEmergencyMap = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-red-500/20 text-center text-xs font-semibold text-muted-foreground space-y-1">
      <HeartPulse className="w-5 h-5 text-red-500 mx-auto" />
      <span>[Nearest Hospital & Police Station Radar Map]</span>
    </div>
  );
};

export default NearbyEmergencyMap;
