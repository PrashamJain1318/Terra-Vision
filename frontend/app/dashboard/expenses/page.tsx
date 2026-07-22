'use client';

import React, { useState } from 'react';
import {
  DollarSign,
  Plus,
  TrendingUp,
  CreditCard,
  PieChart,
  Calendar,
  Sparkles,
  Hotel,
  Utensils,
  ShoppingBag,
  Fuel,
  Compass,
  Plane,
  Receipt,
  FileText
} from 'lucide-react';

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: 'Hotels' | 'Food' | 'Shopping' | 'Fuel' | 'Activities' | 'Flights';
  date: string;
}

export default function ExpensesPage() {
  const [currency, setCurrency] = useState('USD');
  const [targetBudget, setTargetBudget] = useState(1500);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newCategory, setNewCategory] = useState<'Hotels' | 'Food' | 'Shopping' | 'Fuel' | 'Activities' | 'Flights'>('Food');

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: '1', title: 'Boutique Resort Stay (3 nights)', amount: 480, category: 'Hotels', date: '2026-07-20' },
    { id: '2', title: 'Local Seafood Dinner & Wine', amount: 95, category: 'Food', date: '2026-07-21' },
    { id: '3', title: 'Scuba Diving & Coral Tour', amount: 160, category: 'Activities', date: '2026-07-21' },
    { id: '4', title: 'Scooter Rental & Fuel Fill-up', amount: 35, category: 'Fuel', date: '2026-07-22' },
    { id: '5', title: 'Handicraft Spices & Textiles', amount: 70, category: 'Shopping', date: '2026-07-22' },
    { id: '6', title: 'Return Flight Ticket', amount: 320, category: 'Flights', date: '2026-07-19' },
  ]);

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBudget = Math.max(0, targetBudget - totalSpent);
  const percentUsed = Math.min(100, Math.round((totalSpent / targetBudget) * 100));

  const categoryIcons = {
    Hotels: Hotel,
    Food: Utensils,
    Shopping: ShoppingBag,
    Fuel: Fuel,
    Activities: Compass,
    Flights: Plane,
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAmount) return;

    const item: Expense = {
      id: Date.now().toString(),
      title: newTitle,
      amount: parseFloat(newAmount),
      category: newCategory,
      date: new Date().toISOString().split('T')[0]
    };

    setExpenses([item, ...expenses]);
    setNewTitle('');
    setNewAmount('');
    setShowAddModal(false);
  };

  const currencySymbol = currency === 'INR' ? '₹' : currency === 'EUR' ? '€' : currency === 'GBP' ? '£' : '$';

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-emerald-400 p-1.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30" />
            Smart Expense Tracker
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Real-time financial telemetry, category breakdowns, and AI receipt scan insights.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 px-3 py-2.5 rounded-2xl focus:outline-none"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition shadow-lg"
          >
            <Plus className="w-4 h-4" />
            <span>Add Expense</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 glassmorphism space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Total Spent</span>
            <CreditCard className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-extrabold text-white">
            {currencySymbol} {totalSpent.toLocaleString()}
          </p>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${percentUsed}%` }} />
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 glassmorphism space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Target Budget</span>
            <PieChart className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-2xl font-extrabold text-white">
            {currencySymbol} {targetBudget.toLocaleString()}
          </p>
          <p className="text-[11px] text-zinc-400">{percentUsed}% of budget utilized</p>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 glassmorphism space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Remaining Funds</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl font-extrabold text-emerald-300">
            {currencySymbol} {remainingBudget.toLocaleString()}
          </p>
          <p className="text-[11px] text-emerald-400 font-medium">Healthy spending pace</p>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 glassmorphism space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>AI Receipt Scanner</span>
            <Receipt className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-sm font-bold text-white">Vision AI Ready</p>
          <a
            href="/dashboard/vision"
            className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scan Receipt →</span>
          </a>
        </div>
      </div>

      {/* Category Breakdown Progress Grid */}
      <div className="p-6 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 space-y-6">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <PieChart className="w-5 h-5 text-emerald-400" />
          Spending by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {(['Hotels', 'Food', 'Shopping', 'Fuel', 'Activities', 'Flights'] as const).map((cat) => {
            const Icon = categoryIcons[cat];
            const catSpent = expenses
              .filter((e) => e.category === cat)
              .reduce((a, b) => a + b.amount, 0);

            return (
              <div key={cat} className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{cat}</span>
                </div>
                <p className="text-lg font-bold text-white">
                  {currencySymbol} {catSpent}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expense History Table */}
      <div className="p-6 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center justify-between">
          <span className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            Recent Expenses
          </span>
          <span className="text-xs text-zinc-400 font-mono">{expenses.length} records logged</span>
        </h2>

        <div className="divide-y divide-zinc-800/80 overflow-x-auto">
          {expenses.map((exp) => {
            const Icon = categoryIcons[exp.category];
            return (
              <div key={exp.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{exp.title}</p>
                    <p className="text-[11px] text-zinc-400 font-mono flex items-center gap-2">
                      <span>{exp.category}</span>
                      <span>•</span>
                      <span>{exp.date}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right font-extrabold text-sm text-emerald-400">
                  - {currencySymbol} {exp.amount}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Add Expense */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Add New Expense</h3>
            <form onSubmit={handleAddExpense} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Expense Title</label>
                <input
                  type="text"
                  placeholder="e.g. Museum Admission"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Amount ({currencySymbol})</label>
                  <input
                    type="number"
                    placeholder="45"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Hotels">Hotels</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Fuel">Fuel</option>
                    <option value="Activities">Activities</option>
                    <option value="Flights">Flights</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400"
                >
                  Save Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
