'use client';

import React, { useState, useEffect } from 'react';
import EnterpriseLayout from '@/components/dashboard/enterprise/EnterpriseLayout';
import GlassCard from '@/components/common/GlassCard';
import enterpriseService, { CampaignItem } from '@/services/enterpriseService';
import { Megaphone, Plus, CheckCircle2, TrendingUp, Eye, MousePointerClick, DollarSign, Play } from 'lucide-react';

export default function CampaignManagerPage() {
  const [campaigns, setCampaigns] = useState<CampaignItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [campaignName, setCampaignName] = useState('');
  const [type, setType] = useState('Featured Destination');
  const [budgetUSD, setBudgetUSD] = useState(500);
  const [createdMsg, setCreatedMsg] = useState('');

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    setLoading(true);
    try {
      const data = await enterpriseService.getCampaigns();
      setCampaigns(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!campaignName) return;

    try {
      const newCamp = await enterpriseService.createCampaign({
        campaignName,
        type,
        budgetUSD: Number(budgetUSD),
      });
      setCreatedMsg(`Campaign "${newCamp.campaignName}" created and launched!`);
      setShowModal(false);
      setCampaignName('');
      await loadCampaigns();
      setTimeout(() => setCreatedMsg(''), 4000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <EnterpriseLayout>
      <div className="space-y-6">
        {/* Toast */}
        {createdMsg && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-lg animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            {createdMsg}
          </div>
        )}

        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Partner Campaign Manager</h3>
              <p className="text-xs text-muted-foreground">
                Launch featured destination boosts, seasonal promotions, sponsored restaurant deals, and hotel package highlights.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Campaign Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <Megaphone className="w-4 h-4 text-primary" /> Active Promotional Campaigns
          </h3>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Launch New Campaign
          </button>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {campaigns.map((camp) => (
            <GlassCard key={camp._id} hoverEffect={true} className="p-5 space-y-3.5 border-border/40 relative">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-foreground">{camp.campaignName}</h4>
                  <span className="text-xs text-muted-foreground font-semibold block pt-0.5">
                    {camp.type} • ${camp.budgetUSD} Budget
                  </span>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20 uppercase">
                  {camp.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs border-t border-border/20 pt-3 text-center">
                <div className="p-2 rounded-xl bg-card/60 border border-border/30">
                  <span className="text-[10px] font-bold text-muted-foreground block">Impressions</span>
                  <span className="font-extrabold text-foreground">{camp.impressions.toLocaleString()}</span>
                </div>
                <div className="p-2 rounded-xl bg-card/60 border border-border/30">
                  <span className="text-[10px] font-bold text-muted-foreground block">Clicks</span>
                  <span className="font-extrabold text-indigo-400">{camp.clicks.toLocaleString()}</span>
                </div>
                <div className="p-2 rounded-xl bg-card/60 border border-border/30">
                  <span className="text-[10px] font-bold text-muted-foreground block">Conversions</span>
                  <span className="font-extrabold text-purple-400">{camp.conversions}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Launch Campaign Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <GlassCard hoverEffect={false} className="p-6 max-w-md w-full border-border/40 space-y-4 shadow-2xl">
            <h3 className="text-lg font-black text-foreground">Launch Promotional Campaign</h3>

            <form onSubmit={handleCreateCampaign} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-muted-foreground block mb-1">Campaign Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Munnar Hill Station Early Bird 2026"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-bold text-muted-foreground block mb-1">Campaign Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                >
                  <option value="Featured Destination">Featured Destination Boost</option>
                  <option value="Seasonal Discount">Seasonal Discount Promo</option>
                  <option value="Restaurant Promo">Restaurant Culinary Festival</option>
                  <option value="Hotel Package">Hotel Villa Special</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-muted-foreground block mb-1">Budget ($ USD)</label>
                <input
                  type="number"
                  required
                  min={100}
                  step={50}
                  value={budgetUSD}
                  onChange={(e) => setBudgetUSD(Number(e.target.value))}
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
                  Launch Campaign
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      )}
    </EnterpriseLayout>
  );
}
