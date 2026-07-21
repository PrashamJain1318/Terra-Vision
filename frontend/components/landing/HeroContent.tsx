'use client';

import React from 'react';
import { motion } from 'framer-motion';

import FloatingBadge from '../common/FloatingBadge';

import { useApiQuery } from '@/hooks/useApiQuery';
import landingService from '@/services/landingService';
import { QUERY_KEYS } from '@/services/queryKeys';

export const HeroContent = () => {
  const { data: heroRes } = useApiQuery(
    QUERY_KEYS.LANDING.HERO,
    landingService.getHero
  );

  const heroData = heroRes?.data;
  const title = heroData?.title || 'See Beyond the Destination.';
  const subtitle = heroData?.subtitle || 'LocalLens AI is a premium companion designed to unveil hidden local spots, optimize custom itineraries, and translate vision imagery instantly.';

  return (
    <div className="space-y-6 text-center md:text-left max-w-2xl">
      <FloatingBadge
        icon={<span className="w-2 h-2 rounded-full bg-primary inline-block" />}
        text="AI-Powered Local Travel Guide"
      />

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight"
      >
        {title.includes('Destination.') ? (
          <>
            See Beyond the{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
              Destination.
            </span>
          </>
        ) : (
          title
        )}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default HeroContent;
