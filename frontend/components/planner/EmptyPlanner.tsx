'use client';

import React from 'react';
import { Compass } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const EmptyPlanner = () => {
  return (
    <GlassCard hoverEffect={false} className="py-12 text-center space-y-4">
      <div className="w-12 h-12 rounded-3xl bg-muted/30 text-muted-foreground flex items-center justify-center mx-auto">
        <Compass className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="font-extrabold text-sm text-foreground">No Saved Itineraries Found</h4>
        <p className="text-xs text-muted-foreground">Start a new planner session to auto-generate custom trips.</p>
      </div>
    </GlassCard>
  );
};

export default EmptyPlanner;
