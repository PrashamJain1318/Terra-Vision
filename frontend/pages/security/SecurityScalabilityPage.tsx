'use client';

import React from 'react';

export const SecurityScalabilityPage = () => {
  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <h3 className="font-extrabold text-lg text-foreground">Horizontal Scaling & Cloud CDN Readiness</h3>
      <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 font-mono text-xs text-muted-foreground">
        Stateless Node.js Express workers deployed behind AWS ALB / Cloudflare CDN. Zero session affinity requirement.
      </div>
    </div>
  );
};

export default SecurityScalabilityPage;
