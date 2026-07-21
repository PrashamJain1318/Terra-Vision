'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';

export const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
    >
      <Link
        href="/signup"
        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-full text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
      >
        <Compass className="w-4 h-4 animate-spin-slow" />
        Start Free Trial
      </Link>
      <Link
        href="/login"
        className="w-full sm:w-auto px-8 py-4 border border-border/80 hover:bg-muted/40 font-semibold rounded-full text-sm transition-all flex items-center justify-center gap-2"
      >
        Explore Spots
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

export default HeroButtons;
