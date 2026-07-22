'use client';

import React from 'react';
import AdminLayout from './AdminLayout';
import AdminContainer from './AdminContainer';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminOverviewPage from '@/pages/admin/AdminOverviewPage';
import AdminUsersPage from '@/pages/admin/AdminUsersPage';
import AdminModerationPage from '@/pages/admin/AdminModerationPage';
import AdminDestinationsPage from '@/pages/admin/AdminDestinationsPage';
import AdminAiOpsPage from '@/pages/admin/AdminAiOpsPage';
import AdminAnalyticsPage from '@/pages/admin/AdminAnalyticsPage';
import AdminNotificationsPage from '@/pages/admin/AdminNotificationsPage';
import AdminSecurityPage from '@/pages/admin/AdminSecurityPage';
import { useAdmin } from '@/hooks/useAdmin';

const AdminContent = () => {
  const { activeTab } = useAdmin();

  return (
    <AdminContainer>
      <AdminHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <AdminSidebar />
        </div>

        <div className="lg:col-span-9 space-y-6">
          {activeTab === 'overview' && <AdminOverviewPage />}
          {activeTab === 'users' && <AdminUsersPage />}
          {activeTab === 'moderation' && <AdminModerationPage />}
          {activeTab === 'destinations' && <AdminDestinationsPage />}
          {activeTab === 'ai_ops' && <AdminAiOpsPage />}
          {activeTab === 'analytics' && <AdminAnalyticsPage />}
          {activeTab === 'notifications' && <AdminNotificationsPage />}
          {activeTab === 'security' && <AdminSecurityPage />}
        </div>
      </div>
    </AdminContainer>
  );
};

export const AdminWorkspace = () => {
  return (
    <AdminLayout>
      <AdminContent />
    </AdminLayout>
  );
};

export default AdminWorkspace;
