'use client';

import React from 'react';
import { Sparkles, Dna, Lightbulb, Bell, Settings, Lock } from 'lucide-react';
import { usePersonalization } from '@/hooks/usePersonalization';

const tabs = [
  { id: 'overview', label: 'DNA Overview & Insights', icon: Sparkles },
  { id: 'dna', label: 'Travel DNA Breakdown', icon: Dna },
  { id: 'recommendations', label: 'Smart Recommendations', icon: Lightbulb },
  { id: 'notifications', label: 'Proactive Alerts', icon: Bell },
  { id: 'preferences', label: 'Preferences Center', icon: Settings },
  { id: 'privacy', label: 'Privacy & Control', icon: Lock },
];

export const PersonalizationSidebar = () => {
  const { activeTab, setActiveTab } = usePersonalization();

  return (
    <div className="p-4 rounded-3xl bg-card border border-border/40 space-y-2">
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground px-3 block mb-2">
        AI Personalization Modules
      </span>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
              isActive
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PersonalizationSidebar;
