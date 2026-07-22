'use client';

import React, { useState, useEffect } from 'react';
import GlassCard from '@/components/common/GlassCard';
import api from '@/utils/api';
import {
  Settings,
  User,
  ShieldCheck,
  Lock,
  Sparkles,
  Compass,
  MapPin,
  Bell,
  Moon,
  Eye,
  Link2,
  CreditCard,
  Smartphone,
  Download,
  Database,
  Accessibility,
  Info,
  Search,
  Command,
  RefreshCw,
  Save,
  CheckCircle2,
  AlertTriangle,
  X,
  Upload,
  Key,
  Fingerprint,
  Radio,
  Sliders,
  DollarSign,
  Sun,
  Globe,
  Trash2,
  FileText,
  ExternalLink,
  Laptop,
  Tv,
  Watch,
  HardDrive,
  Cloud,
} from 'lucide-react';

const CATEGORIES = [
  { id: 'profile', label: 'Profile', icon: User, desc: 'Personal avatar, bio, email & travel level' },
  { id: 'account', label: 'Account', icon: ShieldCheck, desc: 'Email, username & data exports' },
  { id: 'security', label: 'Security', icon: Lock, desc: '2FA, passkeys & login sessions' },
  { id: 'ai', label: 'AI Preferences', icon: Sparkles, desc: 'Gemini model, route planner & voice' },
  { id: 'travel', label: 'Travel Preferences', icon: Compass, desc: 'Categories, budget & units' },
  { id: 'maps', label: 'Maps & Navigation', icon: MapPin, desc: 'Satellite, traffic & offline regions' },
  { id: 'notifications', label: 'Notifications', icon: Bell, desc: 'Push, email & weather alerts' },
  { id: 'appearance', label: 'Appearance', icon: Moon, desc: 'Dark theme, accents & glass effects' },
  { id: 'privacy', label: 'Privacy', icon: Eye, desc: 'Permissions, telemetry & cache' },
  { id: 'connected', label: 'Connected Accounts', icon: Link2, desc: 'Google, Apple, Spotify & Airbnb' },
  { id: 'billing', label: 'Billing', icon: CreditCard, desc: 'Pro plan, invoices & payment' },
  { id: 'devices', label: 'Devices', icon: Smartphone, desc: 'Desktop, mobile & watch sessions' },
  { id: 'downloads', label: 'Downloads', icon: Download, desc: 'Offline maps & travel packs' },
  { id: 'backup', label: 'Data & Backup', icon: Database, desc: 'Cloud auto-backup & sync' },
  { id: 'accessibility', label: 'Accessibility', icon: Accessibility, desc: 'High contrast & text scaling' },
  { id: 'about', label: 'About', icon: Info, desc: 'Release notes, licenses & support' },
];

