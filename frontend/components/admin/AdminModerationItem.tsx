'use client';

import React from 'react';
import { AlertTriangle, Check, Trash2 } from 'lucide-react';
import { ModerationReportItem } from '@/context/AdminContext';
import { useAdmin } from '@/hooks/useAdmin';

export const AdminModerationItem = ({ report }: { report: ModerationReportItem }) => {
  const { resolveModerationReport } = useAdmin();

  return (
    <div className="p-5 rounded-3xl bg-card border border-amber-500/30 space-y-3 text-xs font-mono shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-amber-400 font-bold">
          <AlertTriangle className="w-4 h-4" />
          <span>Report #{report.id} ({report.contentType.toUpperCase()})</span>
        </div>
        <span className="text-muted-foreground">Reported by {report.reporterHandle}</span>
      </div>

      <div className="p-3 rounded-2xl bg-muted/30 border border-border/30 font-sans text-foreground">
        "{report.contentSnippet}"
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border/30">
        <span className="text-muted-foreground">Reason: <strong className="text-red-400">{report.reason}</strong></span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => resolveModerationReport(report.id, 'approve')}
            className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all flex items-center gap-1"
          >
            <Check className="w-3.5 h-3.5" /> Approve Content
          </button>
          <button
            onClick={() => resolveModerationReport(report.id, 'remove')}
            className="px-3 py-1.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition-all flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" /> Remove Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminModerationItem;
