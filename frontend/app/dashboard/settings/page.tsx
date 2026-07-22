'use client';

import React, { useState, useEffect } from 'react';
import GlassCard from '@/components/common/GlassCard';
import {
  Settings,
  User,
  Sparkles,
  MapPin,
  Bell,
  Lock,
  Sliders,
  CheckCircle2,
  Save,
  Globe,
  DollarSign,
  Moon,
  Volume2,
  ShieldAlert,
  Download,
  Trash2,
  Cpu,
  Layers,
  Car,
  Compass,
  Zap,
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'ai' | 'maps' | 'notifications' | 'privacy' | 'flags'>('profile');
  const [savedMsg, setSavedMsg] = useState('');

  // Settings State
  const [profile, setProfile] = useState({
    name: 'Prasham Jain',
    email: 'prasham@locallens.ai',
    currency: 'INR (₹)',
    language: 'English (US)',
    homeCity: 'Goa, India',
  });

  const [aiSettings, setAiSettings] = useState({
    model: 'gemini-1.5-pro',
    summaryStyle: 'enriched',
    autoPhotoScoring: true,
    speechRate: '1.0x',
    aiSafetyAdvisor: true,
  });

  const [mapSettings, setMapSettings] = useState({
    defaultMapStyle: 'satellite',
    defaultTransport: 'driving',
    autoTrafficLayer: true,
    clusterMarkers: true,
    radiusKm: 15,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    pushEnabled: true,
    itineraryUpdates: true,
    riskZoneAlerts: true,
    dailyDigestEmail: false,
  });

  const [featureFlags, setFeatureFlags] = useState({
    experimentalAiV2: true,
    terrain3d: true,
    realtimeSmartRoutes: true,
    offlinePwaCache: true,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('locallens_user_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.aiSettings) setAiSettings(parsed.aiSettings);
        if (parsed.mapSettings) setMapSettings(parsed.mapSettings);
        if (parsed.notificationSettings) setNotificationSettings(parsed.notificationSettings);
        if (parsed.featureFlags) setFeatureFlags(parsed.featureFlags);
      }
    } catch (e) {}
  }, []);

  const handleSaveAll = () => {
    const payload = {
      profile,
      aiSettings,
      mapSettings,
      notificationSettings,
      featureFlags,
    };
    try {
      localStorage.setItem('locallens_user_settings', JSON.stringify(payload));
    } catch (e) {}

    setSavedMsg('Settings & Preferences saved successfully!');
    setTimeout(() => setSavedMsg(''), 3500);
  };

  const handleClearCache = () => {
    try {
      localStorage.removeItem('locallens_saved_places');
      alert('Local places & offline cache cleared successfully!');
    } catch (e) {}
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-32 font-sans text-slate-100 bg-[#09090B]">
      {/* HEADER */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-slate-900/40 border border-purple-500/30 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-400">
            <Settings className="w-4 h-4 text-[#7C3AED]" />
            <span>LocalLens AI Configuration & Preferences</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">System & Account Settings</h1>
          <p className="text-xs text-slate-400 font-semibold">
            Customize AI intelligence models, Google Maps spatial preferences, notifications, and A/B feature toggles.
          </p>
        </div>

        <button
          onClick={handleSaveAll}
          className="px-6 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#A855F7] text-white font-black text-xs shadow-lg shadow-[#7C3AED]/30 transition-all flex items-center gap-2 w-fit shrink-0 hover:scale-105"
        >
          <Save className="w-4 h-4" /> Save Settings
        </button>
      </div>

      {/* TOAST NOTIFICATION */}
      {savedMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-black flex items-center gap-2.5 shadow-xl animate-in fade-in slide-in-from-top-3 backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {savedMsg}
        </div>
      )}

      {/* NAVIGATION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-white/[0.08]">
        {[
          { id: 'profile', label: 'Profile & Account', icon: User },
          { id: 'ai', label: 'AI Intelligence', icon: Sparkles },
          { id: 'maps', label: 'Maps & Navigation', icon: MapPin },
          { id: 'notifications', label: 'Notifications', icon: Bell },
          { id: 'privacy', label: 'Privacy & Data', icon: Lock },
          { id: 'flags', label: 'Feature Flags', icon: Sliders },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-2xl text-xs font-black transition-all border whitespace-nowrap flex items-center gap-2 mb-2 ${
                active
                  ? 'bg-[#7C3AED] text-white border-purple-400 shadow-lg shadow-[#7C3AED]/30 scale-105'
                  : 'bg-[#111827] text-slate-400 border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT PANELS */}

      {/* 1. PROFILE & ACCOUNT */}
      {activeTab === 'profile' && (
        <div className="p-6 rounded-3xl bg-[#111827] border border-white/[0.08] shadow-2xl space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-white/[0.08]">
            <div className="w-16 h-16 rounded-full bg-[#7C3AED]/20 border-2 border-[#7C3AED] flex items-center justify-center font-black text-xl text-[#7C3AED]">
              PJ
            </div>
            <div>
              <h3 className="text-lg font-black text-white">{profile.name}</h3>
              <p className="text-xs text-slate-400 font-semibold">{profile.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-slate-400 uppercase">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-slate-400 uppercase">Email Address</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-slate-400 uppercase">Preferred Currency</label>
              <select
                value={profile.currency}
                onChange={(e) => setProfile({ ...profile, currency: e.target.value })}
                className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
              >
                <option value="INR (₹)">INR (₹)</option>
                <option value="USD ($)">USD ($)</option>
                <option value="EUR (€)">EUR (€)</option>
                <option value="GBP (£)">GBP (£)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-slate-400 uppercase">System Language</label>
              <select
                value={profile.language}
                onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                className="w-full p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
              >
                <option value="English (US)">English (US)</option>
                <option value="Spanish (ES)">Spanish (ES)</option>
                <option value="Hindi (IN)">Hindi (IN)</option>
                <option value="French (FR)">French (FR)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 2. AI INTELLIGENCE */}
      {activeTab === 'ai' && (
        <div className="p-6 rounded-3xl bg-[#111827] border border-white/[0.08] shadow-2xl space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7C3AED]" /> Gemini AI Engine Configuration
            </h3>
            <p className="text-xs text-slate-400">Configure AI summary style, speech synthesis, and multimodal photo scoring.</p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 className="font-black text-xs text-slate-100">AI Reasoning Model</h4>
                <p className="text-[10px] text-slate-400">Select Google Gemini AI model for place summaries</p>
              </div>
              <select
                value={aiSettings.model}
                onChange={(e) => setAiSettings({ ...aiSettings, model: e.target.value })}
                className="p-2.5 rounded-xl bg-[#111827] border border-white/[0.1] text-xs font-bold text-purple-300 focus:outline-none"
              >
                <option value="gemini-1.5-pro">Gemini 1.5 Pro (Recommended)</option>
                <option value="gemini-1.5-flash">Gemini 1.5 Flash (Ultra Fast)</option>
              </select>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 className="font-black text-xs text-slate-100">Automatic AI Photo Scoring</h4>
                <p className="text-[10px] text-slate-400">Calculate photography rating scores automatically on Google photos</p>
              </div>
              <input
                type="checkbox"
                checked={aiSettings.autoPhotoScoring}
                onChange={(e) => setAiSettings({ ...aiSettings, autoPhotoScoring: e.target.checked })}
                className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
              />
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 className="font-black text-xs text-slate-100">AI Safety & Advisory Shield</h4>
                <p className="text-[10px] text-slate-400">Real-time scam protection and emergency helpline overlays</p>
              </div>
              <input
                type="checkbox"
                checked={aiSettings.aiSafetyAdvisor}
                onChange={(e) => setAiSettings({ ...aiSettings, aiSafetyAdvisor: e.target.checked })}
                className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. MAPS & NAVIGATION */}
      {activeTab === 'maps' && (
        <div className="p-6 rounded-3xl bg-[#111827] border border-white/[0.08] shadow-2xl space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#7C3AED]" /> Google Maps Platform Preferences
            </h3>
            <p className="text-xs text-slate-400">Default map layers, route calculation modes, and traffic overlays.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase">Default Map Layer Style</label>
              <select
                value={mapSettings.defaultMapStyle}
                onChange={(e) => setMapSettings({ ...mapSettings, defaultMapStyle: e.target.value })}
                className="w-full p-3 rounded-xl bg-[#111827] border border-white/[0.1] text-xs font-bold text-slate-100"
              >
                <option value="satellite">Satellite Imagery (Default)</option>
                <option value="map">Vector Dark Style</option>
                <option value="terrain">3D Terrain Topography</option>
              </select>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase">Default Transport Mode</label>
              <select
                value={mapSettings.defaultTransport}
                onChange={(e) => setMapSettings({ ...mapSettings, defaultTransport: e.target.value })}
                className="w-full p-3 rounded-xl bg-[#111827] border border-white/[0.1] text-xs font-bold text-slate-100"
              >
                <option value="driving">Driving 🚗</option>
                <option value="walking">Walking 🚶</option>
                <option value="cycling">Cycling 🚴</option>
                <option value="transit">Public Transit 🚌</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 4. NOTIFICATIONS */}
      {activeTab === 'notifications' && (
        <div className="p-6 rounded-3xl bg-[#111827] border border-white/[0.08] shadow-2xl space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#7C3AED]" /> Push Notifications & Alerts
            </h3>
            <p className="text-xs text-slate-400">Configure itinerary updates, risk zone alerts, and push notifications.</p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 className="font-black text-xs text-slate-100">Browser & Mobile Push Notifications</h4>
                <p className="text-[10px] text-slate-400">Receive real-time travel alerts and route ETA changes</p>
              </div>
              <input
                type="checkbox"
                checked={notificationSettings.pushEnabled}
                onChange={(e) => setNotificationSettings({ ...notificationSettings, pushEnabled: e.target.checked })}
                className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
              />
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 className="font-black text-xs text-slate-100">Risk Zone & Safety Warnings</h4>
                <p className="text-[10px] text-slate-400">Instant notification when approaching high risk travel areas</p>
              </div>
              <input
                type="checkbox"
                checked={notificationSettings.riskZoneAlerts}
                onChange={(e) => setNotificationSettings({ ...notificationSettings, riskZoneAlerts: e.target.checked })}
                className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
              />
            </div>
          </div>
        </div>
      )}

      {/* 5. PRIVACY & DATA */}
      {activeTab === 'privacy' && (
        <div className="p-6 rounded-3xl bg-[#111827] border border-white/[0.08] shadow-2xl space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" /> Data Privacy & Storage Management
            </h3>
            <p className="text-xs text-slate-400">Manage offline caching, saved wishlist exports, and account privacy.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleClearCache}
              className="px-5 py-3 rounded-2xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 text-xs font-black transition-all flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" /> Clear Local Cache & Places
            </button>
          </div>
        </div>
      )}

      {/* 6. FEATURE FLAGS */}
      {activeTab === 'flags' && (
        <div className="p-6 rounded-3xl bg-[#111827] border border-white/[0.08] shadow-2xl space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#7C3AED]" /> A/B Feature Flags & Beta Features
            </h3>
            <p className="text-xs text-slate-400">Enable or disable experimental features for your account.</p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 className="font-black text-xs text-slate-100">Experimental AI Enriched V2</h4>
                <p className="text-[10px] text-slate-400">Enable Next-Gen Gemini AI Insights & Photography Scores</p>
              </div>
              <input
                type="checkbox"
                checked={featureFlags.experimentalAiV2}
                onChange={(e) => setFeatureFlags({ ...featureFlags, experimentalAiV2: e.target.checked })}
                className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
              />
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 className="font-black text-xs text-slate-100">3D Map Terrain Elevation</h4>
                <p className="text-[10px] text-slate-400">Enable 3D mountain & terrain elevation rendering</p>
              </div>
              <input
                type="checkbox"
                checked={featureFlags.terrain3d}
                onChange={(e) => setFeatureFlags({ ...featureFlags, terrain3d: e.target.checked })}
                className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
              />
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 className="font-black text-xs text-slate-100">Realtime Smart Route Guidance</h4>
                <p className="text-[10px] text-slate-400">Enable multi-modal ETA fuel & turn-by-turn guidance</p>
              </div>
              <input
                type="checkbox"
                checked={featureFlags.realtimeSmartRoutes}
                onChange={(e) => setFeatureFlags({ ...featureFlags, realtimeSmartRoutes: e.target.checked })}
                className="w-5 h-5 rounded text-[#7C3AED] focus:ring-[#7C3AED]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
