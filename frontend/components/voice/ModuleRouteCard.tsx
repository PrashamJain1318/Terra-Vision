'use client';

import React from 'react';

interface RouteCardProps {
  title?: string;
  moduleName?: string;
}

export const ModuleRouteCard = ({ title = 'Plan a 5-day trip to Japan', moduleName = 'AI Travel Planner' }: RouteCardProps) => {
  return (
    <div className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-cyan-500/20 flex items-center justify-between">
      <span className="text-xs font-bold text-foreground">"{title}"</span>
      <span className="text-[10px] uppercase font-extrabold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
        {moduleName}
      </span>
    </div>
  );
};

export default ModuleRouteCard;
