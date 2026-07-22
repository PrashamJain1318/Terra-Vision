'use client';

import React from 'react';
import DayCard from './DayCard';

interface DayTimelineProps {
  days?: Array<{
    day: number;
    title: string;
    morning: string;
    afternoon: string;
    evening: string;
  }>;
}

export const DayTimeline = ({ days }: DayTimelineProps) => {
  const displayDays = days && days.length > 0 ? days : [
    {
      day: 1,
      title: 'Arrival & Scenic Heritage Walk',
      morning: 'Check in to hotel, morning coffee at Mall Road cafe.',
      afternoon: 'Explore local bazaar and heritage buildings.',
      evening: 'Sunset viewpoint at Ridge promenade.',
    },
    {
      day: 2,
      title: 'Valley Nature Excursion',
      morning: 'Morning trek to Jakhoo Temple viewpoint.',
      afternoon: 'Picnic near quiet pine forest trails.',
      evening: 'Local handicraft shopping and cozy dinner.',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-extrabold text-foreground tracking-tight">Day-by-Day Itinerary</h3>
      <div className="space-y-4">
        {displayDays.map((d) => (
          <DayCard key={d.day} dayNumber={d.day} title={d.title} morning={d.morning} afternoon={d.afternoon} evening={d.evening} />
        ))}
      </div>
    </div>
  );
};

export default DayTimeline;
