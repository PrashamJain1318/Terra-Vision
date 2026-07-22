'use client';

import React from 'react';
import HiddenGemsLayout from '@/components/hidden-gems/layout/HiddenGemsLayout';
import SavedGemCard from '@/components/hidden-gems/SavedGemCard';

export const SavedHiddenGems = () => {
  return (
    <HiddenGemsLayout>
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider">Saved Hidden Gems</h3>
        <SavedGemCard name="Potters Hill Pine Sanctuary" category="Nature & Pine Trails" location="Shimla, HP" />
      </div>
    </HiddenGemsLayout>
  );
};

export default SavedHiddenGems;
