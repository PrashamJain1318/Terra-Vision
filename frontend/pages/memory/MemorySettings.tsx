'use client';

import React from 'react';
import MemoryLayout from '@/components/memory/layout/MemoryLayout';
import ThemeSelector from '@/components/memory/ThemeSelector';
import PrivacySelector from '@/components/memory/PrivacySelector';

export const MemorySettings = () => {
  return (
    <MemoryLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Capsule Preferences & Settings</h2>
        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
          <ThemeSelector />
          <PrivacySelector />
        </div>
      </div>
    </MemoryLayout>
  );
};

export default MemorySettings;
