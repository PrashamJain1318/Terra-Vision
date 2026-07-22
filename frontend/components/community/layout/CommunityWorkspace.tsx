'use client';

import React, { useState } from 'react';
import CommunityLayout from './CommunityLayout';
import CommunityContainer from './CommunityContainer';
import CommunityHeader from './CommunityHeader';
import CommunitySidebar from './CommunitySidebar';
import CommunityFeedPage from '@/pages/community/CommunityFeedPage';
import CommunityProfilesPage from '@/pages/community/CommunityProfilesPage';
import CommunityJournalsPage from '@/pages/community/CommunityJournalsPage';
import CommunityGroupsPage from '@/pages/community/CommunityGroupsPage';
import CommunityReviewsPage from '@/pages/community/CommunityReviewsPage';
import CommunityGamificationPage from '@/pages/community/CommunityGamificationPage';
import CreatePostModal from '../CreatePostModal';
import { useCommunity } from '@/hooks/useCommunity';

const CommunityContent = () => {
  const { activeTab } = useCommunity();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CommunityContainer>
      <CommunityHeader onOpenCreateModal={() => setIsModalOpen(true)} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <CommunitySidebar />
        </div>

        <div className="lg:col-span-9 space-y-6">
          {activeTab === 'feed' && <CommunityFeedPage />}
          {activeTab === 'profiles' && <CommunityProfilesPage />}
          {activeTab === 'journals' && <CommunityJournalsPage />}
          {activeTab === 'groups' && <CommunityGroupsPage />}
          {activeTab === 'reviews' && <CommunityReviewsPage />}
          {activeTab === 'gamification' && <CommunityGamificationPage />}
        </div>
      </div>

      {isModalOpen && <CreatePostModal onClose={() => setIsModalOpen(false)} />}
    </CommunityContainer>
  );
};

export const CommunityWorkspace = () => {
  return (
    <CommunityLayout>
      <CommunityContent />
    </CommunityLayout>
  );
};

export default CommunityWorkspace;
