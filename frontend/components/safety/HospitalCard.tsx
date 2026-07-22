'use client';

import React from 'react';
import { HeartPulse, MapPin } from 'lucide-react';

export const HospitalCard = () => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-red-500/30 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-extrabold uppercase text-red-400 flex items-center gap-1">
          <HeartPulse className="w-3 h-3 text-red-400" /> Nearest Hospital
        </span>
        <h4 className="text-sm font-extrabold text-foreground">Amritsar Central Medical Center</h4>
        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3 text-red-400" /> 1.2 km away • 24/7 ER
        </p>
      </div>
    </div>
  );
};

export default HospitalCard;
