'use client';

import React from 'react';
import { AlertTriangle, MapPin } from 'lucide-react';

interface ScamAlertProps {
  title?: string;
  type?: string;
  description?: string;
  severity?: 'low' | 'moderate' | 'high' | 'critical';
  location?: string;
}

export const ScamAlertCard = ({
  title = 'Overcharging Meter Scam',
  type = 'scam_taxi',
  description = 'Drivers refusing digital meter rates during late hours.',
  severity = 'high',
  location = 'Amritsar Rail Station',
}: ScamAlertProps) => {
  return (
    <div className="p-5 rounded-3xl bg-card/45 backdrop-blur-xl border border-orange-500/30 space-y-2 shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase text-orange-400 flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5" /> {type.replace('_', ' ')}
        </span>
        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
          {severity.toUpperCase()}
        </span>
      </div>
      <h4 className="text-sm font-extrabold text-foreground">{title}</h4>
      <p className="text-xs text-muted-foreground flex items-center gap-1">
        <MapPin className="w-3 h-3 text-orange-400" /> {location}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed pt-1">{description}</p>
    </div>
  );
};

export default ScamAlertCard;
