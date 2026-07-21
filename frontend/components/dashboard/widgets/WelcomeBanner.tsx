'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Quote } from 'lucide-react';

interface WelcomeBannerProps {
  userName?: string;
}

export const WelcomeBanner = ({ userName = 'Jane Doe' }: WelcomeBannerProps) => {
  const todayDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const quotes = [
    "“Travel makes one modest. You see what a tiny place you occupy in the world.” – Gustave Flaubert",
    "“To travel is to live.” – Hans Christian Andersen",
    "“The journey of a thousand miles begins with a single step.” – Lao Tzu",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl p-8 glass bg-gradient-to-r from-primary/10 via-purple-500/10 to-indigo-500/10 border border-primary/20 shadow-xl"
    >
      {/* Background glow orb */}
      <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-4 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome Back</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 text-muted-foreground text-xs font-medium">
            <Calendar className="w-3.5 h-3.5" />
            <span>{todayDate}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-indigo-400">{userName}</span>! 👋
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed flex items-start gap-2">
          <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1 opacity-70" />
          <span>{randomQuote}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;
