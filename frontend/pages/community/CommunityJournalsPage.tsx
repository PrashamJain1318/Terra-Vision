'use client';

import React from 'react';
import TravelJournalCard from '@/components/community/TravelJournalCard';

const mockJournals = [
  {
    title: '5 Days in Kyoto: Off-the-Beaten-Path Temples & Culinary Discoveries',
    author: 'Elena Rostova',
    destination: 'Kyoto, Japan',
    summary: 'Arashiyama Bamboo Grove, Golden Pavilion, and tea master workshops in historical Gion.',
    views: 1420,
  },
  {
    title: 'Culinary Expedition Through Amritsar & Old Delhi Bazaars',
    author: 'Marcus Vance',
    destination: 'Amritsar & Delhi, India',
    summary: 'Sampling 100-year-old lassi stalls, butter chicken havelis, and Golden Temple community langar.',
    views: 980,
  },
];

export const CommunityJournalsPage = () => {
  return (
    <div className="space-y-4">
      {mockJournals.map((j, idx) => (
        <TravelJournalCard key={idx} {...j} />
      ))}
    </div>
  );
};

export default CommunityJournalsPage;
