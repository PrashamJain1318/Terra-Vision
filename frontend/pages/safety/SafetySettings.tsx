'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import { useSafety } from '@/hooks/useSafety';

export const SafetySettings = () => {
  const { state } = useSafety();

  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Safety Preferences & Notifications</h2>
        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">Push Safety Alerts</span>
            <input type="checkbox" checked={state.notificationSettings.push} readOnly className="toggle" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">Emergency Location Sharing</span>
            <input type="checkbox" checked={state.privacySettings.shareLocation} readOnly className="toggle" />
          </div>
        </div>
      </div>
    </SafetyLayout>
  );
};

export default SafetySettings;
