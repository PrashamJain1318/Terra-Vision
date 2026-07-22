'use client';

import React from 'react';
import PersonalizedNotificationCard from '@/components/personalization/PersonalizedNotificationCard';

const mockNotifs = [
  { message: 'Goa has fewer tourists next week during monsoon. Ideal for your Nature + Budget style.', reason: 'Based on your weather & crowd preferences', timestamp: '2 hours ago' },
  { message: 'A new Hidden Gem matching your 95% Adventure DNA was added in Kyoto.', reason: 'Otagi Nenbutsu-ji Temple match', timestamp: 'Yesterday' },
];

export const PersonalizationNotificationsPage = () => {
  return (
    <div className="space-y-3">
      {mockNotifs.map((n, idx) => (
        <PersonalizedNotificationCard key={idx} {...n} />
      ))}
    </div>
  );
};

export default PersonalizationNotificationsPage;
