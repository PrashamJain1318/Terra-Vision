'use client';

import React from 'react';
import RouteStep from './RouteStep';

const mockSteps = [
  { stepNumber: 1, instruction: 'Head north on Mall Road towards Ridge Square', distance: '2.5 km', duration: '5 mins' },
  { stepNumber: 2, instruction: 'Turn right onto NH-05 Alpine Highway', distance: '11.7 km', duration: '30 mins' },
];

export const RouteTimeline = () => {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
        Turn-by-Turn Directions
      </h4>
      <div className="space-y-2">
        {mockSteps.map((step) => (
          <RouteStep key={step.stepNumber} {...step} />
        ))}
      </div>
    </div>
  );
};

export default RouteTimeline;
