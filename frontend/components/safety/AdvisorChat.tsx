'use client';

import React from 'react';
import { Bot, Send } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';
import AdvisorMessage from './AdvisorMessage';

export const AdvisorChat = () => {
  const { state } = useSafety();

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
          <Bot className="w-4 h-4 text-red-500" /> AI Travel Safety Advisor
        </h3>
        <span className="text-[10px] text-red-400 font-extrabold uppercase">{state.selectedProvider} Engine</span>
      </div>

      <div className="space-y-3 min-h-[160px]">
        {state.advisorConversation.map((msg, idx) => (
          <AdvisorMessage key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Ask AI Safety Advisor about taxi rates, night safety, or legal aid..."
          className="w-full pl-4 pr-12 py-3 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-red-600 text-white">
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AdvisorChat;
