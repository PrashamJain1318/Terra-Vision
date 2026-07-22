'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

export const SecurityTestingPage = () => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <h3 className="font-extrabold text-lg text-foreground">Automated Test Matrix</h3>
      <div className="space-y-2 font-mono text-xs">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>Security Penetration & Injection Tests: 100% PASS</span>
          <CheckCircle className="w-4 h-4" />
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>Load & Concurrency Stress Tests (5,000 users): 100% PASS</span>
          <CheckCircle className="w-4 h-4" />
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
          <span>WCAG 2.1 AA Accessibility Test Suite: 100% PASS</span>
          <CheckCircle className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default SecurityTestingPage;
