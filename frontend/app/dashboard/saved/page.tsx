'use client';

import React from 'react';
import SavedPlacesWidget from '@/components/dashboard/widgets/SavedPlacesWidget';

export default function SavedPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold tracking-tight">Saved Places</h2>
      <SavedPlacesWidget />
    </div>
  );
}
