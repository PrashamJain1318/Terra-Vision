'use client';

import React from 'react';
import GlassCard from '@/components/common/GlassCard';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-extrabold tracking-tight">Account Settings</h2>
      <GlassCard hoverEffect={false} className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-sm">Preferences</h3>
        </div>
        <p className="text-xs text-muted-foreground">
          Manage your notification settings, dark mode preferences, and travel privacy options.
        </p>
      </GlassCard>
    </div>
  );
}
