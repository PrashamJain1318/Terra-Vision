'use client';

import React from 'react';
import { History, Calendar, MapPin } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const PlannerHistory = () => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-2">
        <History className="w-4 h-4 text-primary" /> Recent Generation History
      </h3>

      <div className="space-y-2">
        <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/30 hover:border-primary/30 transition-all flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="font-bold text-xs text-foreground flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-primary" /> Manali Expedition
            </h4>
            <p className="text-[11px] text-muted-foreground flex items-center gap-2">
              <Calendar className="w-3 h-3" /> Jul 22, 2026 • 4 Days
            </p>
          </div>
          <span className="text-[10px] font-bold text-primary">View Plan</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default PlannerHistory;
