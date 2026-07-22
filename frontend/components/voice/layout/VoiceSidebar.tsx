'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mic, Bot, Languages, Terminal, History, Settings, LayoutDashboard } from 'lucide-react';
import { VOICE_ROUTES } from '@/config/voiceRoutes';

const sidebarNavItems = [
  { label: 'Voice Overview', href: VOICE_ROUTES.HOME, icon: LayoutDashboard },
  { label: 'Live Assistant', href: VOICE_ROUTES.ASSISTANT, icon: Bot },
  { label: 'Voice Translator', href: VOICE_ROUTES.TRANSLATOR, icon: Languages },
  { label: 'Voice Commands', href: VOICE_ROUTES.COMMANDS, icon: Terminal },
  { label: 'Audio Logs', href: VOICE_ROUTES.LOGS, icon: History },
  { label: 'Voice Preferences', href: VOICE_ROUTES.SETTINGS, icon: Settings },
];

export const VoiceSidebar = () => {
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
                    ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shadow-md'
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
        <span className="font-extrabold text-foreground block">Acoustic Perception</span>
        <div className="flex items-center gap-2 text-cyan-400 font-extrabold">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" /> Wake Word "Hey LocalLens"
        </div>
      </div>
    </aside>
  );
};

export default VoiceSidebar;
