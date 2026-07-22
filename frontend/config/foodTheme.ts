/**
 * Local Food Theme Configuration
 */

export const foodTheme = {
  header: {
    bg: 'bg-card/45 backdrop-blur-xl',
    border: 'border-b border-border/40',
    height: 'h-16',
  },
  sidebar: {
    bg: 'bg-card/30 backdrop-blur-xl',
    width: 'w-64',
    collapsedWidth: 'w-20',
  },
  card: {
    surface: 'bg-card/45 backdrop-blur-xl border border-border/40 hover:border-orange-500/50 shadow-xl rounded-3xl',
  },
  badge: {
    spicy: 'bg-red-500/10 text-red-400 border border-red-500/30',
    vegan: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    budget: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
  },
};

export default foodTheme;
