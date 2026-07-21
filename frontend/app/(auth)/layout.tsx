import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Aurora Background Effects specific to authentication layout */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse duration-[8000ms]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse duration-[10000ms]" />
      </div>

      <div className="max-w-md w-full space-y-8 glass p-8 sm:p-10 rounded-3xl shadow-2xl relative z-10 transition-all duration-300">
        {children}
      </div>
    </div>
  );
}
