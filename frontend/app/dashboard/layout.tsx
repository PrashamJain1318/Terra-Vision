'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import OnboardingModal from '@/components/beta/OnboardingModal';
import FeedbackModal from '@/components/beta/FeedbackModal';
import CommandPalette from '@/components/ui/CommandPalette';
import AITravelChatWidget from '@/components/ai/AITravelChatWidget';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <CommandPalette />
      <OnboardingModal />
      {children}
      <FeedbackModal />
      <AITravelChatWidget />
    </DashboardLayout>
  );
}
