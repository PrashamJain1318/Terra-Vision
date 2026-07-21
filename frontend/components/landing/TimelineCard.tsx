'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  step: string;
  title: string;
  description: string;
  index: number;
}

export const TimelineCard = ({ step, title, description, index }: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative space-y-2 pl-4"
    >
      {/* Timeline bubble connector */}
      <div className="absolute -left-[45px] top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center font-bold text-xs text-primary shadow-md">
        {index + 1}
      </div>
      
      <span className="text-sm font-bold text-primary tracking-widest uppercase">
        Step {step}
      </span>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default TimelineCard;
