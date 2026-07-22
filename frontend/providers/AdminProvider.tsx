'use client';

import React, { useState } from 'react';
import { AdminContext, AdminMetrics, AdminUserItem, ModerationReportItem } from '@/context/AdminContext';

const mockMetrics: AdminMetrics = {
  totalUsers: 14850,
  activeUsers: 3420,
  newRegistrationsToday: 184,
  tripsCreated: 8940,
  aiRequestsTotal: 142500,
  voiceAiUsageMs: 8490000,
  visionAiScans: 28400,
  communityPostsTotal: 12400,
  pendingReportsCount: 4,
  serverStatus: 'HEALTHY',
};

const mockUsers: AdminUserItem[] = [
  { id: 'u1', name: 'Elena Rostova', email: 'elena@explores.ai', role: 'admin', status: 'active', verifiedTraveler: true, createdAt: '2025-11-12' },
  { id: 'u2', name: 'Marcus Vance', email: 'marcus@foodie.com', role: 'moderator', status: 'active', verifiedTraveler: true, createdAt: '2025-12-04' },
  { id: 'u3', name: 'Aria Thorne', email: 'aria@aurora.is', role: 'user', status: 'active', verifiedTraveler: false, createdAt: '2026-01-18' },
  { id: 'u4', name: 'Suspicious Bot Account', email: 'spam@botnet.xyz', role: 'user', status: 'banned', verifiedTraveler: false, createdAt: '2026-07-21' },
];

const mockReports: ModerationReportItem[] = [
  { id: 'rep-1', contentType: 'post', contentSnippet: 'Unverified commercial promo for hotel booking...', reporterHandle: '@marcus_v', reason: 'Spam / Commercial advertising', status: 'pending' },
  { id: 'rep-2', contentType: 'review', contentSnippet: 'False claims regarding visa requirement...', reporterHandle: '@elena_explores', reason: 'Misinformation', status: 'pending' },
];

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [adminRole] = useState<'superadmin' | 'admin' | 'moderator' | 'support'>('superadmin');
  const [metrics] = useState<AdminMetrics>(mockMetrics);
  const [usersList, setUsersList] = useState<AdminUserItem[]>(mockUsers);
  const [reportsList, setReportsList] = useState<ModerationReportItem[]>(mockReports);

  const toggleUserBanStatus = (userId: string) => {
    setUsersList((prev) =>
      prev.map((u) =>
        u.id === userId
          ? { ...u, status: u.status === 'banned' ? 'active' : 'banned' }
          : u
      )
    );
  };

  const toggleUserVerifyStatus = (userId: string) => {
    setUsersList((prev) =>
      prev.map((u) =>
        u.id === userId ? { ...u, verifiedTraveler: !u.verifiedTraveler } : u
      )
    );
  };

  const resolveModerationReport = (reportId: string, action: 'approve' | 'remove') => {
    setReportsList((prev) =>
      prev.map((r) =>
        r.id === reportId
          ? { ...r, status: 'resolved' }
          : r
      )
    );
  };

  return (
    <AdminContext.Provider
      value={{
        activeTab,
        setActiveTab,
        adminRole,
        metrics,
        usersList,
        reportsList,
        toggleUserBanStatus,
        toggleUserVerifyStatus,
        resolveModerationReport,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
