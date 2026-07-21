'use client';

import React from 'react';
import GlassCard from '@/components/common/GlassCard';
import { Compass, Sparkles } from 'lucide-react';

export default function PlannerPlaceholderPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto text-center space-y-6">
      <GlassCard hoverEffect={false} className="p-12 space-y-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Phase 8 Feature
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight">AI Travel Planner</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Our multi-modal AI itinerary engine will be available in Phase 8. Stay tuned!
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
