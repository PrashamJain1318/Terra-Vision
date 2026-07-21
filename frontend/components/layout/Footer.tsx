'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background/40 backdrop-blur-sm py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:justify-between md:items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} LocalLens AI. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2 md:mt-0">
          Built with Next.js 15, ThreeJS, and Mongoose by the Dev Team.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
