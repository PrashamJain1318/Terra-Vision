export interface BudgetOption {
  id: string;
  label: string;
  range: string;
  description: string;
  icon: string;
}

export const budgetRangesConfig: BudgetOption[] = [
  { id: 'backpack', label: 'Backpacker / Budget', range: '$20 - $50 / day', description: 'Hostels, local transit, street food & free landmarks', icon: 'DollarSign' },
  { id: 'balanced', label: 'Balanced / Comfort', range: '$50 - $150 / day', description: '3-star hotels, mid-tier cafes, mixed transport', icon: 'Coins' },
  { id: 'luxury', label: 'Luxury / Premium', range: '$150 - $500+ / day', description: '5-star resorts, private transfers, fine dining & VIP tours', icon: 'Crown' },
];

export default budgetRangesConfig;
