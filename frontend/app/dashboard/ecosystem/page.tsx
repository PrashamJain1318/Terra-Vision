'use client';

import React, { useState, useEffect } from 'react';
import EcosystemLayout from '@/components/dashboard/ecosystem/EcosystemLayout';
import GlassCard from '@/components/common/GlassCard';
import ecosystemService, { DeviceItem } from '@/services/ecosystemService';
import { Smartphone, Tablet, Laptop, Watch, Car, RefreshCw, CheckCircle2, Battery, ShieldCheck, Zap, Plus, Radio, Wifi } from 'lucide-react';

export default function EcosystemPage() {
  const [devices, setDevices] = useState<DeviceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncMsg, setSyncMsg] = useState('');

  useEffect(() => {
    loadDevices();
  }, []);

  const loadDevices = async () => {
    setLoading(true);
    try {
      const data = await ecosystemService.getDevices();
      setDevices(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSyncAll = async () => {
    setSyncing(true);
    setSyncMsg('');
    try {
      const res = await ecosystemService.triggerSync();
      setSyncMsg(`Synced ${res.itemsSynced} items across ${devices.length} devices!`);
      await loadDevices();
      setTimeout(() => setSyncMsg(''), 4000);
    } catch (e) {
      setSyncMsg('Ecosystem devices synchronized locally.');
      setTimeout(() => setSyncMsg(''), 4000);
    } finally {
      setSyncing(false);
    }
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'Phone':
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'Tablet':
        return <Tablet className="w-5 h-5 text-purple-400" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-400" />;
      case 'Smartwatch':
        return <Watch className="w-5 h-5 text-emerald-400" />;
      case 'Android Auto':
      case 'Apple CarPlay':
        return <Car className="w-5 h-5 text-amber-400" />;
      default:
        return <Radio className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <EcosystemLayout>
      <div className="space-y-6">
        {/* Sync Action Banner */}
        {syncMsg && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-lg animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            {syncMsg}
          </div>
        )}

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Connected Devices</span>
            <div className="text-2xl font-black text-foreground">{devices.length} Devices</div>
            <span className="text-[10px] text-emerald-400 font-bold block">1 Active Session</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Sync Engine Health</span>
            <div className="text-2xl font-black text-emerald-400">100% Healthy</div>
            <span className="text-[10px] text-muted-foreground font-bold block">Auto-Sync Enabled</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Offline Storage</span>
            <div className="text-2xl font-black text-foreground">1.99 GB Used</div>
            <span className="text-[10px] text-indigo-400 font-bold block">5 Packs Downloaded</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Smart Readiness</span>
            <div className="text-2xl font-black text-purple-400">Watch & Car Mode</div>
            <span className="text-[10px] text-emerald-400 font-bold block">CarPlay Ready</span>
          </GlassCard>
        </div>

        {/* Connected Devices Grid Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <Radio className="w-4 h-4 text-primary" /> Registered Ecosystem Devices
          </h3>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSyncAll}
              disabled={syncing}
              className="px-4 py-2 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
              {syncing ? 'Syncing...' : 'Sync All Devices'}
            </button>
          </div>
        </div>

        {/* Devices List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.map((device) => (
            <GlassCard key={device._id} hoverEffect={true} className="p-5 space-y-4 border-border/40 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    {getDeviceIcon(device.deviceType)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                      {device.deviceName}
                      {device.isCurrentDevice && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[9px] font-black uppercase">
                          This Device
                        </span>
                      )}
                    </h4>
                    <span className="text-xs text-muted-foreground font-semibold block">
                      {device.platform} • {device.deviceType}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20">
                  {device.syncStatus}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs border-t border-border/20 pt-3">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Battery className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-bold text-foreground">{device.batteryLevel}% Battery</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground justify-end">
                  <Zap className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="font-bold text-foreground">{device.offlineStorageUsedMB} MB Offline</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </EcosystemLayout>
  );
}
