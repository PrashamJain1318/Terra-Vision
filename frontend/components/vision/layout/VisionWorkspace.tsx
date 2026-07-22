'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Sparkles,
  Camera,
  Upload,
  Utensils,
  Trees,
  Dog,
  FileText,
  DollarSign,
  Receipt,
  QrCode,
  Box,
  Landmark,
  Languages,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

export const VisionWorkspace = () => {
  const [activeMode, setActiveMode] = useState<
    'landmark' | 'food' | 'plant' | 'animal' | 'ocr' | 'menu' | 'currency' | 'receipt' | 'qr' | 'object'
  >('landmark');
  
  const [imagePreview, setImagePreview] = useState<string | null>(
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
  );

  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>({
    title: 'Fort Aguada & 17th Century Lighthouse',
    confidence: '98.5%',
    category: 'Historic Landmark',
    location: 'Candolim, Goa, India',
    facts: [
      'Built in 1612 by the Portuguese to guard against Dutch invasion',
      'Contains a freshwater spring that supplied water to ships',
      'The lighthouse once emitted light every 7 minutes'
    ],
    travelTips: 'Visit around 5:00 PM for the golden hour sunset photography over the Arabian Sea.'
  });

  const modes = [
    { id: 'landmark', label: 'Landmark', icon: Landmark },
    { id: 'food', label: 'Food Scanner', icon: Utensils },
    { id: 'plant', label: 'Plant Identifier', icon: Trees },
    { id: 'animal', label: 'Animal ID', icon: Dog },
    { id: 'ocr', label: 'OCR Translate', icon: Languages },
    { id: 'menu', label: 'Menu Scanner', icon: FileText },
    { id: 'currency', label: 'Currency', icon: DollarSign },
    { id: 'receipt', label: 'Receipt Scanner', icon: Receipt },
    { id: 'qr', label: 'QR Scanner', icon: QrCode },
    { id: 'object', label: 'Object Detection', icon: Box },
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      runAnalysis(activeMode);
    }
  };

  const runAnalysis = (mode: string) => {
    setAnalyzing(true);
    setTimeout(() => {
      if (mode === 'food' || mode === 'menu') {
        setAnalysisResult({
          title: 'Authentic Goan Fish Curry Sadya',
          confidence: '97.2%',
          category: 'Regional Cuisine',
          location: 'Goa, India',
          facts: ['Prepared with kokum, fresh coconut, and red chili spice', 'Calories: ~420 kcal'],
          travelTips: 'Pair with steamed red rice (Ukdda rice) and fresh coconut water.'
        });
      } else if (mode === 'currency') {
        setAnalysisResult({
          title: '500 Indian Rupee Note (INR)',
          confidence: '99.1%',
          category: 'Currency Note',
          location: 'Reserve Bank of India',
          facts: ['Converted value: ~$6.00 USD / €5.50 EUR', 'Security watermark verified'],
          travelTips: 'Accepted widely by vendors across India.'
        });
      } else if (mode === 'receipt') {
        setAnalysisResult({
          title: 'Seafood Bistro Dining Receipt',
          confidence: '98.0%',
          category: 'Expense Document',
          location: 'Calangute, Goa',
          facts: ['Total Amount: ₹1,450 ($17.30)', 'Items: 2x Fish Thali, 1x Sol Kadhi'],
          travelTips: 'Automatically logged into Smart Expense Tracker under Food category!'
        });
      } else {
        setAnalysisResult({
          title: 'Fort Aguada & 17th Century Lighthouse',
          confidence: '98.5%',
          category: 'Historic Landmark',
          location: 'Candolim, Goa, India',
          facts: ['Built in 1612 by the Portuguese to guard against Dutch invasion'],
          travelTips: 'Visit around 5:00 PM for golden hour sunset photography.'
        });
      }
      setAnalyzing(false);
    }, 700);
  };

  return (
    <GlassCard hoverEffect={false} className="p-6 md:p-8 space-y-6 relative overflow-hidden">
      {/* Vision Mode Switcher Toolbar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-800/80">
        {modes.map((m) => {
          const Icon = m.icon;
          const active = activeMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => {
                setActiveMode(m.id as any);
                runAnalysis(m.id);
              }}
              className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
                active
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Vision Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Camera & Upload Canvas */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative min-h-[380px] max-h-[460px] rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden flex items-center justify-center group shadow-2xl">
            {imagePreview ? (
              <img src={imagePreview} alt="Scanner View" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-8 space-y-3">
                <Camera className="w-12 h-12 text-zinc-600 mx-auto" />
                <p className="text-xs text-zinc-400">Upload or snap a picture to analyze</p>
              </div>
            )}

            {/* Bounding Box Highlight Overlay */}
            <div className="absolute inset-8 border-2 border-dashed border-emerald-400/60 rounded-2xl pointer-events-none flex items-start justify-between p-3 animate-pulse">
              <span className="px-2 py-0.5 rounded bg-emerald-500 text-black text-[9px] font-mono font-bold uppercase">
                {activeMode} Scanner Active
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-black/60 px-2 py-0.5 rounded">
                Gemini Vision API
              </span>
            </div>

            {/* Camera / Upload Action Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-zinc-800">
              <label className="cursor-pointer flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                <Upload className="w-4 h-4" />
                <span>Upload Image</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>
          </div>
        </div>

        {/* Right: Gemini Analysis Matrix Output */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Gemini Multimodal AI
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                {analysisResult.confidence} Match
              </span>
            </div>

            {analyzing ? (
              <div className="py-12 text-center space-y-3">
                <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
                <p className="text-xs font-mono text-zinc-400">Processing visual features with Gemini 1.5...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{analysisResult.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono">{analysisResult.category} • {analysisResult.location}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-800">
                  <span className="text-[11px] font-mono uppercase font-bold text-zinc-400">Extracted Facts & Insights</span>
                  <ul className="space-y-1 text-xs text-zinc-300 list-disc pl-4">
                    {analysisResult.facts.map((fact: string, idx: number) => (
                      <li key={idx}>{fact}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                  <span className="font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AI Travel Recommendation
                  </span>
                  <p className="text-zinc-200">{analysisResult.travelTips}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default VisionWorkspace;
