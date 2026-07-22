'use client';

import React from 'react';
import HiddenGemsLayout from '@/components/hidden-gems/layout/HiddenGemsLayout';
import SearchHistoryPanel from '@/components/hidden-gems/SearchHistoryPanel';

export const HiddenGemHistory = () => {
  return (
    <HiddenGemsLayout>
      <div className="space-y-6">
        <SearchHistoryPanel />
      </div>
    </HiddenGemsLayout>
  );
};

export default HiddenGemHistory;
