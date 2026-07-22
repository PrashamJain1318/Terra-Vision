'use client';

import React from 'react';
import PersonalizationLayout from './PersonalizationLayout';
import PersonalizationContainer from './PersonalizationContainer';
import PersonalizationHeader from './PersonalizationHeader';
import PersonalizationSidebar from './PersonalizationSidebar';
import PersonalizationOverviewPage from '@/pages/personalization/PersonalizationOverviewPage';
import PersonalizationDnaPage from '@/pages/personalization/PersonalizationDnaPage';
import PersonalizationRecommendationsPage from '@/pages/personalization/PersonalizationRecommendationsPage';
import PersonalizationNotificationsPage from '@/pages/personalization/PersonalizationNotificationsPage';
import PersonalizationPreferencesPage from '@/pages/personalization/PersonalizationPreferencesPage';
import PersonalizationPrivacyPage from '@/pages/personalization/PersonalizationPrivacyPage';
import { usePersonalization } from '@/hooks/usePersonalization';

const PersonalizationContent = () => {
  const { activeTab } = usePersonalization();

  return (
    <PersonalizationContainer>
      <PersonalizationHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <PersonalizationSidebar />
        </div>

        <div className="lg:col-span-9 space-y-6">
          {activeTab === 'overview' && <PersonalizationOverviewPage />}
          {activeTab === 'dna' && <PersonalizationDnaPage />}
          {activeTab === 'recommendations' && <PersonalizationRecommendationsPage />}
          {activeTab === 'notifications' && <PersonalizationNotificationsPage />}
          {activeTab === 'preferences' && <PersonalizationPreferencesPage />}
          {activeTab === 'privacy' && <PersonalizationPrivacyPage />}
        </div>
      </div>
    </PersonalizationContainer>
  );
};

export const PersonalizationWorkspace = () => {
  return (
    <PersonalizationLayout>
      <PersonalizationContent />
    </PersonalizationLayout>
  );
};

export default PersonalizationWorkspace;
