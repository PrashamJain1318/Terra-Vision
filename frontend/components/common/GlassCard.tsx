'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className = '', hoverEffect = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8 } : {}}
      className={`p-8 rounded-3xl glass transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
