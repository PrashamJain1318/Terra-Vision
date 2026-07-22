export const plannerThemeConfig = {
  container: 'max-w-6xl mx-auto space-y-8 p-6',
  card: 'bg-card/45 backdrop-blur-xl border border-border/40 shadow-xl rounded-3xl p-6 transition-all duration-300',
  stepper: {
    active: 'bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20',
    completed: 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30',
    upcoming: 'bg-muted/40 text-muted-foreground border border-border/30',
  },
  glow: 'bg-gradient-to-r from-primary/20 via-purple-500/20 to-indigo-500/20 blur-3xl opacity-50',
};

export default plannerThemeConfig;
