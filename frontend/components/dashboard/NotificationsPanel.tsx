'use client';

import React from 'react';
import { Bell } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';
import NotificationCard, { NotificationCardProps } from './widgets/NotificationCard';

interface NotificationsPanelProps {
  notifications?: NotificationCardProps[] | null;
}

const defaultNotifications: NotificationCardProps[] = [
  {
    message: 'Your trip to Shimla starts tomorrow!',
    type: 'info',
    priority: 'high',
    timestamp: '2026-07-22T04:00:00.000Z',
    read: false,
  },
  {
    message: 'New local guides recommended in your area.',
    type: 'success',
    priority: 'medium',
    timestamp: '2026-07-22T03:00:00.000Z',
    read: true,
  },
];

export const NotificationsPanel = ({
  notifications,
}: NotificationsPanelProps) => {
  const displayNotifications = Array.isArray(notifications) ? notifications : defaultNotifications;

  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-2">
          <Bell className="w-4 h-4 text-primary" />
          Notifications
        </h3>
      </div>

      <div className="space-y-2.5">
        {displayNotifications.map((notif, idx) => (
          <NotificationCard key={idx} {...notif} />
        ))}
      </div>
    </GlassCard>
  );
};

export default NotificationsPanel;
