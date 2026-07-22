'use client';

import React from 'react';

interface AppCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const AppCard: React.FC<AppCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-3xl bg-zinc-950/80 border border-emerald-500/15 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
        hoverEffect ? 'hover:border-emerald-500/40 hover:shadow-emerald-500/10 hover:scale-[1.01]' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AppCard;
