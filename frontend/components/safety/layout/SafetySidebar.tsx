'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, AlertTriangle, PhoneCall, Users, Navigation, Bot, Settings, LayoutDashboard } from 'lucide-react';
import { SAFETY_ROUTES } from '@/config/safetyRoutes';

const sidebarNavItems = [
  { label: 'Safety Overview', href: SAFETY_ROUTES.HOME, icon: LayoutDashboard },
  { label: 'Scam Alerts', href: SAFETY_ROUTES.ALERTS, icon: AlertTriangle },
  { label: 'Emergency Center', href: SAFETY_ROUTES.EMERGENCY, icon: PhoneCall },
  { label: 'Community Reports', href: SAFETY_ROUTES.COMMUNITY, icon: Users },
  { label: 'Safe Navigation', href: SAFETY_ROUTES.NAVIGATION, icon: Navigation },
  { label: 'AI Safety Advisor', href: SAFETY_ROUTES.ADVISOR, icon: Bot },
  { label: 'Safety Preferences', href: SAFETY_ROUTES.SETTINGS, icon: Settings },
];

export const SafetySidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] p-4 bg-card/45 backdrop-blur-xl border-r border-border/40 flex flex-col justify-between">
      <div className="space-y-1">
        <span className="px-3 text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider">Navigation</span>
        <nav className="space-y-1 mt-2">
          {sidebarNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-red-500/15 border border-red-500/30 text-red-500 shadow-md'
                    : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-3 rounded-2xl bg-card/60 border border-border/30 text-xs text-muted-foreground space-y-1">
        <span className="font-extrabold text-foreground block">Safety Status</span>
        <div className="flex items-center gap-2 text-emerald-400 font-extrabold">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Threat Monitoring Active
        </div>
      </div>
    </aside>
  );
};

export default SafetySidebar;
