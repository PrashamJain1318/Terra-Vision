'use client';

import React from 'react';
import WelcomeBanner from '@/components/dashboard/widgets/WelcomeBanner';
import StatsWidget from '@/components/dashboard/widgets/StatsWidget';
import QuickActionsWidget from '@/components/dashboard/widgets/QuickActionsWidget';
import RecentTripsWidget from '@/components/dashboard/widgets/RecentTripsWidget';
import RecentMemoriesWidget from '@/components/dashboard/widgets/RecentMemoriesWidget';
import SavedPlacesWidget from '@/components/dashboard/widgets/SavedPlacesWidget';
import ActivityTimelineWidget from '@/components/dashboard/widgets/ActivityTimelineWidget';

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <WelcomeBanner userName="Jane Doe" />

      {/* Stats Counter Row */}
      <StatsWidget />

      {/* Quick Action Buttons */}
      <QuickActionsWidget />

      {/* Dashboard Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentTripsWidget />
        <RecentMemoriesWidget />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SavedPlacesWidget />
        <ActivityTimelineWidget />
      </div>
    </div>
  );
}
