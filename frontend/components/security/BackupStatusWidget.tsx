'use client';

import React from 'react';
import { Database, CheckCircle } from 'lucide-react';

export const BackupStatusWidget = () => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Database className="w-5 h-5 text-cyan-400" />
        <h3 className="font-extrabold text-base text-foreground font-sans">Automated Disaster Recovery (DR) Snapshot</h3>
      </div>

      <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs font-mono text-cyan-400">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span>Last Full Backup: bkp-2026-07-22 (48.5 MB) • Verified S3 Storage</span>
        </div>
        <span>RPO: &lt; 1 hr | RTO: &lt; 15 mins</span>
      </div>
    </div>
  );
};

export default BackupStatusWidget;
