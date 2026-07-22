'use client';

import React from 'react';
import { Rss, UserCheck, BookOpen, Users, Star, Award, MessageSquare } from 'lucide-react';
import { useCommunity } from '@/hooks/useCommunity';

const tabs = [
  { id: 'feed', label: 'Community Feed', icon: Rss },
  { id: 'profiles', label: 'Traveler Profiles', icon: UserCheck },
  { id: 'journals', label: 'Travel Journals', icon: BookOpen },
  { id: 'groups', label: 'Travel Groups', icon: Users },
  { id: 'reviews', label: 'Spot Reviews', icon: Star },
  { id: 'gamification', label: 'Badges & Stats', icon: Award },
];

export const CommunitySidebar = () => {
  const { activeTab, setActiveTab } = useCommunity();

  return (
    <div className="p-4 rounded-3xl atlas-card border-border/40 space-y-2">
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground px-3 block mb-2">
        Hub Navigation
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
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
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

export default CommunitySidebar;
