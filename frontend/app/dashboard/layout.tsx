'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import OnboardingModal from '@/components/beta/OnboardingModal';
import FeedbackModal from '@/components/beta/FeedbackModal';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <OnboardingModal />
      {children}
      <FeedbackModal />
    </DashboardLayout>
  );
}
