'use client';

import React from 'react';
import GlassCard from '@/components/common/GlassCard';
import { Map, Sparkles } from 'lucide-react';

export default function MapsPlaceholderPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto text-center space-y-6">
      <GlassCard hoverEffect={false} className="p-12 space-y-6">
        <div className="w-16 h-16 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto">
          <Map className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Phase 9 Feature
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight">Interactive Local Maps</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            3D GIS map overlays and local guide markers will arrive in Phase 9.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
