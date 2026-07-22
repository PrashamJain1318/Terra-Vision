'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDashboard } from '@/providers/DashboardProvider';
import { navigationConfig } from '../config/navigation';
import dashboardThemeConfig from '../config/dashboardTheme';
import { Compass, LogOut } from 'lucide-react';

export const DashboardSidebar = () => {
  const pathname = usePathname();
  const { sidebarCollapsed, mobileMenuOpen, setMobileMenuOpen } = useDashboard();

  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const sidebarWidth = sidebarCollapsed
    ? dashboardThemeConfig.sidebar.widthCollapsed
    : dashboardThemeConfig.sidebar.widthExpanded;

  return (
    <>
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Layout - Completely Static in Place */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen shrink-0 z-50 ${dashboardThemeConfig.sidebar.bg} ${dashboardThemeConfig.sidebar.border} ${sidebarWidth} transition-all duration-300 flex flex-col justify-between overflow-x-hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          <div className="h-16 flex items-center px-5 gap-3 border-b border-border/40">
            <div className="p-1.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <Compass className="w-5 h-5 flex-shrink-0 animate-pulse" />
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col">
                <span className="font-editorial text-lg font-extrabold tracking-tight text-foreground select-none">
                  TERRA VISION
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-primary uppercase -mt-1">
                  Explorer Workspace
                </span>
              </div>
            )}
          </div>

          {/* Links list */}
          <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-140px)] scrollbar-none">
            {navigationConfig.map((item, idx) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all select-none ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {!sidebarCollapsed && <span className="truncate">{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer/Logout Action */}
        <div className="p-4 border-t border-border/10 mt-auto">
          <button
            onClick={() => console.log('Logout triggered')}
            className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-xs font-semibold text-red-500 hover:bg-red-500/5 transition-all"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {!sidebarCollapsed && <span>Exit Workspace</span>}
          </Link>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
