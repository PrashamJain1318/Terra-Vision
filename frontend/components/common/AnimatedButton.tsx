'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const AnimatedButton = ({ children, variant = 'primary', className = '', ...props }: AnimatedButtonProps) => {
  const baseStyles = 'inline-flex px-8 py-4 font-semibold rounded-full text-sm transition-all items-center justify-center gap-2';
  const variantStyles = variant === 'primary' 
    ? 'bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/20' 
    : 'border border-border/80 hover:bg-muted/40 text-foreground';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
