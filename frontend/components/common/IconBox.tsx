'use client';

import React from 'react';

interface IconBoxProps {
  icon: React.ReactNode;
  className?: string;
}

export const IconBox = ({ icon, className = '' }: IconBoxProps) => {
  return (
    <div className={`p-3 bg-muted/40 rounded-2xl w-fit ${className}`}>
      {icon}
    </div>
  );
};

export default IconBox;
