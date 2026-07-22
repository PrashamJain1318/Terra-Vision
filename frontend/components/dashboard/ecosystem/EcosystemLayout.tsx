'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Radio, Download, Car, Watch, LayoutGrid, CheckCircle2, Wifi, WifiOff } from 'lucide-react';
import { syncEngine } from '@/services/syncEngine';

interface EcosystemLayoutProps {
  children: React.ReactNode;
}

const TABS = [
  { name: 'Ecosystem Hub', href: '/dashboard/ecosystem', icon: Radio },
  { name: 'Offline Travel Center', href: '/dashboard/ecosystem/offline', icon: Download },
  { name: 'Car Mode (CarPlay / Auto)', href: '/dashboard/ecosystem/car', icon: Car },
  { name: 'Smartwatch Companion', href: '/dashboard/ecosystem/watch', icon: Watch },
  { name: 'Smart Travel Widgets', href: '/dashboard/ecosystem/widgets', icon: LayoutGrid },
];

export default function EcosystemLayout({ children }: EcosystemLayoutProps) {
  const pathname = usePathname();
  const [syncStatus, setSyncStatus] = React.useState({ isOnline: true, pendingCount: 0 });

  React.useEffect(() => {
    const unsubscribe = syncEngine.subscribe((status) => setSyncStatus(status));
    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-primary animate-pulse" />
            <h1 className="text-2xl font-black text-foreground tracking-tight">Smart Travel Companion Ecosystem</h1>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Seamless multi-device synchronization, offline travel mode, car mode & smartwatch readiness
          </p>
        </div>

        {/* Sync Health & Network Status Indicator */}
        <div className="flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-2xl bg-card border border-border/40 text-xs font-bold flex items-center gap-2 shadow-sm">
            {syncStatus.isOnline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Online & Synced</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400">Offline Mode ({syncStatus.pendingCount} queued)</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all border flex items-center gap-2 whitespace-nowrap shadow-sm ${
                isActive
                  ? 'bg-primary text-primary-foreground border-primary shadow-primary/10'
                  : 'bg-card/60 text-muted-foreground border-border/40 hover:bg-muted/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Main Tab View Content */}
      <div>{children}</div>
    </div>
  );
}
