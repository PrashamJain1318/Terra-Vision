'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingBadgeProps {
  icon?: React.ReactNode;
  text: string;
}

export const FloatingBadge = ({ icon, text }: FloatingBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider"
    >
      {icon && <span className="animate-pulse">{icon}</span>}
      {text}
    </motion.div>
  );
};

export default FloatingBadge;
