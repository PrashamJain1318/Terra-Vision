'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';
import FloatingBadge from '@/components/common/FloatingBadge';

export const PlannerHero = () => {
  return (
    <div className="text-center space-y-4 max-w-2xl mx-auto py-4">
      <FloatingBadge
        icon={<Sparkles className="w-3.5 h-3.5 text-primary" />}
        text="Next-Gen AI Itinerary Architect"
      />
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        Plan Your Custom Trip in{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-indigo-400">
          Seconds.
        </span>
      </h1>
      <p className="text-sm text-muted-foreground font-light leading-relaxed">
        Specify your destination, pace, budget, and activities. TerraVision will generate a day-by-day itinerary tailored just for you.
      </p>
    </div>
  );
};

export default PlannerHero;
