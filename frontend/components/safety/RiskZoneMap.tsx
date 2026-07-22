'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export const RiskZoneMap = () => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-red-500" /> 3D Geofenced Safety Risk Zone Map
        </h3>
        <span className="text-[10px] font-extrabold text-emerald-400">GIS Layer Active</span>
      </div>
      <div className="min-h-[180px] rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-center text-xs font-semibold text-muted-foreground">
        [3D Polygon Geofence Polygon Canvas]
      </div>
    </div>
  );
};

export default RiskZoneMap;
