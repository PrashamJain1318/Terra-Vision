'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HeroContent = () => {
  return (
    <div className="space-y-6 text-center md:text-left max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
        AI-Powered Local Travel Guide
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight"
      >
        See Beyond the{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
          Destination.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed"
      >
        LocalLens AI is a premium companion designed to unveil hidden local spots, optimize custom itineraries, and translate vision imagery instantly.
      </motion.p>
    </div>
  );
};

export default HeroContent;
