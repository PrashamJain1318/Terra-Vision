'use client';

import React from 'react';

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: any;
  error?: string;
}

export const AppInput: React.FC<AppInputProps> = ({
  label,
  icon: Icon,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="text-[11px] font-black text-zinc-400 uppercase tracking-wider block">{label}</label>}
      <div className="relative flex items-center">
        {Icon && <Icon className="absolute left-4 w-4.5 h-4.5 text-emerald-400 pointer-events-none" />}
        <input
          className={`w-full ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs font-bold text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-[10px] font-bold text-rose-400">{error}</p>}
    </div>
  );
};

export default AppInput;
