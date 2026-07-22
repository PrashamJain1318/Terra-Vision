'use client';

import React from 'react';
import { Shield, AlertTriangle, PhoneCall, CheckCircle, Navigation, MapPin } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';
import SAFETY_PROVIDERS from '@/config/safetyProviders';
import RISK_LEVELS from '@/config/riskLevels';

export const SafetyWorkspace = () => {
  const { state, setSelectedDestination, setSelectedProvider, triggerSOS } = useSafety();

  const riskCfg = RISK_LEVELS[state.riskLevel] || RISK_LEVELS.low;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-red-500/20 shadow-xl">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-500">Destination Threat Analysis</span>
          <h2 className="text-2xl font-extrabold text-foreground">{state.selectedDestination}</h2>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-red-500" /> Travel Window: {state.travelDates}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] text-muted-foreground uppercase font-bold block">Safety Index</span>
            <span className="text-3xl font-extrabold text-emerald-400">{state.safetyScore} / 100</span>
          </div>

          <div
            className="px-4 py-2 rounded-2xl border text-xs font-extrabold flex items-center gap-1.5"
            style={{ backgroundColor: riskCfg.bgColor, borderColor: riskCfg.borderColor, color: riskCfg.color }}
          >
            <CheckCircle className="w-4 h-4" /> {riskCfg.label}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-400" /> Active Scam Alerts
          </h3>
          <div className="space-y-3">
            {state.alerts.map((alt) => (
              <div key={alt.id} className="p-3 rounded-2xl bg-muted/20 border border-border/20 space-y-1">
                <span className="text-[10px] font-extrabold text-orange-400 uppercase">{alt.type.replace('_', ' ')}</span>
                <h4 className="text-xs font-extrabold text-foreground">{alt.title}</h4>
                <p className="text-[11px] text-muted-foreground">{alt.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-red-400" /> Emergency Hotline Directory
          </h3>
          <div className="space-y-3">
            {state.emergencyContacts.map((contact) => (
              <div key={contact.id} className="p-3 rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-foreground">{contact.name}</h4>
                  <span className="text-[10px] text-muted-foreground">{contact.role}</span>
                </div>
                <span className="text-xs font-extrabold text-red-400">{contact.phone}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
          <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-400" /> AI Scam Shield Provider
          </h3>
          <div className="space-y-2">
            {SAFETY_PROVIDERS.map((prov) => (
              <button
                key={prov.id}
                onClick={() => setSelectedProvider(prov.id)}
                className={`w-full p-3 rounded-2xl border text-left text-xs transition-all ${
                  state.selectedProvider === prov.id
                    ? 'bg-red-500/15 border-red-500 text-red-400 font-extrabold'
                    : 'bg-muted/20 border-border/20 text-muted-foreground hover:bg-muted/30'
                }`}
              >
                {prov.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyWorkspace;
