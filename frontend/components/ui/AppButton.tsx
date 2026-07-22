'use client';

import React from 'react';

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  icon?: any;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const AppButton: React.FC<AppButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-extrabold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 rounded-xl text-xs gap-1.5',
    md: 'px-5 py-2.5 rounded-2xl text-xs gap-2 shadow-md',
    lg: 'px-7 py-3.5 rounded-2xl text-sm gap-2.5 shadow-lg',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]',
    teal:
      'bg-teal-500 hover:bg-teal-400 text-zinc-950 font-black shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:border-emerald-500/40 hover:text-white',
    danger:
      'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/20 hover:scale-[1.02]',
    ghost:
      'bg-transparent hover:bg-zinc-800/60 text-zinc-400 hover:text-white border border-transparent',
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4 shrink-0" />
      ) : null}
      <span>{children}</span>
    </button>
  );
};

export default AppButton;
