'use client';

import React from 'react';
import { Bell } from 'lucide-react';

interface NotifProps {
  message?: string;
}

export const NotificationCard = ({ message = 'Overcharging Meter Scam reported near Railway Station' }: NotifProps) => {
  return (
    <div className="p-3.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 flex items-center gap-2">
      <Bell className="w-4 h-4 text-red-500" />
      <span className="text-xs font-semibold text-foreground">{message}</span>
    </div>
  );
};

export default NotificationCard;
