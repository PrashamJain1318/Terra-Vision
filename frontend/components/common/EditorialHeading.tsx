'use client';

import React, { ReactNode } from 'react';

interface EditorialHeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

export const EditorialHeading = ({
  children,
  as: Component = 'h2',
  className = '',
}: EditorialHeadingProps) => {
  return (
    <Component className={`font-editorial font-bold tracking-tight text-foreground ${className}`}>
      {children}
    </Component>
  );
};

export default EditorialHeading;
