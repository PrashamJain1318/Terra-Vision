'use client';

import React from 'react';
import SpotReviewCard from '@/components/community/SpotReviewCard';

const mockReviews = [
  {
    targetName: 'Kesar Da Dhaba',
    targetType: 'Restaurant',
    author: 'Marcus Vance',
    rating: 5,
    reviewText: 'Slow-cooked dal makhani cooked for 12 hours in clay pots. Served with hot parathas & fresh lassi.',
    helpfulCount: 42,
  },
  {
    targetName: 'Otagi Nenbutsu-ji Temple',
    targetType: 'Hidden Gem',
    author: 'Elena Rostova',
    rating: 5,
    reviewText: '1,200 moss-covered stone rakan statues, each with unique whimsical expressions. Serene and uncrowded.',
    helpfulCount: 38,
  },
];

export const CommunityReviewsPage = () => {
  return (
    <div className="space-y-4">
      {mockReviews.map((r, idx) => (
        <SpotReviewCard key={idx} {...r} />
      ))}
    </div>
  );
};

export default CommunityReviewsPage;
