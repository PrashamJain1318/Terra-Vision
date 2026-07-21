'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export interface ActivityCardProps {
  activity: string;
  timestamp: string | Date;
  module?: string;
  status?: string;
}

export const ActivityCard = ({
  activity,
  timestamp,
  module = 'workspace',
}: ActivityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-3.5 rounded-2xl bg-muted/20 border border-border/20 space-y-1"
    >
      <p className="text-xs font-semibold text-foreground">{activity}</p>
      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-primary" />
          {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
        <span>•</span>
        <span className="uppercase font-bold text-primary">{module}</span>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
