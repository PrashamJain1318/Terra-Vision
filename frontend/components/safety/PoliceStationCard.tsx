'use client';

import React from 'react';
import { ShieldAlert, MapPin } from 'lucide-react';

export const PoliceStationCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-indigo-500/30 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-indigo-400 flex items-center gap-1">
          <ShieldAlert className="w-3 h-3 text-indigo-400" /> Tourist Police Station
        </span>
        <h4 className="text-sm font-extrabold text-foreground">Heritage Walk Precinct Police Post</h4>
        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3 text-indigo-400" /> 400 meters away
        </p>
      </div>
    </div>
  );
};

export default PoliceStationCard;
