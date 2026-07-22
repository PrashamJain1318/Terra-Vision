'use client';

import React from 'react';
import { Lock } from 'lucide-react';

export const AdminSecurityLogRow = ({
  action,
  role,
  details,
  timestamp,
}: {
  action: string;
  role: string;
  details: string;
  timestamp: string;
}) => {
  return (
    <div className="p-3 rounded-xl bg-muted/20 border border-border/30 flex items-center justify-between text-xs font-mono">
      <div className="flex items-center gap-3">
        <Lock className="w-3.5 h-3.5 text-red-400" />
        <span className="font-extrabold text-foreground">{action}</span>
        <span className="text-muted-foreground">({role})</span>
        <span className="text-muted-foreground font-sans">{details}</span>
      </div>

      <span className="text-muted-foreground text-[10px]">{timestamp}</span>
    </div>
  );
};

export default AdminSecurityLogRow;
