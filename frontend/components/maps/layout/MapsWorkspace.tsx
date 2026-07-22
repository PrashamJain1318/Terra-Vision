'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMap } from '@/hooks/useMap';
import { Map, Layers, Navigation, Compass } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const MapsWorkspace = () => {
  const { state } = useMap();

  return (
    <GlassCard hoverEffect={false} className="p-8 space-y-6 relative overflow-hidden">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Engine: {state.provider.toUpperCase()}
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
            Map Visualizer & GIS Canvas
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted/20 px-4 py-2 rounded-2xl border border-border/30">
          <span>Lat: {state.mapCenter.lat}</span>
          <span>•</span>
          <span>Lng: {state.mapCenter.lng}</span>
        </div>
      </div>

      {/* Dynamic Map Canvas Placeholder Workspace */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-[420px] rounded-3xl bg-muted/20 border border-border/30 flex flex-col items-center justify-center text-center p-8 space-y-4 relative overflow-hidden"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center animate-bounce">
          <Navigation className="w-8 h-8" />
        </div>

        <div className="space-y-1 max-w-md">
          <h3 className="text-lg font-extrabold text-foreground">
            [GIS Vector Map Container Placeholder]
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Interactive map rendering, custom markers, itinerary route polyline overlays, and spatial discovery features will mount cleanly inside this adapter workspace.
          </p>
        </div>
      </motion.div>
    </GlassCard>
  );
};

export default MapsWorkspace;
