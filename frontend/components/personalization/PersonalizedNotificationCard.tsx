'use client';

import React from 'react';
import { Bell, Sparkles } from 'lucide-react';

export const PersonalizedNotificationCard = ({
  message,
  reason,
  timestamp,
}: {
  message: string;
  reason: string;
  timestamp: string;
}) => {
  return (
    <div className="p-4 rounded-2xl bg-card border border-amber-500/30 flex items-start gap-3 text-xs font-sans shadow-md">
      <Bell className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
      <div className="space-y-1">
        <p className="font-extrabold text-foreground">{message}</p>
        <span className="text-[10px] font-mono text-amber-400 block">{reason} • {timestamp}</span>
      </div>
    </div>
  );
};

export default PersonalizedNotificationCard;
