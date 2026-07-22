'use client';

import { useContext } from 'react';
import { AdminContext } from '@/context/AdminContext';

const defaultFallbackAdminState = {
  activeTab: 'overview',
  setActiveTab: () => {},
  adminRole: 'admin' as const,
  metrics: {
    totalUsers: 0,
    activeUsers: 0,
    newRegistrationsToday: 0,
    tripsCreated: 0,
    aiRequestsTotal: 0,
    voiceAiUsageMs: 0,
    visionAiScans: 0,
    communityPostsTotal: 0,
    pendingReportsCount: 0,
    serverStatus: 'HEALTHY' as const,
  },
  usersList: [],
  reportsList: [],
  toggleUserBanStatus: () => {},
  toggleUserVerifyStatus: () => {},
  resolveModerationReport: () => {},
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  return context || defaultFallbackAdminState;
};

export default useAdmin;
