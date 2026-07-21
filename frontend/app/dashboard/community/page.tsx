'use client';

import React from 'react';
import GlassCard from '@/components/common/GlassCard';
import { Users, Sparkles } from 'lucide-react';

export default function CommunityPlaceholderPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto text-center space-y-6">
      <GlassCard hoverEffect={false} className="p-12 space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
          <Users className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Phase 11 Feature
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight">Traveler Community</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Connect with local guides, share travel tips, and join community trips in Phase 11.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
