'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, ArrowDown } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export const HeroButtons = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2"
    >
      <Link
        href={isAuthenticated ? '/dashboard/planner' : '/signup'}
        className="w-full sm:w-auto px-8 py-4 bg-primary hover:opacity-95 text-primary-foreground font-extrabold rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
      >
        <Compass className="w-4 h-4 animate-spin-slow" />
        Plan a Journey
      </Link>
      <a
        href="#experience"
        className="w-full sm:w-auto px-8 py-4 border border-border/70 hover:bg-muted/40 font-extrabold rounded-full text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-foreground"
      >
        Explore the Experience
        <ArrowDown className="w-4 h-4 text-primary" />
      </a>
    </motion.div>
  );
};

export default HeroButtons;
