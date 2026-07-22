'use client';

import React, { useState } from 'react';
import {
  Shield,
  CloudSun,
  PhoneCall,
  RefreshCw,
  Globe,
  Plane,
  Building,
  Train,
  AlertTriangle,
  HeartPulse,
  Hospital,
  Sun,
  Wind,
  Droplets,
  Clock
} from 'lucide-react';

export default function UtilitiesPage() {
  const [sosTriggered, setSosTriggered] = useState(false);
  const [currencyAmount, setCurrencyAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [flightNo, setFlightNo] = useState('AI-302');
  const [flightStatus, setFlightStatus] = useState<string | null>(null);

  const rates: Record<string, number> = {
    USD: 1.0,
    EUR: 0.92,
    INR: 83.5,
    GBP: 0.78,
  };

  const convertedValue = (
    (parseFloat(currencyAmount || '0') / (rates[fromCurrency] || 1)) *
    (rates[toCurrency] || 1)
  ).toFixed(2);

  const handleFlightTrack = () => {
    setFlightStatus(`Flight ${flightNo.toUpperCase()}: On Time • Scheduled Departure 14:30 • Gate B12`);
  };

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <Shield className="w-8 h-8 text-emerald-400 p-1.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30" />
            Smart Utilities & AI Travel Health
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Weather, AQI, Emergency SOS, Flight status, Embassy lookup & Currency converters.
          </p>
        </div>
      </div>

      {/* Emergency SOS Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-red-950/60 via-zinc-950 to-zinc-950 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              Emergency SOS Helplines
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 font-mono">
                Live Geofence Active
              </span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              National Emergency: <strong>112</strong> • Tourist Helpline: <strong>1364</strong> • Ambulance: <strong>108</strong>
            </p>
          </div>
        </div>

        <button
          onClick={() => setSosTriggered(!sosTriggered)}
          className={`px-6 py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl ${
            sosTriggered
              ? 'bg-red-500 text-white animate-bounce'
              : 'bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/50'
          }`}
        >
          {sosTriggered ? '🚨 SOS Alert Dispatched!' : 'Broadcast 1-Tap SOS'}
        </button>
      </div>

      {/* Travel Health & Weather Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 glassmorphism space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Weather Forecast</span>
            <Sun className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-3xl font-extrabold text-white">28°C</p>
          <p className="text-xs text-zinc-400">Pleasant • Clear Skies</p>
          <div className="flex items-center gap-4 text-[11px] text-zinc-400 font-mono pt-1">
            <span className="flex items-center gap-1"><Droplets className="w-3 h-3 text-cyan-400" /> 64%</span>
            <span className="flex items-center gap-1"><Wind className="w-3 h-3 text-emerald-400" /> 12 km/h</span>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 glassmorphism space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Air Quality Index (AQI)</span>
            <Wind className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-3xl font-extrabold text-emerald-400">42 AQI</p>
          <p className="text-xs text-emerald-300 font-semibold">Good • Ideal for outdoor activities</p>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[25%]" />
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 glassmorphism space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>UV Index</span>
            <Sun className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-3xl font-extrabold text-amber-400">4 Moderate</p>
          <p className="text-xs text-zinc-400">Sunscreen SPF 30+ advised between 11 AM – 3 PM</p>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 glassmorphism space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Nearby Medical</span>
            <Hospital className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-sm font-bold text-white">City Central Hospital</p>
          <p className="text-xs text-zinc-400">1.8 km away • 24/7 ER Trauma Unit</p>
          <button className="text-xs text-purple-400 hover:text-purple-300 font-semibold pt-1">
            Navigate to ER →
          </button>
        </div>
      </div>

      {/* Utilities Interactive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Currency Converter */}
        <div className="p-6 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-400" />
            Live Currency Converter
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-zinc-400 font-mono mb-1">Amount</label>
              <input
                type="number"
                value={currencyAmount}
                onChange={(e) => setCurrencyAmount(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl p-3 text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-400 font-mono mb-1">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl p-3 text-xs focus:outline-none"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="INR">INR (₹)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-zinc-400 font-mono mb-1">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl p-3 text-xs focus:outline-none"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="INR">INR (₹)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-mono">Converted Output</span>
            <span className="text-xl font-extrabold text-emerald-400">
              {convertedValue} {toCurrency}
            </span>
          </div>
        </div>

        {/* Flight & Transit Status Tracker */}
        <div className="p-6 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Plane className="w-5 h-5 text-cyan-400" />
            Flight & Transit Tracker
          </h2>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Flight / Train No (e.g. AI-302)"
              value={flightNo}
              onChange={(e) => setFlightNo(e.target.value)}
              className="flex-1 bg-zinc-900 border border-zinc-800 text-white rounded-xl p-3 text-xs focus:outline-none"
            />
            <button
              onClick={handleFlightTrack}
              className="px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition"
            >
              Track
            </button>
          </div>

          {flightStatus && (
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
              {flightStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
