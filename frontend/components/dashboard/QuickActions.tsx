'use client';

import React from 'react';
import { Compass, Map, Camera, Heart } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';
import QuickActionCard from './widgets/QuickActionCard';

export const QuickActions = () => {
  const actions = [
    { label: 'Plan Trip', href: '/dashboard/planner', icon: <Compass className="w-5 h-5 text-primary" />, description: 'AI itinerary generator' },
    { label: 'Explore Nearby', href: '/dashboard/maps', icon: <Map className="w-5 h-5 text-indigo-400" />, description: 'Interactive map guide' },
    { label: 'Scan Landmark', href: '/dashboard/vision', icon: <Camera className="w-5 h-5 text-purple-400" />, description: 'AI Vision identifier' },
    { label: 'Saved Places', href: '/dashboard/saved', icon: <Heart className="w-5 h-5 text-rose-400" />, description: 'Your bookmarked spots' },
  ];

  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
        Quick Actions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((act, idx) => (
          <QuickActionCard key={idx} {...act} />
        ))}
      </div>
    </GlassCard>
  );
};

export default QuickActions;
