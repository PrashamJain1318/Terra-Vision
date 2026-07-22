'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CoordinatesTag from '../common/CoordinatesTag';
import Eyebrow from '../common/Eyebrow';

export const HeroContent = () => {
  return (
    <div className="space-y-6 text-center md:text-left max-w-2xl">
      <CoordinatesTag lat="31.6340° N" lon="74.8723° E" />

      <div className="space-y-3">
        <Eyebrow>YOUR INTELLIGENT TRAVEL FIELD GUIDE</Eyebrow>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-editorial text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground"
        >
          See beyond the <span className="text-primary italic">destination.</span>
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed"
      >
        Plan with intelligence. Explore like a local. Remember every journey. An intelligent field journal from the future combining generative AI planning, 3D cartography, landmark vision, and real-time safety.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-[11px] font-mono font-bold text-muted-foreground/80 uppercase tracking-wider pt-2 flex items-center justify-center md:justify-start gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        AI planning · Local discovery · Safety intelligence · Living memories
      </motion.div>
    </div>
  );
};

export default HeroContent;
