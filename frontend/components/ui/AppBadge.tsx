'use client';

import React from 'react';

interface AppBadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'teal' | 'amber' | 'red' | 'cyan' | 'zinc';
  className?: string;
  icon?: any;
}

export const AppBadge: React.FC<AppBadgeProps> = ({
  children,
  variant = 'emerald',
  className = '',
  icon: Icon,
}) => {
  const variantStyles: Record<string, string> = {
    emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    teal: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    amber: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    red: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    zinc: 'bg-zinc-800/60 text-zinc-300 border-zinc-700/50',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider ${variantStyles[variant] || variantStyles.emerald} ${className}`}
    >
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default AppBadge;
