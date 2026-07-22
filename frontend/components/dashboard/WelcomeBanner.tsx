'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Quote, Sun } from 'lucide-react';

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
      className="relative overflow-hidden rounded-3xl p-8 glass bg-gradient-to-r from-primary/10 via-purple-500/10 to-indigo-500/10 border border-primary/20 shadow-xl"
    >
      <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-4 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome Back</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 text-muted-foreground text-xs font-medium">
            <Calendar className="w-3.5 h-3.5" />
            <span suppressHydrationWarning>{todayDate}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
            <Sun className="w-3.5 h-3.5" />
            <span>22°C Sunny</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-indigo-400">{userName}</span>! 👋
        </h1>

        <p className="text-sm text-muted-foreground font-light leading-relaxed flex items-start gap-2">
          <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 opacity-70" />
          <span>“Travel makes one modest. You see what a tiny place you occupy in the world.” – Gustave Flaubert</span>
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;
