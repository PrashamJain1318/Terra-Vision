'use client';

import React from 'react';
import AppBadge from './AppBadge';

interface AppHeaderProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  icon?: any;
  children?: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  subtitle,
  badgeText,
  icon: Icon,
  children,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-zinc-950/80 border border-emerald-500/20 shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-1">
        {badgeText && (
          <div className="mb-2">
            <AppBadge variant="emerald" icon={Icon}>
              {badgeText}
            </AppBadge>
          </div>
        )}
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-3">
          {Icon && !badgeText && <Icon className="w-6 h-6 text-emerald-400" />}
          <span>{title}</span>
        </h1>
        {subtitle && <p className="text-xs text-zinc-400 font-semibold">{subtitle}</p>}
      </div>

      {children && <div className="flex items-center gap-2.5 shrink-0">{children}</div>}
    </div>
  );
};

export default AppHeader;
