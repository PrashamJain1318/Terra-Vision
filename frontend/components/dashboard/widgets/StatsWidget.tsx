'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/common/AnimatedCounter';

interface StatItem {
  key: string;
  value: string;
  label: string;
}

interface StatsWidgetProps {
  stats?: StatItem[] | null;
}

const defaultStats: StatItem[] = [
  { key: 'trips', value: '1', label: 'Trips Planned' },
  { key: 'countries', value: '1', label: 'Countries Visited' },
  { key: 'cities', value: '1', label: 'Cities Visited' },
  { key: 'score', value: '150', label: 'Travel Score' },
];

export const StatsWidget = ({ stats }: StatsWidgetProps) => {
  const displayStats = Array.isArray(stats) && stats.length > 0 ? stats : defaultStats;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {displayStats.map((stat, idx) => (
        <motion.div
          key={stat.key || idx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <AnimatedCounter value={stat.value} label={stat.label} />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsWidget;
