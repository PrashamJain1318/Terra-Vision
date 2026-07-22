'use client';

import React from 'react';

interface BadgeProps {
  label?: string;
}

export const DietaryBadge = ({ label = '100% Pure Vegetarian' }: BadgeProps) => {
  return (
    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
      {label}
    </span>
  );
};

export default DietaryBadge;
