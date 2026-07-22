'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { visionRoutesConfig } from '@/config/visionRoutes';
import { Eye, Camera, Upload, Sparkles, History } from 'lucide-react';

const sidebarItems = [
  { href: visionRoutesConfig.root, label: 'Vision Workspace', icon: <Eye className="w-4 h-4" /> },
  { href: visionRoutesConfig.camera, label: 'Live Camera Capture', icon: <Camera className="w-4 h-4" /> },
  { href: visionRoutesConfig.upload, label: 'Upload Landmark Image', icon: <Upload className="w-4 h-4" /> },
  { href: visionRoutesConfig.result, label: 'Recognition Insights', icon: <Sparkles className="w-4 h-4" /> },
  { href: visionRoutesConfig.history, label: 'Scan History', icon: <History className="w-4 h-4" /> },
];

export const VisionSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-72 p-6 border-r border-border/20 bg-background/30 backdrop-blur-md space-y-6 flex-shrink-0">
      <div className="space-y-1">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          Vision Navigation
        </h3>
        <p className="text-xs text-muted-foreground">Computer Vision tools</p>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-2xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]'
                  : 'bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default VisionSidebar;
