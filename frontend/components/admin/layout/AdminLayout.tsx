'use client';

import React from 'react';
import AdminProvider from '@/providers/AdminProvider';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {children}
      </div>
    </AdminProvider>
  );
};

export default AdminLayout;
