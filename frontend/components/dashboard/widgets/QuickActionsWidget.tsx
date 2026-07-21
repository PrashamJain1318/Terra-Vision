'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Map, Camera, Heart, Plus } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface QuickAction {
  id: string;
  label: string;
  href: string;
  icon: string;
}

const defaultActions: QuickAction[] = [
  { id: 'plan-trip', label: 'Plan Trip', href: '/dashboard/planner', icon: 'Compass' },
  { id: 'explore-nearby', label: 'Explore Nearby', href: '/dashboard/maps', icon: 'Map' },
  { id: 'scan-landmark', label: 'Scan Landmark', href: '/dashboard/vision', icon: 'Camera' },
  { id: 'view-memories', label: 'View Memories', href: '/dashboard/memories', icon: 'Heart' },
];

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-primary" />,
  Map: <Map className="w-5 h-5 text-indigo-400" />,
  Camera: <Camera className="w-5 h-5 text-purple-400" />,
  Heart: <Heart className="w-5 h-5 text-rose-400" />,
};

interface QuickActionsWidgetProps {
  actions?: QuickAction[];
}

export const QuickActionsWidget = ({ actions = defaultActions }: QuickActionsWidgetProps) => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          Quick Actions
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((action, idx) => (
          <motion.div key={action.id || idx} whileHover={{ y: -4 }}>
            <Link
              href={action.href}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-muted/20 border border-border/30 hover:border-primary/40 transition-all text-center space-y-2 group"
            >
              <div className="p-3 rounded-full bg-background/60 group-hover:scale-110 transition-transform shadow-sm">
                {iconMap[action.icon] || <Plus className="w-5 h-5 text-primary" />}
              </div>
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                {action.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
};

export default QuickActionsWidget;
