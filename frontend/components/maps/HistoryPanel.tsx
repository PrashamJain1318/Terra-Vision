'use client';

import React from 'react';
import { History, Route, Clock } from 'lucide-react';

const mockHistory = [
  { id: '1', origin: 'Shimla Mall Road', destination: 'Kufri Viewpoint', distance: '14.2 km', duration: '35 mins', date: 'Yesterday' },
  { id: '2', origin: 'Shimla Station', destination: 'Jakhu Hill', distance: '5.8 km', duration: '18 mins', date: '3 days ago' },
];

export const HistoryPanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
          <History className="w-4 h-4 text-primary" /> Route History
        </h3>
        <span className="text-xs text-muted-foreground font-semibold">2 Saved Routes</span>
      </div>

      <div className="space-y-3">
        {mockHistory.map((item) => (
          <div key={item.id} className="p-4 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/30 hover:border-primary/40 transition-all space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-muted-foreground uppercase">{item.date}</span>
              <span className="text-xs font-extrabold text-primary">{item.distance}</span>
            </div>

            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <Route className="w-3.5 h-3.5 text-primary" /> {item.origin} → {item.destination}
              </h4>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {item.duration} travel duration
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;
