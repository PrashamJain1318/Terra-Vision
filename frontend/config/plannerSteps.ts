export interface PlannerStepConfig {
  id: number;
  key: string;
  title: string;
  description: string;
  icon: string;
}

export const plannerStepsConfig: PlannerStepConfig[] = [
  { id: 1, key: 'destination', title: 'Destination', description: 'Where do you want to travel?', icon: 'MapPin' },
  { id: 2, key: 'dates', title: 'Travel Dates', description: 'When are you planning to go?', icon: 'Calendar' },
  { id: 3, key: 'travelers', title: 'Travelers & Style', description: 'Who is traveling and what is your vibe?', icon: 'Users' },
  { id: 4, key: 'budget', title: 'Budget', description: 'Select your target expenditure tier', icon: 'DollarSign' },
  { id: 5, key: 'interests', title: 'Interests', description: 'What activities excite you most?', icon: 'Sparkles' },
  { id: 6, key: 'preferences', title: 'Preferences', description: 'Hotels, transit & dietary requirements', icon: 'Sliders' },
  { id: 7, key: 'review', title: 'Review Inputs', description: 'Verify your trip details before AI generation', icon: 'CheckCircle2' },
  { id: 8, key: 'generation', title: 'AI Generation', description: 'Generating your custom itinerary...', icon: 'Brain' },
  { id: 9, key: 'result', title: 'Your Itinerary', description: 'Explore and customize your AI plan', icon: 'Compass' },
];

export default plannerStepsConfig;
