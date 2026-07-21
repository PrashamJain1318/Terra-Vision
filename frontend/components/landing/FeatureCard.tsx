'use client';

import React from 'react';
import GlassCard from '../common/GlassCard';
import IconBox from '../common/IconBox';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <GlassCard className="space-y-4 cursor-pointer">
      <IconBox icon={icon} />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </GlassCard>
  );
};

export default FeatureCard;
