'use client';

import React from 'react';
import { MapPin, Clock, Camera, Utensils, Compass } from 'lucide-react';

interface TimelineCardProps {
  title?: string;
  type?: 'photo' | 'landmark_scan' | 'food' | 'hidden_gem' | 'route_checkpoint';
  timestamp?: string;
  location?: string;
  description?: string;
}

export const TimelineCard = ({
  title = 'Golden Temple Precinct Scan',
  type = 'landmark_scan',
  timestamp = '9:00 AM',
  location = 'Heritage Walk, Amritsar',
  description = 'AI Vision scanned 16th-century gilded marble architecture.',
}: TimelineCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'food':
        return Utensils;
      case 'hidden_gem':
        return Compass;
      case 'landmark_scan':
      default:
        return Camera;
    }
  };

  const Icon = getIcon();

  return (
    <div className="p-5 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-2 hover:border-pink-500/40 transition-all shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-pink-400 font-extrabold text-xs">
          <Icon className="w-4 h-4" /> {type.replace('_', ' ').toUpperCase()}
        </div>
        <span className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
          <Clock className="w-3 h-3 text-pink-400" /> {timestamp}
        </span>
      </div>

      <h4 className="text-base font-extrabold text-foreground">{title}</h4>
      <p className="text-xs text-muted-foreground flex items-center gap-1">
        <MapPin className="w-3.5 h-3.5 text-pink-400" /> {location}
      </p>
      <p className="text-xs text-muted-foreground pt-1 leading-relaxed">{description}</p>
    </div>
  );
};

export default TimelineCard;
