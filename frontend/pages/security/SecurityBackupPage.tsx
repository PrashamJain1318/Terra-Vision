'use client';

import React from 'react';
import BackupStatusWidget from '@/components/security/BackupStatusWidget';

export const SecurityBackupPage = () => {
  return (
    <div className="space-y-6">
      <BackupStatusWidget />
    </div>
  );
};

export default SecurityBackupPage;
