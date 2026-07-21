'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertCircle, Info, CheckCircle2 } from 'lucide-react';

export interface NotificationCardProps {
  message: string;
  type?: 'info' | 'alert' | 'success' | string;
  priority?: 'high' | 'medium' | 'low';
  timestamp?: string | Date;
  read?: boolean;
}

export const NotificationCard = ({
  message,
  type = 'info',
  priority = 'medium',
  timestamp,
  read = false,
}: NotificationCardProps) => {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 text-xs ${
        read
          ? 'bg-muted/10 border-border/20 text-muted-foreground'
          : 'bg-muted/30 border-primary/30 text-foreground shadow-sm'
      }`}
    >
      <div className="mt-0.5 flex-shrink-0">
        {type === 'alert' ? (
          <AlertCircle className="w-4 h-4 text-rose-500" />
        ) : type === 'success' ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        ) : (
          <Info className="w-4 h-4 text-primary" />
        )}
      </div>

      <div className="space-y-1 flex-1">
        <p className="font-medium leading-normal">{message}</p>
        {timestamp && (
          <span className="text-[10px] text-muted-foreground block">
            {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>

      {!read && (
        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
      )}
    </motion.div>
  );
};

export default NotificationCard;
