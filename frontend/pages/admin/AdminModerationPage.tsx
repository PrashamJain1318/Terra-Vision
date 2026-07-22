'use client';

import React from 'react';
import AdminModerationItem from '@/components/admin/AdminModerationItem';
import { useAdmin } from '@/hooks/useAdmin';

export const AdminModerationPage = () => {
  const { reportsList } = useAdmin();

  return (
    <div className="space-y-4">
      {reportsList.map((report) => (
        <AdminModerationItem key={report.id} report={report} />
      ))}
    </div>
  );
};

export default AdminModerationPage;
