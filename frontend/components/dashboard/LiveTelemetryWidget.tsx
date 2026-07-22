'use client';

import React from 'react';
import { Radio, CloudSun, ShieldAlert, AlertTriangle, Wind, Zap } from 'lucide-react';
import AppBadge from '@/components/ui/AppBadge';

export const LiveTelemetryWidget = () => {
  return (
    <div className="p-3.5 rounded-3xl bg-zinc-950/80 border border-emerald-500/20 shadow-xl backdrop-blur-2xl flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <Radio className="w-4 h-4 animate-pulse" />
        </div>
        <span className="text-xs font-black text-white uppercase tracking-wider">Live Travel Telemetry</span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <AppBadge variant="amber" icon={CloudSun}>
          Light showers at 3:30 PM
        </AppBadge>

        <AppBadge variant="emerald" icon={Wind}>
          AQI 38 (Good • Clear Skies)
        </AppBadge>

        <AppBadge variant="teal" icon={Zap}>
          Goa Sunset Festival (Crowd Normal)
        </AppBadge>

        <AppBadge variant="red" icon={ShieldAlert}>
          SOS Helpline: 112 Active
        </AppBadge>
      </div>
    </div>
  );
};

export default LiveTelemetryWidget;
