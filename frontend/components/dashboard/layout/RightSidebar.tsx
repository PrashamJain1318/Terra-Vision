'use client';

import React from 'react';
import { useDashboard } from '@/providers/DashboardProvider';
import { Bell, Calendar, MapPin, X } from 'lucide-react';

export const RightSidebar = () => {
  const { rightPanelOpen, setRightPanelOpen } = useDashboard();

  if (!rightPanelOpen) return null;

  return (
    <aside className="w-80 h-screen sticky top-0 border-l border-border/20 bg-background/50 backdrop-blur-md p-6 flex flex-col justify-between overflow-y-auto hidden xl:flex">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-sm uppercase tracking-wider text-muted-foreground select-none">
            Activity panel
          </h3>
          <button
            onClick={() => setRightPanelOpen(false)}
            className="p-1 hover:bg-muted/50 rounded-full text-muted-foreground hover:text-foreground transition-all"
            aria-label="Close activity panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic User Profile card */}
        <div className="p-4 rounded-2xl border border-border/40 bg-muted/20 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
              JD
            </div>
            <div>
              <h4 className="font-bold text-sm">Jane Doe</h4>
              <span className="text-xs text-muted-foreground">jane.doe@locallens.ai</span>
            </div>
          </div>
        </div>

        {/* Recent Notifications segment */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-foreground">Recent Notifications</h4>
          <div className="space-y-2.5">
            <div className="p-3 rounded-2xl border border-border/30 hover:border-primary/20 transition-all flex gap-3 text-xs">
              <Bell className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Itinerary Created</p>
                <span className="text-[10px] text-muted-foreground">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer calendar preview placeholder */}
      <div className="pt-6 border-t border-border/10 space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5" />
          <span>LocalLens AI Calendar Mockup</span>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
