'use client';

import React from 'react';
import ActivityCard from './ActivityCard';
import { Calendar } from 'lucide-react';

interface DayCardProps {
  dayNumber: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
}

export const DayCard = ({ dayNumber, title, morning, afternoon, evening }: DayCardProps) => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-md border border-border/40 space-y-4">
      <div className="flex items-center gap-3 pb-4 border-b border-border/20">
        <div className="w-8 h-8 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs flex items-center justify-center">
          Day {dayNumber}
        </div>
        <h4 className="font-extrabold text-base text-foreground">{title}</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <ActivityCard timeOfDay="morning" title="Morning Exploration" description={morning} />
        <ActivityCard timeOfDay="afternoon" title="Afternoon Walkthrough" description={afternoon} />
        <ActivityCard timeOfDay="evening" title="Evening Sunset View" description={evening} />
      </div>
    </div>
  );
};

export default DayCard;
