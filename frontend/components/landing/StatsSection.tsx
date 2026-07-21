'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Countries Covered' },
  { value: '10,000+', label: 'Happy Users' },
  { value: '25,000+', label: 'Itineraries Created' },
  { value: '150,000+', label: 'Spots Explored' },
];

import AnimatedCounter from '../common/AnimatedCounter';
import { useApiQuery } from '@/hooks/useApiQuery';
import landingService from '@/services/landingService';
import { QUERY_KEYS } from '@/services/queryKeys';

export const StatsSection = () => {
  const { data: statsRes } = useApiQuery(
    QUERY_KEYS.LANDING.STATISTICS,
    landingService.getStatistics
  );

  const rawStats = statsRes?.data || [];
  const displayStats = rawStats.length > 0 ? rawStats : [
    { value: '50+', label: 'Countries Covered' },
    { value: '10,000+', label: 'Happy Users' },
    { value: '25,000+', label: 'Itineraries Created' },
    { value: '150,000+', label: 'Spots Explored' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {displayStats.map((stat, idx) => (
            <AnimatedCounter
              key={idx}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
