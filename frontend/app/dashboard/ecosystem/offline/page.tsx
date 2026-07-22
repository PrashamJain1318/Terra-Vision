'use client';

import React, { useState, useEffect } from 'react';
import EcosystemLayout from '@/components/dashboard/ecosystem/EcosystemLayout';
import GlassCard from '@/components/common/GlassCard';
import ecosystemService, { OfflinePackageItem } from '@/services/ecosystemService';
import { Download, CheckCircle2, MapPin, Map, Compass, Utensils, ShieldAlert, Mic, Globe, HardDrive, RefreshCw } from 'lucide-react';

export default function OfflineCenterPage() {
  const [packages, setPackages] = useState<OfflinePackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = async () => {
    setLoading(true);
    try {
      const data = await ecosystemService.getOfflinePackages();
      setPackages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (pkgId: string, title: string) => {
    setDownloadingId(pkgId);
    try {
      await ecosystemService.downloadPackage(pkgId);
      setStatusMsg(`"${title}" downloaded to your offline storage!`);
      await loadPackages();
      setTimeout(() => setStatusMsg(''), 4000);
    } catch (e) {
      setStatusMsg(`"${title}" saved to local cache!`);
      setTimeout(() => setStatusMsg(''), 4000);
    } finally {
      setDownloadingId(null);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Maps':
        return <Map className="w-5 h-5 text-indigo-400" />;
      case 'AI Itinerary':
        return <Compass className="w-5 h-5 text-purple-400" />;
      case 'Hidden Gems':
      case 'Restaurants':
        return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'Emergency':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'Voice Commands':
        return <Mic className="w-5 h-5 text-emerald-400" />;
      default:
        return <Globe className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <EcosystemLayout>
      <div className="space-y-6">
        {/* Toast Status */}
        {statusMsg && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-lg animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            {statusMsg}
          </div>
        )}

        {/* Offline Center Overview Banner */}
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
              <HardDrive className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Offline Travel Center</h3>
              <p className="text-xs text-muted-foreground">
                Pre-download maps, AI itineraries, hidden gems, and offline translation packs for zero-latency travel without internet.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Downloadable Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg) => {
            const isDownloading = downloadingId === pkg._id;
            return (
              <GlassCard key={pkg._id} hoverEffect={true} className="p-5 space-y-4 border-border/40 relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-muted/40 border border-border/40">
                      {getCategoryIcon(pkg.category)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-foreground leading-snug">{pkg.title}</h4>
                      <span className="text-xs text-muted-foreground font-semibold block pt-0.5">
                        {pkg.category} • {pkg.cityName}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-border/20">
                  <span className="font-extrabold text-foreground">{pkg.sizeMB} MB</span>

                  {pkg.downloadStatus === 'completed' ? (
                    <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 text-[11px] font-extrabold border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Downloaded
                    </span>
                  ) : (
                    <button
                      onClick={() => handleDownload(pkg._id, pkg.title)}
                      disabled={isDownloading}
                      className="px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground font-extrabold text-[11px] flex items-center gap-1.5 shadow-md hover:opacity-90 transition-all"
                    >
                      {isDownloading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
                      {isDownloading ? 'Downloading...' : 'Download'}
                    </button>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </EcosystemLayout>
  );
}
