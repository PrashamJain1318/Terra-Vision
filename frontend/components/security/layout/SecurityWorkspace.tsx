'use client';

import React, { useState } from 'react';
import SecurityLayout from './SecurityLayout';
import SecurityContainer from './SecurityContainer';
import SecurityHeader from './SecurityHeader';
import SecuritySidebar from './SecuritySidebar';
import SecurityOverviewPage from '@/pages/security/SecurityOverviewPage';
import SecurityPerformancePage from '@/pages/security/SecurityPerformancePage';
import SecurityObservabilityPage from '@/pages/security/SecurityObservabilityPage';
import SecurityTestingPage from '@/pages/security/SecurityTestingPage';
import SecurityBackupPage from '@/pages/security/SecurityBackupPage';
import SecurityScalabilityPage from '@/pages/security/SecurityScalabilityPage';
import SecurityAuditPage from '@/pages/security/SecurityAuditPage';
import SecurityDeploymentPage from '@/pages/security/SecurityDeploymentPage';

const SecurityContent = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <SecurityContainer>
      <SecurityHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <SecuritySidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="lg:col-span-9 space-y-6">
          {activeTab === 'overview' && <SecurityOverviewPage />}
          {activeTab === 'performance' && <SecurityPerformancePage />}
          {activeTab === 'observability' && <SecurityObservabilityPage />}
          {activeTab === 'testing' && <SecurityTestingPage />}
          {activeTab === 'backup' && <SecurityBackupPage />}
          {activeTab === 'scalability' && <SecurityScalabilityPage />}
          {activeTab === 'audit' && <SecurityAuditPage />}
          {activeTab === 'deployment' && <SecurityDeploymentPage />}
        </div>
      </div>
    </SecurityContainer>
  );
};

export const SecurityWorkspace = () => {
  return (
    <SecurityLayout>
      <SecurityContent />
    </SecurityLayout>
  );
};

export default SecurityWorkspace;
