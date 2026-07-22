'use client';

import React from 'react';
import { ShieldAlert, AlertTriangle, Info } from 'lucide-react';
import { SecurityEvent } from '@/context/SecurityContext';

export const SecurityEventRow = ({ event }: { event: SecurityEvent }) => {
  return (
    <div className="p-3.5 rounded-2xl bg-card border border-border/40 flex items-center justify-between gap-4 text-xs font-mono">
      <div className="flex items-center gap-3">
        {event.severity === 'CRITICAL' && <ShieldAlert className="w-4 h-4 text-red-500" />}
        {event.severity === 'WARNING' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
        {event.severity === 'INFO' && <Info className="w-4 h-4 text-emerald-400" />}

        <div>
          <span className="font-extrabold text-foreground">{event.type}</span>
          <p className="text-muted-foreground font-sans">{event.details}</p>
        </div>
      </div>

      <span className="text-muted-foreground text-[10px]">{event.timestamp}</span>
    </div>
  );
};

export default SecurityEventRow;
