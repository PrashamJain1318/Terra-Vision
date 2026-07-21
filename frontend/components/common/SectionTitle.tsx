'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionTitle = ({ title, subtitle, align = 'center' }: SectionTitleProps) => {
  const alignClass = align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left';

  return (
    <div className={`space-y-4 ${alignClass}`}>
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground font-light text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
