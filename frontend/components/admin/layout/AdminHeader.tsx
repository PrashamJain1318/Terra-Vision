'use client';

import React from 'react';
import { ShieldCheck, Activity, Bell } from 'lucide-react';
import { useAdmin } from '@/hooks/useAdmin';

export const AdminHeader = () => {
  const { adminRole, metrics } = useAdmin();

  return (
    <header className="p-6 rounded-3xl bg-card border border-red-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-red-500" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
            ENTERPRISE OPERATIONS PORTAL
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Terra Vision Admin Hub
        </h1>
        <p className="text-xs text-muted-foreground font-sans">
          Monitor real-time system metrics, moderate community content, manage RBAC permissions, and review AI costs.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>System: {metrics.serverStatus}</span>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase">
          Role: {adminRole}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
