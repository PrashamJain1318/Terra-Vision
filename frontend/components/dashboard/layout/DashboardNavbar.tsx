'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useDashboard } from '@/providers/DashboardProvider';
import { Menu, Bell, Sidebar, PanelLeftClose, PanelLeftOpen, Search } from 'lucide-react';
import dashboardThemeConfig from '../config/dashboardTheme';

export const DashboardNavbar = () => {
  const pathname = usePathname();
  const {
    sidebarCollapsed,
    setSidebarCollapsed,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useDashboard();

  // Extract path names for breadcrumbs
  const pathSegments = (pathname || '').split('/').filter(Boolean);
  const pageTitle = pathSegments[pathSegments.length - 1] || 'Overview';

  return (
    <header className={`${dashboardThemeConfig.header.bg} ${dashboardThemeConfig.header.border} ${dashboardThemeConfig.header.height} flex items-center justify-between px-6 relative z-30 transition-all`}>
      {/* Breadcrumbs & Sidebar Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted/40 rounded-full text-foreground transition-all"
          aria-label="Toggle Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-black text-slate-200 border border-white/[0.08] transition-all shadow-sm"
          title={sidebarCollapsed ? 'Show Navigation Sidebar' : 'Hide Navigation Sidebar'}
        >
          {sidebarCollapsed ? (
            <>
              <PanelLeftOpen className="w-4 h-4 text-[#7C3AED]" />
              <span>Show Sidebar</span>
            </>
          ) : (
            <>
              <PanelLeftClose className="w-4 h-4 text-purple-400" />
              <span>Hide Sidebar</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground select-none">
          <span>LocalLens</span>
          <span>/</span>
          <span className="text-foreground capitalize">{pageTitle}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search dashboard..."
            className="pl-10 pr-4 py-1.5 bg-muted/30 border border-border/40 focus:border-primary/60 rounded-full text-xs focus:outline-none w-48 focus:w-64 transition-all"
          />
        </div>

        {/* Notifications */}
        <button className="p-2 hover:bg-muted/40 rounded-full text-muted-foreground hover:text-foreground relative transition-all" aria-label="View notifications">
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
