'use client';

import React, { useState, useEffect } from 'react';
import EnterpriseLayout from '@/components/dashboard/enterprise/EnterpriseLayout';
import GlassCard from '@/components/common/GlassCard';
import enterpriseService, { PartnerItem } from '@/services/enterpriseService';
import { Building2, ShieldCheck, Plus, CheckCircle2, TrendingUp, Users, ArrowUpRight, Globe, Phone, Mail } from 'lucide-react';

export default function EnterpriseHubPage() {
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [partnerType, setPartnerType] = useState<'Hotel' | 'Restaurant' | 'Tourism Board' | 'Local Guide' | 'Travel Agency'>('Hotel');
  const [city, setCity] = useState('Munnar');
  const [contactEmail, setContactEmail] = useState('');
  const [onboardMsg, setOnboardMsg] = useState('');

  useEffect(() => {
    loadPartners();
  }, []);

  const loadPartners = async () => {
    setLoading(true);
    try {
      const data = await enterpriseService.getPartners();
      setPartners(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOnboardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !contactEmail) return;

    try {
      const newPartner = await enterpriseService.registerPartner({
        businessName,
        partnerType,
        city,
        contactEmail,
      });
      setOnboardMsg(`"${newPartner.businessName}" successfully onboarded as a Verified Partner!`);
      setShowModal(false);
      setBusinessName('');
      setContactEmail('');
      await loadPartners();
      setTimeout(() => setOnboardMsg(''), 4000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <EnterpriseLayout>
      <div className="space-y-6">
        {/* Onboard Success Toast */}
        {onboardMsg && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-lg animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            {onboardMsg}
          </div>
        )}

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Registered Partners</span>
            <div className="text-2xl font-black text-foreground">{partners.length} Active</div>
            <span className="text-[10px] text-emerald-400 font-bold block">100% Verified Identity</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Monthly Impressions</span>
            <div className="text-2xl font-black text-indigo-400">308.5K</div>
            <span className="text-[10px] text-emerald-400 font-bold block">+24% vs Last Month</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">AI Referral Share</span>
            <div className="text-2xl font-black text-purple-400">84.2%</div>
            <span className="text-[10px] text-purple-400 font-bold block">Gemini AI Recommended</span>
          </GlassCard>

          <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-1">
            <span className="text-[11px] font-extrabold text-muted-foreground uppercase">Average Trust Score</span>
            <div className="text-2xl font-black text-emerald-400">98.4 / 100</div>
            <span className="text-[10px] text-emerald-400 font-bold block">Verified Partner Badge</span>
          </GlassCard>
        </div>

        {/* Partner Organizations Section Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" /> Active Partner Organizations
          </h3>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Onboard New Partner
          </button>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <GlassCard key={partner._id} hoverEffect={true} className="p-5 space-y-4 border-border/40 relative">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5 leading-snug">
                    {partner.businessName}
                    {partner.isVerified && <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </h4>
                  <span className="text-xs text-muted-foreground font-semibold block pt-0.5">
                    {partner.partnerType} • {partner.city}
                  </span>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold border border-primary/20">
                  {partner.subscriptionTier}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs border-t border-border/20 pt-3">
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground block">Trust Score</span>
                  <span className="font-black text-emerald-400">{partner.trustScore}% Verified</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground block">Impressions</span>
                  <span className="font-black text-foreground">{partner.totalImpressions.toLocaleString()}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Onboard Partner Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <GlassCard hoverEffect={false} className="p-6 max-w-md w-full border-border/40 space-y-4 shadow-2xl">
            <h3 className="text-lg font-black text-foreground">Onboard New Enterprise Partner</h3>

            <form onSubmit={handleOnboardSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-muted-foreground block mb-1">Business Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Grand Heritage Palace Hotel"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-bold text-muted-foreground block mb-1">Partner Type</label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                >
                  <option value="Hotel">Hotel & Resort</option>
                  <option value="Restaurant">Restaurant & Cafe</option>
                  <option value="Tourism Board">Tourism Board</option>
                  <option value="Local Guide">Local Guide</option>
                  <option value="Travel Agency">Travel Agency</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-muted-foreground block mb-1">City / Region</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Munnar, Jaipur, Paris"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-border/40 text-foreground font-semibold focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-bold text-muted-foreground block mb-1">Contact Email</label>
                <input
                  type="email"
                  required
                  placeholder="partner@business.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
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
                  Confirm & Onboard
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      )}
    </EnterpriseLayout>
  );
}
