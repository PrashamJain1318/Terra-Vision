'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cpu, Bot, ShoppingBag, Code, BarChart3, ShieldCheck, Zap } from 'lucide-react';

interface OsLayoutProps {
  children: React.ReactNode;
}

const TABS = [
  { name: 'Unified Travel Workspace', href: '/dashboard/os', icon: Cpu },
  { name: 'Multi-Agent AI System', href: '/dashboard/os/agents', icon: Bot },
  { name: 'Travel Marketplace', href: '/dashboard/os/marketplace', icon: ShoppingBag },
  { name: 'Developer & Plugins', href: '/dashboard/os/developer', icon: Code },
  { name: 'Global Platform Telemetry', href: '/dashboard/os/analytics', icon: BarChart3 },
];

export default function OsLayout({ children }: OsLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header & Status Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-primary animate-pulse" />
            <h1 className="text-2xl font-black text-foreground tracking-tight">
              TerraVision OS <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-black uppercase">v20.0 AI Kernel</span>
            </h1>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            The World's Intelligent Operating System for Travel • Grounded in Google Maps Spatial Engine
          </p>
        </div>

        {/* System Health */}
        <div className="flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-sm">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Multi-Agent Mesh: 8/8 Online (380ms)</span>
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
