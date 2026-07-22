'use client';

import React, { useState } from 'react';
import { Shield, Zap, Activity, CheckCircle, Database, Server, FileText, Rocket } from 'lucide-react';

const securityTabs = [
  { id: 'overview', label: 'Security Overview', icon: Shield },
  { id: 'performance', label: 'Performance SLA & Bundles', icon: Zap },
  { id: 'observability', label: 'Monitoring & Latency', icon: Activity },
  { id: 'testing', label: 'Automated Test Matrix', icon: CheckCircle },
  { id: 'backup', label: 'Backup & Recovery (DR)', icon: Database },
  { id: 'scalability', label: 'Horizontal Scaling & Rate Limits', icon: Server },
  { id: 'audit', label: 'Compliance & Audit Logs', icon: FileText },
  { id: 'deployment', label: 'Production Release Checklist', icon: Rocket },
];

export const SecuritySidebar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="p-4 rounded-3xl bg-card border border-border/40 space-y-2">
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground px-3 block mb-2">
        Reliability Modules
      </span>
      {securityTabs.map((tab) => {
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

export default SecuritySidebar;
