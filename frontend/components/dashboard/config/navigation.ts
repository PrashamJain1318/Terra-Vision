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
  Radio,
  Building2,
  Cpu,
  Utensils,
  DollarSign,
  Shield,
  Scan
} from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  category: 'workspace' | 'social' | 'system';
}

export const navigationConfig: NavigationItem[] = [
  { name: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard, category: 'workspace' },
  { name: 'AI Travel Brain', href: '/dashboard/planner', icon: Compass, category: 'workspace' },
  { name: 'Smart Maps V2', href: '/dashboard/maps', icon: Map, category: 'workspace' },
  { name: 'Multimodal Vision AI', href: '/dashboard/vision', icon: Scan, category: 'workspace' },
  { name: 'Local Food & Culture', href: '/dashboard/local-food', icon: Utensils, category: 'workspace' },
  { name: 'Expense Tracker', href: '/dashboard/expenses', icon: DollarSign, category: 'workspace' },
  { name: 'Travel Hub & Diary', href: '/dashboard/memories', icon: Camera, category: 'workspace' },
  { name: 'Smart Utilities', href: '/dashboard/utilities', icon: Shield, category: 'workspace' },
  { name: 'Companion Ecosystem', href: '/dashboard/ecosystem', icon: Radio, category: 'workspace' },
  { name: 'Enterprise Platform', href: '/dashboard/enterprise', icon: Building2, category: 'workspace' },
  { name: 'Community Feed', href: '/dashboard/community', icon: Users, category: 'social' },
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell, category: 'system' },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings, category: 'system' },
];
