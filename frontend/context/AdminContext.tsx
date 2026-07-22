'use client';

import { createContext } from 'react';

export interface AdminMetrics {
  totalUsers: number;
  activeUsers: number;
  newRegistrationsToday: number;
  tripsCreated: number;
  aiRequestsTotal: number;
  voiceAiUsageMs: number;
  visionAiScans: number;
  communityPostsTotal: number;
  pendingReportsCount: number;
  serverStatus: 'HEALTHY' | 'DEGRADED' | 'MAINTENANCE';
}

export interface AdminUserItem {
  id: string;
  name: string;
  email: string;
  role: 'superadmin' | 'admin' | 'moderator' | 'support' | 'user';
  status: 'active' | 'suspended' | 'banned';
  verifiedTraveler: boolean;
  createdAt: string;
}

export interface ModerationReportItem {
  id: string;
  contentType: 'post' | 'comment' | 'review' | 'journal';
  contentSnippet: string;
  reporterHandle: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

export interface AdminState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  adminRole: 'superadmin' | 'admin' | 'moderator' | 'support';
  metrics: AdminMetrics;
  usersList: AdminUserItem[];
  reportsList: ModerationReportItem[];
  toggleUserBanStatus: (userId: string) => void;
  toggleUserVerifyStatus: (userId: string) => void;
  resolveModerationReport: (reportId: string, action: 'approve' | 'remove') => void;
}

export const AdminContext = createContext<AdminState | null>(null);

export default AdminContext;
