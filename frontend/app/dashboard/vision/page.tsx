'use client';

import React from 'react';
import GlassCard from '@/components/common/GlassCard';
import { Camera, Sparkles } from 'lucide-react';

export default function VisionPlaceholderPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto text-center space-y-6">
      <GlassCard hoverEffect={false} className="p-12 space-y-6">
        <div className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto">
          <Camera className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Phase 10 Feature
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight">AI Vision Landmark Scanner</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Scan and identify monuments using multimodal AI image recognition in Phase 10.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
