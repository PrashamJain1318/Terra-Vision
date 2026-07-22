'use client';

import React from 'react';
import AdminSecurityLogRow from '@/components/admin/AdminSecurityLogRow';

const mockLogs = [
  { action: 'BAN_USER', role: 'superadmin', details: 'Banned spam bot account spam@botnet.xyz', timestamp: '10 mins ago' },
  { action: 'APPROVE_HIDDEN_GEM', role: 'admin', details: 'Approved Otagi Nenbutsu-ji Temple submission', timestamp: '1 hour ago' },
  { action: 'RBAC_UPDATE', role: 'superadmin', details: 'Assigned Moderator role to Marcus Vance', timestamp: '3 hours ago' },
];

export const AdminSecurityPage = () => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <h3 className="font-extrabold text-lg text-foreground">Admin Security Audit Log Trail</h3>
      <div className="space-y-2">
        {mockLogs.map((log, idx) => (
          <AdminSecurityLogRow key={idx} {...log} />
        ))}
      </div>
    </div>
  );
};

export default AdminSecurityPage;
