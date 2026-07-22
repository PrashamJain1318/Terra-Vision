'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Hotel, Utensils, Landmark, UserCheck, BarChart3, Megaphone, Key, ShieldCheck } from 'lucide-react';

interface EnterpriseLayoutProps {
  children: React.ReactNode;
}

const TABS = [
  { name: 'Enterprise Hub', href: '/dashboard/enterprise', icon: Building2 },
  { name: 'Hotel Partner Portal', href: '/dashboard/enterprise/hotels', icon: Hotel },
  { name: 'Restaurant Portal', href: '/dashboard/enterprise/restaurants', icon: Utensils },
  { name: 'Tourism Boards', href: '/dashboard/enterprise/tourism', icon: Landmark },
  { name: 'Guides & Agencies', href: '/dashboard/enterprise/guides', icon: UserCheck },
  { name: 'Business Analytics', href: '/dashboard/enterprise/analytics', icon: BarChart3 },
  { name: 'Campaign Manager', href: '/dashboard/enterprise/campaigns', icon: Megaphone },
  { name: 'API Gateway & Billing', href: '/dashboard/enterprise/billing', icon: Key },
];

export default function EnterpriseLayout({ children }: EnterpriseLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header & Verified Partner Badge Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <h1 className="text-2xl font-black text-foreground tracking-tight">Enterprise & Partner Platform</h1>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Connect hotels, restaurants, tourism boards, local guides & travel agencies to LocalLens AI
          </p>
        </div>

        {/* Verified Partner Badge */}
        <div className="flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Partner Program (Trust Score 98%)</span>
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
