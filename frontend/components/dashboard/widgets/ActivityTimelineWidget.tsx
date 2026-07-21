'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface ActivityItem {
  activity: string;
  timestamp: string | Date;
  module: string;
  status: string;
}

interface ActivityTimelineWidgetProps {
  activities?: ActivityItem[];
}

const defaultActivities: ActivityItem[] = [
  { activity: 'Logged in to dashboard', timestamp: new Date(), module: 'auth', status: 'success' },
  { activity: 'Created Himalayan itinerary', timestamp: new Date(Date.now() - 3600000), module: 'planner', status: 'success' },
];

export const ActivityTimelineWidget = ({ activities = defaultActivities }: ActivityTimelineWidgetProps) => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          Activity Timeline
        </h3>
        <Activity className="w-4 h-4 text-primary" />
      </div>

      <div className="space-y-3 relative pl-4 border-l border-border/30 ml-2">
        {activities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative space-y-1"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

            <p className="text-xs font-semibold text-foreground">{item.activity}</p>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span>•</span>
              <span className="uppercase font-bold text-primary">{item.module}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ActivityTimelineWidget;
