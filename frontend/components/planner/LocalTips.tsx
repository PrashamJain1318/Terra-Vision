'use client';

import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const LocalTips = () => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <h4 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-purple-400" />
        Local Secret Gems
      </h4>

      <div className="space-y-2 text-xs">
        <div className="p-3 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
          <span className="font-bold text-foreground flex items-center gap-1">
            <MapPin className="w-3 h-3 text-primary" /> Quiet Sunset Viewpoint
          </span>
          <p className="text-muted-foreground text-[11px]">
            Walk 15 minutes past the crowd at Ridge to reach Annadale glades for quiet sunset views.
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default LocalTips;
