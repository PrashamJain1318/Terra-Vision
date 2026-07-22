'use client';

import React from 'react';
import { ShieldCheck, Lock, Zap, RefreshCw } from 'lucide-react';
import { useSecurity } from '@/hooks/useSecurity';

export const SecurityHeader = () => {
  const { mfaActive, sessionTimeRemaining, triggerSecurityScan } = useSecurity();

  return (
    <header className="p-6 rounded-3xl bg-card border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
            ENTERPRISE SECURITY & RELIABILITY CENTER
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Platform Protection Hub
        </h1>
        <p className="text-xs text-muted-foreground font-sans">
          Manage MFA enforcement, rate limiting, Disaster Recovery backups, zero-downtime deployment, and SLA health.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5" />
          <span>MFA: {mfaActive ? 'ACTIVE' : 'DISABLED'}</span>
        </div>

        <button
          onClick={triggerSecurityScan}
          className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Run Vulnerability Scan
        </button>
      </div>
    </header>
  );
};

export default SecurityHeader;
