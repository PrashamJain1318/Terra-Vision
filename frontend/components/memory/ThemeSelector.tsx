'use client';

import React from 'react';

export const ThemeSelector = () => {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Memory Book Theme</label>
      <select className="w-full px-4 py-2.5 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none">
        <option value="Memory Rose">Memory Rose (Glassmorphism Pink)</option>
        <option value="Aurora Violet">Aurora Violet (Deep Night Glow)</option>
        <option value="Gold Sunset">Gold Sunset (Heritage Ochre)</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
