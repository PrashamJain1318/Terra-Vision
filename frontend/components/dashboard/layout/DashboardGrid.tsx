'use client';

import React from 'react';
import dashboardThemeConfig from '../config/dashboardTheme';

interface DashboardGridProps {
  children: React.ReactNode;
}

export const DashboardGrid = ({ children }: DashboardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
};

interface GridCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const GridCard = ({ title, children, className = '' }: GridCardProps) => {
  return (
    <div className={`${dashboardThemeConfig.card.bg} ${dashboardThemeConfig.card.hover} p-6 space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-2 border-b border-border/10">
        <h4 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          {title}
        </h4>
      </div>
      <div className="text-sm">
        {children}
      </div>
    </div>
  );
};

export default DashboardGrid;
