'use client';

import React from 'react';
import MapsLayout from '@/components/maps/layout/MapsLayout';
import SavedPlacesPanel from '@/components/maps/SavedPlacesPanel';

export const SavedPlacesPage = () => {
  return (
    <MapsLayout>
      <div className="space-y-6">
        <SavedPlacesPanel />
      </div>
    </MapsLayout>
  );
};

export default SavedPlacesPage;
