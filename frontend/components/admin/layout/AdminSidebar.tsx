'use client';

import React from 'react';
import { LayoutDashboard, Users, ShieldAlert, Map, Cpu, BarChart3, Bell, Lock } from 'lucide-react';
import { useAdmin } from '@/hooks/useAdmin';

const adminTabs = [
  { id: 'overview', label: 'Operations Overview', icon: LayoutDashboard },
  { id: 'users', label: 'User Management', icon: Users },
  { id: 'moderation', label: 'Content Moderation', icon: ShieldAlert },
  { id: 'destinations', label: 'Destinations & Spots', icon: Map },
  { id: 'ai_ops', label: 'AI Operations & Token Costs', icon: Cpu },
  { id: 'analytics', label: 'Business Analytics', icon: BarChart3 },
  { id: 'notifications', label: 'Notification Center', icon: Bell },
  { id: 'security', label: 'Security & Audit Logs', icon: Lock },
];

export const AdminSidebar = () => {
  const { activeTab, setActiveTab } = useAdmin();

  return (
    <div className="p-4 rounded-3xl bg-card border border-border/40 space-y-2">
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground px-3 block mb-2">
        Admin Modules
      </span>
      {adminTabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
              isActive
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
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

export default AdminSidebar;
