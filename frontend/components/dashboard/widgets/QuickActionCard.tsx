'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface QuickActionCardProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
}

export const QuickActionCard = ({
  label,
  href,
  icon,
  description,
}: QuickActionCardProps) => {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="flex flex-col items-start p-5 rounded-3xl bg-muted/20 border border-border/30 hover:border-primary/40 hover:bg-muted/30 transition-all space-y-3 group w-full"
      >
        <div className="p-3 rounded-2xl bg-background/80 group-hover:scale-110 transition-transform shadow-sm">
          {icon}
        </div>
        <div className="space-y-0.5">
          <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
            {label}
          </h4>
          {description && (
            <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default QuickActionCard;
