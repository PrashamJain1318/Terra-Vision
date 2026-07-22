'use client';

import React from 'react';
import AdminProvider from '@/providers/AdminProvider';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AdminProvider>
      <div className="space-y-6">
        {children}
      </div>
    </AdminProvider>
  );
};

export default AdminLayout;
