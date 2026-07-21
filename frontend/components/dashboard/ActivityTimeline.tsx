'use client';

import React from 'react';
import { Activity } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';
import ActivityCard, { ActivityCardProps } from './widgets/ActivityCard';

interface ActivityTimelineProps {
  activities?: ActivityCardProps[];
}

const defaultActivities: ActivityCardProps[] = [
  { activity: 'Logged in to dashboard', timestamp: new Date(), module: 'auth', status: 'success' },
  { activity: 'Created Himalayan itinerary', timestamp: new Date(Date.now() - 3600000), module: 'planner', status: 'success' },
];

export const ActivityTimeline = ({ activities = defaultActivities }: ActivityTimelineProps) => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-2">
          <Activity className="w-4 h-4 text-primary" />
          Activity Timeline
        </h3>
      </div>

      <div className="space-y-2.5">
        {activities.map((item, idx) => (
          <ActivityCard key={idx} {...item} />
        ))}
      </div>
    </GlassCard>
  );
};

export default ActivityTimeline;
