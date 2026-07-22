'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';
import { usePlanner } from '@/hooks/usePlanner';

const loadingTips = [
  'Analyzing optimal travel routes & heritage walk paths...',
  'Curating verified local cafe recommendations...',
  'Calculating budget allocations & emergency buffers...',
  'Fetching weather insights and season indicators...',
];

export const PlannerLoading = () => {
  const { state } = usePlanner();
  const tipIndex = Math.floor((state.generationProgress / 100) * loadingTips.length) % loadingTips.length;

  return (
    <div className="py-12 text-center space-y-6 max-w-md mx-auto">
      <div className="relative w-20 h-20 mx-auto">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-4 border-t-primary border-r-purple-500 border-b-transparent border-l-transparent"
        />
        <div className="absolute inset-0 flex items-center justify-center text-primary">
          <Brain className="w-8 h-8 animate-pulse" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-foreground flex items-center justify-center gap-2">
          Generating AI Itinerary <Sparkles className="w-4 h-4 text-primary" />
        </h3>
        <p className="text-xs text-muted-foreground transition-all duration-300">
          {loadingTips[tipIndex]}
        </p>
      </div>

      <div className="space-y-2">
        <div className="w-full bg-muted/40 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-purple-500 h-full transition-all duration-300"
            style={{ width: `${state.generationProgress}%` }}
          />
        </div>
        <span className="text-xs font-bold text-primary">{state.generationProgress}%</span>
      </div>
    </div>
  );
};

export default PlannerLoading;
