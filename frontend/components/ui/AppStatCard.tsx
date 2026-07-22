'use client';

import React from 'react';
import AppCard from './AppCard';

interface AppStatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: any;
  variant?: 'emerald' | 'teal' | 'amber' | 'cyan';
}

export const AppStatCard: React.FC<AppStatCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = 'emerald',
}) => {
  const iconColor = {
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    teal: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  };

  return (
    <AppCard hoverEffect className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">{title}</span>
        <div className={`p-2.5 rounded-xl border ${iconColor[variant]}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div>
        <div className="text-2xl font-black text-white">{value}</div>
        {subtitle && <p className="text-[11px] text-zinc-400 font-semibold mt-1">{subtitle}</p>}
      </div>
    </AppCard>
  );
};

export default AppStatCard;
