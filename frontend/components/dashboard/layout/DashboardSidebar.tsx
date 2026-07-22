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
  const { sidebarCollapsed, setSidebarCollapsed, mobileMenuOpen, setMobileMenuOpen } = useDashboard();

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
      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Layout - Completely Static in Place */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen shrink-0 z-50 ${dashboardThemeConfig.sidebar.bg} ${dashboardThemeConfig.sidebar.border} ${sidebarWidth} transition-all duration-300 flex flex-col justify-between overflow-x-hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header/Logo */}
        <div>
          <div className="h-16 flex items-center px-6 gap-3 border-b border-border/10">
            <Compass className="w-6 h-6 text-primary flex-shrink-0" />
            {!sidebarCollapsed && (
              <span className="font-extrabold text-base tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500 select-none">
                LocalLens AI
              </span>
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
                  className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-xs font-semibold tracking-wide transition-all select-none ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5 flex-shrink-0" />
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
            <LogOut className="w-4.5 h-4.5 flex-shrink-0" />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
