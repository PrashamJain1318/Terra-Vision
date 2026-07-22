'use client';

import React from 'react';
import TravelDnaCard from '@/components/personalization/TravelDnaCard';
import { usePersonalization } from '@/hooks/usePersonalization';

export const PersonalizationDnaPage = () => {
  const { travelDna } = usePersonalization();

  return (
    <div className="space-y-6">
      <TravelDnaCard dna={travelDna} />
    </div>
  );
};

export default PersonalizationDnaPage;
