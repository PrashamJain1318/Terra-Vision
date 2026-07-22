'use client';

import React from 'react';
import SecurityMetricCard from '@/components/security/SecurityMetricCard';
import SecurityEventRow from '@/components/security/SecurityEventRow';
import BackupStatusWidget from '@/components/security/BackupStatusWidget';
import HealthCheckWidget from '@/components/security/HealthCheckWidget';
import { ShieldCheck, Lock, Activity } from 'lucide-react';
import { useSecurity } from '@/hooks/useSecurity';

export const SecurityOverviewPage = () => {
  const { securityEvents } = useSecurity();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SecurityMetricCard title="Security Posture" value="TLS 1.3 + HSTS" subtitle="Zero-Trust Architecture" icon={ShieldCheck} color="text-emerald-400" />
        <SecurityMetricCard title="MFA Protection" value="TOTP Active" subtitle="All Admin Accounts Enforced" icon={Lock} color="text-cyan-400" />
        <SecurityMetricCard title="API Rate Limiting" value="100 Req / Min" subtitle="Brute-force Shield Enabled" icon={Activity} color="text-indigo-400" />
      </div>

      <HealthCheckWidget />
      <BackupStatusWidget />

      <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
        <h3 className="font-extrabold text-base text-foreground font-sans">Recent Security Event Logs</h3>
        <div className="space-y-2">
          {securityEvents.map((event) => (
            <SecurityEventRow key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityOverviewPage;
