'use client';

import React, { useState, useEffect } from 'react';
import OsLayout from '@/components/dashboard/os/OsLayout';
import GlassCard from '@/components/common/GlassCard';
import platformService, { PluginItem } from '@/services/platformService';
import { Code, Plus, CheckCircle2, Key, Download, RefreshCw, Globe, Layers, ShieldCheck } from 'lucide-react';

export default function DeveloperPlatformPage() {
  const [plugins, setPlugins] = useState<PluginItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [pluginName, setPluginName] = useState('');
  const [category, setCategory] = useState('Navigation');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [description, setDescription] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    loadPlugins();
  }, []);

  const loadPlugins = async () => {
    setLoading(true);
    try {
      const data = await platformService.getPlugins();
      setPlugins(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterPlugin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pluginName) return;

    try {
      const newPl = await platformService.registerPlugin({
        pluginName,
        category,
        webhookUrl,
        description,
      });
      setMsg(`Plugin "${newPl.pluginName}" registered on LocalLens OS Developer Mesh!`);
      setShowModal(false);
      setPluginName('');
      setWebhookUrl('');
      setDescription('');
      await loadPlugins();
      setTimeout(() => setMsg(''), 4000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <OsLayout>
      <div className="space-y-6">
        {/* Toast */}
        {msg && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-lg animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            {msg}
          </div>
        )}

        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-purple-500/20 shadow-xl space-y-2">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-extrabold text-foreground">Developer Mesh & Plugin Platform</h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Build custom plugins for TerraVision OS. Access REST APIs, SDK downloads, event webhooks, and plugin registration.
          </p>
        </div>

        {/* Developer Header */}
        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4 shadow-xl">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" /> Active TerraVision OS Developer Plugins
          </h3>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Register New Plugin
          </button>
        </div>

        {/* Plugins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plugins.map((pl) => (
            <GlassCard key={pl._id} hoverEffect={true} className="p-5 space-y-3 border-border/40 relative">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-foreground">{pl.pluginName}</h4>
                  <span className="text-xs text-muted-foreground font-semibold block pt-0.5">
                    {pl.category} • v{pl.version}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20 uppercase">
                  {pl.status}
                </span>
              </div>

              <p className="text-xs text-muted-foreground font-medium">{pl.description}</p>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-border/20 text-muted-foreground">
                <span className="font-bold text-foreground">{pl.installCount.toLocaleString()} Installs</span>
                <span className="text-amber-400 font-extrabold">★ {pl.rating}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Register Plugin Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <GlassCard hoverEffect={false} className="p-6 max-w-md w-full border-border/40 space-y-4 shadow-2xl">
            <h3 className="text-lg font-black text-foreground">Register Developer Plugin</h3>

            <form onSubmit={handleRegisterPlugin} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-muted-foreground block mb-1">Plugin Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FlightRadar Live Tracker"
                  value={pluginName}
                  onChange={(e) => setPluginName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-bold text-muted-foreground block mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                >
                  <option value="Navigation">Navigation</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Culinary">Culinary</option>
                  <option value="Finance">Finance & Currency</option>
                  <option value="Weather">Weather Alerts</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-muted-foreground block mb-1">Webhook URL Endpoint</label>
                <input
                  type="url"
                  placeholder="https://api.yourdomain.com/locallens/webhook"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-bold text-muted-foreground block mb-1">Description</label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe what this plugin does..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-border/20">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-card border border-border/40 text-muted-foreground hover:text-foreground font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md"
                >
                  Register Plugin
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      )}
    </OsLayout>
  );
}
