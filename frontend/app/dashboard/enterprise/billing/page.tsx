'use client';

import React, { useState } from 'react';
import EnterpriseLayout from '@/components/dashboard/enterprise/EnterpriseLayout';
import GlassCard from '@/components/common/GlassCard';
import { Key, CreditCard, ShieldCheck, Copy, Check, RefreshCw, Zap, Layers, Globe } from 'lucide-react';

export default function ApiBillingPage() {
  const [apiKey, setApiKey] = useState('ll_live_94829420482094208420');
  const [copied, setCopied] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('https://api.teacounty.com/webhooks/locallens');

  const handleCopyApiKey = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleRegenerateKey = () => {
    const newKey = 'll_live_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setApiKey(newKey);
    alert('Enterprise API Key regenerated!');
  };

  return (
    <EnterpriseLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Enterprise API Gateway & Subscription Tiers</h3>
              <p className="text-xs text-muted-foreground">
                Provision secure partner API keys, manage rate limits, configure webhooks, and select enterprise subscription plans.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* API Key Management Block */}
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-extrabold text-foreground flex items-center gap-2">
              <Key className="w-4 h-4 text-indigo-400" /> Production API Key
            </h4>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20">
              Rate Limit: 10,000 req/min
            </span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              readOnly
              value={apiKey}
              className="flex-1 px-4 py-3 rounded-2xl bg-card border border-border/40 text-xs font-mono text-foreground focus:outline-none"
            />
            <button
              onClick={handleCopyApiKey}
              className="px-4 py-3 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs flex items-center gap-1.5 shadow-md"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Key'}
            </button>
            <button
              onClick={handleRegenerateKey}
              className="px-4 py-3 rounded-2xl bg-card border border-border/40 hover:bg-muted/40 text-foreground font-extrabold text-xs flex items-center gap-1.5"
            >
              <RefreshCw className="w-4 h-4 text-muted-foreground" /> Regenerate
            </button>
          </div>
        </GlassCard>

        {/* Subscription Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard hoverEffect={true} className="p-6 space-y-4 border-border/40 relative">
            <h4 className="font-extrabold text-sm text-foreground">Starter Tier</h4>
            <div className="text-3xl font-black text-foreground">$49 <span className="text-xs text-muted-foreground font-semibold">/ mo</span></div>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 2 Business Listings</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Standard Search Analytics</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Verified Partner Badge</li>
            </ul>
          </GlassCard>

          <GlassCard hoverEffect={true} className="p-6 space-y-4 border-primary ring-2 ring-primary bg-primary/5 relative">
            <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-[9px] font-black uppercase">
              POPULAR
            </span>
            <h4 className="font-extrabold text-sm text-foreground">Pro Tier</h4>
            <div className="text-3xl font-black text-foreground">$199 <span className="text-xs text-muted-foreground font-semibold">/ mo</span></div>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 10 Business Listings</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Real-time Analytics & CTR</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Gemini AI Recommendation Boost</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Full API Gateway Access</li>
            </ul>
          </GlassCard>

          <GlassCard hoverEffect={true} className="p-6 space-y-4 border-border/40 relative">
            <h4 className="font-extrabold text-sm text-foreground">Enterprise Tier</h4>
            <div className="text-3xl font-black text-purple-400">$499 <span className="text-xs text-muted-foreground font-semibold">/ mo</span></div>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium pt-2">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Listings</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Custom Regional Campaigns</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Dedicated Account Manager</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> SLA & Webhooks Support</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </EnterpriseLayout>
  );
}
