'use client';

import React, { ElementType } from 'react';

export interface AdminStatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ElementType;
  color?: string;
}

export const AdminStatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color = 'text-red-500',
}: AdminStatCardProps) => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-3 shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
        <div className={`p-2 rounded-xl bg-card/80 border border-border/40 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl font-extrabold text-foreground font-mono">{value}</h3>
        {subtitle && <p className="text-xs text-muted-foreground font-sans">{subtitle}</p>}
      </div>
    </div>
  );
};

export default AdminStatCard;
