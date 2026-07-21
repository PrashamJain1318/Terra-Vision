import {
  LayoutDashboard,
  Compass,
  MapPin,
  Camera,
  Heart,
  Map,
  Users,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
} from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  category: 'workspace' | 'social' | 'system';
}

export const navigationConfig: NavigationItem[] = [
  { name: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard, category: 'workspace' },
  { name: 'AI Planner', href: '/dashboard/planner', icon: Compass, category: 'workspace' },
  { name: 'Trips', href: '/dashboard/trips', icon: MapPin, category: 'workspace' },
  { name: 'Memories', href: '/dashboard/memories', icon: Camera, category: 'workspace' },
  { name: 'Saved Places', href: '/dashboard/saved', icon: Heart, category: 'workspace' },
  { name: 'Maps', href: '/dashboard/maps', icon: Map, category: 'workspace' },
  { name: 'Community', href: '/dashboard/community', icon: Users, category: 'social' },
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell, category: 'system' },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings, category: 'system' },
];
