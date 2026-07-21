'use client';

import React from 'react';
import ProfileCard from '@/components/dashboard/widgets/ProfileCard';

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-extrabold tracking-tight">User Profile</h2>
      <ProfileCard name="Jane Doe" email="jane.doe@locallens.ai" travelScore={150} />
    </div>
  );
}
