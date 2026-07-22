'use client';

import React from 'react';

interface TabItem {
  id: string;
  label: string;
  icon?: any;
}

interface AppTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
}

export const AppTabs: React.FC<AppTabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 overflow-x-auto scrollbar-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default AppTabs;
