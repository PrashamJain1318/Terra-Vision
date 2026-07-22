'use client';

import React from 'react';
import TravelerProfileCard from '@/components/community/TravelerProfileCard';

const mockTravelers = [
  {
    userId: 'user-1',
    name: 'Elena Rostova',
    handle: '@elena_explores',
    bio: 'Culture explorer, tea master student, and landscape photographer.',
    countriesCount: 18,
    citiesCount: 64,
    score: 480,
    badges: ['Explorer', 'Photographer', 'Local Guide'],
  },
  {
    userId: 'user-2',
    name: 'Marcus Vance',
    handle: '@marcus_v',
    bio: 'Culinary wanderer seeking street food stalls & local spice bazaars.',
    countriesCount: 14,
    citiesCount: 42,
    score: 390,
    badges: ['Foodie', 'Top Reviewer'],
  },
  {
    userId: 'user-3',
    name: 'Aria Thorne',
    handle: '@aria_aurora',
    bio: 'Arctic expedition tracker & northern lights photojournalist.',
    countriesCount: 22,
    citiesCount: 78,
    score: 610,
    badges: ['Explorer', 'Safety Champion', 'Community Leader'],
  },
];

export const CommunityProfilesPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mockTravelers.map((t) => (
        <TravelerProfileCard key={t.userId} {...t} />
      ))}
    </div>
  );
};

export default CommunityProfilesPage;
