'use client';

import React from 'react';
import NotificationsPanel from '@/components/dashboard/NotificationsPanel';

export default function NotificationsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-extrabold tracking-tight">Notifications Center</h2>
      <NotificationsPanel />
    </div>
  );
}
