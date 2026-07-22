'use client';

import React from 'react';
import HistoryCard from './HistoryCard';
import { History } from 'lucide-react';

const mockHistory = [
  { id: '1', name: 'Viceregal Lodge, Shimla', confidence: 0.98, date: 'Today, 10:30 AM' },
  { id: '2', name: 'Christ Church, Mall Road', confidence: 0.96, date: 'Yesterday' },
];

export const ScanHistoryPanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
          <History className="w-4 h-4 text-primary" /> Recent Scan History
        </h3>
        <span className="text-xs text-muted-foreground font-semibold">2 Scans</span>
      </div>

      <div className="space-y-3">
        {mockHistory.map((item) => (
          <HistoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ScanHistoryPanel;
