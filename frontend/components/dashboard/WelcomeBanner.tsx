'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Quote, Sun } from 'lucide-react';
import CoordinatesTag from '@/components/common/CoordinatesTag';

export interface WelcomeBannerProps {
  userName?: string;
}

export const WelcomeBanner = ({ userName = 'Jane Doe' }: WelcomeBannerProps) => {
  const todayDate = 'Wednesday, Jul 22, 2026';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl p-8 atlas-card border-primary/30 shadow-2xl"
    >
      <div className="relative z-10 space-y-4 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <CoordinatesTag lat="31.6340° N" lon="74.8723° E" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 text-muted-foreground text-xs font-mono font-bold">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span suppressHydrationWarning>{todayDate}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold border border-amber-500/20">
            <Sun className="w-3.5 h-3.5" />
            <span>22°C Sunny</span>
          </div>
        </div>

        <h1 className="font-editorial text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Welcome to Field Workspace, <span className="text-primary italic">{userName}</span>
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed flex items-start gap-2">
          <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 opacity-70" />
          <span>“Travel makes one modest. You see what a tiny place you occupy in the world.” – Gustave Flaubert</span>
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;
