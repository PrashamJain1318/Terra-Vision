'use client';

import React from 'react';
import { Compass, Lightbulb, AlertTriangle, PhoneCall } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const TravelInsights = () => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <h4 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-amber-400" />
        AI Local Insights & Etiquette
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="font-bold text-foreground block">Best Season to Visit</span>
          <p className="text-muted-foreground">March to June for pleasant weather; Dec to Feb for snow.</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="font-bold text-foreground block">Local Customs & Etiquette</span>
          <p className="text-muted-foreground">Remove shoes at heritage places; ask before taking photographs.</p>
        </div>
      </div>
    </GlassCard>
  );
};

export default TravelInsights;
