'use client';

import React from 'react';
import { ShieldAlert, Phone } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const SafetyTips = () => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <h4 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-2">
        <ShieldAlert className="w-4 h-4 text-rose-500" />
        Safety & Emergency Guidelines
      </h4>

      <div className="space-y-2 text-xs">
        <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-foreground flex items-center justify-between font-bold">
          <span>Tourist Emergency Helpline</span>
          <span className="flex items-center gap-1 text-rose-400">
            <Phone className="w-3.5 h-3.5" /> 112 / 1364
          </span>
        </div>
        <p className="text-muted-foreground text-[11px] leading-relaxed">
          Keep offline emergency contacts saved. Avoid unlit mountain trails after sunset and travel with registered guides.
        </p>
      </div>
    </GlassCard>
  );
};

export default SafetyTips;
