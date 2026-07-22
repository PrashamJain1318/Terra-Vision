'use client';

import React from 'react';

export const PrivacySelector = () => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Capsule Privacy</label>
      <select className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none">
        <option value="private">Private (Only You)</option>
        <option value="shared">Passcode Shared Link</option>
        <option value="public">Public Memory Book</option>
      </select>
    </div>
  );
};

export default PrivacySelector;
