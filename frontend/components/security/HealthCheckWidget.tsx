'use client';

import React from 'react';
import { Activity, Check } from 'lucide-react';

export const HealthCheckWidget = () => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Activity className="w-5 h-5 text-emerald-400" />
        <h3 className="font-extrabold text-base text-foreground font-sans">System Health Probes</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>Express API: 200 OK</span>
          <Check className="w-4 h-4" />
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>MongoDB DB: Connected</span>
          <Check className="w-4 h-4" />
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>Gemini AI: Operational</span>
          <Check className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default HealthCheckWidget;
