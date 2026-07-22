'use client';

import React from 'react';
import AdminUserRow from '@/components/admin/AdminUserRow';
import { useAdmin } from '@/hooks/useAdmin';

export const AdminUsersPage = () => {
  const { usersList } = useAdmin();

  return (
    <div className="space-y-3">
      {usersList.map((user) => (
        <AdminUserRow key={user.id} user={user} />
      ))}
    </div>
  );
};

export default AdminUsersPage;
