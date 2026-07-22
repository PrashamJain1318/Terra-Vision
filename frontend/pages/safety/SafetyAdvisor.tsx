'use client';

import React from 'react';
import SafetyLayout from '@/components/safety/layout/SafetyLayout';
import AdvisorChat from '@/components/safety/AdvisorChat';

export const SafetyAdvisor = () => {
  return (
    <SafetyLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">AI Safety Advisor</h2>
        <AdvisorChat />
      </div>
    </SafetyLayout>
  );
};

export default SafetyAdvisor;