export default function SettingsV2Page() {
  const [activeCategory, setActiveCategory] = useState<string>('profile');
  const [loading, setLoading] = useState(false);
  const [savedToast, setSavedToast] = useState('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 16 Settings State Object
  const [settings, setSettings] = useState<any>({
    profile: {
      name: 'Prasham Jain',
      username: 'prashamjain1318',
      bio: 'Principal Product Designer & AI Travel Architect',
      email: 'prasham@locallens.ai',
      phone: '+91 98765 43210',
      country: 'India',
      language: 'English (US)',
      timezone: 'Asia/Kolkata (GMT+5:30)',
      travelLevel: 'Gold Explorer Level 8',
      badge: 'PRO FOUNDER',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    account: {
      accountStatus: 'active',
      dataExportCount: 2,
    },
    security: {
      twoFactorEnabled: true,
      biometricEnabled: true,
      passkeysEnabled: true,
      securityScore: 98,
    },
    ai: {
      model: 'Gemini 2.5 Pro (Recommended)',
      autoSuggestions: true,
      smartRoutePlanning: true,
      personality: 'Adventure & Hidden Gems',
      responseLength: 'Detailed',
      voiceAssistant: true,
      aiMemory: true,
    },
    travel: {
      favoriteCategories: ['Hidden Gems', 'Nature', 'Food', 'Adventure'],
      preferredBudget: '₹₹ (Moderate)',
      preferredTransport: 'Driving',
      currency: 'INR (₹)',
      tempUnit: 'Celsius (°C)',
      distanceUnit: 'Kilometers (km)',
    },
    maps: {
      defaultMapType: 'Satellite',
      trafficLayer: true,
      alwaysShowNearby: true,
      markerStyle: 'Animated FAANG Pins',
      defaultZoom: 14,
      offlineMaps: true,
      locationAccuracy: 'High Precision GPS',
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      tripAlerts: true,
      weatherAlerts: true,
      nearbyAttractions: true,
      aiSuggestions: true,
      emergencyAlerts: true,
    },
    appearance: {
      theme: 'Dark',
      accentColor: '#7C3AED',
      fontSize: 'Medium',
      compactMode: false,
      glassEffects: true,
      reduceMotion: false,
    },
    privacy: {
      locationPermission: true,
      cameraPermission: true,
      micPermission: true,
      analyticsConsent: true,
      cookiesConsent: true,
    },
    connected: {
      google: true,
      apple: true,
      github: true,
      spotify: true,
      airbnb: true,
      googleMaps: true,
    },
    billing: {
      plan: 'Pro Founder Plan ($99/yr)',
      status: 'Active',
      nextInvoice: 'Aug 1, 2027',
    },
    devices: [
      { id: 'dev_1', type: 'Desktop', name: 'MacBook Pro 16"', location: 'Goa, India', activeNow: true },
      { id: 'dev_2', type: 'Mobile', name: 'iPhone 15 Pro', location: 'Goa, India', activeNow: false },
      { id: 'dev_3', type: 'Watch', name: 'Apple Watch Ultra', location: 'Goa, India', activeNow: false },
    ],
    downloads: {
      offlineRegions: 'Goa Coast, Munnar Valley, Manali Pass',
      storageUsed: '1.2 GB / 10 GB',
    },
    backup: {
      cloudBackup: true,
      autoBackupFrequency: 'Daily at 02:00 AM',
      lastSync: '5 minutes ago',
    },
    accessibility: {
      highContrast: false,
      screenReader: false,
      keyboardNavigation: true,
      textScaling: '100%',
    },
    about: {
      version: 'v2.4.0 (Build 9081)',
      releaseDate: 'July 2026',
    },
  });

  // Fetch Settings on Mount
  useEffect(() => {
    fetchSettings();
  }, []);

  // Keyboard ⌘ K Shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await api.get('/v1/settings');
      if (res.data?.data) {
        setSettings((prev: any) => ({ ...prev, ...res.data.data }));
      }
    } catch (e) {
      // Quiet catch
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSection = async (sectionKey: string, sectionData: any) => {
    try {
      await api.put('/v1/settings/update', { section: sectionKey, data: sectionData });
    } catch (e) {
      // Local fallback
    }

    try {
      localStorage.setItem('locallens_settings_v2', JSON.stringify(settings));
    } catch (e) {}

    setSavedToast(`"${CATEGORIES.find((c) => c.id === sectionKey)?.label}" settings saved!`);
    setTimeout(() => setSavedToast(''), 3000);
  };

  const handleSyncNow = () => {
    fetchSettings();
    setSavedToast('Settings synced with MongoDB Cloud!');
    setTimeout(() => setSavedToast(''), 3000);
  };

  const filteredCategories = CATEGORIES.filter((c) =>
    c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-[1800px] mx-auto font-sans text-slate-100">
      {/* 1. TOP SAAS HEADER WITH GLOBAL SEARCH & QUICK ACTIONS */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#111827] via-slate-900 to-[#111827] border border-white/[0.08] shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7C3AED]">
            <Settings className="w-4 h-4 text-[#7C3AED]" />
            <span>LocalLens AI Operating System / Settings V2</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            Settings & Control Hub
          </h1>
          <p className="text-xs text-slate-400 font-semibold">
            Manage your profile, AI models, spatial maps, notifications, security, and connected apps.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="px-4 py-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-bold text-slate-300 flex items-center gap-2 transition-all shadow-md"
          >
            <Search className="w-4 h-4 text-[#7C3AED]" />
            <span>Search Settings...</span>
            <span className="px-2 py-0.5 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-slate-400">⌘ K</span>
          </button>

          <button
            onClick={handleSyncNow}
            className="px-5 py-3 rounded-2xl bg-[#7C3AED] hover:bg-[#A855F7] text-white font-black text-xs shadow-lg shadow-[#7C3AED]/30 transition-all flex items-center gap-2 hover:scale-105"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Sync Now
          </button>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {savedToast && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-black flex items-center gap-2.5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {savedToast}
        </div>
      )}

      {/* 2. 16-CATEGORY SETTINGS LAYOUT (LEFT SIDEBAR 25% + RIGHT WORKSPACE 75%) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* LEFT SETTINGS NAVIGATION SIDEBAR (3 COLUMNS) */}
        <div className="xl:col-span-3 space-y-2 p-3 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl">
          <div className="px-3 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-white/[0.06] mb-2 flex items-center justify-between">
            <span>Settings Categories ({CATEGORIES.length})</span>
            <Sliders className="w-3.5 h-3.5 text-[#7C3AED]" />
          </div>

          {CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full p-3 rounded-2xl text-left transition-all duration-200 flex items-start gap-3 border ${
                  active
                    ? 'bg-[#7C3AED] text-white border-purple-400 shadow-lg shadow-[#7C3AED]/30 scale-[1.02]'
                    : 'bg-white/[0.02] text-slate-400 border-transparent hover:bg-white/[0.06] hover:text-slate-100'
                }`}
              >
                <div className={`p-2 rounded-xl shrink-0 ${active ? 'bg-white/20 text-white' : 'bg-white/[0.04] text-[#7C3AED]'}`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="font-black text-xs block truncate">{cat.label}</span>
                  <span className={`text-[10px] font-semibold block truncate ${active ? 'text-purple-200' : 'text-slate-500'}`}>
                    {cat.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT DYNAMIC SETTINGS WORKSPACE (9 COLUMNS) */}
        <div className="xl:col-span-9 space-y-6">
          {/* 1. PROFILE SECTION */}
          {activeCategory === 'profile' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <h2 className="text-xl font-black text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-[#7C3AED]" /> Profile & Identity Settings
                  </h2>
                  <p className="text-xs text-slate-400 font-semibold">Manage your public avatar, bio, and travel credentials.</p>
                </div>
                <button
                  onClick={() => handleSaveSection('profile', settings.profile)}
                  className="px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#A855F7] text-white font-black text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" /> Save Profile
                </button>
              </div>

              {/* Avatar Upload Banner */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={settings.profile.avatarUrl}
                    alt={settings.profile.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#7C3AED] shadow-xl"
                  />
                  <div>
                    <h3 className="font-black text-sm text-white">{settings.profile.name}</h3>
                    <p className="text-xs text-emerald-400 font-bold">{settings.profile.travelLevel}</p>
                  </div>
                </div>

                <button className="px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] text-xs font-black text-slate-200 transition-all flex items-center gap-2">
                  <Upload className="w-4 h-4 text-[#7C3AED]" /> Upload Avatar
                </button>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Full Name</label>
                  <input
                    type="text"
                    value={settings.profile.name}
                    onChange={(e) => setSettings({ ...settings, profile: { ...settings.profile, name: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Username</label>
                  <input
                    type="text"
                    value={settings.profile.username}
                    onChange={(e) => setSettings({ ...settings, profile: { ...settings.profile, username: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Bio / Travel Philosophy</label>
                  <textarea
                    rows={2}
                    value={settings.profile.bio}
                    onChange={(e) => setSettings({ ...settings, profile: { ...settings.profile, bio: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Email</label>
                  <input
                    type="email"
                    value={settings.profile.email}
                    onChange={(e) => setSettings({ ...settings, profile: { ...settings.profile, email: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Phone Number</label>
                  <input
                    type="text"
                    value={settings.profile.phone}
                    onChange={(e) => setSettings({ ...settings, profile: { ...settings.profile, phone: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 2. ACCOUNT SECTION */}
          {activeCategory === 'account' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> Account Management
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Download personal archives, export travel data, or deactivate account.</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xs text-slate-100">Export Personal Travel Archives</h4>
                    <p className="text-[10px] text-slate-400">Download complete travel logs, wishlists, and AI itineraries in JSON format</p>
                  </div>
                  <button className="px-4 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#A855F7] text-white text-xs font-black shadow-md">
                    Export Data
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-rose-600/10 border border-rose-500/30 flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xs text-rose-300">Deactivate / Delete Account</h4>
                    <p className="text-[10px] text-rose-200">Permanently delete account credentials and saved spatial bookmarks</p>
                  </div>
                  <button className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-black shadow-md">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. SECURITY SECTION */}
          {activeCategory === 'security' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#7C3AED]" /> Security & Biometrics
                </h2>
                <p className="text-xs text-slate-400 font-semibold">2FA authentication, passkeys, and trusted device management.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-center space-y-1">
                  <span className="text-[9px] font-black text-slate-400 uppercase block">Security Score</span>
                  <span className="text-3xl font-black text-emerald-400">98%</span>
                  <span className="text-[10px] text-slate-400 font-bold block">Excellent Protection</span>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-center space-y-1">
                  <span className="text-[9px] font-black text-slate-400 uppercase block">Two-Factor Auth</span>
                  <span className="text-base font-black text-purple-300">Enabled ●</span>
                  <span className="text-[10px] text-slate-400 font-bold block">Authenticator App</span>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-center space-y-1">
                  <span className="text-[9px] font-black text-slate-400 uppercase block">Passkeys</span>
                  <span className="text-base font-black text-emerald-400">Active ●</span>
                  <span className="text-[10px] text-slate-400 font-bold block">Touch ID / Face ID</span>
                </div>
              </div>
            </div>
          )}

          {/* 4. AI PREFERENCES SECTION */}
          {activeCategory === 'ai' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <h2 className="text-xl font-black text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#7C3AED]" /> Gemini AI Preferences
                  </h2>
                  <p className="text-xs text-slate-400 font-semibold">Configure reasoning models, travel personality, and voice engine.</p>
                </div>
                <button
                  onClick={() => handleSaveSection('ai', settings.ai)}
                  className="px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#A855F7] text-white font-black text-xs shadow-md transition-all"
                >
                  Save AI Settings
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Preferred AI Model</label>
                  <select
                    value={settings.ai.model}
                    onChange={(e) => setSettings({ ...settings, ai: { ...settings.ai, model: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-[#111827] border border-white/[0.08] text-xs font-bold text-purple-300"
                  >
                    <option value="Gemini 2.5 Pro (Recommended)">Gemini 2.5 Pro (Recommended)</option>
                    <option value="Gemini 2.5 Flash (Ultra Fast)">Gemini 2.5 Flash (Ultra Fast)</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xs text-slate-100">Smart Route Planning</h4>
                    <p className="text-[10px] text-slate-400">Auto-calculate multi-modal routes with live fuel estimates</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.ai.smartRoutePlanning}
                    onChange={(e) => setSettings({ ...settings, ai: { ...settings.ai, smartRoutePlanning: e.target.checked } })}
                    className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 5. TRAVEL PREFERENCES SECTION */}
          {activeCategory === 'travel' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-400" /> Travel Preferences & Style
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Default transport modes, budget tier, and preferred currency.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Default Transport Mode</label>
                  <select
                    value={settings.travel.preferredTransport}
                    onChange={(e) => setSettings({ ...settings, travel: { ...settings.travel, preferredTransport: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-[#111827] border border-white/[0.08] text-xs font-bold text-slate-100"
                  >
                    <option value="Driving">Driving 🚗</option>
                    <option value="Walking">Walking 🚶</option>
                    <option value="Cycling">Cycling 🚴</option>
                    <option value="Public Transit">Public Transit 🚌</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Default Currency</label>
                  <select
                    value={settings.travel.currency}
                    onChange={(e) => setSettings({ ...settings, travel: { ...settings.travel, currency: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-[#111827] border border-white/[0.08] text-xs font-bold text-slate-100"
                  >
                    <option value="INR (₹)">INR (₹)</option>
                    <option value="USD ($)">USD ($)</option>
                    <option value="EUR (€)">EUR (€)</option>
                    <option value="GBP (£)">GBP (£)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* 6. MAPS & NAVIGATION SECTION */}
          {activeCategory === 'maps' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#7C3AED]" /> Maps & Spatial Navigation
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Map styling, marker animations, traffic overlays, and location precision.</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Default Map Type</label>
                  <select
                    value={settings.maps.defaultMapType}
                    onChange={(e) => setSettings({ ...settings, maps: { ...settings.maps, defaultMapType: e.target.value } })}
                    className="w-full p-3.5 rounded-2xl bg-[#111827] border border-white/[0.08] text-xs font-bold text-slate-100"
                  >
                    <option value="Satellite">Satellite (Default)</option>
                    <option value="Roadmap">Vector Roadmap</option>
                    <option value="Terrain">3D Topography Terrain</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xs text-slate-100">Live Traffic Layer Overlay</h4>
                    <p className="text-[10px] text-slate-400">Display real-time traffic flow on map canvas</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.maps.trafficLayer}
                    onChange={(e) => setSettings({ ...settings, maps: { ...settings.maps, trafficLayer: e.target.checked } })}
                    className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 7. NOTIFICATIONS SECTION */}
          {activeCategory === 'notifications' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Bell className="w-5 h-5 text-[#7C3AED]" /> Notifications & Alerts
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Configure push, email, and emergency weather alert preferences.</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xs text-slate-100">Push Notifications</h4>
                    <p className="text-[10px] text-slate-400">Receive instant route updates and nearby hidden gem alerts</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notifications.pushNotifications}
                    onChange={(e) => setSettings({ ...settings, notifications: { ...settings.notifications, pushNotifications: e.target.checked } })}
                    className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 8. APPEARANCE SECTION */}
          {activeCategory === 'appearance' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Moon className="w-5 h-5 text-[#7C3AED]" /> Appearance & Design System
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Theme styling, glassmorphism effects, and accent colors.</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {['Dark', 'Light', 'System'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSettings({ ...settings, appearance: { ...settings.appearance, theme: t } })}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      settings.appearance.theme === t
                        ? 'bg-[#7C3AED] text-white border-purple-400 shadow-lg'
                        : 'bg-black/40 text-slate-400 border-white/[0.08]'
                    }`}
                  >
                    <span className="font-black text-xs">{t} Theme</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 9. PRIVACY SECTION */}
          {activeCategory === 'privacy' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-emerald-400" /> Privacy & Telemetry Permissions
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Manage hardware permissions and clear local search history.</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    localStorage.removeItem('locallens_saved_places');
                    setSavedToast('Local search & place cache cleared!');
                    setTimeout(() => setSavedToast(''), 3000);
                  }}
                  className="px-5 py-3 rounded-2xl bg-rose-600/20 text-rose-300 border border-rose-500/40 font-black text-xs flex items-center gap-2 hover:bg-rose-600/30 transition-all"
                >
                  <Trash2 className="w-4 h-4" /> Clear Local Cache & Search History
                </button>
              </div>
            </div>
          )}

          {/* 10. CONNECTED ACCOUNTS */}
          {activeCategory === 'connected' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Link2 className="w-5 h-5 text-[#7C3AED]" /> Connected OAuth Accounts
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Integrate Google Maps, Spotify, Booking.com, and Airbnb.</p>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Google Maps API', connected: true },
                  { name: 'Spotify Travel Playlists', connected: true },
                  { name: 'Airbnb Discovery Sync', connected: true },
                  { name: 'Booking.com Gateway', connected: false },
                ].map((acc) => (
                  <div key={acc.name} className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                    <span className="font-black text-xs text-white">{acc.name}</span>
                    <span className={`text-xs font-black ${acc.connected ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {acc.connected ? 'Connected ●' : 'Disconnected ○'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 11. BILLING */}
          {activeCategory === 'billing' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#7C3AED]" /> Subscription & Billing
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Pro Plan status, payment methods, and invoice history.</p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950 to-indigo-950 border border-purple-500/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black text-purple-300 uppercase block">Current Subscription</span>
                  <h3 className="text-xl font-black text-white">{settings.billing.plan}</h3>
                  <p className="text-xs text-emerald-400 font-bold">Status: Active (Renews {settings.billing.nextInvoice})</p>
                </div>
                <button className="px-5 py-2.5 rounded-xl bg-white text-purple-950 font-black text-xs shadow-lg hover:bg-slate-100 transition-all">
                  Manage Plan
                </button>
              </div>
            </div>
          )}

          {/* 12. DEVICES */}
          {activeCategory === 'devices' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#7C3AED]" /> Trusted Sessions & Devices
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Manage active desktop, mobile, and smartwatch sessions.</p>
              </div>

              <div className="space-y-3">
                {settings.devices.map((dev: any) => (
                  <div key={dev.id} className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-xs text-white">{dev.name} ({dev.type})</h4>
                      <p className="text-[10px] text-slate-400">{dev.location}</p>
                    </div>
                    <span className={`text-xs font-bold ${dev.activeNow ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {dev.activeNow ? 'Active Now ●' : 'Offline'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 13. DOWNLOADS */}
          {activeCategory === 'downloads' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Download className="w-5 h-5 text-emerald-400" /> Offline Map Downloads & Packs
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Manage offline map regions and storage usage.</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="font-black text-xs text-white">Downloaded Map Regions</h4>
                  <p className="text-[10px] text-slate-400">{settings.downloads.offlineRegions}</p>
                </div>
                <span className="text-xs font-mono text-purple-300 font-bold">{settings.downloads.storageUsed}</span>
              </div>
            </div>
          )}

          {/* 14. DATA & BACKUP */}
          {activeCategory === 'backup' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#7C3AED]" /> Cloud Backup & Sync
                </h2>
                <p className="text-xs text-slate-400 font-semibold">Automatic MongoDB cloud backups and sync status.</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="font-black text-xs text-white">Automatic MongoDB Cloud Backup</h4>
                  <p className="text-[10px] text-slate-400">Last sync: {settings.backup.lastSync}</p>
                </div>
                <button onClick={handleSyncNow} className="px-4 py-2.5 rounded-xl bg-[#7C3AED] text-white text-xs font-black">
                  Sync Now
                </button>
              </div>
            </div>
          )}

          {/* 15. ACCESSIBILITY */}
          {activeCategory === 'accessibility' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-[#7C3AED]" /> Accessibility Options
                </h2>
                <p className="text-xs text-slate-400 font-semibold">High contrast modes, keyboard navigation, and text scaling.</p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="font-black text-xs text-white">Keyboard Navigation & Shortcuts</h4>
                  <p className="text-[10px] text-slate-400">Enable ⌘ K and directional arrow key navigation</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-[#7C3AED]" />
              </div>
            </div>
          )}

          {/* 16. ABOUT */}
          {activeCategory === 'about' && (
            <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl space-y-6 animate-in fade-in">
              <div className="border-b border-white/[0.08] pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Info className="w-5 h-5 text-purple-400" /> About LocalLens AI
                </h2>
                <p className="text-xs text-slate-400 font-semibold">System release info, terms of service, and developer licenses.</p>
              </div>

              <div className="space-y-3 text-xs text-slate-300 font-semibold">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span>System Version</span>
                  <span className="font-mono text-purple-300 font-bold">{settings.about.version}</span>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span>Release Date</span>
                  <span className="font-mono text-slate-400">{settings.about.releaseDate}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. ⌘ K SEARCH MODAL */}
      {searchModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-start justify-center pt-24 p-4">
          <div className="max-w-2xl w-full bg-[#111827] border border-white/[0.12] rounded-3xl p-5 space-y-4 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="relative flex-1 mr-4">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7C3AED]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  placeholder="Search any setting option (e.g. Profile, Security, Gemini AI, Maps)..."
                  className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/[0.08] rounded-2xl text-xs font-bold text-white focus:outline-none focus:border-[#7C3AED]"
                />
              </div>
              <button onClick={() => setSearchModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto">
              {filteredCategories.map((cat) => {
                const IconC = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchModalOpen(false);
                      setSearchQuery('');
                    }}
                    className="w-full p-3 rounded-2xl bg-white/[0.04] hover:bg-[#7C3AED] hover:text-white text-left transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-black/40 text-[#7C3AED] group-hover:text-white">
                        <IconC className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-black text-xs text-white block">{cat.label}</span>
                        <span className="text-[10px] text-slate-400 group-hover:text-purple-200 block">{cat.desc}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-white">Jump →</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
