'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground/30">
            404
          </h1>
          <h2 className="text-2xl font-bold tracking-tight">Lost in Destination?</h2>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            The page you're trying to view doesn't exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
