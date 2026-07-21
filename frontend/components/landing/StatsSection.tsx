'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Countries Covered' },
  { value: '10,000+', label: 'Happy Users' },
  { value: '25,000+', label: 'Itineraries Created' },
  { value: '150,000+', label: 'Spots Explored' },
];

export const StatsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-2 p-6 rounded-2xl glass"
            >
              <div className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
