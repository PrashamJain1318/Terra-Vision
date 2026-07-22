'use client';

import React from 'react';
import SecurityMetricCard from '@/components/security/SecurityMetricCard';
import { Zap, Clock, Cpu } from 'lucide-react';

export const SecurityPerformancePage = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SecurityMetricCard title="Largest Contentful Paint" value="0.85s" subtitle="Sub-second Target (Target: < 1.2s)" icon={Zap} color="text-emerald-400" />
        <SecurityMetricCard title="First Contentful Paint" value="0.42s" subtitle="Target: < 0.6s" icon={Clock} color="text-cyan-400" />
        <SecurityMetricCard title="Time to Interactive" value="1.10s" subtitle="Target: < 1.5s" icon={Cpu} color="text-indigo-400" />
      </div>
    </div>
  );
};

export default SecurityPerformancePage;
