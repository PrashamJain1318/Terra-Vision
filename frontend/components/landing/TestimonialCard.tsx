'use client';

import React from 'react';
import GlassCard from '../common/GlassCard';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export const TestimonialCard = ({ name, role, content, rating = 5 }: TestimonialCardProps) => {
  return (
    <GlassCard className="space-y-4 flex flex-col justify-between h-full">
      <p className="text-sm italic leading-relaxed text-muted-foreground">
        &ldquo;{content}&rdquo;
      </p>
      <div className="space-y-2 pt-4 border-t border-border/10">
        {/* Simple rating stars visualizer */}
        <div className="flex gap-0.5 text-yellow-500 text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <div className="space-y-0.5">
          <h4 className="font-bold text-sm text-foreground">{name}</h4>
          <span className="text-xs text-primary font-medium">{role}</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;
