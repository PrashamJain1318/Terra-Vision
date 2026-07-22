'use client';

import React from 'react';
import TravelGroupCard from '@/components/community/TravelGroupCard';

const mockGroups = [
  {
    name: 'Backpackers India',
    category: 'Backpackers & Solo',
    membersCount: 1420,
    description: 'Budget travel tips, train routes, and hostel meetups across India.',
  },
  {
    name: 'Europe 2027 Expeditions',
    category: 'Culture',
    membersCount: 890,
    description: 'Collaborative itinerary planning for European summer trips.',
  },
  {
    name: 'Food Explorers Kyoto',
    category: 'Culinary',
    membersCount: 650,
    description: 'Authentic ramen shops, matcha masters, and street markets.',
  },
];

export const CommunityGroupsPage = () => {
  return (
    <div className="space-y-4">
      {mockGroups.map((g, idx) => (
        <TravelGroupCard key={idx} {...g} />
      ))}
    </div>
  );
};

export default CommunityGroupsPage;
