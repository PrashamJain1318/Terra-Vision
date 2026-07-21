'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/common/GlassCard';

export interface StatisticsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  loading?: boolean;
}

export const StatisticsCard = ({
  title,
  value,
  change,
  trend = 'up',
  icon,
  loading = false,
}: StatisticsCardProps) => {
  if (loading) {
    return (
      <div className="p-6 rounded-3xl glass space-y-3 animate-pulse">
        <div className="h-4 w-24 bg-muted/40 rounded-md" />
        <div className="h-8 w-16 bg-muted/40 rounded-md" />
      </div>
    );
  }

  return (
    <GlassCard hoverEffect className="space-y-3 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </span>
        {icon && <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">{icon}</div>}
      </div>

      <div className="space-y-1">
        <div className="text-3xl font-extrabold tracking-tight text-foreground">{value}</div>
        {change && (
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                trend === 'up'
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                  : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
              }`}
            >
              {change}
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default StatisticsCard;
