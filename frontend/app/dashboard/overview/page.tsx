'use client';

import React from 'react';
import { useApiQuery } from '@/hooks/useApiQuery';
import { QUERY_KEYS } from '@/services/queryKeys';
import dashboardService from '@/services/dashboardService';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import StatsWidget from '@/components/dashboard/widgets/StatsWidget';
import QuickActionsWidget from '@/components/dashboard/widgets/QuickActionsWidget';
import RecentTripsWidget from '@/components/dashboard/widgets/RecentTripsWidget';
import RecentMemoriesWidget from '@/components/dashboard/widgets/RecentMemoriesWidget';
import SavedPlacesWidget from '@/components/dashboard/widgets/SavedPlacesWidget';
import ActivityTimelineWidget from '@/components/dashboard/widgets/ActivityTimelineWidget';
import ProfileCard from '@/components/dashboard/widgets/ProfileCard';
import NotificationsPanel from '@/components/dashboard/NotificationsPanel';
import NetworkError from '@/components/common/NetworkError';

export default function OverviewPage() {
  const {
    data: overviewData,
    isLoading: overviewLoading,
    isError: overviewError,
    refetch: refetchOverview,
  } = useApiQuery(QUERY_KEYS.DASHBOARD.OVERVIEW, dashboardService.getOverview);

  const { data: statsData } = useApiQuery(
    QUERY_KEYS.DASHBOARD.STATISTICS,
    dashboardService.getStatistics
  );

  const { data: tripsData } = useApiQuery(
    QUERY_KEYS.DASHBOARD.RECENT_TRIPS,
    dashboardService.getRecentTrips
  );

  const { data: memoriesData } = useApiQuery(
    QUERY_KEYS.DASHBOARD.RECENT_MEMORIES,
    dashboardService.getRecentMemories
  );

  const { data: savedData } = useApiQuery(
    QUERY_KEYS.DASHBOARD.SAVED_PLACES,
    dashboardService.getSavedPlaces
  );

  const { data: notifData } = useApiQuery(
    QUERY_KEYS.DASHBOARD.NOTIFICATIONS,
    dashboardService.getNotifications
  );

  const { data: activityData } = useApiQuery(
    QUERY_KEYS.DASHBOARD.ACTIVITY,
    dashboardService.getActivity
  );

  if (overviewError) {
    return (
      <div className="py-12">
        <NetworkError onRetry={refetchOverview} />
      </div>
    );
  }

  const userName = overviewData?.user?.name || 'Jane Doe';
  const userEmail = overviewData?.user?.email || 'jane.doe@locallens.ai';

  return (
    <div className="space-y-8">
      {/* Hero Welcome Section */}
      <WelcomeBanner userName={userName} />

      {/* User Profile Card & Stats Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ProfileCard
            name={userName}
            email={userEmail}
            travelScore={overviewData?.travelScore || 150}
          />
        </div>
        <div className="lg:col-span-2">
          <StatsWidget stats={statsData} />
        </div>
      </div>

      {/* Quick Action Navigation Buttons */}
      <QuickActionsWidget />

      {/* Primary Dashboard Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentTripsWidget trips={tripsData} />
        <RecentMemoriesWidget memories={memoriesData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SavedPlacesWidget places={savedData} />
        <NotificationsPanel notifications={notifData} />
      </div>

      <div>
        <ActivityTimelineWidget activities={activityData} />
      </div>
    </div>
  );
}
